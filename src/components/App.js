import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Erregistratu';
import ErreserbakForm from './ErreserbakForm';
import TestPage from './TestPage'; 
import Txapelketak from './Txapelketak'; 
import Produktuak from './Produktuak';
import Hasiera from './Hasiera';
import PartidoakCard from './PartidoakCard'; 
import Kontaktu from './Kontaktuacomp';
import MapaLista from './MapaLista';





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
      </Routes>
    </Router>
  );
}

export default App;
