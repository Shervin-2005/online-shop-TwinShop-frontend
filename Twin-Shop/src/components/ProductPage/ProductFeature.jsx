import React from 'react'
import "./ProductPage.css"

function ProductFeature(props) {
  return (
    <div className='product-feature-container'>
        <p className='product-feature-title'>{props.title}</p>
        <p className='product-feature-value'>{props.value}</p>
    </div>
  )
}

export default ProductFeature;