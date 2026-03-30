import { Link } from 'react-router-dom';
import "./ProductCard.css"

function LimitedTitle(text){
    return text.length>40? text.substring(0,41)+ "...":text;
}

function ProductCard(props){
    return(
            <div className='product-card-container'>
                <Link className='product-card-link' to="/Product" target='_blank'>
                <div>
                     <img src={props.img} className='product-card-image-container'/>
                </div>
                <div className='product-card-text-container'>
                    <p className='product-card-title'>{LimitedTitle(props.title)}</p>
                    <p className='product-card-count'>there is only 2 more🔥</p>
                    <div className='product-card-price-container'>
                        <div>
                          <p className='product-card-price'>{props.price}</p>
                          <p className='product-card-off-percent'>{100-Math.floor(parseInt(props.price)/parseInt(props.prePrice)*100)}%</p>
                        </div>
                       <div className='product-card-preprice-container'>
                            <p className='product-card-preprice'>{props.prePrice}</p>
                       </div>
                </div>
                    </div>
                </Link>
            </div>
            );
            }

export default ProductCard;