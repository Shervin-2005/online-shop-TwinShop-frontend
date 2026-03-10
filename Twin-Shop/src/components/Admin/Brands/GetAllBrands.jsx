import React, { useEffect } from "react";
import ".././Admin.css"
import Loading from "../Loading";
import ItemBrand from "./ItemBrand";
import { Link } from "react-router-dom";

const GetAllBrands = ()=> {
    return (

        <div className="search-container">
            <div className="search-buttons-container">
            <div>
                 <button>SORT By...</button>
                 <Link to="/AddBrand">
                <button>+</button>
                </Link>
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