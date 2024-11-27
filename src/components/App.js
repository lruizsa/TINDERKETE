import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './erregistratu';
import ErreserbakForm from './erreserbakForm';
import TestPage from './TestPage'; 
import Txapelketak from './txapelketak'; // Importamos el componente Txapelketak
import Produktuak from './produktuak'; // Importa el componente Products


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

      </Routes>
    </Router>
  );
}

export default App;
