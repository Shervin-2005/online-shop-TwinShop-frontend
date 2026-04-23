import React from 'react'
import Header from "../components/header/Header.jsx";
import Body from "../components/body/body.jsx";
import Footer from '../components/footer/Footer.jsx';
import Admin from './Admin.jsx';
import "../components/Home.css";
import AdvBar from '../components/header/AdvBar.jsx';

function House() {
  return (
    <div className='home'>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default House