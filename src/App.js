import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './erregistratu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
