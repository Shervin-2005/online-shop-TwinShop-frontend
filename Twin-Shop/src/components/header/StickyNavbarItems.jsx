import React, { useState , useEffect} from 'react';
import StickyNavdata from "../../data/StickyNavbarItems";
import MobileProducts from './MobileProducts';
import MobileProductsdata from '../../data/MobileProductsdata';
import "./Header.css"
const StickyNavbarItems = (props) => {
  const [openStickyNav, StickyNavOpenState] = useState(false);
  const [openSubItems, SubItemsOpenState] = useState(false);
  const [choosenProduct, currentChoose] = useState(null);

  const chooseProduct = (item) => {
    SubItemsOpenState(!openSubItems);
    currentChoose(item);
  };

  useEffect(() =>{
    if(!openStickyNav){
      SubItemsOpenState(false);
    }
  },[openStickyNav]);

  return (
    <div className='sticky-nav-item-container'>
      <a className='sticky-nav-item'  onClick={() => StickyNavOpenState(!openStickyNav)} href='#'>{props.content}</a>
      {openStickyNav && (
        <div className="sticky-nav-sub-items">
          {props.items.map((item, idx) => (
            <a onClick={() => chooseProduct(item)} key={idx} href='#'>{item}</a>
          ))}
        </div>
      )}
      {choosenProduct === "Mobile" && openSubItems && (
             <div>
           <MobileProducts/> 
        </div>
      )}
    </div>
  );
};

export default StickyNavbarItems;
