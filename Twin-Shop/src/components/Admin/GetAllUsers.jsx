import React, { useEffect } from "react";
import "./Admin.css"
import Loading from "./Loading";
import User from "./User";
import Search from "./Search";

const GetAllBrands = ()=> {
    return (

         <div className="search-container">
            <div className="search-buttons-container">
            <Search/>
            <div>
                 <button>SORT By...</button>
            </div>
            </div>
        <div className="loading-container">
        <div className="get-container">
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        </div>
        </div>
        </div>
    );
}

export default GetAllBrands;