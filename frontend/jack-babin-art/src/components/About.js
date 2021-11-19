import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <h1>About Me</h1>{" "}
        </Col>
        <Col>
          <video width="320" height="240" controls>
            <source src="/video/biog1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>

      <Row>
        <p>
        My name is Jack Babin and I am an artist in Houston, TX. I am inspired by surrealism, 
        absurdity and abstract. I love to create art that is a reflection of my own subconscious 
        by using color and chaotic orientation as a template. 
        </p>
        
      </Row>
    </div>
  );
};

export default About;
