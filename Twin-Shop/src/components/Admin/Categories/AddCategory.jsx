import React from "react";
import ".././Admin.css"
import "./AddCategory.css"

const AddCategory = ()=> {
    return (
       <div className="add-container">
           <h3>Add Category</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="file" text="Image" name="file"/>
            <button type="submit" className="submit-button">Add Category</button>
           </form>
        </div>
    );
}

export default AddCategory;