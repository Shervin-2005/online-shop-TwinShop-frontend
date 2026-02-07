import './body.css'

function LimitedTitle(text){

}

function button1(props){
return(
    <li className='button-sec1-li'>
            <button className='button1'><img src={props.icon}></img></button> 
            <p className='button1-title'>{props.title}</p>
    </li>
 
)
;}

export default button1;