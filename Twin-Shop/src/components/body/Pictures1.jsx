import './body.css'

function Pictures1(props){
    return(
    <li className='picture-sec1-li'>
        <img src={props.image} className='picture1'></img>
    </li>
    );
}

export default Pictures1;