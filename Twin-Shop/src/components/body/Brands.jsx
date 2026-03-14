import './Brands.css'; 
import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";
import data from "../../data/BrandsData.js"
import Brand from './brand.jsx';

function Brands(){
     const [slide, setSlide] = useState(0);
      const nextSlide = () => {
        setSlide(prev => (prev === data.length - 11 ? prev : prev + 1));
      };
    
      const prevSlide = () => {
        setSlide(prev => (prev === 0 ? prev : prev - 1));
      };
return(
    <div className='brands-container'>
         <button className={slide===0 ? 'hidden':"content-arrow content-arrow-left"} onClick={prevSlide}>
                              <img className='chevron' src={chevronLeft} alt="chevron-left" />
                            </button>
        <ul className='brands-ul' style={{ transform: `translateX(${-5 * slide}%)`}}>
                    {data.map((item,idx)=> (
                        <Brand key={idx} icon={item.src} alt={item.alt} className="Content" title={item.title}/>
                        ))}          
        </ul>
                         <button className={slide===data.length-11? 'hidden': "content-arrow content-arrow-right"} onClick={nextSlide}>
                                <img className='chevron' src={chevronRight} alt="chevron-right" />
                            </button>
    </div>
);
}

export default Brands;