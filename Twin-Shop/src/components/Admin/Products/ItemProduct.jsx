import React, { useState } from 'react';
import ".././Admin.css"
import "./ItemProduct.css";
import imageTest from ".././main.webp";
import OptionsMenu from "./OptionsMenu";

const ItemProduct = () => {
      const [openOptions, OptionsOpenState] = useState(false);
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
                <img src={imageTest} alt="" />
                <div className="ip-cta-category-brand">
                    <h2 className="count">there in only 2 more</h2>
                    <h3 className="score">4.8⭐</h3>
                </div>
                    <span>HP Victus 15 15.6-inch Gaming Laptop Model fa2082wm with Intel Core i5-13420H, 16GB DDR4 3200MHz RAM, 512GB SSD, NVIDIA RTX 4050 6GB, FHD 144Hz Display-W</span>
                <div className="ip-cta">
                    <span className="new-price">499.99 $</span>
                    <span className="initial-price">530 $</span>
                </div>
        </div>
    );
}

export default ItemProduct;