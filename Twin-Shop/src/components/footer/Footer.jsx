import './footer.css'
import footerBackground from "./footerBackground.jpg"
import FooterButton from './FooterButton';
import telegramImg from "./Telegram.png"
import YouTubeImg from "./YouTube.png"
import LinkedInImg from "./LinkedIn.png"


function Footer(){
    return(
        <div className="footer-container">
            <img src={footerBackground} className="footer-background"/>
            <div className='footer-menu-container'>
                <div className='footer-columns'>
                    <div className='footer-column-1-container'>
                    <button>Advertisement in Twin Shop</button>
                    <button>Contact Us</button>
                    <button>About Us</button>
                    </div>
                <div className='footer-column-2-container'>
                        <FooterButton src={telegramImg}/>
                        <FooterButton src={YouTubeImg}/>
                        <FooterButton src={LinkedInImg}/>
                </div>
                </div>

                <div className='footer-bottom'>© 2025-2026 Coping of All or Part of Twin-Shop Website is Possible only with a Written License</div>

            </div>
        </div>
    );
}

export default Footer;