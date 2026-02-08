import './footer.css'

function Button(props){
    return(
        <div>
            <button className='button'>{props.icon}</button>
            <p className='title'>{props.title}</p>
        </div>
    );
}

export default Button;