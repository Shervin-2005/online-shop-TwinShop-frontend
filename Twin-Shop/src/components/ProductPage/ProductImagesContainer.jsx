import React from 'react'
import "./ProductPage.css"
import mainImage from "./main.webp"
import ProductPageSlideShow from './ProductPageSlideShow';
import { Link } from 'react-router-dom';


function ProductImagesContainer() {
  return (
    <div className='product-images-container'>
      <div className='product-images-container-top'>
        <Link to='/'>
         <button>Twin-Shop / </button>
        </Link>
         <button>Laptop / </button>
         <button>Hp</button>
      </div>
        <div className='product-images-offer-container'>Amazing Offer</div>
        <div className='product-images'>
           <div className='product-images-buttons'> 
              <button>❤️</button>
              <button>📩</button>
              <button>📃</button>
          </div>
          <div className='product-images-div'>
               <div className='main-image-container'>
                <img src={mainImage}></img>
            </div>
         <ProductPageSlideShow/>
          </div>
           
        </div>
    </div>
  )
}

export default ProductImagesContainer;