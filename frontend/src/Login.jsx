import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState(''); // Changed from email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!role || !username || !password) {
      setError('All fields are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username, // Changed from email to username
        password,
        role,
      });

      localStorage.setItem('token', response.data.token);
      navigate('/welcome');
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Welcome back!</h2>
        <p className="login-subtitle">Enter your credentials to access your account</p>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label> {/* Changed label from Email to Username */}
          <input
            type="text"
            id="username" // Changed id from email to username
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter at least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
      <div className="login-image-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxG-ReH4hNra6iu8dwIeS1fyQY8nwvNjxUA&s"  
          alt="Login" 
          className="login-image" 
        />
      </div>
    </div>
  );
};

export default Login;
