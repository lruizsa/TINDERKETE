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
import React from "react";
//import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import englishContent from "./lang/en.json";
// import spanishContent from "./lang/es.json";

// i18n.use(initReactI18next).init({
//     resources: {
//         en: englishContent,
//         es: spanishContent,
//     },

//     fallbackLng: "en",

//     interpolation: {
//         escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     },
// });



function App() {
  return (
    <Router>
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
