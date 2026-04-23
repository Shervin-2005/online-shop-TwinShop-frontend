import React, { useEffect } from "react";
import "./Advertisement.css"
import { Link } from "react-router-dom";

const PosterOptions = ()=> {
    return (
        <div className="adv-options-menu">
            <Link  target="_blank" to="/EditAdv">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button>Delete</button>
            </Link>
        </div>
    );
}

export default PosterOptions;