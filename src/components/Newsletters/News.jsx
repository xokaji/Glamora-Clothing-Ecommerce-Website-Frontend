import React from 'react'
import './news.css'


export const News = () => {
  return (
    <div className="news">
        <h1>Get Exclusive Offers on your Email</h1>
        <h1>Subscribe us & stay updated!</h1>
        <div>
            <input type='email' placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
