import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
<<<<<<< HEAD
import Item from "../Item/Item";
const Popular = () => {
  return (
    
=======

const Popular = () => {
  return (
>>>>>>> 713e9df36ffe4e7ea23b878967adc044d26edfbe
    <div className="popular">
      <h1>Women's popular clothes</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
<<<<<<< HEAD
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
    
=======
          return <Item key={i} id={item.id} name={item.name} />;
        })}
      </div>
    </div>
>>>>>>> 713e9df36ffe4e7ea23b878967adc044d26edfbe
  );
};

export default Popular;
