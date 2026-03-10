import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninLogin from "./Pages/SigninLogin.jsx";
import House from "./Pages/House.jsx";
import Admin from "./Pages/Admin.jsx";

import './App.css' 
//components
import UserInfo from "./Pages/UserInfo.jsx";
import GetAllProducts from "./components/Admin/Products/GetAllProducts.jsx";
import AddProduct from "./components/Admin/Products/AddProduct.jsx";
import PutProduct from "./components/Admin/Products/PutProduct.jsx";
import PutCategory from "./components/Admin/Categories/PutCategory.jsx"
import GetAllCategories from "./components/Admin/Categories/GetAllCategories.jsx";
import GetAllBrands from "./components/Admin/Brands/GetAllBrands.jsx";
import GetAllUsers from "./components/Admin/Users/GetAllUsers.jsx"
import AddCategory from "./components/Admin/Categories/AddCategory.jsx";
import AddBrand from "./components/Admin/Brands/AddBrand.jsx"
import PutBrand from "./components/Admin/Brands/PutBrand.jsx";

function App() {
    return (
    <div>
    <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/GetAllProducts" element={<GetAllProducts/>}/>
      <Route path="/PutProduct" element={<PutProduct/>} />
      <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/PutCategory" element={<PutCategory/>}/>
      <Route path="/AddCategory" element={<AddCategory/>}/>
      <Route path="/PutBrand" element={<PutBrand/>}/>
      <Route path="/AddBrand" element={<AddBrand/>}/>
    </Routes>
    </div> 
  );
}

export default App;
