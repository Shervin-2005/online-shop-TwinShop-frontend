import React, { useState } from 'react'
import "./ProductOrderCard.css"
import { Link } from 'react-router-dom';

function ProductOrderCard() {

      const [inCardCount, setInCardCount] = useState(0);
      const handleAddClick = () =>{
        setInCardCount(1);
      }
        const handleDeleteClick = () =>{
        setInCardCount(0);
      }
       const ProductCountInc = () =>{
        setInCardCount(inCardCount+1);
      }
       const ProductCountDec = () =>{
        setInCardCount(inCardCount-1);
      }

      const productMaxNumber=5;

  return (
    <div className='product-order-card-container'>
        <button className='product-oc-price-aware'>!</button>
        <div className='product-oc-price-container'>
            <div className='product-oc-offer'>
                <p className='product-oc-offer-percent'>8%</p>
                <p className='product-oc-preprice'>540 $</p>
            </div>
            <p className='product-oc-price'>499 $</p>
        </div>
        <div className='product-oc--count'>There is only 2 more🔥</div>
        {inCardCount==0 && <button onClick={handleAddClick} className='product-oc-add-btn'>Add to Card</button>}
        {inCardCount>0 && <div className='product-oc-in-card-div'>
            <p className='prdouct-oc-in-card-message'>in your cart view <Link to="/Cart">Cart</Link></p>
            <div className='product-oc-in-card-button-div'>
                {inCardCount<2 && <button onClick={handleDeleteClick} className='product-oc-in-card-delete'>🗑️</button>}
                {inCardCount>1 && <button onClick={ProductCountDec} className='product-oc-in-card-minus'>➖</button>}
                <p>{inCardCount}</p>
                <button onClick={ProductCountInc} className='product-oc-in-card-inc'>➕</button>
            </div>
            </div>}
        <p className='product-oc-warranty'>✅18-month Company Warranty</p>
        <p className='product-oc-divider'></p>
        <div className='product-oc-shipping-container'>
            <div className='product-oc-shipping-top'>
                <p>📦Shipping Methods and cost</p>
                <button>➡️</button>
            </div>
            <p className='product-oc-shipping-by-us'>🚚 Delivery By Twin-Shop</p>
            <p className='product-oc-fast-delivery-by-us'>⏱️Fast Delivery By Twin-Shop</p>
        </div>
        <p className='product-oc-divider'></p>
        <p className='product-oc-user-score'>🪙 150 User Score</p>
    </div>
  )
}

export default ProductOrderCard;