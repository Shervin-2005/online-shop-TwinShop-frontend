import React from "react";
import "./AddProduct.css"

const AddProduct = ()=> {
    return (
       <div className="add-container">
           <h3>Add Product</h3>
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
            <button className="submit-button" type="submit">Add Product</button>
           </form>
        </div>
    );
}

export default AddProduct;