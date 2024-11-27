import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "../images/pertsona1.jpg";
import p2 from "../images/pertsona2.jpg";
import libre from "../images/libre.png";

function PartidoakCard() {
  const [reservations, setReservations] = useState([
    {
      date: "Gaur",
      time: "20:00",
      location: "Frontoia",
      players: [
        { name: "Oihan", image: p1 }, // Associate image with player name
        { name: "Leire", image: p2 },
      ],
      availableSpots: 2, // LIBRE spots
      price: "11,74€",
      duration: "90 minututu",
    },
    // You can add more reservations here
  ]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Render each reservation */}
        {reservations.map((reservation, index) => (
          <div className="col-md-3" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                {/* Reservation details */}
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="m-0">
                      <strong>
                        {reservation.date} | {reservation.time}
                      </strong>
                    </p>
                    <p className="m-0">{reservation.location}</p>
                  </div>
                  <div>
                    {/* Price and Duration */}
                    <p className="m-0">{reservation.price}</p>
                    <p className="m-0">{reservation.duration}</p>
                  </div>
                </div>

                {/* Players */}
                <div className="d-flex mt-3">
                  {reservation.players.map((player, index) => (
                    <div
                      key={index}
                      className="mr-2 d-flex flex-column align-items-center"
                    >
                      <img
                        src={player.image} 
                        alt={player.name}
                        className="rounded-circle px-1"
                        style={{ width: "50px", height: "40px" }}
                      />
                      <span>{player.name}</span>
                    </div>
                  ))}

                  {/* Reemplazar botones con imagen + texto LIBRE */}
                  <div className="mt-3">
                    {[...Array(reservation.availableSpots)].map((_, idx) => (
                      <div
                        key={index}
                        className="mr-2 d-flex flex-column align-items-center"
                      >
                        <img
                          src={libre} 
                          alt="libre"
                          className="rounded-circle px-1"
                          style={{ width: "50px", height: "40px" }}
                        />
                        <span>Libre</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartidoakCard;
