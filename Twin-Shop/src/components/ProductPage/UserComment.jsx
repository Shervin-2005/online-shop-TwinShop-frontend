import React from 'react'
import "./UserComment.css"
import { Link } from 'react-router-dom';
import image from "../../images/Profile.png"

function UserComment() {
  return (
    <div className='user-comment-container'>
        <div className='user-comment-top'>
            <div className='user-comment-user'>
                <img src={image}/>
                <h3>Shayan Shams</h3>
            </div>                
            <div className='user-comment-option'> 
                <p>25 January 2026</p>
                <button>:</button>
            </div>
        </div>
        <h2 className='user-comment-score-icon'>⭐⭐⭐⭐⭐</h2>
        <p className='user-comment'>I ordered this laptop today on 25 August 2026 it is really a great laptop starting from display 1080p 144hz 
            and the color looks good despite this is a 63% SRGB but it's okay for gaming and it's grapgic card is rtx 
            4050 6gb and it's powerful for mid gaming and as i'm a programmer the cpu looks powerful for me cause for 
            programming most important thing after keyboard is cpu and i forgot the keyboard looks good and clicky in 
            summary i recommend you buy that!
        </p>

        <div className='user-comment-bottom'>
            <div className='user-comment-color-section'>
                <p className='user-comment-color'></p>
                <p className='user-comment-color-text'>Gray</p>
            </div>
            <div className='user-comment-like-section'>
            <div>
                <button>👎</button>
                <p>2</p>
            </div>
             <div>
                <button>👍</button>
                <p>76</p>
            </div>
            </div>  
        </div>
    </div>
  )
}

export default UserComment;