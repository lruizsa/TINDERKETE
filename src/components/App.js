import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Erregistratu';
import ErreserbakForm from './ErreserbakForm';
import TestPage from './TestPage'; 
import Txapelketak from './Txapelketak'; 
import Produktuak from './Produktuak';
import Hasiera from './Hasiera';
import PartidoakCard from './PartidoakCard'; 
import PerfilaIkusi from './PerfilaIkusi'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Kontaktu from './Kontaktuacomp';
import MapaLista from './MapaLista';
import TxapelketaSortu from './TxapelketaSortu';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";  // Importa el hook useTranslation
import '../i18n';  // Asegúrate de que i18n está configurado correctamente


function App() {
  const { t, i18n } = useTranslation();  // Usa el hook useTranslation para acceder a la función t y i18n

  // Función para cambiar de idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      {/* Selector de idioma */}
      <div className="language-selector">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('eu')}>Euskera</button>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/erreserbak" element={<ErreserbakForm />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/txapelketak" element={<Txapelketak />} /> 
        <Route path="/produktuak" element={<Produktuak />} /> 
        <Route path="/" element={<Hasiera />} />
        <Route path="/partidoakCard" element={<PartidoakCard />} />
        <Route path="/kontaktua" element={<Kontaktu />} />
        <Route path="/mapalista" element={<MapaLista />} />
        <Route path="/txapelketasortu" element={<TxapelketaSortu />} />  
        <Route path="/mapalista" element={<MapaLista />} />  
        <Route path="/perfila" element={<PerfilaIkusi />} />  
      </Routes>
    </Router>
  );
}

export default App;
