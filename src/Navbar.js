import React from 'react';
import logo from './logo.png'; 
import './navar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo align-top" />
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
      </div>
    </nav>
  );
}

export default Navbar;
