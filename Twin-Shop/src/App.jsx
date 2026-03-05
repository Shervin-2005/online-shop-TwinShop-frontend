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


function App() {

  const[showComponent, setShowComponent] = useState({
    get:false,
    add:false,
    put:false,
    delete:false,
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
        <button name="get" onClick={btnHandler}>Get All Products</button>
        <button name="add" onClick={btnHandler}>Add Product</button>
        <button name="put" onClick={btnHandler}>Edit Product</button>
        <button name="delete" onClick={btnHandler}>Delete Product</button>
      </div>
      {showComponent.get && <GetAllProducts/>}
      {showComponent.add && <AddProduct/>}
      {showComponent.put && <PutProduct/>}
      {showComponent.delete && <DeleteProduct/>}

    </div> 
  );
}

export default App
