import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ isEditOpen, setIsEditOpen, children }) => {
  const handleClose = () => setIsEditOpen(false);

  return (
    <Modal show={isEditOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
