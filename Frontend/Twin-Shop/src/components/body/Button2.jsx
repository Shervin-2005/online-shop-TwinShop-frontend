import './body.css'

function button2(props){
return(
    <li>
    <div className='button-sec2'>
            <button className='button2'>{props.icon}</button> 
            <p className='button2-title'>{props.title}</p>
    </div>
    </li>
 
)
;}

export default button2;