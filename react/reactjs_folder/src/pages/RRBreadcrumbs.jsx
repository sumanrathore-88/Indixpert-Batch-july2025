import React from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import { ChevronRight } from "react-bootstrap-icons";

const RRBreadcrumbs = () => {
  return (
    <div className="p-3">

      <div className="d-flex align-items-center fs-4">

        {/* Cloud */}
        <span className="text-secondary">
          Cloud
        </span>

        <ChevronRight
          className="mx-4 text-secondary"
          size={16}
        />

        {/* Files */}
        <span className="text-secondary">
          Files
        </span>

        <ChevronRight
          className="mx-4 text-secondary"
          size={16}
        />

        {/* Project */}
        <span className="text-secondary">
          Project
        </span>

        <ChevronRight
          className="mx-4 text-secondary"
          size={16}
        />

        {/* Active */}
        <span className="fw-bold text-dark">
          ProjectName
        </span>

      </div>

    </div>
  );
};

export default RRBreadcrumbs;