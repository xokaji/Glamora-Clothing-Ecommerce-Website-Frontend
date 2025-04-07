import React from 'react'
import "./abanner.css"
import hand_bag from "../assets/img/pngwing.com.png"
import { Link } from 'react-router-dom'


export const AccBanner = () => {
  return (
    <div className='accessoriesBanner'>
        <div className="accessories-left">
            <h1>Accessories that</h1>
            <h1>Define your style &</h1>
            <h1>Touch of Luxury</h1>
            <p>COMPLETE YOUR LOOK WITH PREMIUM ACCESSORIES</p>
            <button><Link className='accessories' to="/accessories">Check Now</Link></button>
        </div>
        <div className="offers-right">
            <img src={hand_bag} alt="ex"/>
        </div>
    </div>
  )
}
