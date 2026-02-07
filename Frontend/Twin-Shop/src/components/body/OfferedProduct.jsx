import './body.css'; 

function LimitedTitle(text){
    return text.length>30? text.substring(0,31)+ "...":text;
}

const getClassName = (data,idx) => {
  if (idx === 0) return "offered-product-container left-product";
    else if(idx==data.length -1) return "offered-product-container right-product";
    else return "offered-product-container";
  };

function OfferedProduct(props){
    return(
<li className={getClassName(props.data,props.idx)}>
<img src={props.img} className='offered-product-image'/>
<p className='offered-product-title'>{LimitedTitle(props.title)}</p>
<p className='offered-product-price'>{props.price}</p>
<div className='offer-quantity'>
<p className='offered-product-preprice'>{props.prePrice}</p>
<p className='off-percent'>{100-Math.floor(parseInt(props.price)/parseInt(props.prePrice)*100)}%</p>
</div>
</li>
);
}

export default OfferedProduct;