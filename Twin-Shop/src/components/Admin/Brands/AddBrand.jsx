import React from "react";
import ".././Admin.css"
import "./AddBrand.css"

const AddBrand = ()=> {
    return (
       <div className="add-container">
           <h3>Add Brand</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="file" text="Image" name="file"/>
            <button type="submit" className="submit-button">Add Brand</button>
           </form>
        </div>
    );
}

export default AddBrand;