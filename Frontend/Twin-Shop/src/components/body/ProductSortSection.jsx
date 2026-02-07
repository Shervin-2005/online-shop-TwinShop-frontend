import './body.css'
import ProductSort from './ProductSort';
import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/ProductSortData'
import data2 from '../../data/ProductData2'
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";

function ProductSortSection(){
     const [slide, setSlide] = useState(0);
      const nextSlide = () => {
        setSlide(prev => (prev === data.length-1 ? prev : prev + 1));
      };
    
      const prevSlide = () => {
        setSlide(prev => (prev === 0 ? prev : prev - 1));
      }; 

    return(
        <div className='product-sort-container'>
                <button className={slide===0 ? 'hidden':"sort-arrow sort-arrow-left"} onClick={prevSlide}>
                              <img className='chevron' src={chevronLeft} alt="chevron-left" />
                            </button>
                            <div>
        <ul className='product-sort-ul' style={slide==data.length-7? { transform: `translateX(${-140*slide}px)`} :{ transform: `translateX(${-160*slide}px)`}}>
                    {data.map((item,idx)=> (
                        <ProductSort key={idx} icon={item.src} alt={item.alt} title={item.title}/>
                        ))}          
        </ul>
         <ul className='product-sort-ul2' style={slide==data.length-7? { transform: `translateX(${-140*slide}px)`} :{ transform: `translateX(${-160*slide}px)`}}>
                    {data2.map((item,idx)=> (
                        <ProductSort key={idx} icon={item.src} alt={item.alt} title={item.title}/>
                        ))}          
        </ul>
        </div>
                         <button className={slide===data.length-7? 'hidden': "sort-arrow sort-arrow-right"} onClick={nextSlide}>
                                <img className='chevron' src={chevronRight} alt="chevron-right" />
                            </button>
            </div>
    );
}

export default ProductSortSection;