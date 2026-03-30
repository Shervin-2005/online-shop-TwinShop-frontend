import './FavoriteProductsSection.css'

function MostSellingProduct(props){
    return(
        <div className='selling-product'>
             <h2 className='selling-number'>{props.number}</h2>
                <button className='selling-product-button'> <img src={props.icon}></img></button> 
          <h2 className='selling-title'>asus tuf a15 rtx 4050 core i5 12450hx windows 10</h2>
        </div>
    );
}

export default MostSellingProduct;