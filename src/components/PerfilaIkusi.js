import React, { useState } from 'react';
import PerfilaCard from './PerfilaCard.js';
import image1 from '../images/agi.png';
import Nav from './Navbar.js';
import Footer from './Footer.js';
import UserProfileTable from './UserProfileTable';

const Perfila = () => {
  const [user, setUser] = useState({
    image: image1,
    izena: 'Oihan',
    abizenak: 'Aginaga',
    email: 'Oaginaga@tinderkete.eus',
    jaiotzeData: '1995-07-20',
    jaioterria: 'Oiartzun',
    telefonoa: '654936542',
    created_at: '2023-01-01T12:34:56',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleImageChange = (newImage) => {
    setUser((prevUser) => ({
      ...prevUser,
      image: newImage,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Profila</h1>
          <p className="text-xl mt-2 text-gray-600">Ikusi eta editatu zure erabiltzailearen informazioa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          <div className="w-full sm:w-3/4">
            <PerfilaCard image={user.image} onImageChange={handleImageChange} />
          </div>

          <div className="w-full sm:w-3/4">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
                <div>
                  <label htmlFor="izena" className="block font-bold text-gray-700">Izena</label>
                  <input
                    type="text"
                    id="izena"
                    name="izena"
                    value={user.izena}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="abizenak" className="block font-bold text-gray-700">Abizenak</label>
                  <input
                    type="text"
                    id="abizenak"
                    name="abizenak"
                    value={user.abizenak}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-bold text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="jaiotzeData" className="block font-bold text-gray-700">Jaiotze Data</label>
                  <input
                    type="date"
                    id="jaiotzeData"
                    name="jaiotzeData"
                    value={user.jaiotzeData}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="jaioterria" className="block font-bold text-gray-700">Jaioterria</label>
                  <input
                    type="text"
                    id="jaioterria"
                    name="jaioterria"
                    value={user.jaioterria}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="telefonoa" className="block font-bold text-gray-700">Telefonoa</label>
                  <input
                    type="text"
                    id="telefonoa"
                    name="telefonoa"
                    value={user.telefonoa}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Gorde
                  </button>
                </div>
              </form>
            ) : (
              <UserProfileTable user={user} onEditClick={handleEditClick} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfila;
