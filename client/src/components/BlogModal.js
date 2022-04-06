import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Blog from "./Blog";

const BlogModal = (props) => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={Navigate("/readblog")} />
        <Modal.Body>
          <Blog />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BlogModal;
