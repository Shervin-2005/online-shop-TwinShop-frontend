import React from "react";

import { Routes, Route } from "react-router-dom";
import SigninLogin from "./Pages/SigninLogin.jsx";
import House from "./Pages/House.jsx";

import './App.css' 
import UserInfo from "./Pages/UserInfo.jsx";

function App() {
  
  return(
    <div>
    <Routes>
      <Route path="/" element={<House />} />
      <Route path="/SigninLogin" element={<SigninLogin />} />
      <Route path="/UserInfo" element={<UserInfo />} />
    </Routes>
    </div> 
  );
}

export default App
