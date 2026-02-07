import './body.css'; 
import Button2 from './Button2';

function buttonsSection2(){
return(
    
    <ul id='button-sec2-ul'>
        <Button2 icon="🧺" title="SuperMarket" bgcolor="#4CAF50"/>
        <Button2 icon="🪙" title="Digital Gold" bgcolor="#002954ff"/>
        <Button2 icon="🎖️" title="Gold and Silver Offers" className="gold-silver-btn" bgcolor="#b18500ff"/>
        <Button2 icon="👍" title="Get Vidality" className="vidality-btn" bgcolor="#0900b1ff"/>
        <Button2 icon="📱" title="Psipher Mobile" className="mobile-btn" bgcolor="#9100b1ff"/>
        <Button2 icon="😋" title="General Foods" className="food-btn" bgcolor="#0095ffff"/>
        <Button2 icon="➕" title="Get Plus" className="plus-btn" bgcolor="#dc42ffff"/>
        <Button2 icon="👔" title="Clothes Offers"  bgcolor="#ff0000ff"/>
        <Button2 icon="🧊" title="Original Refrigerator" bgcolor="#ddff00ff"/>
        <Button2 icon="•••" title="More"/>
     </ul>   
);
}

export default buttonsSection2;