import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";
import "./SimilarProdutcts.css";
import ProductCard from './ProductCard';
import productImage from './main.webp';

function SimilarProducts({data}){
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(prev => (prev === 10 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setSlide(prev => (prev === 0 ? prev : prev - 1));
  };
    return(
      <div className='similar-products-container'>
        <h2>Similar Products</h2>
        <div className="similar-products-div">
             <button className={slide===0 ? 'hidden':"similar-products-arrow similar-products-arrow-left"} onClick={prevSlide}>
                      <img className='chevron' src={chevronLeft} alt="chevron-left" />
                    </button>
                  <div className="similar-products" style={{ transform: `translateX(${-6.25 * slide}%)`}}>
                      <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                         <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <ProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                  </div>
                  <button className={slide===9? 'hidden': "similar-products-arrow similar-products-arrow-right"} onClick={nextSlide}>
                      <img className='chevron' src={chevronRight} alt="chevron-right" />
                    </button>
        </div>
        </div>
    );
}

export default SimilarProducts;