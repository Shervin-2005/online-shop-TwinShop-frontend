import React from "react";
import "./Admin.css";
import "./ItemProduct.css";
import imageTest from "./ImageTest.jpg";

const ItemProduct = () => {
    return (
        <div className="ip-container">
                <img src={imageTest} alt="" />
                <h2>Title</h2>
                <span>Programming & Computer Science</span>
                <p>A Digital Wallpaper with 1080p Quality its Designed for Windows,Mac and Linux also you can use it for android and ios if cropped its design is based on python famous programming language for more details check our website that its link is in the folder of this wallpaper</p>
                <div className="ip-cta">
                    <span>19.99 $</span>
                    <button>Add to Cart</button>
                </div>
        </div>
    );
}

export default ItemProduct;