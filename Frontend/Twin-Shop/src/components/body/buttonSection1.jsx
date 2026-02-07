import './body.css'; 
import Button1 from './Button1';
import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";
import data from "../../data/contentCreatorsData.js"

function buttonsSection1(){
     const [slide, setSlide] = useState(0);
      const nextSlide = () => {
        setSlide(prev => (prev === data.length - 11 ? prev : prev + 1));
      };
    
      const prevSlide = () => {
        setSlide(prev => (prev === 0 ? prev : prev - 1));
      };
return(
    <div className='button-sec1-container'>
         <button className={slide===0 ? 'hidden':"content-arrow content-arrow-left"} onClick={prevSlide}>
                              <img className='chevron' src={chevronLeft} alt="chevron-left" />
                            </button>
        <ul className='button-sec1-ul' style={{ transform: `translateX(${-5 * slide}%)`}}>
                    {data.map((item,idx)=> (
                        <Button1 key={idx} icon={item.src} alt={item.alt} className="Content" title={item.title}/>
                        ))}          
        </ul>
                         <button className={slide===data.length-11? 'hidden': "content-arrow content-arrow-right"} onClick={nextSlide}>
                                <img className='chevron' src={chevronRight} alt="chevron-right" />
                            </button>
    </div>
);
}

export default buttonsSection1;