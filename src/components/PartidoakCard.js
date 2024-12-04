import React, { useState } from "react";
import p1 from "../images/mikel.jpg";
import p2 from "../images/ane.jpg";
import agi from "../images/agi.png"
import libre from "../images/libre.png";
import Nav from './Navbar.js';
import Footer from './Footer.js';

function PartidoakCard() {
  const [reservations] = useState([
    {
      date: "Gaur",
      time: "20:00",
      sport: "Frontoia",
      location: "Antigua",
      players: [
        { name: "Oihan", image: p1 },
        { name: "Leire", image: p2 },
      ],
      availableSpots: 2,
      price: "11,74€",
      duration: "90 minututu",
      type: "publiko"
    },
    {
      date: "Gaur",
      time: "18:00",
      sport: "Frontoia",
      location: "Antigua",
      players: [
        { name: "Oihan", image: agi },
        { name: "Leire", image: p2 },
      ],
      availableSpots: 2,
      price: "9,74€",
      duration: "60 minututu",
      type: "publiko"
    },
    {
      date: "Bihar",
      time: "18:30",
      sport: "Trinketea",
      location: "Sagues",
      players: [
        { name: "Jon", image: p1 },
        { name: "Ane", image: p2 },
      ],
      availableSpots: 2,
      price: "15,00€",
      duration: "60 minututu",
      type: "pribatu"
    },
    {
      date: "Bihar",
      time: "20:30",
      sport: "Trinketea",
      location: "Sagues",
      players: [
        { name: "Jon", image: p1 },
        { name: "Ane", image: p2 },
      ],
      availableSpots: 2,
      price: "20,00€",
      duration: "60 minututu",
      type: "pribatu"
    },
    {
      date: "Etzi",
      time: "17:00",
      sport: "Frontoia",
      location: "Loiola",
      players: [
        { name: "Mikel", image: agi },
        { name: "Irati", image: p2 },
      ],
      availableSpots: 2,
      price: "10,50€",
      duration: "120 minututu",
      type: "publiko"
    },
    {
      date: "Etzi",
      time: "17:00",
      sport: "Frontoia",
      location: "Loiola",
      players: [
        { name: "Mikel", image: p1 },
        { name: "Irati", image: p2 },
      ],
      availableSpots: 2,
      price: "10,50€",
      duration: "120 minututu",
      type: "publiko"
    },
    {
      date: "Etzi",
      time: "17:00",
      sport: "Frontoia",
      location: "Loiola",
      players: [
        { name: "Mikel", image: agi },
        { name: "Irati", image: p2 },
      ],
      availableSpots: 2,
      price: "10,50€",
      duration: "120 minututu",
      type: "publiko"
    }
  ]);

  const [activeList, setActiveList] = useState('publiko');

  const filteredReservations = reservations.filter(reservation => reservation.type === activeList);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="px-4 py-8">
        <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Partidu publiko eta pribatuak</h1>
        <p className="text-xl mt-2 text-gray-600">Aukeratu partidu pribatu edo publiko batean izena eman nahi duzun.</p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveList('publiko')}
          className={`px-6 py-2 rounded-lg ${activeList === 'publiko' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          Publikoak
        </button>
        <button
          onClick={() => setActiveList('pribatu')}
          className={`px-6 py-2 rounded-lg ${activeList === 'pribatu' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          Pribatuak
        </button>
      </div>

      {/* Grid de tarjetas responsive */}
      <div className="container mx-auto flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredReservations.map((reservation, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            {/* Encabezado con fecha y deporte */}
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-sm text-gray-500">
                {reservation.date} | {reservation.time}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {reservation.sport}
              </p>
            </div>

            <hr className="my-2 border-gray-300" />

            {/* Jugadores y espacios libres */}
            <div className="flex items-center">
              {reservation.players.map((player, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center mr-2 text-center"
                >
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-16 h-16 rounded-full mb-1"
                  />
                  <span className="text-xs text-gray-700">{player.name}</span>
                </div>
              ))}

              <div className="border-l border-gray-300 mx-2 h-10"></div>

              {[...Array(reservation.availableSpots)].map((_, idx) => (
                <div
                  key={`libre-${idx}`}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={libre}
                    alt="Libre"
                    className="w-16 h-16 rounded-full mb-1 cursor-pointer"
                    onClick={() => {}}
                  />
                  <span className="text-xs text-gray-500">Libre</span>
                </div>
              ))}
            </div>

            <hr className="my-2 border-gray-300" />

            {/* Ubicación, precio y duración */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">{reservation.location}</p>
              <div className="text-right">
                <p className="text-base font-semibold text-gray-800">
                  {reservation.price}
                </p>
                <p className="text-xs text-gray-500">{reservation.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8"></div>
      <Footer />
    </div>
  </div>
      
  );
}

export default PartidoakCard;
