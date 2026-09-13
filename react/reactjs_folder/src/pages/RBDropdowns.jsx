import React from "react";

import {
  Row,
  Col,
  Dropdown,
  Image,
} from "react-bootstrap";

import {
  Person,
  Speedometer2,
  Bell,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";

const RBDropdowns = () => {
  return (
    <div className="p-3">

      {/* Remove Default Arrow */}
      <style>
        {`
          .dropdown-toggle::after {
            display: none !important;
          }
        `}
      </style>

      <Row className="g-5">

        {/* Dropdown 1 */}
        <Col md={4}>

          <Dropdown>

            <Dropdown.Toggle variant="primary">

              <Person className="me-2" />
              Profile

            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item>
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item>
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item>
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item>
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>

            </Dropdown.Menu>

          </Dropdown>

        </Col>

        {/* Dropdown 2 */}
        <Col md={4}>

          <Dropdown>

            <Dropdown.Toggle
              variant="outline-primary"
            >

              <Person className="me-2" />
              Profile

            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item>
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item>
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item>
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item>
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>

            </Dropdown.Menu>

          </Dropdown>

        </Col>

        {/* Dropdown 3 */}
        <Col md={4} className="text-end">

          <Dropdown align="end">

            <Dropdown.Toggle
              variant="light"
              className="border-0 bg-transparent p-0"
            >

              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                roundedCircle
                width={45}
                height={45}
              />

            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item>
                <Speedometer2 className="me-2" />
                Dashboard
              </Dropdown.Item>

              <Dropdown.Item>
                <Bell className="me-2" />
                Notification
              </Dropdown.Item>

              <Dropdown.Item>
                <Gear className="me-2" />
                Settings
              </Dropdown.Item>

              <Dropdown.Item>
                <BoxArrowRight className="me-2" />
                Logout
              </Dropdown.Item>

            </Dropdown.Menu>

          </Dropdown>

        </Col>

      </Row>

    </div>
  );
};

export default RBDropdowns;