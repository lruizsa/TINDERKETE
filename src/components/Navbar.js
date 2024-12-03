import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import agi from '../images/agi.png';
import tinder from '../images/Tinder-Emblem.png';
import logoImage from '../images/1361728.png';
import '../components/navar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado del sidebar
  const location = useLocation(); // Para saber la ruta activa
  const navigate = useNavigate(); // Para redirigir al hacer logout

  const getActiveClass = (path) => {
    return location.pathname === path ? 'bg-amber-500 rounded-md text-white' : 'text-gray-300';
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
    <div className="relative sticky top-0 z-50 shadow-lg">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-full transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform`}
      >
        <div className="p-4">
          <p className="text-center mb-4">
            <img src={agi} alt="logo" className="mx-auto mb-2 w-16 h-16" />
            <p>Oaginaga23</p>
          </p>
          <Link
            to="/contact"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Perfila
          </Link>
          <Link
            to="/"
            className="block py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <img src={tinder} alt="logo" className="mx-auto mb-2 w-16 h-16" />
            <p className="text-center">Txat-a</p>
          </Link>
          <Link
            to="#"
            className="block py-2 hover:bg-gray-700"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link className="flex items-center" to="/">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 sm-w-16 sm-h-16 mr-2 flame-effect rounded-full"
            />
          </Link>
          <h1 className="text-white font-bold text-3xl no-underline">
            Tinderkete
          </h1>

          {/* Menú hamburguesa */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div
            className={`lg:flex space-x-6 ${
              menuOpen ? 'block' : 'hidden'
            } flex items-center justify-center mt-3`}
          >
            <ul className="flex space-x-4">
              <li className={`nav-item ${getActiveClass('/')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/"
                  onClick={closeMenu}
                >
                  Gutaz
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/erreserbak')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/erreserbak"
                  onClick={closeMenu}
                >
                  Erreserbak
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/txapelketak')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/txapelketak"
                  onClick={closeMenu}
                >
                  Txapelketak
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/PartidoakCard')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/PartidoakCard"
                  onClick={closeMenu}
                >
                  Partiduak
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/MapaLista')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/MapaLista"
                  onClick={closeMenu}
                >
                  Mapa
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/produktuak')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/produktuak"
                  onClick={closeMenu}
                >
                  Produktuak
                </Link>
              </li>
              <li className={`nav-item ${getActiveClass('/kontaktua')}`}>
                <Link
                  className="nav-link py-2 px-4 hover:bg-gray-700 rounded-md"
                  to="/kontaktua"
                  onClick={closeMenu}
                >
                  Kontaktua
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar toggle */}
          <button className="lg:block hidden" onClick={toggleSidebar}>
            <img
              src={logoImage}
              alt="1361728"
              className="w-12 h-12 rounded-full bg-amber-500 p-1"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
