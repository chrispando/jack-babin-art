import React from "react";
import LandingButton from "./LandingButton";

import heroImage from "../images/JB_Logo.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={heroImage} alt="Logo" className="hero-img" />
      <LandingButton />
    </div>
  );
};

export default LandingPage;
