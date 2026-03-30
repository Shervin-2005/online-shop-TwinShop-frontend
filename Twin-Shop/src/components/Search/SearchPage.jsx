import React from 'react'
import "./SearchPage.css"
import SearchProductCard from './SearchProductCard';
import productImage from "../ProductPage/main.webp"
import SearchPageFilter from './SearchPageFilter.jsx';

function SearchPage() {
  return (
    <div className='search-page-container'>
        <SearchPageFilter/>
      <div className='search-page-main-container'>
        <div className='search-page-sort'>
              <p>Sort By: </p>
              <button>Most Related</button>
              <button>Most Viewed</button>
              <button>Newest</button>
              <button>Most Selling</button>
              <button>Cheapest</button>
              <button>Most Expensive</button>
        </div>
        <div className='search-page'> 
                      <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                         <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                         <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                         <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                        <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                              price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>

                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       <SearchProductCard img={productImage} alt="product" title=" Victus 15 Gaming fa2082wm-i5 13420H-RTX4050 6GB-16GB DDR4 3200MHz-512GB SSD-FHD 144Hz-W"
                       price="499$" prePrice="540$"/>
                       
        </div>

      </div>
    </div>
  )
}

export default SearchPage;