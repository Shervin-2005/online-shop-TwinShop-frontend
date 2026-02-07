import './body.css'
import {SlideShow} from "./ImageSlideShow.jsx";
import slides from '../../data/slideImagesData.js'
import offerProducts from '../../data/slideOffersData.js'
import pictures1 from '../../data/picturesData1.js'
import Contents from '../../data/contentCreatorsData.js'
import OfferSlideShow from "./OfferSlideShow.jsx";
import ButtonsSection2 from "./buttonsSection2.jsx";
import ButtonsSection1 from "./buttonSection1.jsx";
import PictureSection1 from './pictureSection1.jsx';
import ProductSortSection from './ProductSortSection.jsx';
import PictureSection2 from './pictureSection2.jsx';
import PopularBrandsSection from './PopularBrandsSection.jsx';
function Body(){
   return(
        <div className="body">
            <ButtonsSection1 data={Contents}/>
            <SlideShow data={slides}/>
            <ButtonsSection2 data={Contents}/>
            <OfferSlideShow data={offerProducts}/>
            <PictureSection1 data={pictures1}/>
            <ProductSortSection/>
            <PictureSection2/>
            <PopularBrandsSection/>
        </div>
 );   
}

export default Body