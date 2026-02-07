import React, { useState, useEffect, useRef } from 'react';
import './body.css';
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";


export const SlideShow = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const intervalRef = useRef(null); 

  const nextSlide = () => {
    setSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const prevSlide = () => {
    setSlide(prev => (prev === 0 ? data.length - 1 : prev - 1));
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlide(prev => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    resetInterval(); // ساخت اولین تایمر
    return () => clearInterval(intervalRef.current); // cleanup
  }, [data.length]);

  return (
    <div className="slide-show">
      <button className="arrow arrow-left" onClick={prevSlide}>
          <img className='chevron' src={chevronLeft} alt="chevron-left" />
        </button>
      <div className="slideshow-div" style={{ transform: `translateX(${-100 * slide}%)`}}>
        {data.map((item, idx) => (
          <img key={idx} src={item.src} alt={item.alt} className="slide"/>
        ))}
      </div>
      <button className="arrow arrow-right" onClick={nextSlide}>
          <img className='chevron' src={chevronRight} alt="chevron-right" />
        </button>
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setSlide(idx); resetInterval(); }}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
          />
        ))}
      </span>
    </div>
  );
}; 