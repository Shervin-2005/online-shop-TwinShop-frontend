import React, { useEffect } from "react";
import "./ItemProduct.css"
import { Link } from "react-router-dom";

const OptionsMenu = ()=> {
    return (
        <div className="options-menu">
            <Link to="/PutProduct">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button>Delete</button>
            </Link>
        </div>
    );
}

export default OptionsMenu;