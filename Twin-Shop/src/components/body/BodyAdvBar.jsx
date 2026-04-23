import './BodyAdvBar.css'; 
import img from ".././Admin/1.jpg"

function BodyAdvBar(){
return(
    <div className='body-adv-bar-container'>
                <img src={img}className='body-adv-bar'></img>
    </div>
);
}

export default BodyAdvBar;