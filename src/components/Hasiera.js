import React from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import bat from "../images/LezoFrontoia.jpg";
import bi from "../images/Tinder-Emblem.png";
import hiru from "../images/urnietafrontoia.jpg";
import { useNavigate } from "react-router-dom";

function Hasiera() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Nav />

      {/* Main */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">TINDERKETE</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua.
            Jolastu frontoian eta trinketean erraz, talde irekiak edo itxiak sortuz eta
            tokiak erreserbatuz. Ezagutu zale amorratuak eta hasi parte hartzen!
          </p>
          <button
            className="mt-8 px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-gray-100"
            onClick={() => navigate("/register")}
          >
            Erregistratu orain
          </button>
        </div>
      </section>

      {/* Section izenburu */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Ezagutu Aplikazioa</h2>
          <p className="text-gray-600 mt-4">
            Gure helburua da euskal kirolak errazago egiteko plataforma profesional bat eskaintzea.
          </p>
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontoia */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={bat}
              alt="Lezo Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lezo Frontoia</h3>
              <p className="text-gray-600">
                Egin zure erreserba eta jolastu leku historiko batean, beti eskuragarri.
              </p>
            </div>
          </div>

          {/* Tinder */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 h-48">
              <img
                src={bi}
                alt="Tinder Emblem"
                className="w-32 h-32 object-contain rounded-full bg-white p-2"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Partida Taldeak</h3>
              <p className="text-gray-600">
                Sortu eta batu taldeetan, ezagutu beste jokalariak eta hasi jolasten.
              </p>
            </div>
          </div>

          {/* Trinketeak */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hiru}
              alt="Urnieta Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Urnieta Frontoia</h3>
              <p className="text-gray-600">
                Erreserbatu erraz eta gozatu modernitate eta tradizioa uztartzen dituen frontoian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Komunitatea */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Egin bat Komunitatearekin!</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Euskal kiroletan aritzeko lagunik aurkitu nahi? Erregistratu gaur eta hasi zure esperientzia!
          </p>
          <button
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow hover:bg-gray-100 transition"
            onClick={() => navigate("/register")}
          >
            Erregistratu orain
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hasiera;
