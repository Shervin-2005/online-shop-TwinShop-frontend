  import { Link } from 'react-router-dom';
  import "./Cart.css"
  
  function ProductCart(){

      return(
            <div className='product-cart-container'>
                 <div className='product-cart-image-container'>
                        <img src=''/>
                        <h2 className='product-cart-amazing-offer-title'>Amazing Offer</h2>
                    </div>
                    <div className='product-cart-details'>
                        <h2 className='product-cart-title'>HP Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W 15.6 inch Laptop</h2>
                        <h3>Gray Color</h3>
                        <h3>18 Months Gaurante</h3>
                        <h3>Sending in Only 1 Day</h3>
                    </div>
                    
                          
            </div>
              );
              }
  
  export default ProductCart;