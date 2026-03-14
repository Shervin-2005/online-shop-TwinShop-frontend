import './body.css'
import {SlideShow} from "./SlideShow.jsx";
import slides from '../../data/slideImagesData.js'
import offerProducts from '../../data/slideOffersData.js'
import pictures1 from '../../data/AdvSec1Data.js'
import Contents from '../../data/BrandsData.js'
import OfferSlideShow from "./OfferSlideShow.jsx";
import ProductSortSection from './ProductSortSection.jsx';
import PictureSection2 from './pictureSection2.jsx';
import PopularBrandsSection from './PopularBrandsSection.jsx';
import Brands from './Brands.jsx';
import AdvSec1 from './AdvSec1.jsx';
function Body(){
   return(
        <div className="body">
            <Brands data={Contents}/>
            <SlideShow data={slides}/>
            <AdvSec1 data={pictures1}/>
            <OfferSlideShow data={offerProducts}/>
            <ProductSortSection/>
            <PictureSection2/>
            <PopularBrandsSection/>
        </div>
 );   
}

export default Body