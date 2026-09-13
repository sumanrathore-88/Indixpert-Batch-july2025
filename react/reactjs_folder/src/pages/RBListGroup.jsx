import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Youtube,
  TwitterX,
  Linkedin,
} from "react-bootstrap-icons";

const socialData = [
  {
    id: 1,
    name: "Facebook",
    icon: <Facebook size={20} color="#1877F2" />,
    value: "20%",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <Instagram size={20} color="#E4405F" />,
    value: "20%",
  },
  {
    id: 3,
    name: "YouTube",
    icon: <Youtube size={20} color="#FF0000" />,
    value: "20%",
  },
  {
    id: 4,
    name: "TwitterX",
    icon: <TwitterX size={20} color="#000000" />,
    value: "20%",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: <Linkedin size={20} color="#0A66C2" />,
    value: "20%",
  },
];

const RBListGroup = () => {
  return (
    <div className="p-4" style={{ maxWidth: "420px" }}>
      <h4 className="mb-3">Social Media Traffic</h4>

      <ListGroup variant="flush">
        {socialData.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            {/* Left side */}
            <div className="d-flex align-items-center gap-2">
              {item.icon}
              <span>{item.name}</span>
            </div>

            {/* Right side */}
            <span className="fw-semibold">{item.value}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RBListGroup;