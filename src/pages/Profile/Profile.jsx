import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css'; 


const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    city: '',
    address: '',
    phone: ''
  });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem('jwtToken');
    
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5029/api/Account/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setUser({
        name: response.data.name || response.data.Name || '',
        email: response.data.email || response.data.Email || '',
        city: response.data.city || response.data.Profile?.city || '',
        address: response.data.address || response.data.Profile?.address || '',
        phone: response.data.phone || response.data.Profile?.phoneNumber || ''
      });
      
    } catch (error) {
      console.error('Profile fetch error:', error);
      setError('Failed to load profile');
      
      if (error.response?.status === 401) {
        localStorage.removeItem('jwtToken');
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('jwtToken');
    setLoading(true);
    setError('');

    try {
      await axios.put(
        'http://localhost:5029/api/Account/profile',
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setEditing(false);
    } catch (error) {
      console.error('Update error:', error);
      setError(error.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        {!editing ? (
          <button 
            className="edit-button"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <div className="action-buttons">
            <button 
              className="cancel-button"
              onClick={() => {
                setEditing(false);
                fetchProfile(); 
              }}
            >
              Cancel
            </button>
            <button 
              className="save-button"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="profile-card">
        <div className="profile-row">
          <label>Name:</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-row">
          <label>Email:</label>
          <p>{user.email}</p> {}
        </div>

        <div className="profile-row">
          <label>City:</label>
          {editing ? (
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
            />
          ) : (
            <p>{user.city || 'Not specified'}</p>
          )}
        </div>

        <div className="profile-row">
          <label>Address:</label>
          {editing ? (
            <textarea
              name="address"
              value={user.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
          ) : (
            <p>{user.address || 'Not specified'}</p>
          )}
        </div>

        <div className="profile-row">
          <label>Phone:</label>
          {editing ? (
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          ) : (
            <p>{user.phone || 'Not specified'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;