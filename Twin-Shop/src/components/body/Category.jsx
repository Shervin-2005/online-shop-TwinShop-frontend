import './body.css'

function Category(props){
    return(
            <li className='category-li'>
              <button className='category-button'><img src={props.icon}></img></button> 
            <p className='category-title'>{props.title}</p>
            </li>
    );
}

export default Category;