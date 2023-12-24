import React from "react";
import "./Item.css";
<<<<<<< HEAD

const Item = (props) => {
=======
const Item = () => {
>>>>>>> 713e9df36ffe4e7ea23b878967adc044d26edfbe
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
<<<<<<< HEAD
        <div className="item.new_price">${props.new_price}</div>
        <div className="item.old_price">${props.old_price}</div>
=======
        <div className="item-price-new">{props.new_price}</div>
        <div className="item.old_price">{props.old_price}</div>
>>>>>>> 713e9df36ffe4e7ea23b878967adc044d26edfbe
      </div>
    </div>
  );
};

export default Item;
