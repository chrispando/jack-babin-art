import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import About from "../components/About";
import Gallery from "../components/Gallery";

const HomeScreen = () => {
  return (
    <div>
      <ImageCarousel />
      <About />
      <Gallery />
    </div>
  );
};

export default HomeScreen;
