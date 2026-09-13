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
    icon: <Cart className="me-2 text-muted" />,
    salary: "$64,000",
    date: "Aug 3, 2024",
    status: "PENDING",
    emp: "Full-Time",
  },

  {
    id: 2,
    name: "Carol Brown",
    dept: "Support",
    icon: <Telephone className="me-2 text-muted" />,
    salary: "$82,000",
    date: "Aug 6, 2024",
    status: "NEGOTIATING",
    emp: "Part-Time",
  },

  {
    id: 3,
    name: "Peggy Castello",
    dept: "Design",
    icon: <Palette className="me-2 text-muted" />,
    salary: "$120,000",
    date: "Aug 13, 2024",
    status: "FAILED",
    emp: "Full-Time",
  },

  {
    id: 4,
    name: "Katherine Grey",
    dept: "Sales",
    icon: <Cart className="me-2 text-muted" />,
    salary: "$75,000",
    date: "Aug 19, 2024",
    status: "PAID",
    emp: "Full-Time",
  },

  {
    id: 5,
    name: "Sandra Palace",
    dept: "Design",
    icon: <Palette className="me-2 text-muted" />,
    salary: "$54,000",
    date: "Aug 22, 2024",
    status: "PENDING",
    emp: "Contractor",
  },

  {
    id: 6,
    name: "Nelson Metz",
    dept: "Sales",
    icon: <Cart className="me-2 text-muted" />,
    salary: "$28,000",
    date: "Aug 27, 2024",
    status: "OVERDUE",
    emp: "Part-Time",
  },

  {
    id: 7,
    name: "Roger Ryder",
    dept: "Sales",
    icon: <Cart className="me-2 text-muted" />,
    salary: "$93,000",
    date: "Aug 31, 2024",
    status: "PAID",
    emp: "Contractor",
  },

  {
    id: 8,
    name: "Evan Walter",
    dept: "Support",
    icon: <Telephone className="me-2 text-muted" />,
    salary: "$55,000",
    date: "Sep 5, 2024",
    status: "NEGOTIATING",
    emp: "Full-Time",
  },

  {
    id: 9,
    name: "Julien Saint",
    dept: "Design",
    icon: <Palette className="me-2 text-muted" />,
    salary: "$87,000",
    date: "Sep 11, 2024",
    status: "OVERDUE",
    emp: "Full-Time",
  },
];

//  Badge Style
const badgeStyle = (status) => {
  switch (status) {

    case "PENDING":
      return {
        backgroundColor: "#8b712a",
        color: "#b5b8bd",
      };

    case "NEGOTIATING":
      return {
        backgroundColor: "#fff3cd",
        color: "#ff9800",
      };

    case "FAILED":
      return {
        backgroundColor: "#f8d7da",
        color: "#dc3545",
      };

    case "PAID":
      return {
        backgroundColor: "#d1e7dd",
        color: "#198754",
      };

    case "OVERDUE":
      return {
        backgroundColor: "#eadcff",
        color: "#8a2be2",
      };

    default:
      return {
        backgroundColor: "#eee",
        color: "#333",
      };
  }
};

const RBTables = () => {
  return (
    <div className="p-3">

      {/* Heading */}
      <h1
        className="fw-bold mb-5"
        style={{
          fontSize: "28px",
        }}
      >
        Create two table on this page and set
        one responsive and another non
        responsive.
      </h1>

      {/*  Non Responsive Table */}
      <h3 className="mb-4">
        Non Responsive Table
      </h3>

      <Table
        borderless
        hover
        className="align-middle mb-5"
      >

        <thead className="text-muted">

          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>

        </thead>

        <tbody>

          {data.map((item) => {

            const style = badgeStyle(
              item.status
            );

            return (
              <tr key={item.id}>

                <td>{item.name}</td>

                <td>
                  {item.icon}
                  {item.dept}
                </td>

                <td>{item.salary}</td>

                <td>{item.date}</td>

                <td>

                  <Badge
                    style={{
                      backgroundColor:
                        style.backgroundColor,

                      color: style.color,

                      borderRadius: "20px",

                      padding: "7px 14px",

                      fontWeight: "500",
                    }}
                  >
                    {item.status}
                  </Badge>

                </td>

                <td>{item.emp}</td>

              </tr>
            );
          })}

        </tbody>

      </Table>

      {/*  Responsive Table */}
      <h3 className="mb-4">
        Responsive Table
      </h3>

      <Table
        responsive
        borderless
        hover
        className="align-middle"
      >

        <thead className="text-muted">

          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>

        </thead>

        <tbody>

          {data.map((item) => {

            const style = badgeStyle(
              item.status
            );

            return (
              <tr key={item.id}>

                <td>{item.name}</td>

                <td>
                  {item.icon}
                  {item.dept}
                </td>

                <td>{item.salary}</td>

                <td>{item.date}</td>

                <td>

                  <Badge
                    style={{
                      backgroundColor:
                        style.backgroundColor,

                      color: style.color,

                      borderRadius: "20px",

                      padding: "7px 14px",

                      fontWeight: "500",
                    }}
                  >
                    {item.status}
                  </Badge>

                </td>

                <td>{item.emp}</td>

              </tr>
            );
          })}

        </tbody>

      </Table>

    </div>
  );
};

export default RBTables;