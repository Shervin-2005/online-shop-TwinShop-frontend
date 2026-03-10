import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '.././App.css' 
//components
import GetAllProducts from "../components/Admin/Products/GetAllProducts.jsx";
import AddProduct from "../components/Admin/Products/AddProduct.jsx";
import PutProduct from "../components/Admin/Products/PutProduct.jsx";
import GetAllCategories from "../components/Admin/Categories/GetAllCategories.jsx";
import GetAllBrands from "../components/Admin/Brands/GetAllBrands.jsx";
import GetAllUsers from "../components/Admin/Users/GetAllUsers.jsx"
import Posters from "../components/Admin/Posters/Posters.jsx";

function Admin() {

  const [showComponent, setShowComponent] = useState({
    getProducts: false,
    getCategories: false,
    getBrands: false,
    getUsers: false,
    getPosters:false,
  });

  const btnHandler = (event) => {
    setShowComponent({ ...showComponent, [event.target.name]: !showComponent[event.target.name] });
  };

  return (
           <div className="main-container">
              <div className="component-controller">
                <button name="getProducts" onClick={btnHandler}>Products</button>
                <button name="getCategories" onClick={btnHandler}>Categories</button>
                <button name="getBrands" onClick={btnHandler}>Brands</button>
                <button name="getUsers" onClick={btnHandler}>Users</button>
                <button name="getPosters" onClick={btnHandler}>Posters</button>
                <button name="getMessages" onClick={btnHandler}>Messages</button>
                <button name="getAdvertisements">Advertisements</button> 
                <button name="other" onClick={btnHandler}>other</button>
              </div>
              {showComponent.getProducts && <GetAllProducts key="get-products" />}
              {showComponent.getCategories && <GetAllCategories key="get-categories" />}
              {showComponent.getBrands && <GetAllBrands key="get-brands" />}
              {showComponent.getUsers && <GetAllUsers key="get-users" />}
              {showComponent.getPosters && <Posters key="get-posters" />}
            </div>
  );
}

export default Admin;
