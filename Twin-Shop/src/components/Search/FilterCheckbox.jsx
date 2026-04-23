  import { Link } from 'react-router-dom';
  import "./FilterCheckbox.css"
  
  
  function FilterCheckbox(props){
      return(
  <div className='filter-checkbox-container'>
                   <input type='checkbox'/>
                    <h2>{props.title}</h2>
                </div>
              );
              }
  
  export default FilterCheckbox;