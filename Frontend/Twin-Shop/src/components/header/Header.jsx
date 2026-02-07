import React from 'react';
import Navbar from './Navbar.jsx';
import Adv1Img from "../../images/Adv1.png";
import BarIcon from   "../../images/Bar.svg";
import  './Header.css';
import AdvBar from './AdvBar.jsx';
import StickyNavbar from './StickyNavbar.jsx';
const Header = () => {
  return (
    <header className='header'>
    <AdvBar/>
     <Navbar/>
     <StickyNavbar/>
    </header>
 
  )
}

export default Header;
