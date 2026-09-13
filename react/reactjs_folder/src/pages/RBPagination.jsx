import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const RBPagination = () => {
  const [active, setActive] = useState(3);

  const totalPages = 5;

  const handleClick = (number) => {
    setActive(number);
  };

  return (
    <div className="p-4">

      <h2 className="mb-3">
        React Bootstrap <span className="text-primary">Components</span>
      </h2>

      <h4 className="text-primary">Pagination</h4>
      <p>Active Page : {active}</p>

      <Pagination>

        {/* First */}
        <Pagination.First onClick={() => setActive(1)} />

        {/* Prev */}
        <Pagination.Prev
          onClick={() => active > 1 && setActive(active - 1)}
        />

        {/* Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === active}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        {/* Next */}
        <Pagination.Next
          onClick={() => active < totalPages && setActive(active + 1)}
        />

        {/* Last */}
        <Pagination.Last onClick={() => setActive(totalPages)} />

      </Pagination>

      
    </div>
  );
};

export default RBPagination;