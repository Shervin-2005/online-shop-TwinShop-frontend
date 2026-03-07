import React, { useEffect } from "react";
import "./Admin.css"
import Loading from "./Loading";
import ItemCategory from "./ItemCategory";
import Search from "./Search";


const GetAllCategories = ()=> {
    return (

        <div className="search-container">
            <div className="search-buttons-container">
            <Search/>
            <div>
                 <button>SORT By...</button>
                <button>+</button>
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