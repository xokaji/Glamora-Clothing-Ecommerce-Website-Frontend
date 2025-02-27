import React, { useState } from 'react';
import './lognow.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

export const Lognow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5029/api/Account/login', {
        Email: email,
        PasswordHash: password,
      });
    
      console.log('Response:', response.data); 
    
      if (response.data.token) {  
        localStorage.setItem('token', response.data.token);
        navigate('/cart');
      } else {
        setError('Login failed. Invalid credentials.');
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }    
  };

  return (
    <div className='loginNow'>
      <div className="loginContainer">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="login-feilds">
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
          Haven't created an account?{' '}
          <Link className="secondBtn" to="/login">Click here</Link> 
        </p>
        <div className="loginsignup-agree">
          <p>Welcome back & Happy Shopping!</p>
        </div>
      </div>
    </div>
  );
};