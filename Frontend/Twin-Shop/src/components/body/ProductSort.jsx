import './body.css'

function ProductSort(props){
    return(
            <li className='product-sort-li'>
              <button className='sort-button'><img src={props.icon}></img></button> 
            <p className='sort-title'>{props.title}</p>
            </li>
    );
}

export default ProductSort;