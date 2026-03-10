import React, { useEffect } from "react";
import "./Poster.css"
import { Link } from "react-router-dom";

const PosterOptions = ()=> {
    return (
        <div className="poster-options">
            <Link to="/PutPoster">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button>Delete</button>
            </Link>
        </div>
    );
}

export default PosterOptions;