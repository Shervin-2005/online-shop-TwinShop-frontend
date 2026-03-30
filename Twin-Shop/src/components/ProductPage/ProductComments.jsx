import React from 'react'
import "./ProductComments.css"
import UserComment from './UserComment';


function ProductComments() {
  return (
    <div className='product-comments-container'>
      <h2 className='product-comments-title'>User Scores & Comments</h2>
      <div className='product-comments-div'>
         <div className='product-comments-score-container'>
                <h2 className='product-comments-score-text'>5 <span>from 5</span></h2>
                <div className='prudct-comments-score-icon-div'>
                <h2 className='product-comments-score-icon'>⭐⭐⭐⭐⭐</h2>
                <h3 className='product-comments-score-icon-text'>form 84 Scores</h3>
                </div>
                <h3 className='product-comments-add-comment-text'>Add a Comment About This Product</h3>
                <button className='products-comments-comment-button'>Make a Comment</button>
            </div>
            <div className='product-comments-section'>
                <div className='product-comments-sort'>
                    <h2>Sort By:</h2>
                    <button>Most Liked</button>
                    <button>Newest</button>
                </div>
                <UserComment/>
                <UserComment/>
                <UserComment/>
                <UserComment/>
                <UserComment/>

            </div>
      </div>
           
    </div>
  )
}

export default ProductComments;