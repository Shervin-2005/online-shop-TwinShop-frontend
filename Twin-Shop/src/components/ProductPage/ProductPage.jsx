import React from 'react'
import "./ProductPage.css"

import ProductImagesContainer from './ProductImagesContainer';
import ProductDetails from './ProductDetails';
import ProductOrderCard from './ProductOrderCard';
import ProductPageButtonSection from './ProductPageButtonSection';
import SimilarProducts from './SimilarProducts';
import ProductSpecs from './ProductSpecs';
import Header from "../header/Header.jsx"
import Footer from "../footer/Footer.jsx"
import ProductComments from './ProductComments.jsx';

function ProductPage() {
  return (
    <div className='product-page-container'>
      <Header/>
      <div className='product-page-main-container'>  
            <ProductImagesContainer/>
            <ProductDetails/>
            <ProductOrderCard/>
      </div>
          <p className='product-page-divider'></p>
          <ProductPageButtonSection/>
          <SimilarProducts/>
          <ProductSpecs/>
          <ProductComments/>
          <Footer/>
    </div>
  )
}

export default ProductPage;