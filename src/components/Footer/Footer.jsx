import React from "react";
import './Footer.css'
import footer_logo from '../Assets/shopping-bag.svg'

const Footer = () => {
    return (
        <div className="footer"> 
        <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>STYLE</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>  
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
          <i class='bx bxl-instagram'></i>
          <i class='bx bxl-telegram'></i>
          <i class='bx bxl-whatsapp'></i>
          </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reversed.</p>
        </div>
        </div>
    )
}

export default Footer