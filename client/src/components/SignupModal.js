import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { SignupOptions } from "./SignupOptions";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={Navigate("/")}>
          <Modal.Title>Register As...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupOptions />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupModal;
