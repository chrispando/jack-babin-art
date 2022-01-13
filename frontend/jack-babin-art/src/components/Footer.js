import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="d-flex justify-content">
          <Col className="py-3 m-3">
            <a
              href="https://www.instagram.com/jackbabin.art/"
              className="m-3 instagram-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/Jackbabin.art/"
              className="m-3 facebook-link"
            >
              {" "}
              <i className="fab fa-facebook-f"></i>{" "}
            </a>
            <a
              href="https://www.tiktok.com/@jackbabin.art?"
              className="m-3 tiktok-link"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
};

export default Footer;
