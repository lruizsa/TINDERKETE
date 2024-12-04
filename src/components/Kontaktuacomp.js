import React, { useState } from 'react';
import Nav from './Navbar.js'; 
import Footer from './Footer.js';

function Kontaktu() {
  const [izen, setIzen] = useState('');
  const [email, setEmail] = useState('');
  const [telefonoa, setTelefonoa] = useState('');
  const [mezua, setMezua] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { izen, email, telefonoa, mezua });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="container mx-auto flex-grow px-4 py-8"> {/* Se asegura que el contenido crezca y el footer quede abajo */}
      <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Jarri gurekin kontaktuan</h1>
          <p className="text-xl mt-2 text-gray-600">Ez gelditu gogoekin!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de nombre */}
          <div className="mb-4">
            <label htmlFor="izen" className="block text-sm font-medium text-gray-700">Izen abizenak</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              id="izen"
              value={izen}
              onChange={(e) => setIzen(e.target.value)}
              placeholder="Sartu izen abizenak"
              required
            />
          </div>

          {/* Campo de email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email-a</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Idatzi email-a"
              required
            />
          </div>

          {/* Campo de teléfono */}
          <div className="mb-4">
            <label htmlFor="telefonoa" className="block text-sm font-medium text-gray-700">Telefonoa</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              id="telefonoa"
              value={telefonoa}
              onChange={(e) => setTelefonoa(e.target.value)}
              placeholder="Idatzi telefonoa"
              required
            />
          </div>

          {/* Campo de mensaje */}
          <div className="mb-4">
            <label htmlFor="mezua" className="block text-sm font-medium text-gray-700">Mezua</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              id="mezua"
              value={mezua}
              onChange={(e) => setMezua(e.target.value)}
              placeholder="Idatzi zure mezua"
              required
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Bidali
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Kontaktu;
