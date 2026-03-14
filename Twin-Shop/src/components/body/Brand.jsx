import './Brands.css'

function LimitedTitle(text){

}

function Brand(props){
return(
    <li className='brand-container'>
            <button className='brand-button'><img src={props.icon}></img></button> 
            <p className='brand-title'>{props.title}</p>
    </li>
 
)
;}

export default Brand;