import React,{useState,useEffect} from 'react'
import LeftArrowIcon from   "./../images/LeftArrow.svg";
import LogoTxtIcon from "./../images/LogoTxt.png";
import LogoIcon from "./../images/Logo.png";
import UserInfo from './UserInfo';
import { Link } from "react-router-dom";
function SigninLogin() {
    const[CurrentsigninState,SigninState]=useState("GetNumberOrEmail");
    const [timeLeft, setTimeLeft] = useState(180);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
  if (CurrentsigninState === "SendCode") {
    setTimeLeft(180);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }
}, [CurrentsigninState]);
 useEffect(() => {
    if (CurrentsigninState === "SendCode") {
      setInputValue("");
    }
  }, [CurrentsigninState]);

const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
const seconds = String(timeLeft % 60).padStart(2, "0");
  
  return (
    <div className='login-container'>
        <div className='signin-login'>
            <div id='logo-arrow'>
         
              <img  
              src={LeftArrowIcon} 
              id='left-arrow' 
              alt='Back'
              onClick={()=>{
                if(CurrentsigninState==="GetNumberOrEmail"){
                  window.location.href="/";
                }
                else{
                  SigninState("GetNumberOrEmail");
                }
              }}
              />
      
        <img src={LogoIcon} id='login-logo' alt='Twin Shop'/>
        <img src={LogoTxtIcon} id='login-logotxt' alt='Twin Shop Logo'/> 
        </div>

        <h2>
            {CurrentsigninState==="GetNumberOrEmail"
            ?"Sign in or Login in Twin Shop"
            :CurrentsigninState==="SendCode"
            ?"Enter the Verification Code"
            :"Wonna Complete Your Information?"}
            </h2>
        <p>
            {CurrentsigninState=="GetNumberOrEmail"
            ?"Please Enter Your Email or Phone Number."
            :CurrentsigninState==="SendCode"
            ?"The Code Has Been Send to Your Number"
            :null}
            </p>
      {CurrentsigninState!=="EnterOrInfo" && (
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}  
          placeholder={
                 CurrentsigninState === "GetNumberOrEmail"
                 ? "Enter Your Number or Email"
                 :CurrentsigninState==="SendCode"
                 ?"Enter Verification Code"
                 :null      
                 }>
        </input>
      )}
        <a href='#' onClick={(e) => {
          e.preventDefault();
          if(CurrentsigninState==="GetNumberOrEmail"){
            SigninState("SendCode");
           
          }
          else if(CurrentsigninState==="SendCode"){
            SigninState("EnterOrInfo");   
          }
          else{
              window.location.href="/UserInfo";
          }
        }}>
            {CurrentsigninState=="GetNumberOrEmail"
            ?"Sign in to Twin Shop"
            :CurrentsigninState==="SendCode"
            ?"Apply"
            :"Yes"
            }
        </a>
        {CurrentsigninState==="EnterOrInfo" &&(
        <a href='#'  onClick={()=>{
                  window.location.href="/";
              }}>
                NO
        </a>
        )
        }
    <p>
        {CurrentsigninState === "SendCode" &&
        (timeLeft > 0
        ? `${minutes}:${seconds} remaining to resend new code`
        : "You can resend the code now")}
    </p>
        {CurrentsigninState === "GetNumberOrEmail" && (
        <p>
            By logging in, you agree to <b>Twin Shops Terms</b> and{" "}
            <b>Conditions and Privacy Policy</b>.
        </p>
     )}

        </div>
    </div>
  )
}

export default SigninLogin