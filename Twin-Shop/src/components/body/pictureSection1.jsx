import './body.css'; 
import Pictures1 from './Pictures1.jsx';
import data from "../../data/picturesData1.js"

function pictureSection1(){
return(
    <div className='picture-sec1-container'>
        <ul>
                    {data.map((item,idx)=> (
                        <Pictures1 key={idx} image={item.src} alt={item.alt} className="picture"/>
                        ))}          
        </ul>
    </div>
);
}

export default pictureSection1;