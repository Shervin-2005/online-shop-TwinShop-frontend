import React from 'react';
import './Header.css';
import StickyNavdata from "../../data/StickyNavbarItems";
import StickyNavbarItems from './StickyNavbarItems';

function StickyNavbar() {
  return (
    <nav className='sticky-navbar'>
      {StickyNavdata.map((item, idx) => (
        <StickyNavbarItems 
          key={idx} 
          content={item.Category} 
          items={item.Items} 
        />     
      ))}
    </nav>
  );
}

export default StickyNavbar;
