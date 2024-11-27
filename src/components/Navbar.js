import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation
import logo from '../images/logo.png'; 
import agi from '../images/agi.png'; 
import tinder from '../images/Tinder-Emblem.png'; 
import logoImage from '../images/1361728.png'; 
import './navar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual

  // Función para aplicar la clase 'active' si estamos en la ruta deseada
  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : ''; // Aplica 'active' si el path coincide
  };

  // Función para alternar la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Cambia el estado de la barra lateral
  };

  return (
    <div>
      {/* Barra lateral */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p className="navbar-brand ml-auto"> 
            <img src={agi} alt="logo" className="tinder" />
            <p className="d-flex justify-content-center">Oaginaga23</p>
          </p><br></br>
        
          <Link to="/contact">Perfila</Link><br></br>
        
          <Link className="navbar-brand ml-auto" to="/"> 
            <img src={tinder} alt="logo" className="tinder" />
            <p className="d-flex justify-content-center">Txat-a</p>
          </Link><br></br>
          <Link to="/contact">Logout</Link>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand ml-auto" to="/"> 
            <img src={logo} alt="logo" className="logoa" />
            <span className="navbar-title">Tinderkete</span>
          </Link>

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
              <li className={`nav-item ${getActiveClass('/hasiera')}`}>
                <Link className="nav-link" to="/hasiera">Gutaz</Link> {/* Enlace activo */}
              </li>
              <li className={`nav-item ${getActiveClass('/erreserbak')}`}>
                <Link className="nav-link" to="/erreserbak">Erreserbak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/txapelketak')}`}>
                <Link className="nav-link" to="/txapelketak">Txapelketak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/partiduak')}`}>
                <Link className="nav-link" to="/partiduak">Partiduak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/mapa')}`}>
                <Link className="nav-link" to="/mapa">Mapa</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/produktuak')}`}>
                <Link className="nav-link" to="/produktuak">Produktuak</Link>
              </li>
            </ul>
          </div>

          {/* Emoticono de perfil para abrir la barra lateral */}
          <Link className="navbar-brand ml-auto" to="#" onClick={toggleSidebar}>
            <img src={logoImage} alt="1361728" className="profile-logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
