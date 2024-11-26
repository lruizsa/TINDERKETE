import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './style.css';
import logo from './logo.png'; // Cambia la ruta para importar desde src/
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  // Estado para manejar los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <header></header>
      {/* Contenedor para el login y el logo */}
      <div className="login-wrapper">
        {/* Logo encima del formulario */}
        <div className="logo-container d-flex justify-content-center mb-4">
          <img
            src={logo} /* Usando la imagen importada */
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Contenedor del formulario de login */}
        <div className="container login-container" style={{ maxWidth: '400px', marginTop: '50px' }}>
          <h2 className="mb-4">Login</h2> {/* Espacio abajo del título */}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3"> {/* Espacio debajo del campo de email */}
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

            <div className="form-group mb-3"> {/* Espacio debajo del campo de contraseña */}
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

            {/* Botón de Login */}
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>

            {/* Enlace para registrarse */}
            <div className="form-group d-flex align-items-center justify-content-center mt-3">
              <p className="mb-0">Konturik ez?</p>
              <button
                type="button"
                className="btn btn-link ml-2"
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
