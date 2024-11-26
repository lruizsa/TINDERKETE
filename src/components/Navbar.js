import React, { useState } from 'react';
import logo from '../images/logo.png'; 
import agi from '../images/agi.png'; 
import tinder from '../images/Tinder-Emblem.png'; 
import logoImage from '../images/1361728.png'; 
import './navar.css';

function Navbar() {
  // Estado para manejar la visibilidad de la barra lateral
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Función para alternar la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Cambia el valor del estado
  };

  return (
    <div>
      {/* Barra lateral */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p className="navbar-brand ml-auto"> 
            <img src={agi} alt="logo" className="tinder" />
            <p class="d-flex justify-content-center">Oaginaga23</p>
          </p><br></br>
        
          <a href="/contact">Perfila</a><br></br>
        
          <a className="navbar-brand ml-auto" href="/"> 
            <img src={tinder} alt="logo" className="tinder" />
            <p class="d-flex justify-content-center">Txat-a</p>
          </a><br></br>
          <a href="/contact">Logout</a>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand ml-auto" href="/"> 
            <img src={logo} alt="logo" className="logoa" />
            <span className="navbar-title">Tinderkete</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">Gutaz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">Erreserbak</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Txapelketak</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Partiduak</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Mapa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Produktuak</a>
              </li>
            </ul>
          </div>

        {/* Emoticono de perfil para abrir la barra lateral */}
        <a className="navbar-brand ml-auto" href="#" onClick={toggleSidebar}>
            <img src={logoImage} alt="1361728" className="profile-logo" />
        </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
