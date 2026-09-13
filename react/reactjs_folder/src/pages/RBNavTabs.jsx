import React from "react";

import {
  Row,
  Col,
  Nav,
  Tab,
  Table,
} from "react-bootstrap";

import {
  CalendarDate,
  Clock,
  CurrencyRupee,
} from "react-bootstrap-icons";

const RBNavTabs = () => {

  return (
    <div className="p-3">

      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="overview"
      >

        <Row>

          <Col sm={12}>

            {/* Tabs */}
            <Nav
              variant="tabs"
              className="mb-3"
            >

              <Nav.Item>

                <Nav.Link eventKey="overview">
                  Overview
                </Nav.Link>

              </Nav.Item>

              <Nav.Item>

                <Nav.Link eventKey="project">
                  Project Scope
                </Nav.Link>

              </Nav.Item>

              <Nav.Item>

                <Nav.Link eventKey="team">
                  Team Members
                </Nav.Link>

              </Nav.Item>

              <Nav.Item>

                <Nav.Link eventKey="tasks">
                  Tasks
                </Nav.Link>

              </Nav.Item>

              <Nav.Item>

                <Nav.Link eventKey="chat">
                  Chat
                </Nav.Link>

              </Nav.Item>

            </Nav>

          </Col>

          <Col sm={12}>

            <Tab.Content>

              {/* Overview */}
              <Tab.Pane eventKey="overview">

                <p className="text-secondary fw-semibold">

                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Donec purus tellus,
                  ultricies quis orci ac,
                  volutpat rhoncus lacus.
                  Sed tempor arcu vitae
                  neque mollis rutrum ac
                  a odio. Donec sit amet
                  ex in est dictum imperdiet.

                </p>

                <Table borderless>

                  <tbody>

                    <tr className="border-top">

                      <td className="fw-bold">
                        <CalendarDate className="me-2 text-primary" />
                        Start Date
                      </td>

                      <td className="text-end fw-bold text-secondary">
                        01 Jul, 2025
                      </td>

                    </tr>

                    <tr className="border-top">

                      <td className="fw-bold">
                        <CalendarDate className="me-2 text-primary" />
                        End Date
                      </td>

                      <td className="text-end fw-bold text-secondary">
                        31 Dec, 2025
                      </td>

                    </tr>

                    <tr className="border-top">

                      <td className="fw-bold">
                        <Clock className="me-2 text-primary" />
                        Estimate Time
                      </td>

                      <td className="text-end fw-bold text-secondary">
                        5 Months
                      </td>

                    </tr>

                    <tr className="border-top">

                      <td className="fw-bold">
                        <CurrencyRupee className="me-2 text-primary" />
                        Estimate Cost
                      </td>

                      <td className="text-end fw-bold text-secondary">
                        ₹ 5,80,000
                      </td>

                    </tr>

                  </tbody>

                </Table>

              </Tab.Pane>

              {/* Project Scope */}
              <Tab.Pane eventKey="project">

                <h5 className="fw-bold">
                  Project Scope
                </h5>

                <p className="text-secondary">

                  This project includes
                  frontend, backend,
                  API integration,
                  authentication,
                  and deployment.

                </p>

              </Tab.Pane>

              {/* Team Members */}
              <Tab.Pane eventKey="team">

                <h5 className="fw-bold">
                  Team Members
                </h5>

                <ul>

                  <li>Frontend Developer</li>

                  <li>Backend Developer</li>

                  <li>UI/UX Designer</li>

                  <li>Project Manager</li>

                </ul>

              </Tab.Pane>

              {/* Tasks */}
              <Tab.Pane eventKey="tasks">

                <h5 className="fw-bold">
                  Tasks
                </h5>

                <ul>

                  <li>Create UI Design</li>

                  <li>Build Components</li>

                  <li>Connect APIs</li>

                  <li>Deploy Project</li>

                </ul>

              </Tab.Pane>

              {/* Chat */}
              <Tab.Pane eventKey="chat">

                <h5 className="fw-bold">
                  Chat
                </h5>

                <p className="text-secondary">

                  No new messages available.

                </p>

              </Tab.Pane>

            </Tab.Content>

          </Col>

        </Row>

      </Tab.Container>

    </div>
  );
};

export default RBNavTabs;