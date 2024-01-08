import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Discover</p>
            <i class='bx bxs-hand-right'></i>
          </div>
          <p>all your favourite</p>
          <p>seasonal trends</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <i class='bx bxs-right-arrow-circle'></i>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
