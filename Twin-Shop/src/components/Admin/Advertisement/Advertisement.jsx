import React, { useState } from "react";
import "./Advertisement.css"
import imageTest from ".././TestAdv.png";
import AdvOptions from "./AdvOptions.jsx";

const Advertisement = () =>{
          const [openOptions, OptionsOpenState] = useState(false);
    return(
        <div className="adv-container">
             <button  className="adv-options" id="btnOptions" onClick={() => OptionsOpenState(!openOptions)} >:   
                    </button>
                      {openOptions && (
                       <div>
               <AdvOptions/> 
                      </div> )}
              <img src={imageTest}></img>
        </div>
    );
}

export default Advertisement;