import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import SigninLogin from "./Pages/SigninLogin.jsx";
import House from "./Pages/House.jsx";

import './App.css' 
//components
import UserInfo from "./Pages/UserInfo.jsx";
import GetAllProducts from "./components/Admin/GetAllProducts.jsx";
import AddProduct from "./components/Admin/AddProduct.jsx";
import PutProduct from "./components/Admin/PutProduct.jsx";
import DeleteProduct from "./components/Admin/DeleteProduct.jsx";
import GetAllCategories from "./components/Admin/GetAllCategories.jsx";
import GetAllBrands from "./components/Admin/GetAllBrands.jsx";
import GetAllUsers from "./components/Admin/GetAllUsers.jsx"

function App() {

  const[showComponent, setShowComponent] = useState({
    getProducts:false,
    getCategories:false,
    getBrands:false,
    getUsers:false,
  });

  const btnHandler = event =>{
    setShowComponent({...showComponent , [event.target.name] : !showComponent[event.target.name]});
  };

  const[data,setData]=useState([]);

  const BASE_URL = "https://localhost:7231/api";
  const HEADERS={"Content-Type" : "application/json"}

  return(
    <div className="main-container">
      <div className="component-controller">
        <button name="getProducts" onClick={btnHandler}>Get All Products</button>
        <button name="getCategories" onClick={btnHandler}>Get All Categories</button>
        <button name="getBrands" onClick={btnHandler}>Get All Brands</button>
        <button name="getUsers" onClick={btnHandler}>Get All Users</button>
      </div>
      {showComponent.getProducts && <GetAllProducts/>}
      {showComponent.getCategories && <GetAllCategories/>}
      {showComponent.getBrands && <GetAllBrands/>}
      {showComponent.getUsers && <GetAllUsers/>}

    </div> 
  );
}

export default App
