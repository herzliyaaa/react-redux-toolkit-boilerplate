import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProducts, addProduct } from "./product.slice";
import Input from "./components/input";
import styles from "./Product.module.css";

export function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const onChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleProduct = (e) => {
    const { name, description } = product;
    dispatch(addProduct({ name, description }));
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log("Fetched data from redux store.", data);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Products List</h1>
        <form onSubmit={handleProduct}>
          <Input
            id='productName'
            labelText='Name'
            name='name'
            labelFor='name'
            value={product.name}
            onChange={onChangeInput}
          />
          <Input
            id='productDescription'
            labelText='Description'
            value={product.description}
            name='description'
            labelFor='description'
            onChange={onChangeInput}
          />
          <button class='btn btn-primary' type='submit' onClick={handleProduct}>
            Save
          </button>
        </form>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((product) => (
          <div className={styles.background} key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
