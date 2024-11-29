import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import agi from '../images/agi.png';
import tinder from '../images/Tinder-Emblem.png';
import logoImage from '../images/1361728.png';
import './navar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado del sidebar
  const location = useLocation(); // Para saber la ruta activa
  const navigate = useNavigate(); // Para redirigir al hacer logout

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : ''; // Clase activa según la ruta
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Abre o cierra el menú hamburguesa
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú hamburguesa al hacer clic en un enlace
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Abre o cierra el sidebar
  };

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login'); // Redirige a la página de inicio
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <p className="navbar-brand ml-auto">
            <img src={agi} alt="logo" className="tinder" />
            <p className="d-flex justify-content-center">Oaginaga23</p>
          </p>
          <br />
          <Link to="/contact" onClick={toggleSidebar}>Perfila</Link>
          <br />
          <Link className="navbar-brand ml-auto" to="/">
            <img src={tinder} alt="logo" className="tinder" />
            <p className="d-flex justify-content-center">Txat-a</p>
          </Link>
          <br />
          <Link to="#" onClick={handleLogout}>Logout</Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand ml-auto" to="/login">
            <img src={logo} alt="logo" className="logoa" />
            <span className="navbar-title">Tinderkete</span>
          </Link>

          {/* Botón de hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú desplegable */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${getActiveClass('/')}`}>
                <Link className="nav-link" to="/" onClick={closeMenu}>Gutaz</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/erreserbak')}`}>
                <Link className="nav-link" to="/erreserbak" onClick={closeMenu}>Erreserbak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/txapelketak')}`}>
                <Link className="nav-link" to="/txapelketak" onClick={closeMenu}>Txapelketak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/PartidoakCard')}`}>
                <Link className="nav-link" to="/PartidoakCard" onClick={closeMenu}>Partiduak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/MapaLista')}`}>
                <Link className="nav-link" to="/MapaLista" onClick={closeMenu}>Mapa</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/produktuak')}`}>
                <Link className="nav-link" to="/produktuak" onClick={closeMenu}>Produktuak</Link>
              </li>
              <li className={`nav-item ${getActiveClass('/kontaktua')}`}>
                <Link className="nav-link" to="/kontaktua" onClick={closeMenu}>Kontaktua</Link>
              </li>       
              <li>
              <Link className="navbar-brand ml-auto" to="#" onClick={toggleSidebar}>
                <img src={logoImage} alt="1361728" className="profile-logo mx-auto" />
              </Link>
              </li>   

            </ul>
          </div>

          {/* Sidebar toggle */}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
