  import { Link } from 'react-router-dom';
  import "./BrandChoose.css"
  import { useState } from 'react';
import FilterCheckbox from './FilterCheckbox';
  
  
  function BrandChoose(){
      const [height, setHeight] = useState("40px");
             const handleClick = () => {
                  height=== `40px` ? setHeight("450px"): setHeight(`40px`);
            };
      return(
  <div className='brand-choose-container' style={{height:height}}>
                    <div className='brand-choose-button' onClick={handleClick}>
                        <button onClick={handleClick}>Brand</button>
                        <button onClick={handleClick}>➡️</button>
                    </div>
                    <div className='brand-choose'>
                         <input type='search' placeholder='Search Brand...'/>
                    <FilterCheckbox title="Asus"/>
                    <FilterCheckbox title="Lenovo"/>
                    <FilterCheckbox title="HP"/>
                    <FilterCheckbox title="Acer"/>
                    <FilterCheckbox title="MSI"/>
                    <FilterCheckbox title="Apple"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    <FilterCheckbox title="Microsoft"/>
                    </div>
                   

                </div>
              );
              }
  
  export default BrandChoose;