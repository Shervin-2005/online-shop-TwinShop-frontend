import React, { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import ".././Admin.css"
import Loading from "../Loading";
import { Link } from "react-router-dom";

const GetAllProducts = ()=> {
    return (
        <div className="search-container">
            <div className="search-buttons-container">
                 <input placeholder="Type SomeThing in Here..." className="search-box"/>
                 <button>SORT By...</button>
                 <Link to="/AddProduct">
                 <button>+</button>
                 </Link>
            </div>
        <div className="loading-container">
        <div className="get-container">
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
         <ItemProduct/>
        </div>
        </div>
        </div>
    );
}

export default GetAllProducts;