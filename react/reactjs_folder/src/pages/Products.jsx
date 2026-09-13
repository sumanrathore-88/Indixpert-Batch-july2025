import React, { useContext } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Container,
} from "react-bootstrap";

import ProductsData from "../Data/ProductsData";
import { WishlistContext } from "../context/WishlistContext";

const Products = () => {
  const {
    wishlistState,
    wishlistDispatch,
  } = useContext(WishlistContext);

  const handleAddToWishlist = (product) => {
    const alreadyExists =
      wishlistState.wishlistItems.find(
        (item) => item.id === product.id
      );

    if (!alreadyExists) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
    }
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>

        <h5>
          Wishlist Items :
          <span className="text-danger ms-2">
            {wishlistState.wishlistItems.length}
          </span>
        </h5>
      </div>

      <Row className="g-4">
        {ProductsData.map((product) => {
          const isAdded =
            wishlistState.wishlistItems.some(
              (item) => item.id === product.id
            );

          return (
            <Col
              md={4}
              sm={6}
              key={product.id}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <Card.Body>
                  <Card.Title>
                    {product.title}
                  </Card.Title>

                  <Card.Text>
                    <strong>
                      ₹ {product.price}
                    </strong>
                  </Card.Text>

                  <Button
                    variant={
                      isAdded
                        ? "success"
                        : "primary"
                    }
                    className="w-100"
                    disabled={isAdded}
                    onClick={() =>
                      handleAddToWishlist(
                        product
                      )
                    }
                  >
                    {isAdded
                      ? "Added To Wishlist"
                      : "Add To Wishlist"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;