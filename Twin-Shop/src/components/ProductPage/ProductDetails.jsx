import React from 'react'
import "./ProductPage.css"

import ProductImagesContainer from './ProductImagesContainer';
import ProductFeature from './ProductFeature';
import ReturningProductWarning from './ReturningProductWarning';

function ProductDetails() {
  return (
    <div className='product-details-container'>
        <h2 className='product-title'>HP Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W 15.6 inch Laptop</h2>
        <p className='product-divider'></p>
        <div className='product-page-comments-score'>
             <h4 className='product-page-score'>5⭐<span>(74 Buyers)</span></h4>
             <button className='product-product-comments-count'>84 Comments➡️</button>
        </div>
        <div className='product-page-color-container'>
          <div>
                  <h2>Color:</h2>
                      <input type='checkbox' className='product-color-checkbox'></input>
                      <h2>Silver</h2>
                      <button className='product-page-color-button'></button>
          </div>
        </div>

          <div className='product-page-specs-container'>
                  <h2>Features</h2>
                  <div className='product-features'>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                    <ProductFeature title="RAM" value="16GB"/>
                  </div>
                  <div className='product-features-bottom'>
                    <p></p>
                  <button>View All Features ➡️</button>
                  <p></p>
                  </div>
          </div>

          <ReturningProductWarning warning="The possibility of returning the goods in the group of laptops and ultrabooks due to cancellation of the purchase is acceptable only if the goods are in the original condition (if it is sealed, the goods should not be opened). The changes made in custom laptops (for example, upgrading the hard drive, RAM, etc.) have been made by the warranty company and are officially included in the warranty. Custom laptop means technical upgrade of some parts of the new laptop (Akband) and according to the manufacturer's standard"/>
    </div>
  )
}

export default ProductDetails;