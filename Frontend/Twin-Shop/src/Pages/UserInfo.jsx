import React from 'react'
import LogoTxtIcon from "./../images/LogoTxt.png";
import LogoIcon from "./../images/Logo.png";
import LeftArrowIcon from   "./../images/LeftArrow.svg";

function UserInfo() {
  return (
    <div className='user-info-container'>
        <div className='user-info'>
            <div id='logo-arrow'>
                     
                          <img  
                          src={LeftArrowIcon} 
                          id='left-arrow' 
                          alt='Back'
                          onClick={()=>{
                              window.location.href="/";
                          }}
                          />
                    <img src={LogoIcon} id='login-logo' alt='Twin Shop'/>
                    <img src={LogoTxtIcon} id='login-logotxt' alt='Twin Shop Logo'/> 
                        </div>
        <div className='user-info-one-line' id='first-row'>
             <label>User Name</label>
             <input/>
        </div>
        
        <div className='user-info-one-line'>
            <label>First Name</label>
            <input/>
        </div>

        <div className='user-info-one-line'>
         <label>Last Name</label>
            <input/>
        </div>
            
        <div className='user-info-one-line'>
            <label>Birthday Date</label>
            <input type='date'/>
        </div>
            
        <div className='user-info-one-line'> 
            <label>City</label>
            <input/>
        </div>
           
        <div className='user-info-one-line'>
            <label type='Email'>Email</label>
            <input/>
        </div>
           
        <div className='user-info-one-line'>
            <label>Phone Number</label>
            <input/>
        </div> 
            <a href='#' onClick={()=>{
                              window.location.href="/"}}>Submit</a> 
        </div>
   
    </div>
  )
}

export default UserInfo