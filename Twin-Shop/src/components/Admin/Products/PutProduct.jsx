import React from "react";
import ".././Admin.css"
import "./EditProduct.css"

const PutProduct = ()=> {
    return (
       <div className="put-container">
           <h3>Edit Product</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Category" name="category"/>
            <input type="text" placeholder="Brand" name="brand"/>
            <input type="text" placeholder="Describtion" name="describtion"/>
            <div className="price-container">
                    <input type="number" placeholder="Initial Price" name="price"/>
                 <div className="checkbox-container">
                        <input type="checkbox" id="offerCheckbox" name="offer"/>
                        <label for="offerCheckbox">Offer</label>
            </div>
            </div>
            <input type="number" placeholder="Secondary Price" name="price"/>
            <input type="file" text="Main Image" name="file"/>
            <input type="file" text="Side Images" name="file"/>
            <button type="submit">Edit Product</button>
           </form>
        </div>
    );
}

export default PutProduct;