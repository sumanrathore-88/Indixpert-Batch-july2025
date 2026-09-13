import React, { useState } from "react";

import {
  Button,
  Spinner,
} from "react-bootstrap";

const RBSpinners = () => {

  const [loading, setLoading] =
    useState(false);

  const handleClick = () => {

    setLoading(!loading);

  };

  return (
    <div className="p-4">

      <h4 className="text-primary mb-4">
        Spinners
      </h4>

      <div className="d-flex gap-3">

        {/* Submit Button */}
        <Button
          variant="primary"
          onClick={handleClick}
        >

          {loading ? (
            <>

              <Spinner
                as="span"
                animation="border"
                size="sm"
                className="me-2"
              />

              Submitting

            </>
          ) : (
            "Click to Submit"
          )}

        </Button>

        {/* Cancel Button */}
        <Button
          variant="danger"
          onClick={handleClick}
        >
          Cancel
        </Button>

      </div>

    </div>
  );
};

export default RBSpinners;