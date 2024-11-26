import React from "react";
import EventCard from "./EventCard"; // Asegúrate de que la ruta sea correcta


const Txapelketak = () => {
  // Lista de eventos
  const events = [
    {
      title: "Frontoi Txapelketa!",
      location: "Frontoia",
      date: "Irailak 23",
      time: "16:00",
      description: "Sariak, musika, jokoak...",
      participants: 3,
      maxParticipants: 24,
      price: 20,
      image: "https://via.placeholder.com/50", // Sustituye con imágenes reales
      participantImages: [
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
      ],
    },
    {
      title: "Trinkete Txapelketa!",
      location: "Trinketea",
      date: "Urriak 12",
      time: "12:00",
      description: "Sariak, musika, jokoak...",
      participants: 3,
      maxParticipants: 32,
      price: 15,
      image: "https://via.placeholder.com/50",
      participantImages: [
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
      ],
    },
    {
      title: "Pista Ekitaldia",
      location: "Pista Handia",
      date: "Azaroak 5",
      time: "10:00",
      description: "Partida interesgarriak eta giro aparta!",
      participants: 10,
      maxParticipants: 50,
      price: 10,
      image: "https://via.placeholder.com/50",
      participantImages: [
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Txapelketak</h1>
      <div className="row g-4">
        {events.map((event, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Txapelketak;
