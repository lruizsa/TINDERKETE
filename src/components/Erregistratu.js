import React, { useState } from 'react';
import './style.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState(''); // Añadido el estado para apellidos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificación de que la contraseña y su confirmación coincidan
    if (password !== passwordConfirmation) {
      alert('Pasahitzak ez dira bat etorri');
      return;
    }

    const userData = {
      izena: name, // Nombre
      abizenak: lastName, // Apellidos, que provienen del nuevo campo
      email: email,
      pasahitza: password,
      pasahitza_confirmation: passwordConfirmation,
      jaiotzeData: birthdate,
    };

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Erabiltzailea ongi sortu da.');
        navigate('/login');
      } else {
        alert('Errorea: ' + JSON.stringify(data.Errorea));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Errorea gertatu da');
    }
  };

  return (
    <>
      <header className="bg-gray-800 py-4"> </header>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative min-h-[500px] mt-[-95px]">

            {/* Logo */}
            <div className="flex justify-center mb-6 relative">
              <img src={logo} alt="Logo" className="h-24 w-24 mb-4 absolute top-[-90px]" />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-6">Erregistratu</h2>

            <form onSubmit={handleSubmit}>

              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Izen Abizenak</label>
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

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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

              <div className="flex flex-col mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Pasahitza</label>
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

              <div className="flex flex-col mb-6">
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Jaiotze-data</label>
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                  Erregistratu
                </button>
              </div>

              <div className="flex justify-center items-center mt-10">
                <p className="mr-2 text-sm text-gray-600">Kontu bat baduzu?</p>
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
