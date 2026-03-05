import React from "react";
import "./Admin.css"

const DeleteProduct = ()=> {
    return (
         <div className="delete-container"> 
           <h3>Delete a Product</h3>
           <form>
            <input type="number" placeholder="Id" name="id"/>
            <button type="submit">Delete Product</button>
           </form>
        </div>
    );
}

export default DeleteProduct;