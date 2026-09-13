import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const RBCarousel = () => {

  const images = [
    {
      id: 1,

      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

      title: "First Slide",

      text: "This is the first slide.",
    },

    {
      id: 2,

      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",

      title: "Second Slide",

      text: "This is the second slide.",
    },

    {
      id: 3,

      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",

      title: "Third Slide",

      text: "This is the third slide.",
    },
  ];

  return (
    <div className="p-2">

      
      <style>
        {`

          /* Dots */
          .carousel-indicators [data-bs-target] {

            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #d0d0d0;
            border: none;
            opacity: 1;

          }

          .carousel-indicators .active {

            background-color: #0d6efd;

          }

          
          .carousel-indicators {

            bottom: -50px;

          }

          /* Arrow Circle */
          .carousel-control-prev-icon,
          .carousel-control-next-icon {

            background-color: rgba(255,255,255,0.3);
            border-radius: 50%;
            width: 35px;
            height: 35px;
            background-size: 45% 45%;

          }

        `}
      </style>

      {/* Carousel */}
      <Carousel
        indicators
        controls
        interval={2500}
        className="mb-5"
      >

        {images.map((item) => (

          <Carousel.Item key={item.id}>

            <img
              src={item.image}
              alt={item.title}
              className="d-block w-100 rounded-5"
              style={{
                height: "320px",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption className="pb-5">

              <h2 className="fw-bold">
                {item.title}
              </h2>

              <p>
                {item.text}
              </p>

            </Carousel.Caption>

          </Carousel.Item>

        ))}

      </Carousel>

      {/* Buttons */}
      <div className="text-center">

        <Button
          size="sm"
          className="me-2"
        >
          ← Prev
        </Button>

        <Button size="sm">
          Next →
        </Button>

      </div>

    </div>
  );
};

export default RBCarousel;