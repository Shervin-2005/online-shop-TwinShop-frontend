import React from "react";
import ".././Admin.css"
import "./EditAdv.css"

const EditAdv = ()=> {
    return (
       <div className="put-container">
           <h3>Edit Adv.</h3>
           <form>
            <input type="file" text="Image" name="file"/>
            <input type="url" placeholder="URL" name="title"/>
            <button type="submit" className="submit-button">Edit Adv.</button>
           </form>
        </div>
    );
}

export default EditAdv;