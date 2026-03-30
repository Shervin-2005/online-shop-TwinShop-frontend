import './footer.css'

function FooterButton(props){
    return(
        <div>
            <button className='footer-button'>{props.icon}<img src={props.src}/></button>
        </div>
    );
}

export default FooterButton;