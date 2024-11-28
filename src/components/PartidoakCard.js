import React, { useState } from "react";
import p1 from "../images/pertsona1.jpg";
import p2 from "../images/pertsona2.jpg";
import libre from "../images/libre.png";
import "./PartidoakCard.css"; // Importa el archivo CSS personalizado

function PartidoakCard() {
  const [reservations, setReservations] = useState([
    {
      date: "Gaur",
      time: "20:00",
      sport: "Frontoia",
      location: "Antigua",
      players: [
        { name: "Oihan", image: p1 },
        { name: "Leire", image: p2 },
      ],
      availableSpots: 2, // LIBRE spots
      price: "11,74€",
      duration: "90 minututu",
    },
  ]);

  return (
    <div className="container-custom">
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
  );
}

export default PartidoakCard;
