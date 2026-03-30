import React from 'react'
import "./ProductOrderCard.css"

function ProductOrderCard() {
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
        <button className='product-oc-add-btn'>Add to Card</button>
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