import React, { useState } from 'react';
import ".././Admin.css"
import "./ItemProduct.css";
import imageTest from ".././main.webp";
import OptionsMenu from "./OptionsMenu";

const ItemProduct = (props) => {
      const [openOptions, OptionsOpenState] = useState(false);
      const {title, image, price , limit , score , preprice} = props.data;  

    return (
        <div className="ip-container">
                 <div className="ip-cta-top">
                    <span>20%</span>      
                    <button className="product-options" onClick={() => OptionsOpenState(!openOptions)} >:   
                    </button>
                      {openOptions && (
                       <div>
               <OptionsMenu/> 
                      </div>
      )}
                </div>
                <img src={image} alt="" />
                <div className="ip-cta-category-brand">
                    <h2 className="count">there in only {limit} more</h2>
                    <h3 className="score">{score}⭐</h3>
                </div>
                    <span>{title}</span>
                <div className="ip-cta">
                    <span className="new-price">{price}</span>
                    <span className="initial-price">{preprice}</span>
                </div>
        </div>
    );
}

export default ItemProduct;