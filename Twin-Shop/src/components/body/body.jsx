import './body.css'
import {SlideShow} from "./SlideShow.jsx";
import slides from '../../data/slideImagesData.js'
import offerProducts from '../../data/slideOffersData.js'
import pictures1 from '../../data/AdvSec1Data.js'
import Contents from '../../data/BrandsData.js'
import OfferSlideShow from "./OfferSlideShow.jsx";
import Categories from './Categories.jsx';
import BodyAdvBar from './BodyAdvBar.jsx'
import Brands from './Brands.jsx';
import AdvSec from './AdvSec.jsx';
import AdvSec2 from './AdvSec2.jsx';
import FavoriteProductsSection from './FavoriteProductsSection.jsx';
import MostSellingProducts from './MostSellingProducts.jsx';
function Body(){
   return(
        <div className="body">
            <Brands data={Contents}/>
            <SlideShow data={slides}/>
            <OfferSlideShow data={offerProducts}/>
            <AdvSec data={pictures1}/>
            <BodyAdvBar/>
            <AdvSec data={pictures1}/>
            <Categories/>
            <AdvSec2 data={pictures1}/>
            <FavoriteProductsSection/>
            <MostSellingProducts/>
            <FavoriteProductsSection/>
        </div>
 );   
}

export default Body;