import './Categories.css'
import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/AdvSec1Data'
import FavoriteProduct from './FavoriteProduct';

function FavoriteProducts(){
    return(
        <div className='favorite-products-container'>
          <h2 className='favorite-category'>Gaming Laptop</h2>
          <h2 className='favorite-text'>Based on your interests</h2>
            <div>
                    {data.map((item,idx)=> (
                        <FavoriteProduct key={idx} icon={item.src} alt={item.alt} title={item.title}/>
                        ))}          
            </div>
            <button className='favorite-view-all-btn'>View All</button>
            </div>
    );
}

export default FavoriteProducts;