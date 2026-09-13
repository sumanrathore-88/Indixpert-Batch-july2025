import React from "react";

import {
  NavLink,
  Outlet,
} from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";

import { sidebarlinkData }
from "../Data/SidebarlinkData";

const Rootlayout = () => {

  return (
    <div className="container-fluid">

      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 bg-info vh-100 p-3 overflow-auto">

          <Accordion
            defaultActiveKey={[
              "0",
              "1",
              "2",
            ]}
            alwaysOpen
          >

            {/* Interactive Components */}
            <Accordion.Item eventKey="0">

              <Accordion.Header>

                Interactive Components

              </Accordion.Header>

              <Accordion.Body>

                <ul className="list-unstyled mb-0">

                  {sidebarlinkData
                    .interactiveComponents
                    .map((menu) => (

                      <li key={menu.id}>

                        <NavLink
                          to={menu.link}

                          end={menu.link === "/"}

                          className={({
                            isActive,
                          }) =>
                            isActive
                              ? "text-warning fw-bold d-block mb-2 text-decoration-none"
                              : "text-dark d-block mb-2 text-decoration-none"
                          }
                        >

                          {menu.MenuName}

                        </NavLink>

                      </li>

                    ))}

                </ul>

              </Accordion.Body>

            </Accordion.Item>

            {/* React Hook Form */}
            <Accordion.Item eventKey="1">

              <Accordion.Header>

                React Hook Form

              </Accordion.Header>

              <Accordion.Body>

                <ul className="list-unstyled mb-0">

                  {sidebarlinkData
                    .reactHookForm
                    .map((menu) => (

                      <li key={menu.id}>

                        <NavLink
                          to={menu.link}

                          className={({
                            isActive,
                          }) =>
                            isActive
                              ? "text-warning fw-bold d-block mb-2 text-decoration-none"
                              : "text-dark d-block mb-2 text-decoration-none"
                          }
                        >

                          {menu.MenuName}

                        </NavLink>

                      </li>

                    ))}

                </ul>

              </Accordion.Body>

            </Accordion.Item>

            {/* Non Interactive Components */}
            <Accordion.Item eventKey="2">

              <Accordion.Header>

                Non-interactive Components

              </Accordion.Header>

              <Accordion.Body>

                <ul className="list-unstyled mb-0">

                  {sidebarlinkData
                    .nonInteractiveComponents
                    .map((menu) => (

                      <li key={menu.id}>

                        <NavLink
                          to={menu.link}

                          className={({
                            isActive,
                          }) =>
                            isActive
                              ? "text-warning fw-bold d-block mb-2 text-decoration-none"
                              : "text-dark d-block mb-2 text-decoration-none"
                          }
                        >

                          {menu.MenuName}

                        </NavLink>

                      </li>

                    ))}

                </ul>

              </Accordion.Body>

            </Accordion.Item>

          </Accordion>

        </div>

        {/* Content */}
        <div className="col-md-9 p-3">

          <Outlet />

        </div>

      </div>

    </div>
  );
};

export default Rootlayout;