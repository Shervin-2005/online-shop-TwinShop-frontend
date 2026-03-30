import './FavoriteProductsSection.css'
import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/ProductSortData'
import FavoriteProducts from './FavoriteProducts';

function FavoriteProductsSection(){
    return(
        <div className='favorite-section-container'>
            <FavoriteProducts/>
            <FavoriteProducts/>
            <FavoriteProducts/>
            <FavoriteProducts/>
            </div>
    );
}

export default FavoriteProductsSection;