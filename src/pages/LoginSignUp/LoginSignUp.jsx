import React, { useState } from 'react';
import './loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!agree) {
      setError('You must agree to the terms of use and privacy policy.');
      return;
    }

    try {

      const response = await axios.post('http://localhost:5029/api/Account/register', {
        Name: name, 
        Email: email,
        PasswordHash: password,
      });

     
      navigate('/lognow');
    } catch (err) {

      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='loginSignUp'>
      <div className="loginSignUpContainer">
        <h1>Sign Up</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="login-signup-feilds">
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="btnLog">
            <button type="submit" className='mainBtn'>Continue</button>
          </div>
        </form>
        <p className='loginsignup-login'>
          Already have an Account?{' '}
          <Link className="secondBtn" to="/lognow">Login Now</Link>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
          <p>By continuing, I agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};