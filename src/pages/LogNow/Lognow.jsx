import React, { useState, useEffect } from 'react';
import './lognow.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Lognow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get('http://localhost:5029/api/Account/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserData(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      handleLogout();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5029/api/Account/login', {
        email: email,
        passwordHash: password
      });
  
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        if (response.data.userId) {
          localStorage.setItem('userId', response.data.userId);
        }
        await fetchUserProfile(response.data.token);
      } else {
        setError(response.data.errors?.join(', ') || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.errors?.join(', ') || 
        err.response?.data?.message || 
        'Invalid email or password. Please try again.'
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/');
  };

  if (isLoggedIn && userData) {
    return (
      <div className='account-details'>
        <h2>Account Details</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {userData.name || 'Not provided'}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {userData.phone && <p><strong>Phone:</strong> {userData.phone}</p>}
          {userData.address && <p><strong>Address:</strong> {userData.address}</p>}
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    );
  }

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
              autoComplete="username"
            />
            <input
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="btnLog">
            <button type="submit" className='mainBtn'>Continue</button>
          </div>
        </form>
        <p className='loginsignup-login'>
          Haven't created an account?{' '}
          <Link className="secondBtn" to="/register">Click Here</Link> 
        </p>
        <div className="loginsignup-agree">
          <p>Welcome back & Happy Shopping!</p>
        </div>
      </div>
    </div>
  );
};