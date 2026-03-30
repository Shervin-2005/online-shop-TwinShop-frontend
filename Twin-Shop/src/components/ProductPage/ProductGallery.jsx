import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";
import side1 from "./side1.webp"
import side2 from "./side2.webp"
import side3 from "./side3.webp"
import side4 from "./side4.webp"
import side5 from "./side5.webp"
import side6 from "./side6.webp"
import side7 from "./side7.webp"
import side8 from "./side8.webp"
import "./ProductGallery.css"
import data from "../../data/ProductGalleryData.js"

function ProductGallery(){
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(prev => (prev === 7 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setSlide(prev => (prev === 0 ? prev : prev - 1));
  };

   const handleBackClick = () => {
    window.history.back();
  };

    return(
      <div className='product-gallery-container'>
        <button className='product-gallery-close-button' onClick={handleBackClick}>❌</button>
        <div className="product-gallery-div">
             <button className={slide<=0 ? 'hidden':"product-gallery-arrow product-gallery-arrow-left"} onClick={prevSlide}>
                      <img className='chevron' src={chevronLeft} alt="chevron-left" />
                    </button>
                  <div className="product-gallery" style={{ transform: `translateX(${-700*slide}px)`}}>
                            <img src={side1}></img>
                            <img src={side2}></img>
                            <img src={side3}></img>
                            <img src={side4}></img>
                            <img src={side5}></img>
                            <img src={side6}></img>
                            <img src={side7}></img>
                            <img src={side8}></img>
                  </div>
                  <button className={slide>=7? 'hidden': "product-gallery-arrow product-gallery-arrow-right"} onClick={nextSlide}>
                      <img className='chevron' src={chevronRight} alt="chevron-right" />
                    </button>
        </div>
            <span className="product-gallery-slide-indicator">
        {data.map((_, idx) => (
          <img
            key={idx}
            src={_.src}
            onClick={() => { setSlide(idx); }}
            className={slide === idx ? "slide-indicator" : "slide-indicator slide-indicator-inactive"}
           />
        ))}
      </span>

        </div>
    );
}

export default ProductGallery;