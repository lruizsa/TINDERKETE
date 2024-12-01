import React, { useState } from "react";
import p1 from "../images/pertsona1.jpg";
import p2 from "../images/pertsona2.jpg";
import libre from "../images/libre.png";
import Nav from './Navbar.js'; 
import Footer from './Footer.js';
import "./PartidoakCard.css"; // Importa el archivo CSS personalizado

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
    },
  ]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <h1 className="text-center mt-4 mb-2">Partiduak</h1>
      <div className="container-custom flex-grow-1 mt-4">
        
        {reservations.map((reservation, index) => (
          <div className="card-custom" key={index}>
            <div className="card-header">
              <div className="azpi-header">
                <p className="date-time">
                  {reservation.date} | {reservation.time}
                </p>
                <p className="sport">{reservation.sport}</p>
              </div>
            </div>

            {/* Línea horizontal encima de los jugadores */}
            <hr className="horizontal-line" />

            {/* Jugadores y lugares libres */}
            <div className="players-container">
              {reservation.players.map((player, idx) => (
                <div key={idx} className="player-box">
                  <img src={player.image} alt={player.name} />
                  <span>{player.name}</span>
                </div>
              ))}

              {/* Separador vertical */}
              <div className="separator"></div>

              {/* Espacios libres */}
              {[...Array(reservation.availableSpots)].map((_, idx) => (
                <div key={`libre-${idx}`} className="spot-box">
                  <img src={libre} alt="Libre" />
                  <span>Libre</span>
                </div>
              ))}
            </div>

            {/* Línea horizontal debajo de los jugadores */}
            <hr className="horizontal-line" />

            <div className="location-price-duration">
              <p className="location">{reservation.location}</p>
              <div className="separator"></div>
              <div className="price-duration">
                <p className="price">{reservation.price}</p>
                <p className="duration">{reservation.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default PartidoakCard;
