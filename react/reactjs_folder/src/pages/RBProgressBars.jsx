import React, { useState } from "react";

import {
  Button,
  ProgressBar,
  Card,
  Badge,
  Row,
  Col,
} from "react-bootstrap";

const RBProgressBars = () => {
  const [progress, setProgress] = useState(5);

  //  Increase Progress
  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 5);
    }
  };

  //  Decrease Progress
  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 5);
    }
  };

  return (
    <div className="p-4">

      {/* Buttons */}
      <div className="d-flex gap-3 mb-5">

        <Button onClick={increaseProgress}>
          Progress + 5%
        </Button>

        <Button onClick={decreaseProgress}>
          Progress - 5%
        </Button>

      </div>

      {/* Progress Text */}
      <h5 className="mb-2">
        Completed {progress}%
      </h5>

      {/* Progress Bars */}
      <ProgressBar
        now={progress}
        label={`${progress}%`}
        className="mb-2"
      />

      <ProgressBar
        now={progress}
        striped
        variant="danger"
        className="mb-5"
      />

      <hr className="mb-4" />

      {/* Dashboard Card */}
      <Card
        style={{
          width: "350px",
        }}
      >

        <Card.Body>

          {/* Title */}
          <Card.Title
            style={{
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            Bootstrap Dashboard
            <br />
            Application
          </Card.Title>

          {/* Subtitle */}
          <Card.Subtitle className="mb-4 text-muted">
            Web Development
          </Card.Subtitle>

          {/* Text */}
          <Card.Text
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
            }}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Card.Text>

          {/* Badge */}
          <Badge
            bg="info"
            className="mb-3"
            style={{
              fontSize: "14px",
            }}
          >
            In Progress
          </Badge>

          {/* Small Progress */}
          <ProgressBar
            now={progress}
            label={`${progress}%`}
            style={{
              height: "16px",
            }}
            className="mb-4"
          />

        </Card.Body>

        {/* Footer */}
        <Card.Footer className="bg-white">

          <Row>

            <Col className="border-end">

              <h6 className="text-muted">
                Due Date:
              </h6>

              <h5>
                1 Jan, 2022
              </h5>

            </Col>

            <Col>

              <h6 className="text-muted">
                Budget:
              </h6>

              <h5>
                $123,000
              </h5>

            </Col>

          </Row>

        </Card.Footer>

      </Card>

    </div>
  );
};

export default RBProgressBars;