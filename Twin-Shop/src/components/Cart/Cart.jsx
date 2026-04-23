  import { Link } from 'react-router-dom';
  import "./Cart.css"
  
  function Cart(){

        const productNumbers=2;
        const ProductsInitialTotalPrice=250;
        const ProductsRealTotalPrice=200;
      return(
            <div className='cart-container'>
                <div className='cart-products'>

                </div>
                 <div className='cart-total-price-container'>
                    <div className='cart-total-price-div'>
                        <div className='cart-initial-total-price'>
                            <p>Products total Price ({productNumbers})</p>
                            <p>{ProductsInitialTotalPrice}$</p>
                        </div>
                        <div className='cart-total-price'>
                            <p>cart's total Price</p>
                            <p>{ProductsRealTotalPrice}$</p>
                        </div>
                        <div className='cart-total-store'>
                            <p>you stored:</p>
                            <p>{ProductsInitialTotalPrice-ProductsRealTotalPrice}$ ({100-(ProductsRealTotalPrice/ProductsInitialTotalPrice) *100}%)</p>
                        </div>
                        <button className='cart-complete-buying-button'>Accept and Buy</button>
                    </div>

                    <h3>you didn't pay this cart yet. products will automaticly deleted when there is no more in the storage</h3>
                </div>        
            </div>
              );
              }
  
  export default Cart;