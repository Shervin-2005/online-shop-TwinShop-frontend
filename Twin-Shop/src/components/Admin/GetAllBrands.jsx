import React, { useEffect } from "react";
import "./Admin.css"
import Loading from "./Loading";
import ItemBrand from "./ItemBrand";
import Search from "./Search";

const GetAllBrands = ()=> {
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
        <ItemBrand/>
        <ItemBrand/>
        <ItemBrand/>
        <ItemBrand/>
        <ItemBrand/>
        </div>
        </div>
        </div>
    );
}

export default GetAllBrands;