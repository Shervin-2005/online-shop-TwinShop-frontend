import './body.css'; 
import Pictures1 from './Pictures1.jsx';
import data from "../../data/picturesData2.js"

function PictureSection2(){
return(
    <div className='picture-sec2-container'>
        <ul>
                    {data.map((item,idx)=> (
                        <Pictures1 key={idx} image={item.src} alt={item.alt} className="picture"/>
                        ))}          
        </ul>
    </div>
);
}

export default PictureSection2;