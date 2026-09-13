import React, { useState } from "react";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";

const RBNavbarOffcanvas = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="p-3">

      {/* Navbar */}
      <Navbar
        bg="light"
        expand="lg"
        className="border rounded px-2"
      >

        <Container fluid>

          {/* Logo */}
          <Navbar.Brand
            className="bg-dark text-white px-2 fw-bold"
          >
            RB
          </Navbar.Brand>

          {/* Menu */}
          <Nav className="me-auto">

            {/* Home Dropdown */}
            <NavDropdown
              title="Home"
            >

              <NavDropdown.Item>
                Home Page
              </NavDropdown.Item>

              <NavDropdown.Item>
                Latest Updates
              </NavDropdown.Item>

              <NavDropdown.Item>
                Featured Section
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                Testimonials
              </NavDropdown.Item>

            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown
              title="Services"
            >

              <NavDropdown.Item>
                Web Development
              </NavDropdown.Item>

              <NavDropdown.Item>
                App Development
              </NavDropdown.Item>

              <NavDropdown.Item>
                UI/UX Design
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                SEO Services
              </NavDropdown.Item>

            </NavDropdown>

            {/* Company Dropdown */}
            <NavDropdown
              title="Company"
            >

              <NavDropdown.Item>
                About Us
              </NavDropdown.Item>

              <NavDropdown.Item>
                Our Team
              </NavDropdown.Item>

              <NavDropdown.Item>
                Infrastructure
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                Testimonials
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>

          {/* Buttons */}
          <div className="d-flex gap-2">

            <Button
              variant="primary"
              size="sm"
            >
              Login
            </Button>

            <Button
              variant="outline-primary"
              size="sm"
            >
              Sign Up
            </Button>

            <Button
              variant="dark"
              size="sm"
              onClick={handleShow}
            >
              Contact
            </Button>

          </div>

        </Container>

      </Navbar>

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
      >

        <Offcanvas.Header closeButton>

          <Offcanvas.Title>
            Contact Us
          </Offcanvas.Title>

        </Offcanvas.Header>

        <Offcanvas.Body>

          <h3 className="fw-bold">
            We are here to help you!
          </h3>

          <hr />

          <h5 className="fw-bold">
            Indixpert
          </h5>

          <div className="mt-4">

            <p>
              📍 <strong>Our Offices :</strong>
              <br />
              1: Hyderabad, Telangana,
              India
              <br />
              2: Gurugram, Haryana,
              India
            </p>

            <p>
              ✉️ <strong>Email</strong>
              <br />
              contact@indixpert.com
            </p>

            <p>
              📞 <strong>Phone</strong>
              <br />
              (+91) 778 899 2897
            </p>

          </div>

        </Offcanvas.Body>

      </Offcanvas>

    </div>
  );
};

export default RBNavbarOffcanvas;