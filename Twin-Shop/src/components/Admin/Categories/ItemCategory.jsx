import ".././Admin.css"
import "./ItemCategory.css";
import React, { useState } from 'react';
import imageTest from ".././main.webp";
import CategoryOptions from "./CategoryOptions.jsx";

const ItemCategory = () => {
    const [openOptions, OptionsOpenState] = useState(false);
    return (
        <div className="ic-container">
                    <button className="options" onClick={() => OptionsOpenState(!openOptions)} >:   
                    </button>
                      {openOptions && (
                       <div>
               <CategoryOptions/> 
                      </div> )}
                    <img src={imageTest}></img>
                <h2>Laptop</h2>
        </div>
    );
}

export default ItemCategory;