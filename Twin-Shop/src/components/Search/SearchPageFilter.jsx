import { Link } from 'react-router-dom';
import "./SearchPageFilter.css"
import { useState } from 'react';
import PriceRange from './PriceRange';
import BrandChoose from './BrandChoose';
import ColorFilter from './ColorFilter';


function SearchPageFilter(){
    return(
            <div className='search-page-filter-container'>
                <h2 className='search-page-filter-title'>Filter By...</h2>

                    <PriceRange/>
                    <BrandChoose/>
                    <ColorFilter/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                       <PriceRange/>
                    <BrandChoose/>
                    <ColorFilter/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>
                    <BrandChoose/>

            </div>
            );
            }

export default SearchPageFilter;