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
import AddCategory from "./components/Admin/Categories/AddCategory.jsx";
import AddBrand from "./components/Admin/Brands/AddBrand.jsx"
import AddPoster from "./components/Admin/Posters/AddPoster.jsx"
import PutBrand from "./components/Admin/Brands/PutBrand.jsx";
import EditPoster from "./components/Admin/Posters/EditPoster.jsx"
import AddAdv from "./components/Admin/Advertisement/AddAdv.jsx";
import EditAdv from "./components/Admin/Advertisement/EditAdv.jsx";

function App() {
    return (
    <div>
    <Routes>
      <Route path="/" element={<House/>}/>
      <Route path="/GetAllProducts" element={<GetAllProducts/>}/>
      <Route path="/PutProduct" element={<PutProduct/>} />
      <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/PutCategory" element={<PutCategory/>}/>
      <Route path="/AddCategory" element={<AddCategory/>}/>
      <Route path="/PutBrand" element={<PutBrand/>}/>
      <Route path="/AddBrand" element={<AddBrand/>}/>
       <Route path="/AddPoster" element={<AddPoster/>}/>
       <Route path="/EditPoster" element={<EditPoster/>}/>
       <Route path="/AddAdv" element={<AddAdv/>}/>
       <Route path="/EditAdv" element={<EditAdv/>}/>
    </Routes>
    </div> 
  );
}

export default App;
