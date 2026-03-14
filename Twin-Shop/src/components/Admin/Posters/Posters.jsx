import React from "react";
import "./Posters.css"
import ".././Admin.css"
import Poster from "./Poster";
import { Link } from "react-router-dom";

const Posters = () =>{
    return(
        <div className="loading-container">
        <div className="slide-show-container">
            <div className="slide-show-top">
                <h2 className="title">Slide Show</h2>
                <Link  target="_blank" to="/AddPoster">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="slides">
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
        </div>
        </div>
        <div className="posters-1-container">
             <div className="posters-1-top">
                <h2 className="title">Poster Section 1</h2>
            <Link  target="_blank" to="/AddPoster">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="posters-1">
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
             
            </div>
        </div>

         <div className="posters-1-container">
             <div className="posters-1-top">
                <h2 className="title">Poster Section 2</h2>
            <Link  target="_blank" to="/AddPoster">
                    <button className="add-button">➕</button>
                </Link>
            </div>
            <div className="posters-1">
                    <Poster/>
                    <Poster/>
                    <Poster/>
                    <Poster/>
             
            </div>
        </div>
        
        </div>
    );
}

export default Posters;