import React from "react";
import "./Hero.css";
import hero_image from "../Assets/dress.png";

const Hero = () => {
  return (
    <section className="wrapper">
    <div className="container hero-inner">
      <div className="hero-left">
        <h2>New Arrivals</h2>
          <div className="hero-hand-icon">
            <p>Discover</p>
            <i class='bx bxs-hand-right'></i>
          </div>
          <h1>Stay Home and Shop Online</h1>
          <p>Style is a deeply personal expression of who you are, and every time you dress, you are asserting a part of yourself.</p>
        </div>
        <div className="hero-latest-btn">
          <button>Latest Collection</button>
          <i class='bx bxs-right-arrow-circle'></i>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
