import './AdvSec1.css'

function AdvPic1(props){
    return(
    <li className='adv-pic1-li'>
        <img src={props.image} className='adv1'></img>
    </li>
    );
}

export default AdvPic1;