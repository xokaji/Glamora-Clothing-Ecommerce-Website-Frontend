import React from 'react'
import './loginsignup.css'


export const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
        <div className="loginSignUpContainer">
            <h1>Sign Up</h1>
            <div className="login-signup-feilds">
                <input type='text' placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type='passsword' placeholder='Password'/>
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already have an Account?<span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, I agree to terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
  )
}
//1.47.00
