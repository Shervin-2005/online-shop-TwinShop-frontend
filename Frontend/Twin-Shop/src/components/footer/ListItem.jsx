import './Footer.css'

function List(props){
    return(
        <li className='list-item'>
          {props.children}
        </li>
    );
}

export default List;