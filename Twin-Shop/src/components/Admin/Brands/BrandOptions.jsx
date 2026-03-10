import React, { useEffect } from "react";
import "./ItemBrand.css"
import { Link } from "react-router-dom";

const BrandOptions = ()=> {
    return (
        <div className="brand-options">
            <Link to="/PutBrand">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button>Delete</button>
            </Link>
        </div>
    );
}

export default BrandOptions;