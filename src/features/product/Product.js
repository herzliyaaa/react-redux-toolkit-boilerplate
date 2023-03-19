import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProducts, addProduct, clearSuccess } from "./product.slice";
import { ToastContainer, toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TablePagination } from "../../components/Pagination/Pagination";
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal";
export function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess, error } = useSelector(
    (state) => state.product
  );

  const handleCloseAddProductModal = () => setShowAddProductModal(false);
  const handleShowAddProductModal = () => setShowAddProductModal(true);

  const onChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleProduct = (e) => {
    const { name, description } = product;
    e.preventDefault();
    dispatch(addProduct({ name, description }));
    handleCloseAddProductModal();
    setProduct({ name: "", description: "" });
    if (isSuccess) {
      toast.success("Added Successfully!", {
        theme: "colored",
      });
      dispatch(clearSuccess());
    }
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Container fluid>
      <Sidebar />
      <ToastContainer />
      <Row className='m-5'>
        <Col>
          <div className='d-flex pt-5 pb-2 justify-content-start'>
            <h1 className='fw-bold text-uppercase'>Products List</h1>
          </div>
          <div className='d-flex pb-2 justify-content-end'>
            <Button
              variant='primary'
              className='primary-btn fw-bold'
              onClick={handleShowAddProductModal}
            >
              Add New Product
            </Button>
          </div>
          <Modal show={showAddProductModal} onHide={handleCloseAddProductModal}>
            <form onSubmit={handleProduct}>
              <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='name'
                    value={product.name}
                    onChange={onChangeInput}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    value={product.description}
                    name='description'
                    onChange={onChangeInput}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant='secondary'
                  onClick={handleCloseAddProductModal}
                >
                  Close
                </Button>
                <Button variant='primary' type='submit'>
                  Save
                </Button>
              </Modal.Footer>
            </form>
          </Modal>

          <ConfirmationModal
            onHide={() => setShowDeleteProductModal(false)}
            show={showDeleteProductModal}
            title='Delete?'
            body='Are you sure you want to delete this item?'
            primaryActionName='Delete'
            primaryActionColor='danger'
            closeOnClick={() => setShowDeleteProductModal(false)}
          />

          {isLoading ? (
            <Spinner animation='border' variant='info' />
          ) : isError ? (
            <h2>{error}</h2>
          ) : (
            isSuccess && (
              <>
                <Table
                  striped
                  bordered
                  hover
                  variant='striped'
                  size='sm'
                  responsive
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentItems.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>
                          <div className='d-flex p-2 gap-1'>
                            <button
                              type='button'
                              className='btn btn-secondary btn-sm ts-buttom'
                              size='sm'
                            >
                              <i className='bi bi-eye'></i>
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm ts-buttom'
                              size='sm'
                            >
                              <i className='bi bi-pencil'></i>
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm ml-2 ts-buttom'
                              size='sm'
                              onClick={() => setShowDeleteProductModal(true)}
                            >
                              <i className='bi bi-trash'></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <TablePagination
                  data={data}
                  currentPageState={[currentPage, setCurrentPage]}
                />
              </>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}
