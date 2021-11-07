import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel className="imageCarouselClass">
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="/images/one.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="/images/two.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="/images/three.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
