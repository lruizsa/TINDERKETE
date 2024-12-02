import React, { useState } from 'react';
import './style.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Izen Abizenak: ${name}, Email: ${email}, Pasahitza: ${password}, Jaiotze-data: ${birthdate}`);
    navigate('/login');  
  };

  return (
    <>
      <header className='bg-gray-800'></header>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
        {/* Logo container with margin */}
        <div className="mb-[-5px]  z-10">
          <img 
            src={logo}
            alt="Logo"
            className="w-24 h-24"
          />
        </div>

        {/* Card container */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-[-40px]">
          <h2 className="text-2xl font-bold text-center mb-6 mt-10">Erregistroa</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-gray-700">Izen Abizenak</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sartu izen-abizenak"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sartu email-a"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-700">Pasahitza</label>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sartu pasahitza"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="birthdate" className="mb-1 text-gray-700">Jaiotze-data</label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Erregistratu
            </button>

            <div className="flex justify-center items-center mt-10">
              <p className="mr-2 text-gray-600">Kontu bat baduzu?</p>
              <p 
                type="button" 
                className="text-sm text-blue-600 cursor-pointer hover:underline" 
                onClick={() => navigate('/login')}
              >
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
