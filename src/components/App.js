import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Erregistratu';
import ErreserbakForm from './ErreserbakForm';
import TestPage from './TestPage'; 
import Txapelketak from './Txapelketak'; 
import Produktuak from './Produktuak';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Hasiera from './Hasiera';
import PartidoakCard from './PartidoakCard'; 
import PerfilaIkusi from './PerfilaIkusi'; 
import Kontaktu from './Kontaktuacomp';
import MapaLista from './MapaLista';
import TxapelketaSortu from './TxapelketaSortu';
import NavbarAdmin from './NavbarAdmin';
import HasieraAdmin from './HasieraAdmin';
import MapaListaSortu from './MapaListaSortu';
import ProduktuakSortu from './ProduktuakSortu';
import React, { useState } from "react";


function App() {
  
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Erabiltzailea admin baldin bada funtzionalitate bat geihago dago


  return (
    <Router>
      {/* Rutas */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/erreserbak" element={<ErreserbakForm />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/txapelketak" element={<Txapelketak />} /> 
        <Route path="/produktuak" element={<Produktuak />} />
        <Route path="/" element={<Hasiera />}/>
        <Route path="/partidoakCard" element={<PartidoakCard />} />
        <Route path="/kontaktua" element={<Kontaktu />} />
        <Route path="/mapalista" element={<MapaLista />} />
        <Route path="/txapelketasortu" element={<TxapelketaSortu />} />  
        <Route path="/perfila" element={<PerfilaIkusi />} />  
        <Route path="/navbaradmin" element={<NavbarAdmin />} />  
        <Route path="/hasieraadmin" element={<HasieraAdmin />} />  
        <Route path="/mapalistasortu" element={<MapaListaSortu />} />  
        <Route path="/produktuaksortu" element={<ProduktuakSortu />} />  
      </Routes>
    </Router>
  );
}

export default App;
