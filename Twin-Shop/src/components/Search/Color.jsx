  import { Link } from 'react-router-dom';
  import "./Color.css"
  
  
  function Color(props){
      return(
  <div className='color-container'>
                    <button style={{backgroundColor:props.color}}></button>
                    <h3>{props.title}</h3>
                </div>
              );
              }
  
  export default Color;