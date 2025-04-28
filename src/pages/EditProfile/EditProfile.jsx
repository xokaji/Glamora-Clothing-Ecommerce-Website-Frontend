import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./editProfile.css";

export const EditProfile = () => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('http://localhost:5029/api/Profile/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
 
        const profileData = response.data.Profile || response.data;
        setAddress(profileData.address || '');
        setPhone(profileData.phoneNumber || ''); 
        setGender(profileData.gender || '');
      } catch (error) {
        console.error('Fetch error:', error.response?.data);
        setError(error.response?.data?.message || 'Failed to fetch profile');
      }
    };
    
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
  
    try {
      const response = await axios.put(
        'http://localhost:5029/api/Profile', 
        {
          address,
          phoneNumber: phone, 
          gender 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      if (response.data) {
        navigate('/profile');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-heading">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-profile-form-group">
          <label className="edit-profile-label">Address:</label>
          <input
            className="edit-profile-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="edit-profile-form-group">
          <label className="edit-profile-label">Phone Number:</label>
          <input
            className="edit-profile-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="edit-profile-form-group">
          <label className="edit-profile-label">Gender:</label>
          <select
            className="edit-profile-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {error && <div className="edit-profile-error-message">{error}</div>}

        <button type="submit" className="edit-profile-submit-btn" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Profile'}  
        </button>
      </form>
    </div>
  );
};
