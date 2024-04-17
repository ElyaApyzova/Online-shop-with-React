import React from "react";
import "./Hero.css";
import hero_image from "../Assets/dress.png";

const Hero = () => {
  return (
    <section className="wrapper">
    <div className="container hero-inner">
      <div className="hero__left">
        <h2 className="hero__left-text">New Arrivals</h2>
          <div className="hero__left-icon">
            <p className="hero__left-title">Discover</p>
            <i class='bx bxs-hand-right hero__left-hand'></i>
          </div>
          <h1 className="hero__left-title">Stay Home and Shop Online</h1>
          <p className="hero__left-description">Style is a deeply personal expression of who you are, and every time you dress, you are asserting a part of yourself.</p>
        </div>
        <div className="hero__left-btn">
          <button className="hero__left-button">Latest Collection</button>
          <i class='bx bxs-right-arrow-circle hero__left-arrow'></i>
        </div>
      </div>
      <div className="hero__right">
        <img className="hero__right-img" src={hero_image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
