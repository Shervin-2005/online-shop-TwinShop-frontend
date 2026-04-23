import './OfferedProduct.css';
import React, {useState,useEffect} from 'react';



function OfferTimer({duration}){
    
    const [time,setTime] =useState(duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000)
        },1000)
    }, [time])
   
    const getFormattedTime= (miliseconds)=> {
        let total_seconds=parseInt(Math.floor(miliseconds/1000));
        let total_minutes=parseInt(Math.floor(total_seconds/60));
        let total_hours =parseInt(Math.floor(total_minutes/60));

        let seconds=parseInt(total_seconds % 60);
        let minutes=parseInt(total_minutes % 60);
        let hours=parseInt(total_hours %24);


        return {
                hours: padZero(hours),
                minutes: padZero(minutes),
                seconds: padZero(seconds)
            };    
        }

    const { hours, minutes, seconds } = getFormattedTime(time);

    function padZero(number){
        return (number <10 ? "0" :"") +number;
    }

    return(
        <div className='timer-container'>
           <div className="timer">
            <div className="timer-bg">{hours}</div>
            <span className='timer-dot'>:</span>
            <div className="timer-bg">{minutes}</div>
            <span className='timer-dot'>:</span>
            <div className="timer-bg">{seconds}</div>
        </div>
        </div>
    );
}

export default OfferTimer;