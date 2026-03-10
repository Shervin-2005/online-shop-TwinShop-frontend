import React, { useState } from "react";
import ".././Admin.css"
import "./ItemBrand.css";
import imageTest from ".././main.webp";
import BrandOptions from "./BrandOptions";

const ItemBrand = () => {
        const [openOptions, OptionsOpenState] = useState(false);
    return (
        <div className="ib-container">
           <button className="options" onClick={() => OptionsOpenState(!openOptions)} >:   
                               </button>
                                 {openOptions && (
                                  <div>
                          <BrandOptions/> 
                                 </div> )}
                     <img src={imageTest}></img>
                <h2>HP</h2>
        </div>
    );
}

export default ItemBrand;