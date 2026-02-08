import './body.css';
import React, { useState, useEffect, useRef } from 'react';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";
import LogoTxtImg from "../../images/LogoTxt.png";
import OfferTimer from './OfferTimer';
import OfferedProduct from './OfferedProduct';;

function OfferSlideShow({data}){
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(prev => (prev === data.length - 6 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setSlide(prev => (prev === 0 ? prev : prev - 1));
  };
    return(
        <div className="offer-slide-show">
          <div className='offers-slide-poster'>
            <p className='offers-text'>Amazing Offers</p>
            <OfferTimer duration={24 * 60 * 60 * 1000}/>
            <img src={LogoTxtImg} alt="LogoTxt" className="Logo"/>
          </div>
             <button className={slide===0 ? 'hidden':"product-arrow product-arrow-left"} onClick={prevSlide}>
                      <img className='chevron' src={chevronLeft} alt="chevron-left" />
                    </button>
                  <div className="offer-slide-div" style={{ transform: `translateX(${-12.1 * slide}%)`}}>
                   {data.map((item,idx)=> (
                      <OfferedProduct data={data} key={idx} idx={idx} img={item.src} alt={item.alt} className="offered-product" title={item.title} price={item.price} prePrice={item.prePrice}/>
                    ))}
                    
                  </div>
                  <div className='view-all'>
                  <button className='btn-view-all'>➡️</button>
                  <p className='view-all-text'>View All</p>
                  </div>
                  <button className={slide===data.length-6? 'hidden': "product-arrow product-arrow-right"} onClick={nextSlide}>
                      <img className='chevron' src={chevronRight} alt="chevron-right" />
                    </button>
        </div>
    );
}

export default OfferSlideShow