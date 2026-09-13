import React from "react";

import {
  Table,
  Badge,
} from "react-bootstrap";

import {
  Cart,
  Telephone,
  Palette,
} from "react-bootstrap-icons";

// Data
const data = [
  {
    id: 1,
    name: "Joseph Oden",
    dept: "Sales",
    icon: <Cart className="me-2 text-secondary" />,
    salary: "$64,000",
    date: "Aug 3, 2024",
    status: "PENDING",
    emp: "Full-Time",
  },

  {
    id: 2,
    name: "Carol Brown",
    dept: "Support",
    icon: <Telephone className="me-2 text-secondary" />,
    salary: "$82,000",
    date: "Aug 6, 2024",
    status: "NEGOTIATING",
    emp: "Part-Time",
  },

  {
    id: 3,
    name: "Peggy Castello",
    dept: "Design",
    icon: <Palette className="me-2 text-secondary" />,
    salary: "$120,000",
    date: "Aug 13, 2024",
    status: "FAILED",
    emp: "Full-Time",
  },

  {
    id: 4,
    name: "Katherine Grey",
    dept: "Sales",
    icon: <Cart className="me-2 text-secondary" />,
    salary: "$75,000",
    date: "Aug 19, 2024",
    status: "PAID",
    emp: "Full-Time",
  },

  {
    id: 5,
    name: "Sandra Palace",
    dept: "Design",
    icon: <Palette className="me-2 text-secondary" />,
    salary: "$54,000",
    date: "Aug 22, 2024",
    status: "PENDING",
    emp: "Contractor",
  },

  {
    id: 6,
    name: "Nelson Metz",
    dept: "Sales",
    icon: <Cart className="me-2 text-secondary" />,
    salary: "$28,000",
    date: "Aug 27, 2024",
    status: "OVERDUE",
    emp: "Part-Time",
  },

  {
    id: 7,
    name: "Roger Ryder",
    dept: "Sales",
    icon: <Cart className="me-2 text-secondary" />,
    salary: "$93,000",
    date: "Aug 31, 2024",
    status: "PAID",
    emp: "Contractor",
  },

  {
    id: 8,
    name: "Evan Walter",
    dept: "Support",
    icon: <Telephone className="me-2 text-secondary" />,
    salary: "$55,000",
    date: "Sep 5, 2024",
    status: "NEGOTIATING",
    emp: "Full-Time",
  },

  {
    id: 9,
    name: "Julien Saint",
    dept: "Design",
    icon: <Palette className="me-2 text-secondary" />,
    salary: "$87,000",
    date: "Sep 11, 2024",
    status: "OVERDUE",
    emp: "Full-Time",
  },
];

// Badge Color Function
const badgeVariant = (status) => {

  switch (status) {

    case "PENDING":
      return "primary";

    case "NEGOTIATING":
      return "warning";

    case "FAILED":
      return "danger";

    case "PAID":
      return "success";

    case "OVERDUE":
      return "secondary";

    default:
      return "dark";
  }
};

const RRBadges = () => {
  return (
    <div className="p-3">

      <Table
        borderless
        hover
        responsive
        className="align-middle"
      >

        {/* Table Head */}
        <thead className="text-secondary">

          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {data.map((item) => (

            <tr key={item.id}>

              {/* Employee */}
              <td className="fw-semibold">
                {item.name}
              </td>

              {/* Department */}
              <td>
                {item.icon}
                {item.dept}
              </td>

              {/* Salary */}
              <td>{item.salary}</td>

              {/* Date */}
              <td>{item.date}</td>

              {/* Status Badge */}
              <td>

                <Badge
                  pill
                  bg={badgeVariant(item.status)}
                  text={
                    item.status === "NEGOTIATING"
                      ? "dark"
                      : ""
                  }
                >
                  {item.status}
                </Badge>

              </td>

              {/* Employment */}
              <td>{item.emp}</td>

            </tr>

          ))}

        </tbody>

      </Table>

    </div>
  );
};

export default RRBadges;