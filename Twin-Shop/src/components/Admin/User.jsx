import React from "react";
import "./Admin.css";
import "./User.css";
import imageTest from "./profile.png";

const ItemBrand = () => {
    return (
        <div className="user-container">
                    <button className="options">:</button>
                 <img src={imageTest}></img>
                <h2>09162959653</h2>
        </div>
    );
}

export default ItemBrand;