import React, { useState } from "react";
import "./Poster.css"
import imageTest from ".././1.jpg";
import PosterOptions from "./PosterOptions";

const Poster = () =>{
          const [openOptions, OptionsOpenState] = useState(false);
    return(
        <div className="poster-container">
             <button className="options" onClick={() => OptionsOpenState(!openOptions)} >:   
                    </button>
                      {openOptions && (
                       <div>
               <PosterOptions/> 
                      </div> )}
              <img src={imageTest}></img>
        </div>
    );
}

export default Poster;