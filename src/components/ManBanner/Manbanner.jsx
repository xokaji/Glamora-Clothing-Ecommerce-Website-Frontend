import React from 'react'
import './manbanner.css'
import manBanner from '../assets/img/manBanner2.png'
export const Manbanner = () => {
  return (
    <div className='manBanner'>
        <div className="manbanner-left">
            <img src={manBanner} alt="ex"/>
        </div>
        <div className="manbanner-right">
            <h1>Elevate your style &</h1>
            <h1>Trendy outfits for</h1>
            <h1>The modern man</h1>
            <p>DISCOVER THE LATEST MEN'S FASHION</p>
            <button>Check Now</button>
        </div>
    </div>
  )
}
