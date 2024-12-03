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

const Txapelketak = () => {
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
    <div className="flex flex-col min-h-screen"> 
      <Nav />

      <div className="container mx-auto mt-10 mb-20">
        <h1 className="text-3xl font-semibold text-center mb-6">Txapelketak</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="col-span-1">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Txapelketak;
