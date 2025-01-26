import React from 'react'
// import handIcon from "../assets/img/hand_icon.png";
import arrowIcon from "../assets/img/arrow.png";
import heroImg from "../assets/img/hero_image.png";
import "./banner.css";

export const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="banner-hand-icon">
                    <p>new</p>
                    {/* <img src={handIcon} alt="cc" /> */}
                </div>
                <p>collections</p>
                <p>are available!</p>
            </div>
            <div className="latest-button">
                <div className="latest-collection">
                    <div>Shop Now</div>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="banner-right">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}
