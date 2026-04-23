import './FavoriteProductsSection.css'

function FavoriteProduct(props){
    return(
              <button className='favorite-product-button'> <img src={props.icon}></img></button> 
    );
}

export default FavoriteProduct;