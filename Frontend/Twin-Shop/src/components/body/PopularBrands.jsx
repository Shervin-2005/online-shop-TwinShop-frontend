import './body.css'

function PopularBrands(props){
    return(
         <li className='popular-brand-li'>
        <img src={props.image} className='brand-img'></img>
        </li>
    );
}

export default PopularBrands;
