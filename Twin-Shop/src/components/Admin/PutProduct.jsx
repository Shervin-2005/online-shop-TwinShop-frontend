import React from "react";
import "./Admin.css"

const PutProduct = ()=> {
    return (
       <div className="put-container">
           <h3>Edit a Product</h3>
           <form>
            <input type="number" placeholder="Id" name="id"/>
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Category" name="category"/>
            <input type="text" placeholder="Describtion" name="describtion"/>
            <input type="number" placeholder="Price" name="price"/>
            <input type="file" name="file"/>
            <button type="submit">Edit Product</button>
           </form>
        </div>
    );
}

export default PutProduct;