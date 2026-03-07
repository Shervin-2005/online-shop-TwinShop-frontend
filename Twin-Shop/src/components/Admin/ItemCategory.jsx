import React from "react";
import "./Admin.css";
import "./ItemCategory.css";
import imageTest from "./main.webp";

const ItemCategory = () => {
    return (
        <div className="ic-container">
                    <button className="options">:</button>
                    <img src={imageTest}></img>
                <h2>Laptop</h2>
        </div>
    );
}

export default ItemCategory;