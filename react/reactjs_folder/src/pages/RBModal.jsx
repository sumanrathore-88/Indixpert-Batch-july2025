import React, { useState } from "react";

import {
  Button,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";

import { Envelope } from "react-bootstrap-icons";

const RBModal = () => {

  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="p-3">

      {/* Subscribe Button */}
      <Button
        size="sm"
        variant="primary"
        onClick={handleShow}
      >

        <Envelope className="me-1" />

        Subscribe

      </Button>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >

        <Modal.Body>

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center">

            <h2 className="fw-bold">
              Don't miss out
            </h2>

            <Button
              variant="light"
              className="border-0"
              onClick={handleClose}
            >
              ✕
            </Button>

          </div>

          <hr />

          {/* Text */}
          <p className="small">

            Signup for our newsletter to
            stay upto date.

          </p>

          {/* Input */}
          <InputGroup>

            <Form.Control
              placeholder="Enter your email address"
            />

            <Button
              variant="light"
              className="border"
            >
              Subscribe
            </Button>

          </InputGroup>

        </Modal.Body>

      </Modal>

    </div>
  );
};

export default RBModal;