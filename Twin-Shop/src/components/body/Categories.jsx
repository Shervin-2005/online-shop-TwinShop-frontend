import './Categories.css'
import Category from './Category';
import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/ProductSortData'
import chevronRight from "../../images/chevron-right.svg";
import chevronLeft from "../../images/chevron-left.svg";

function Categories(){
    return(
        <div className='categories-container'>
          <h2>Categories</h2>
        <ul className='categories-ul' >
                    {data.map((item,idx)=> (
                        <Category key={idx} icon={item.src} alt={item.alt} title={item.title}/>
                        ))}          
        </ul>
            </div>
    );
}

export default Categories;