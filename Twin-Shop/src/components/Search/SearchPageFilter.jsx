import { Link } from 'react-router-dom';
import "./SearchPageFilter.css"
import { useState } from 'react';


function SearchPageFilter(){
    const [height, setHeight] = useState("50px");
           const handleClick = () => {
                height=== `50px` ? setHeight("auto"): setHeight(`50px`);
          };

    const [maxText, setMaxText] = useState(2599);
           const handleChange = () => {
            if(maxText>2599) setMaxText(2599)
        };
    return(
            <div className='search-page-filter-container'>
                <h2 className='search-page-filter-title'>Filter By...</h2>
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
                        <input onChange={handleChange} type='number' defaultValue={maxText}></input>
                        <p className='price-range-dollar-sign'>$</p>
                    </div>
                </div>
            </div>
            );
            }

export default SearchPageFilter;