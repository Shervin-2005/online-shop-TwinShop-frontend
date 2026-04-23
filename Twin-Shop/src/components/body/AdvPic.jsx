import './AdvSec.css'

function AdvPic(props){
    return(
    <li className='adv-pic-li'>
        <img src={props.image} className='adv'></img>
    </li>
    );
}

export default AdvPic;