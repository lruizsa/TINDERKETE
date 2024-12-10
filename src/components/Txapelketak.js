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
import { useTranslation } from "react-i18next";

const Txapelketak = () => {
const { t } = useTranslation();

  const events = [
    {
      title: t('txapelketa1.title'),
      location: t('txapelketa1.location'),
      date: t('txapelketa1.date'),
      time: "16:00",
      description: t('txapelketa1.description'),
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
      title: t('txapelketa2.title'),
      location: t('txapelketa2.location'),
      date: t('txapelketa2.date'),
      time: "16:00",
      description: t('txapelketa2.description'),
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
      title: t('txapelketa3.title'),
      location: t('txapelketa3.location'),
      date: t('txapelketa3.date'),
      time: "16:00",
      description: t('txapelketa3.description'),
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

      <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">{t('txapelketa.header')}</h1>
          <p className="text-xl mt-2 text-gray-600">{t('txapelketa.header2')}</p>
        </div>
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
