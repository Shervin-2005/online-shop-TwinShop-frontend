import './body.css'
import data from '../../data/PopularBrands'
import PopularBrands from './PopularBrands';
import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";

function PopularBrandsSection(){
     const [slide, setSlide] = useState(0);
      const nextSlide = () => {
        setSlide(prev => (prev === data.length-1 ? prev : prev + 1));
      };
    
      const prevSlide = () => {
        setSlide(prev => (prev === 0 ? prev : prev - 1));
      }; 

      const TransformValue = (idx) => {
        if(idx===data.length-19) return -115;
        else if(idx===data.length-10) return -110.5;
        else return -120;    
    };

    return(
         <div className='popular-brands-container'>
             <button className={slide===0 ? 'hidden':"brand-arrow brand-arrow-left"} onClick={prevSlide}>
                                          <img className='chevron' src={chevronLeft} alt="chevron-left" />
                                        </button>
        <ul  style={{transform: `translateX(${TransformValue(slide)*slide}px)`}}>
                    {data.map((item,idx)=> (
                        <PopularBrands key={idx} image={item.src} alt={item.alt}/>
                        ))}          
        </ul>
         <button className={slide===data.length-10? 'hidden': "brand-arrow brand-arrow-right"} onClick={nextSlide}>
                                <img className='chevron' src={chevronRight} alt="chevron-right" />
                            </button>
    </div>
    );
}

export default PopularBrandsSection;