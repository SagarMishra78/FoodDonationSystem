import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";

const AssignEmployeeModal = (props) => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={Navigate("/ongoingdonationngo")}>
          <Modal.Title>Employee Details...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeDetails />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AssignEmployeeModal;
