import React from "react";
import './Offers.css'
import hero_image1 from '../Assets/hero-img.png'

const Offers = () =>{
    return(
        <div className="offers">
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        </div>
        <div className="offers-right">
        <img src={hero_image1}  alt=""/>
        </div>
        </div>
    )
}

export default Offers