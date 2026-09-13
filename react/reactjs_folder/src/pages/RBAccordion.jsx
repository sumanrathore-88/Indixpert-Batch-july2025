import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";

import {
  PlusCircle,
  DashCircle,
} from "react-bootstrap-icons";

const RBAccordion = () => {

  const [activeKey, setActiveKey] =
    useState("0");

  const accordionData = [
    {
      id: "0",
      title:
        "What is the cost of an online course ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat congue.",
    },

    {
      id: "1",
      title:
        "Do I need to visit any physical location?",
      content:
        "No, you can access all classes online from your home.",
    },

    {
      id: "2",
      title:
        "What are the technology requirements?",
      content:
        "You need a laptop/mobile and internet connection.",
    },

    {
      id: "3",
      title:
        "How can I ask questions or clear doubts?",
      content:
        "You can ask questions during live sessions.",
    },
  ];

  return (
    <div className="p-2">

      
      <style>
        {`
          .accordion-button::after {
            display: none;
          }
        `}
      </style>

      <Accordion
        activeKey={activeKey}
        flush
      >

        {accordionData.map((item) => (

          <Accordion.Item
            eventKey={item.id}
            key={item.id}
          >

            <Accordion.Header
              onClick={() =>
                setActiveKey(
                  activeKey === item.id
                    ? null
                    : item.id
                )
              }
            >

              <div className="d-flex justify-content-between align-items-center w-100 pe-3">

                <span
                  className={
                    activeKey === item.id
                      ? "fw-bold text-primary"
                      : "fw-bold text-dark"
                  }
                >
                  {item.title}
                </span>

                {activeKey === item.id ? (

                  <DashCircle
                    size={22}
                    className="text-primary"
                  />

                ) : (

                  <PlusCircle
                    size={22}
                    className="text-dark"
                  />

                )}

              </div>

            </Accordion.Header>

            <Accordion.Body>

              {item.content}

            </Accordion.Body>

          </Accordion.Item>

        ))}

      </Accordion>

    </div>
  );
};

export default RBAccordion;