import './MostSellingProducts.css'
import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/MostSellingProducts'
import MostSellingProduct from './MostSellingProduct';

function MostSellingProducts(){
    return(
        <div className='selling-products-container'>

            <div className='most-selling-top'>
                <button>View All</button>
                <h2 className='most-selling-title'>Most Selling Products</h2>
            </div>
            <div className='selling-products'>
                 {data.map((item,idx)=> (
                        <MostSellingProduct key={idx} icon={item.src} alt={item.alt} title={item.title} number={item.number}/>
                        ))}      
            </div>
            </div>
    );
}

export default MostSellingProducts;