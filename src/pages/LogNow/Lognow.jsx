import React from 'react'
import './lognow.css'
import { Link } from 'react-router-dom'

export const Lognow = () => {
  return (
    <div className='loginNow'>
    <div className="loginContainer">
        <h1>Login</h1>
        <hr/>
        <div className="login-feilds">
            <input type="email" placeholder='Your Email'/>
            <input type='passsword' placeholder='Password'/>
        </div>
        <div className="btnLog">
          <button className='mainBtn'>Continue</button>
        </div>
       
          <p className='loginsignup-login'>Haven't  created an account? <Link className="secondBtn" to="/login">Click here</Link></p>
          <div className="loginsignup-agree">
             <p>Welcome back & Happy Shopping!</p>
          </div>
        
    </div>
</div>
  )
}
