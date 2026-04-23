import React from "react";
import "./EditCategory.css"

const PutCategory = ()=> {
    return (
       <div className="put-container">
           <h3>Edit Category</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="file" text="Image" name="file"/>
            <button type="submit" className="submit-button">Edit Category</button>
           </form>
        </div>
    );
}

export default PutCategory;