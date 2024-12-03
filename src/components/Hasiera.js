import React from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import bat from "../images/LezoFrontoia.jpg";
import bi from "../images/Tinder-Emblem.png";
import hiru from "../images/urnietafrontoia.jpg";
import { useNavigate } from 'react-router-dom';

function Hasiera() { 
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">

      <Nav />


      <div className="flex-grow bg-gray-50 ">
        <div className="container mx-auto px-6 pt-10">

          <div className="flex justify-center mb-8">
            <h1 className="text-5xl font-extrabold text-center text-gray-800">
              TINDERKETE
            </h1>
          </div>

          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua. Batzuetan zaila izan daiteke
              trinketean eta frontoian jolastea, jende asko egoten baita. Aplikazio honi esker, erreserbak eta "partida
              taldeak" sortu ahal izango dira, bai talde irekiak eta bai talde itxiak. Horrez gain, jende berria
              ezagutzeko aukera eta tokiak erreserbatzeko modu errazago bat lortu nahi da.
            </p>
          </div>

          {/* Imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <img
                src={bat}
                alt="Lezo Frontoia"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="text-center">
              <img
                src={bi}
                alt="Tinder Emblem"
                className="w-full h-64 object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <img
                src={hiru}
                alt="Urnieta Frontoia"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-blue-50 bg-gray-800 py-10 rounded-lg shadow-lg mb-5">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-800 text-white mb-6">
                Egin bat Komunitatearekin!
              </h2>
              <p className="text-lg text-gray-600 text-gray-300 max-w-2xl mx-auto mb-6">
                Euskal kiroletan aritzeko lagunik aurkitu nahi?
                Erregistratu gaur eta sartu instalazio onenetan, ezagutu
                zale amorratuak, eta zure partidak erreserbatu.
                Erraza da!
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition" onClick={() => navigate('/register')}>
                Erregistratu orain
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hasiera;
