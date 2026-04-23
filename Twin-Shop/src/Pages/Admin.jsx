import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '.././App.css' 
import "../components/Admin/Admin.css"
//components
import GetAllProducts from "../components/Admin/Products/GetAllProducts.jsx";
import AddProduct from "../components/Admin/Products/AddProduct.jsx";
import PutProduct from "../components/Admin/Products/PutProduct.jsx";
import GetAllCategories from "../components/Admin/Categories/GetAllCategories.jsx";
import GetAllBrands from "../components/Admin/Brands/GetAllBrands.jsx";
import GetAllUsers from "../components/Admin/Users/GetAllUsers.jsx"
import Posters from "../components/Admin/Posters/Posters.jsx";
import Advertisements from "../components/Admin/Advertisement/Advertisements.jsx";
import axios from "axios";

//Axios Config
axios.defaults.baseURL="https://dkstatics-public.digikala.com";
axios.interceptors.request.use((request)=>{
  console.log(request);
  return request;
});
axios.interceptors.response.use((response)=>{
  console.log(response);
  return response.data;
});

function Admin() {

  const [activeComponent, setActiveComponent] = useState('');
  

  const btnHandler = (event) => {
    const componentName = event.target.name;
    
    // If the clicked component is already active, do nothing
    if (componentName === activeComponent) {
      return;
    }

    // Set the clicked component as active and others as inactive
    setActiveComponent(componentName);
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
                <button name="getAdvs" onClick={btnHandler}>Advertisements</button> 
                <button name="other" onClick={btnHandler}>other</button>
              </div>
             {activeComponent === 'getProducts' && <GetAllProducts key="get-products" />}
              {activeComponent === 'getCategories' && <GetAllCategories key="get-categories" />}
              {activeComponent === 'getBrands' && <GetAllBrands key="get-brands" />}
              {activeComponent === 'getUsers' && <GetAllUsers key="get-users" />}
              {activeComponent === 'getPosters' && <Posters key="get-posters" />}
              {activeComponent === 'getAdvs' && <Advertisements key="get-advs"/>}
            </div>
  );
}

export default Admin;
