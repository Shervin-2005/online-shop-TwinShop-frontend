import React from "react";
import ".././Admin.css"
import "./AddAdv.css"

const AddAdv = ()=> {
    return (
       <div className="add-container">
           <h3>Add Poster</h3>
           <form>
            <input type="file" text="Image" name="file"/>
            <input type="url" placeholder="URL" name="title"/>
            <button type="submit" className="submit-button">Add Poster</button>
           </form>
        </div>
    );
}

export default AddAdv;