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
    setIsEditing(false); // Stop editing after form submission
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
      <div className="container mx-auto mt-12 mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-center text-blue-600">Profila</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <PerfilaCard image={user.image} onImageChange={handleImageChange} />
          </div>

          <div className="w-full sm:w-3/4 lg:w-full">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="izena" className="block font-bold">Izena</label>
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
                  <label htmlFor="abizenak" className="block font-bold">Abizenak</label>
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
                  <label htmlFor="email" className="block font-bold">Email</label>
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
                  <label htmlFor="jaiotzeData" className="block font-bold">Jaiotze-Data</label>
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
                  <label htmlFor="jaioterria" className="block font-bold">Jaioterria</label>
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
                  <label htmlFor="telefonoa" className="block font-bold">Telefonoa</label>
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
                  <button type="submit" className="btn btn-primary">Guardar cambios</button>
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
