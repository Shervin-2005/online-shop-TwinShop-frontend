import './Footer.css'

function Icon(props){
    return(
        <li className='icon'>
            <button>
                <img src={props.children}></img>
            </button>
        </li>
    );
}

export default Icon;