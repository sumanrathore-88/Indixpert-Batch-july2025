import React from "react";

import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";

const RBFigure = () => {
  return (
    <div className="p-4">

      <Figure>

        {/* Card */}
        <Card
          className="p-2 bg-light rounded-3"
        >

          {/* Image */}
          <Figure.Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            alt="Nature Image"
            fluid
            rounded
            className="w-100"
          />

        </Card>

        {/* Caption */}
        <Figure.Caption
          className="mt-3 fs-3 fw-medium text-secondary"
        >
          Beautiful Nature View
        </Figure.Caption>

      </Figure>

    </div>
  );
};

export default RBFigure;