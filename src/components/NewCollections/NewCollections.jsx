import React from "react";
import './NewCollections.css'
import hero_image2 from '../Assets/hero_image2.avif'
import Item from "../Item/Item";


const NewCollections = () => {
    return (
        <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
        {hero_image2.map((item,i)=>{
            return <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
        </div>
        </div>
    )
}

export default NewCollections