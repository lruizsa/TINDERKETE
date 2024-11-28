import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Erregistratu';
import ErreserbakForm from './ErreserbakForm';
import TestPage from './TestPage'; 
import Txapelketak from './Txapelketak'; 
import Produktuak from './Produktuak';
import Hasiera from './hasiera';
import PartidoakCard from './PartidoakCard'; 
import ContactForm from './kontaktuacomp'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Kontaktu from './kontaktuacomp';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/erreserbak" element={<ErreserbakForm />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/txapelketak" element={<Txapelketak />} /> 
        <Route path="/produktuak" element={<Produktuak />} /> 
        <Route path="/hasiera" element={<Hasiera />} />
        <Route path="/partidoakCard" element={<PartidoakCard />} />
        <Route path="/kontaktua" element={<Kontaktu />} />  
      </Routes>
    </Router>
  );
}

export default App;
