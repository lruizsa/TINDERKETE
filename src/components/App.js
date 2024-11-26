import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './erregistratu';
import ErreserbakForm from './erreserbakForm';

import TestPage from './TestPage'; // Importamos la página de prueba

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para el registro */}
        <Route path="/register" element={<Register />} />
        <Route path="/erreserbak" element={<ErreserbakForm />} />

        {/* Ruta para la página de prueba */}
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
