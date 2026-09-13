import React from "react";

import {
  Button,
  OverlayTrigger,
  Popover,
  Tooltip,
} from "react-bootstrap";

const RBOverlays = () => {

  // Top Popover
  const topPopover = (
    <Popover>

      <Popover.Header as="h3">
        Popover top
      </Popover.Header>

      <Popover.Body>

        <strong>Hi i am popover,use me!</strong>

        {" "}Check this info.

      </Popover.Body>

    </Popover>
  );

  // Right Popover
  const rightPopover = (
    <Popover>

      <Popover.Header as="h3">
        Popover right
      </Popover.Header>

      <Popover.Body>

        <strong>Hi i am popover,use me!</strong>

        {" "}Check this info.

      </Popover.Body>

    </Popover>
  );

  // Bottom Popover
  const bottomPopover = (
    <Popover>

      <Popover.Header as="h3">
        Popover bottom
      </Popover.Header>

      <Popover.Body>

        <strong>Hi i am popover,use me!</strong>

        {" "}Check this info.

      </Popover.Body>

    </Popover>
  );

  // Left Popover
  const leftPopover = (
    <Popover>

      <Popover.Header as="h3">
        Popover left
      </Popover.Header>

      <Popover.Body>

        <strong>Hi i am popover,use me!</strong>

        {" "}Check this info.

      </Popover.Body>

    </Popover>
  );

  return (
    <div className="p-4">

      {/* Popovers */}
      <div className="d-flex gap-2 flex-wrap justify-content-center">

        {/* Top */}
        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={topPopover}
          rootClose
        >

          <Button
            variant="light"
            className="border"
          >
            Popover on top
          </Button>

        </OverlayTrigger>

        {/* Right */}
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={rightPopover}
          rootClose
        >

          <Button
            variant="light"
            className="border"
          >
            Popover on right
          </Button>

        </OverlayTrigger>

        {/* Bottom */}
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={bottomPopover}
          rootClose
        >

          <Button
            variant="light"
            className="border"
          >
            Popover on bottom
          </Button>

        </OverlayTrigger>

        {/* Left */}
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={leftPopover}
          rootClose
        >

          <Button
            variant="light"
            className="border"
          >
            Popover on left
          </Button>

        </OverlayTrigger>

      </div>

      <hr className="my-5" />

      {/* Tooltips */}
      <div className="d-flex gap-2 flex-wrap justify-content-center">

        {/* Tooltip Top */}
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip>
              Tooltip on top
            </Tooltip>
          }
        >

          <Button variant="secondary">
            Tooltip on top
          </Button>

        </OverlayTrigger>

        {/* Tooltip Right */}
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip>
              Tooltip on right
            </Tooltip>
          }
        >

          <Button variant="secondary">
            Tooltip on right
          </Button>

        </OverlayTrigger>

        {/* Tooltip Bottom */}
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>
              Tooltip on bottom
            </Tooltip>
          }
        >

          <Button variant="secondary">
            Tooltip on bottom
          </Button>

        </OverlayTrigger>

        {/* Tooltip Left */}
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip>
              Tooltip on left
            </Tooltip>
          }
        >

          <Button variant="secondary">
            Tooltip on left
          </Button>

        </OverlayTrigger>

      </div>

    </div>
  );
};

export default RBOverlays;