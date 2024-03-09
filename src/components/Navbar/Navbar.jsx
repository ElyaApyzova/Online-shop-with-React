import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/dropdown.png';


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems}= useContext(ShopContext)
   const menuRef = useRef();

   const dropdown_toggle = (e) => {
     menuRef.current.classList.toggle('nav-menu-visible');
     e.target.classList.toggle('open')
   }

  return (
    
    <div className="navbar">
      <div className="nav-logo">
      <i class='bx bxl-shopify'></i>
        <p>STYLE</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle}  src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            {" "}
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
        <i class='bx bxs-cart'></i>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
