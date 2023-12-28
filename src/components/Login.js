/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './custom.css'; // Import custom CSS

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading indicator

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);

  // Inside the handleSubmit function
const handleSubmit = async () => {
  setError('');
  setLoading(true);

  try {
    const response = await fetch('http://localhost:4440/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response)
    if (response.status=="200") {
      
        navigate('/home');
      
    } else {
      setError('Login failed. Please check your credentials.');
    }
  } catch (error) {
    setError('Login failed. Please check your credentials.');
    console.error('Login Error:', error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 login-container bg-light">
          <h2 className="login-title">Login</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="button">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary btn-block my-3 custom-btn"
                disabled={loading} // Disable the button when loading is true
              >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </div>
          </form>
          <p className="mt-3 text-center">
            New user? <Link to="/register">Get started</Link>
          </p>
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
