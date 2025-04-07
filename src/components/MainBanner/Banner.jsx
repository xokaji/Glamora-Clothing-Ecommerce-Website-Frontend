import React from 'react'
import "./banner.css";
import myVideo from "../assets/videos/banner.mp4"


export const Banner = () => {
  return (
    
    <div className="video-container">    
      <video autoPlay loop muted playsInline className="background-video">
        <source src={myVideo} type="video/mp4" />
      </video>
      <button className="video-button" id='newWomen' onClick={() => window.location.hash = '#newWomen'}>SHOP NOW</button>
    </div>
    
    
  )
}
