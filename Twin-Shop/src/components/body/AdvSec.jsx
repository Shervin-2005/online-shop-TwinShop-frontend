import './AdvSec.css'; 
import AdvPic from './AdvPic.jsx';
import data from "../../data/AdvSec1Data.js"

function AdvSec(){
return(
    <div className='adv-sec-container'>
        <ul>
                    {data.map((item,idx)=> (
                        <AdvPic key={idx} image={item.src} alt={item.alt}/>
                        ))}          
        </ul>
    </div>
);
}

export default AdvSec;