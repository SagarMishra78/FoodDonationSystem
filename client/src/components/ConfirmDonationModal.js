import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const ConfirmDonationModal = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={Navigate("/ConfirmDonation")}>
          <Modal.Title>Additional Details...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemDetails />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmDonationModal;
