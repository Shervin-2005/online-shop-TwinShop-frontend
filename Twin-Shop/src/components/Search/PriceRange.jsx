  import { Link } from 'react-router-dom';
  import "./PriceRange.css"
  import { useState } from 'react';
  
  
  function PriceRange(){
      const [height, setHeight] = useState("50px");
             const handleClick = () => {
                  height=== `50px` ? setHeight("auto"): setHeight(`50px`);
            };
      return(
  <div className='price-range-container' style={{height:height}}>
                    <div className='price-range-button' onClick={handleClick}>
                        <button onClick={handleClick}>Price Range</button>
                        <button onClick={handleClick}>➡️</button>
                    </div>
                    <div className='price-range'>
                        <p className='price-range-indicator'>From</p>
                        <input defaultValue={0} type='number'></input>
                        <p className='price-range-dollar-sign'>$</p>
                    </div>
                    <div className='price-range'> 
                        <p className='price-range-indicator'>to</p>
                        <input type='number' defaultValue={2599}></input>
                        <p className='price-range-dollar-sign'>$</p>
                    </div>
                </div>
              );
              }
  
  export default PriceRange;