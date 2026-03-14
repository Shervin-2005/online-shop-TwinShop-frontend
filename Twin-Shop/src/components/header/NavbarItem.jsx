import React from 'react'

import ShopIcon from "../../images/Shop.svg";
import UserIcon from "../../images/User.svg";
import BellIcon from "../../images/Bell.svg";
import LogoTxtIcon from "../../images/LogoTxt.png";
import LogoIcon from "../../images/Logo.png";
import SearchIcon from   "../../images/Search.svg";

import { Link } from "react-router-dom";

import  './Header.css';
function NavbarItems(){
  return (
    <div className='navbar-items-container'>

      <div className='navbar-items-left'>
        <img src={LogoIcon} id='logo' alt='Twin Shop'/>
        <img src={LogoTxtIcon} id='logotxt' alt='Twin Shop Logo'/> 
        <div className='home-search-box-container'>
            <input placeholder="Type SomeThing in Here..." className="home-search-box"/> 
        </div>
     </div>


     <div className='navbar-items-right'>
         <img src={BellIcon} alt='Bell'/>
        <Link target='_blank' to="/SigninLogin">
          <img src={UserIcon} alt="User" style={{ cursor: "pointer" }} />
       </Link>
         <span className="nav-divider"></span>
        <img src={ShopIcon} alt='Shop'/> 
    </div>
   
   </div>
  );
}

export default NavbarItems
