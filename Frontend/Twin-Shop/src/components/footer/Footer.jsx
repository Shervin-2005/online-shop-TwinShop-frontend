import './footer.css'
import logo1 from '../../images/Logo.png'
import logo2 from '../../images/Logotxt.png'
import Button from './button'
import ListItem from './ListItem.jsx'
import ShayanProfile from '../../images/Profile.png'
import YoutubeIcon from '../../images/YouTube.png'
import GitHubIcon from '../../images/GitHUB.png'
import TelegramIcon from '../../images/Telegram.png'
import LinkedInIcon from '../../images/LinkedIn.png'
import Icon from './Icon.jsx'


function Footer(){
    return(
        <div className="footer">
            <div className='row1'>
                <button className='top-button'>return to top ^</button>
                <img className='logo1' src={logo1}></img>
                <img className='logo2' src={logo2}></img>
            </div>
        <div className='row2'>
            <pre>telephone poshtibani: 021-91000100  |  </pre>
            <pre>021-61930000 | </pre>
            <pre>we are online every day and every week</pre>
            </div>
         <div className='row3'>
          <Button icon="🎖️" title="Garenty"/>
          <Button icon="📦" title="7 rooz bargasht kala"/>
          <Button icon="🎧" title="Every Day Every Week"/>
          <Button icon="💵" title="Pay in Door"/>
          <Button icon="📱" title="express Delivery"/>
             </div>
             <div className='row4'>

                <div className='about-us-container'>
                    <div>
                        <img className='profile' src={ShayanProfile}></img>
                        <ul>
                            <Icon children={YoutubeIcon}/>
                            <Icon children={LinkedInIcon}/>
                            <Icon children={GitHubIcon}/>
                            <Icon children={TelegramIcon}/>

                        </ul>
                    </div>    
                </div>

                <ul>
                   <p>With Twin Shop</p> 
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>sell here</ListItem>
                    <ListItem>otagh khabar digikala</ListItem>
                </ul>
                 <ul>
                    <p>Khadmat Moshtarian</p>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>sell here</ListItem>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>Report Bug</ListItem>
                    <ListItem>Report Bug</ListItem>
                    <ListItem>Report Bug</ListItem>

                </ul>
                 <ul>
                    <p>How to Buy in Twin</p>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>sell here</ListItem>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>otagh khabar digikala</ListItem>
                    <ListItem>otagh khabar digikala</ListItem> 
                </ul>
             </div>
        </div>
    );
}

export default Footer;