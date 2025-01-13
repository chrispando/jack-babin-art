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
          Plaid normcore hoodie vape tacos. Portland marfa umami, twee pour-over
          everyday carry pitchfork tattooed af trust fund seitan post-ironic
          slow-carb. Iceland 3 wolf moon literally gluten-free affogato,
          succulents kitsch sriracha kickstarter normcore bushwick distillery
          poke lo-fi seitan. Williamsburg locavore stumptown shoreditch.
          Taxidermy pitchfork pinterest, umami fam mlkshk flexitarian four
          dollar toast forage pok pok heirloom occupy lyft chartreuse.
        </p>
        <p>
          Celiac pop-up coloring book la croix authentic YOLO etsy. Portland
          gastropub art party whatever salvia cold-pressed iPhone four dollar
          toast williamsburg air plant umami. Live-edge heirloom subway tile
          fanny pack flexitarian pickled tofu. Kogi man bun art party woke cloud
          bread next level wayfarers quinoa fam sriracha kale chips. Gentrify
          cardigan occupy, freegan adaptogen pour-over 90's enamel pin put a
          bird on it tote bag vinyl. Before they sold out tacos 90's shabby chic
          viral leggings godard swag semiotics artisan direct trade. Try-hard
          chia raclette pinterest vape pabst glossier leggings asymmetrical.
        </p>
      </Row>
    </div>
  );
};

export default About;
