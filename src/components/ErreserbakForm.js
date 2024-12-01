import React, { useState } from "react";
import Nav from './Navbar.js'; 
import Footer from './Footer.js';

function Erreserbak() {
  const [sportType, setSportType] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [reservations, setReservations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      sportType,
      playerCount,
      location,
      time,
      isPublic, 
    };
    setReservations([...reservations, newReservation]);
  };

  return (
    <div className="flex flex-col min-h-screen"> 
      <Nav />
      <div className="container mx-auto flex-grow mt-10 px-4"> 
        <div className="flex flex-wrap -mx-4">
          
          {/* Form Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <h5 className="text-xl font-bold mb-6 text-center">ERRESERBA EGIN</h5>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-700">Kirol mota</label>
                  <input
                    type="text"
                    value={sportType}
                    onChange={(e) => setSportType(e.target.value)}
                    placeholder="Sartu kirol mota"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Jokalari kopurua</label>
                  <input
                    type="number"
                    value={playerCount}
                    onChange={(e) => setPlayerCount(e.target.value)}
                    placeholder="Jokalari kopurua"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Lokalekua</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Lokalekua"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Ordua</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={() => setIsPublic(!isPublic)}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400"
                  />
                  <label className="ml-2 text-gray-700">Publikoa egin</label>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Sartu
                </button>
              </form>
            </div>
          </div>

          {/* Reservations List */}
          <div className="w-full md:w-2/3 px-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <h5 className="text-xl font-bold mb-6 text-center">ZURE ERRESERBAK</h5>
              <ul className="space-y-4">
                {reservations.map((reservation, index) => (
                  <li key={index} className="p-4 border-b border-gray-200">
                    <strong className="text-lg">{reservation.sportType}</strong>
                    <p className="text-gray-600">{reservation.playerCount} Jokalari</p>
                    <p className="text-gray-600">{reservation.location} - {reservation.time}</p>
                    <p className="text-gray-700">
                      {reservation.isPublic ? "Publikoa" : "Pribatua"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Erreserbak;
