  import { Link } from 'react-router-dom';
  import "./ColorFilter.css"
  import { useState } from 'react';
import FilterCheckbox from './FilterCheckbox';
import Color from './Color';
  
  
  function ColorFilter(){
      const [height, setHeight] = useState("50px");
             const handleClick = () => {
                  height=== `50px` ? setHeight("auto"): setHeight(`50px`);
            };
      return(
  <div className='color-filter-container' style={{height:height}}>
     <div className='color-filter-button' onClick={handleClick}>
                        <button onClick={handleClick}>Color</button>
                        <button onClick={handleClick}>➡️</button>
                    </div>
                    <div className='color-filter'>
                    <Color title="Black" color="black"/>
                    <Color title="Gray" color="gray"/>
                    <Color title="Red" color="red"/>
                    <Color title="Blue" color="blue"/>
                    <Color title="Yellow" color="yellow"/>
                    <Color title="Green" color="green"/>
                    </div>
                   
                </div>
              );
              }
  
  export default ColorFilter;