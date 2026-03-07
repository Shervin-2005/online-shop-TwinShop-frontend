import React from "react";
import "./Admin.css";
import "./ItemBrand.css";
import imageTest from "./main.webp";

const ItemBrand = () => {
    return (
        <div className="ib-container">
            <button className="options">:</button>
                     <img src={imageTest}></img>
                <h2>HP</h2>
        </div>
    );
}

export default ItemBrand;