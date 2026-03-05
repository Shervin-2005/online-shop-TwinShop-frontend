import React from "react";
import "./Admin.css"

const AddProduct = ()=> {
    return (
        <div className="add-container">
           <h3>Add a new Product</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Category" name="category"/>
            <input type="text" placeholder="Describtion" name="describtion"/>
            <input type="number" placeholder="Price" name="price"/>
            <input type="file" name="file"/>
            <button type="submit">Add Product</button>
           </form>
        </div>
    );
}

export default AddProduct;