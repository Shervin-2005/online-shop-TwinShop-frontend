import React from "react";
import ".././Admin.css"
import "./EditBrand.css"

const PutBrand = ()=> {
    return (
       <div className="put-container">
           <h3>Edit Brand</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="file" text="Image" name="file"/>
            <button type="submit" className="submit-button">Edit Brand</button>
           </form>
        </div>
    );
}

export default PutBrand;