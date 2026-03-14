import React from "react";
import "./Advertisements.css"
import { Link } from "react-router-dom";
import Advertisement from "./Advertisement"

const Advertisements = () =>{
    return(
        <div className="loading-container">

        <div className="top-adv-container">
            <div className="adv-top">
                <h2 className="title">Top Adv.</h2>
                <Link  target="_blank" to="/AddAdv">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="top-adv">
                    <Advertisement/>
            </div>
        </div>

        
        <div className="body-adv-container">
             <div className="adv-top">
                <h2 className="title">Body Adv. 1</h2>
            <Link  target="_blank" to="/AddAdv">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="body-adv">
                    <Advertisement/>
                    <Advertisement/>
                    <Advertisement/>
                    <Advertisement/>
            </div>
        </div>        

        <div className="body-adv-container">
             <div className="adv-top">
                <h2 className="title">Body Adv. 2</h2>
            <Link  target="_blank" to="/AddAdv">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="body-adv">
                    <Advertisement/>
                    <Advertisement/>
            </div>
        </div>        
        </div>
    );
}

export default Advertisements;