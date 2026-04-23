import React from "react";
import ".././Admin.css"
import "./EditPoster.css"

const EditPoster = ()=> {
    return (
       <div className="put-container">
           <h3>Edit Poster</h3>
           <form>
            <input type="text" placeholder="Title" name="title"/>
            <input type="file" text="Image" name="file"/>
            <input type="url" placeholder="URL" name="title"/>
            <button type="submit" className="submit-button">Edit Poster</button>
           </form>
        </div>
    );
}

export default EditPoster;