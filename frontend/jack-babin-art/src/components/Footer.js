import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="d-flex justify-content">
          <Col className="py-3 m-3">
            <a href="http://www.facebook.com" className="m-3 facebook-link">
              {" "}
              <i className="fab fa-facebook-f"></i>{" "}
            </a>
            <a href="http://www.twitter.com" className="m-3 twitter-link">
              {" "}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="http://www.instagram.com" className="m-3 instagram-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="http://www.tiktok.com" className="m-3 tiktok-link">
              <i className="fab fa-tiktok"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Jack Babin</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
