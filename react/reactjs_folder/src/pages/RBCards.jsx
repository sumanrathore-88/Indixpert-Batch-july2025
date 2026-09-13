import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
  {
    id: 1,
    title: "Bluetooth Headphones",
    img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
    desc: "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen ENC Mic.",
    price: "₹1,399",
    oldPrice: "₹3,999",
  },
  {
    id: 2,
    title: "The Ear Gaming Headphone",
    img: "https://m.media-amazon.com/images/I/61kFL7ywsZS._SX679_.jpg",
    desc: "BTG Thunder Gaming Headphone with RGB LED, Gaming Mode, Detachable Mic.",
    price: "₹1,399",
    oldPrice: "₹3,999",
  },
  {
    id: 3,
    title: "boAt Rockerz 450",
    img: "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
    desc: "boAt Rockerz 450 with 15H battery, 40mm drivers, padded cushions.",
    price: "₹1,399",
    oldPrice: "₹3,999",
  },
];

const RBCards = () => {
  return (
    <div className="p-4">

    
      <Row className="gx-3 gy-4">

        {products.map((item) => (
          <Col md={4} key={item.id} className="d-flex">

            <Card className="h-100 shadow-sm w-100">

              {/* Image */}
              <Card.Img
                variant="top"
                src={item.img}
                style={{
                  height: "230px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />

              <Card.Body className="d-flex flex-column">

                <Card.Title style={{ fontSize: "15px" }}>
                  {item.title}
                </Card.Title>

                <Card.Text
                  style={{ fontSize: "13px", color: "#6c757d" }}
                >
                  {item.desc}
                </Card.Text>

                {/* Price */}
                <div className="mb-3">
                  <span className="fw-bold">{item.price}</span>{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "13px",
                    }}
                  >
                    {item.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex justify-content-between">
                  <Button variant="outline-primary" size="sm">
                    Add To Cart
                  </Button>

                  <Button variant="primary" size="sm">
                    Buy Now
                  </Button>
                </div>

              </Card.Body>
            </Card>

          </Col>
        ))}

      </Row>
    </div>
  );
};

export default RBCards;