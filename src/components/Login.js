import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; // Asegúrate de tener la ruta correcta

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const predefinedEmail = 'adibidea@tinderkete.com';
  const predefinedPassword = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === predefinedEmail && password === predefinedPassword) {
      navigate('/'); // Redirige al home
    } else {
      alert('Erabiltzailea edo pasahitza gaizki sartu dira.');
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 py-4"> </header>

      {/* Main Content */}
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative min-h-[500px] mt-[-95px]">

          {/* Logo */}
          <div className="flex justify-center mb-6 relative">
            <img src={logo} alt="Logo" className="h-24 w-24 mb-4 absolute top-[-90px]" />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sartu emaila"
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Pasahitza</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sartu pasahitza"
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Login Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Login
              </button>
            </div>

            <div className="flex justify-center items-center mt-10">
              <p className="mr-2 text-sm text-gray-600">Konturik ez?</p>
              <p
                onClick={() => navigate('/register')}
                className="text-sm text-blue-600 cursor-pointer hover:underline"
              >
                Erregistratu
              </p>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
