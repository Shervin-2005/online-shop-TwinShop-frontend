import React, { useEffect } from "react";
import ".././Admin.css"
import Loading from "../Loading";
import ItemCategory from "./ItemCategory";
import { Link } from "react-router-dom";


const GetAllCategories = ()=> {
    return (
        <div className="search-container">
            <div className="search-buttons-container">
            <div>
                 <button>SORT By...</button>
                 <Link  target="_blank" to="/AddCategory">
                    <button>+</button>
                 </Link>
            </div>
            </div>
        <div className="loading-container">
        <div className="get-container">
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        <ItemCategory/>
        </div>
        </div>
        </div>
    );
}

export default GetAllCategories;