import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function Login() {
  // Estado para manejar los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el login, por ejemplo, validaciones o enviar datos
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
  <h2 className="mb-4">Login</h2>  {/* Espacio abajo del título */}
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

    <button type="submit" className="btn btn-primary btn-block mb-3">Login</button> {/* Espacio abajo del botón */}

    <div className="form-group d-flex align-items-center justify-content-center">
          <p className="mb-0">Konturik ez?</p> {/* El texto sin margen debajo */}
          <button type="button" className="btn btn-link ml-2">Erregistratu</button> {/* El botón con margen izquierdo */}
        </div>
      </form>
    </div>

  );
}

export default Login;
