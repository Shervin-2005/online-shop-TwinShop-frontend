import { Link } from 'react-router-dom';
import "./SearchProductCard.css"

function LimitedTitle(text){
    return text.length>40? text.substring(0,41)+ "...":text;
}

function SearchProductCard(props){
    return(
            <div className='search-product-card-container'>
                <Link className='search-product-card-link' to="/Product" target='_blank'>
                <div>
                     <img src={props.img} className='search-product-card-image-container'/>
                </div>
                <div className='search-product-card-text-container'>
                    <p className='search-product-card-title'>{LimitedTitle(props.title)}</p>
                    <p className='search-product-card-count'>there is only 2 more🔥</p>
                    <div className='search-product-card-price-container'>
                        <div>
                          <p className='search-product-card-price'>{props.price}</p>
                          <p className='search-product-card-off-percent'>{100-Math.floor(parseInt(props.price)/parseInt(props.prePrice)*100)}%</p>
                        </div>
                       <div className='search-product-card-preprice-container'>
                            <p className='search-product-card-preprice'>{props.prePrice}</p>
                       </div>
                </div>
                    </div>
                </Link>
            </div>
            );
            }

export default SearchProductCard;