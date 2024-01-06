import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer/Footer";
import women_banner from "./components/Assets/banner_women.png";
import men_banner from "./components/Assets/banner_men.png";
import kids_banner from "./components/Assets/banner_kids.png";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
