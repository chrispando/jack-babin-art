import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">{product.style}</Card.Text>
        <Card.Text as="div">{product.size}</Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
        <a href={`/addToCart/${product._id}`}>
          {" "}
          <Card.Img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-small.png" />
        </a>
      </Card.Body>
    </Card>
  );
};

export default Product;
