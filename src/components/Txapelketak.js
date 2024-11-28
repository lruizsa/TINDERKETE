import React from "react";
import EventCard from "./EventCard"; 
import urnietafrontoiaImg from "../images/urnietafrontoia.jpg";
import lezoFrontoiaImg from "../images/LezoFrontoia.jpg";
import zestoaFrontoiaImg from "../images/zestoafrontoia.jpg";
import agi from '../images/agi.png'; 
import p1 from '../images/pertsona1.jpg'; 
import p2 from '../images/pertsona2.jpg'; 
import Nav from './Navbar.js'; 
import Footer from './Footer.js';
import './txapelketak.css';

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
      image: urnietafrontoiaImg, 
      participantImages: [
        agi,
        p1,
        p2,
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
      image: lezoFrontoiaImg,
      participantImages: [
        p1,
        p2,
        agi,
      ],
    },
    {
      title: "Frontenis trinkete txapelketa!",
      location: "Pista Handia",
      date: "Azaroak 5",
      time: "10:00",
      description: "Partida interesgarriak eta giro aparta!",
      participants: 1,
      maxParticipants: 50,
      price: 10,
      image: zestoaFrontoiaImg,
      participantImages: [
        p2,
      ],
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100"> {/* Flexbox para asegurarse de que ocupa toda la altura de la pantalla */}
      {/* Renderiza el Navbar */}
      <Nav />

      {/* Contenido principal */}
      <div className="container flex-grow-1 mt-5" style={{ marginBottom: '63px' }}> {/* Este div ahora ocupa el espacio restante */}
        <h1 className="text-center mb-4">Txapelketak</h1>
        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>

      {/* Renderiza el Footer */}
      <Footer />
    </div>
  );
};

export default Txapelketak;
