import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="welcome-container">
      <h2>Welcome to the Dashboard!</h2>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Welcome;
