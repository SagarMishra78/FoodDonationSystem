import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RequestDonation from "./RequestDonation";

const ConfirmDonationModal = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={Navigate("/")}>
          <Modal.Title>Request Donation...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RequestDonation />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmDonationModal;
