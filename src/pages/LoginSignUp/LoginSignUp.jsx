import React from 'react'
import './loginsignup.css'
import { Link } from 'react-router-dom'


export const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
        <div className="loginSignUpContainer">
            <h1>Sign Up</h1>
            <hr/>
            <div className="login-signup-feilds">
                <input type='text' placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type='passsword' placeholder='Password'/>
            </div>
            <div className="btnLog">
              <button className='mainBtn'>Continue</button>
            </div>
           
                
            
            
              <p className='loginsignup-login'>Already have an Account? <Link className="secondBtn" to="/lognow">Login Now</Link></p>
              <div className="loginsignup-agree">
                 <p>By continuing, I agree to terms of use & privacy policy.</p>
                 <input type="checkbox" name="" id="" />
              </div>
            
           
            
            
        </div>
    </div>
  )
}
//1.47.00
