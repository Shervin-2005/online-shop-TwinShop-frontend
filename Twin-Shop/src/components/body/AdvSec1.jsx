import './AdvSec1.css'; 
import AdvPic1 from './AdvPic1.jsx';
import data from "../../data/AdvSec1Data.js"

function AdvSec1(){
return(
    <div className='adv-sec1-container'>
        <ul>
                    {data.map((item,idx)=> (
                        <AdvPic1 key={idx} image={item.src} alt={item.alt}/>
                        ))}          
        </ul>
    </div>
);
}

export default AdvSec1;