import './AdvSec2.css'; 
import AdvPic2 from './AdvPic2.jsx';
import data from "../../data/AdvSec2Data.js"

function AdvSec2(){
return(
    <div className='adv-sec2-container'>
        <ul>
                    {data.map((item,idx)=> (
                        <AdvPic2 key={idx} image={item.src} alt={item.alt}/>
                        ))}          
        </ul>
    </div>
);
}

export default AdvSec2;