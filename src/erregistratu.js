import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './logo.png';  // Cambia la ruta según la ubicación de tu logo
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();  // Para redirigir después del registro

  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar datos o validar
    alert(`Izen Abizenak: ${name}, Email: ${email}, Pasahitza: ${password}, Jaiotze-data: ${birthdate}`);
    navigate('/');  // Redirige a la página de inicio de sesión después del registro
  };

  return (
    <>

      <header></header>
            
      {/* Contenedor del registro y el logo */}
      <div className="register-wrapper">
        {/* Logo encima del formulario */}
        <div className="logo-container d-flex justify-content-center mb-4">
          <img 
            src={logo}
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Formulario de registro */}
        <div className="container login-container" style={{ maxWidth: '400px', marginTop: '50px' }}>
          <h2 className="mb-4">Erregistroa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Izen Abizenak</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sartu izen-abizenak"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sartu email-a"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Pasahitza</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sartu pasahitza"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="birthdate">Jaiotze-data</label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">Erregistratu</button>

            <div className="form-group d-flex align-items-center justify-content-center">
              <p className="mb-0">Kontu bat baduzu?</p>
              <button type="button" className="btn btn-link ml-2" onClick={() => navigate('/')}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
