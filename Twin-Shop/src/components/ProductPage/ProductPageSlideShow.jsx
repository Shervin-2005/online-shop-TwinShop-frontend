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
import "./ProductPageSlideShow.css"
import { Link } from 'react-router-dom';

function ProductPageSlideShow(){
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(prev => (prev === 3 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setSlide(prev => (prev === 0 ? prev : prev - 1));
  };
    return(
      <div className='product-image-slideshow-container'>
        <div className="product-image-slideshow-div">
             <button className={slide<=0 ? 'hidden':"product-image-arrow product-image-arrow-left"} onClick={prevSlide}>
                      <img className='chevron' src={chevronLeft} alt="chevron-left" />
                    </button>
                  <div className="product-image-slideshow" style={{ transform: `translateX(${-slide/8 *100}%)`}}>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side1}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side2}></img>
                        </Link>                  
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side3}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side4}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side5}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side6}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side7}></img>
                        </Link>
                        <Link className='product-image-slideshow-link' to="/gallery">
                            <img src={side8}></img>
                        </Link>
                  </div>
                  <button className={slide>=3? 'hidden': "product-image-arrow product-image-arrow-right"} onClick={nextSlide}>
                      <img className='chevron' src={chevronRight} alt="chevron-right" />
                    </button>
        </div>
        </div>
    );
}

export default ProductPageSlideShow;