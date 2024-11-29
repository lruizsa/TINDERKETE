import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css';
import logo from '../images/logo.png'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const predefinedEmail = 'adibidea@tinderkete.com';
  const predefinedPassword = '1234';

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === predefinedEmail && password === predefinedPassword) {
      navigate('/'); 
    } else {
      alert('Erabiltzailea edo pasahitza gaizki sartu dira.');
    }
  };


  return (
    <>
      <header></header>
      
      <div className="login-wrapper">
        
        <div className="logo-container d-flex justify-content-center mb-4">
          <img
            src={logo} 
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="container login-container" style={{ maxWidth: '400px', marginTop: '50px' }}>
          <h2 className="mb-4">Login</h2> 
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3"> 
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group mb-3"> 
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>

            <div className="form-group d-flex align-items-center justify-content-center mt-3">
              <p className="mb-0">Konturik ez?</p>
              <button
                type="button"
                className="btn btn-link ml-2 btn-login"
                onClick={() => navigate('/register')}
              >
                Erregistratu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
