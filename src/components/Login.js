import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const predefinedEmail = 'oihanaginaga@gmail.com';
  const predefinedPassword = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin123';

    if (email === predefinedEmail && password === predefinedPassword) {
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('email', email);
      navigate('/');
    } else if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('email', email);
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header vacío para diseño */}
      <header className="bg-gray-800 py-4"></header>

      {/* Contenido principal */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">

          {/* Logo */}
          <div className="flex justify-center -mt-20 mb-6">
            <img src={logo} alt="Logo" className="h-24 w-24" />
          </div>

          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('login.email')}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('login.emailHolder')}
                required
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('login.password')}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('login.passHolder')}
                required
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Login
              </button>
            </div>

            <div className="flex justify-center items-center mt-10">
              <p className="mr-2 text-sm text-gray-600">{t('login.noAccount')}</p>
              <button
                type="button"
                className="text-sm text-blue-600 cursor-pointer mb-3 hover:underline"
                onClick={() => navigate('/register')}
              >
                {t('login.register')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;