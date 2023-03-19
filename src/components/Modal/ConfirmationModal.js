import { Modal, Button, Row } from "react-bootstrap";
export const ConfirmationModal = (props) => {
  const { title, body, show, onHide, primaryActionName, primaryActionColor, closeOnClick, actionOnClick } =
    props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center align-items-center'>
          <p>{body}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={closeOnClick}>
          Close
        </Button>
        <Button variant={primaryActionColor} onClick={actionOnClick}>
          {primaryActionName}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
