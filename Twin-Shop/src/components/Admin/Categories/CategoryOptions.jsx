import React, { useEffect } from "react";
import "./ItemCategory.css"
import { Link } from "react-router-dom";

const CategoryOptions = ()=> {
    return (
        <div className="category-options">
            <Link to="/PutCategory">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button>Delete</button>
            </Link>
        </div>
    );
}

export default CategoryOptions;