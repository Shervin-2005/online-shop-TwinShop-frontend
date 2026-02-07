import React,{useState,useEffect} from 'react';
import  './Header.css';
import data from "../../data/AdvBarImages.js";
import AdvItems from './AdvItems';
function AdvBar(){
  const [AdImage,setSlide]=useState(0);

  const nextSlide = () =>{
   setSlide(AdImage === data.length-1 ? 0 : AdImage + 1);
  };

  useEffect(() => {
  const interval =setInterval(nextSlide,3000);
   return () => clearInterval(interval);
  },[AdImage]);


  return(
   <nav className='adv-bar'>
     {data.map((item,idx)=>(
       <AdvItems key={idx} image={item.src} alt={item.alt}  className={AdImage === idx ? 'adv-image' : 'adv-image-hidden'}/>     
        ))}
   </nav>
  );
}

export default AdvBar;
