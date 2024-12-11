import React from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import bat from "../images/LezoFrontoia.jpg";
import bi from "../images/Tinder-Emblem.png";
import hiru from "../images/urnietafrontoia.jpg";
import eskupilota from "../images/eskupilota.jpg";
import trinkete from "../images/trinkete.jpg";
import comingsoon from "../images/comingsoon.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import altuna from '../images/altuna.png';
import aldabe from '../images/aldabe.png';
import dario from '../images/dario.png';
import bikuna from '../images/bikuna.png';
import tenis from '../images/tenis.png';
import tenisneska from '../images/tenisneska.png';
import kirolaria from '../images/kirolaria.png';
import kirolarianeska from '../images/kirolarianeska.png';
import bikotea from '../images/Removal-512.png';
import bikoteneska from '../images/bikoteneska.png';
import bikotemutila from '../images/bikotemutila.png';
import pelotarihandia from '../images/pelotarihandia.png';
import zestapunta from '../images/zestapunta.png';






function Hasiera() {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Nav />

      {/* Main */}

      {/* <section className="w-full relative bg-gradient-to-r from-blue-400 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-6 text-center animate-jump-in animate-duration-1000">
          <h1 className="text-6xl font-extrabold mb-6">MATCH, CHAT, WIN!</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            {t('gutaz.main')}
          </p>
        </div>
      </section>     */}
     <div className="relative">
  <header className="relative flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-800 h-[20vh] md:h-[65vh] lg:h-100vh">
    <div className="absolute inset-0 flex justify-between items-center w-full">
      {/* Imagen izquierda */}
      <div className="relative w-1/3 h-full flex justify-center items-center">
        {/* Primer jugador (más centrado y arriba) */}
        <img
          className="absolute left-[0%] top-[20%] z-10 h-auto max-h-[100%] object-contain animate-fade-right"
          src={zestapunta} // Cambia por la ruta correcta
          alt="Altuna"
          fetchpriority="high"
        />
        {/* Segundo jugador */}
        <img
          className="absolute left-[35%] top-[10%] h-auto mt-[4.5] max-h-[90%] object-contain animate-fade-right animate-delay-300"
          src={tenisneska} // Cambia por la ruta correcta
          alt="Dario"
          fetchpriority="high"
        />
      </div>

      {/* Eslogan centrado */}
      <div className="relative z-20 text-center">
        <h1 className="font-boxing text-3xl lg:text-5xl font-bold text-white">
          <span
            className="bg-clip-text text-6xl text-transparent bg-gradient-to-b from-white via-gray-300 to-white"
          >
            MATCH, CHAT, WIN!
          </span>
        </h1>
      </div>

      {/* Imagen derecha */}
      <div className="relative w-1/3 h-full flex justify-center items-center">
        {/* Primer jugador (más centrado y arriba) */}
        <img
          className="absolute right-[-15%] top-[20%] z-10 h-auto max-h-[80%] object-contain animate-fade-left"
          src={bikotemutila} // Cambia por la ruta correcta
          alt="Aldabe"
          fetchpriority="high"
        />
        {/* Segundo jugador */}
        <img
          className="absolute top-[30%] right-[60%] h-auto max-h-[70%] object-contain animate-fade-left animate-delay-300"
          src={bikoteneska} // Cambia por la ruta correcta
          alt="Bikuna"
          fetchpriority="high"
        />
      </div>
    </div>
  </header>
</div>





      {/* Section izenburu */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 animate-fade-right">{t('gutaz.section')}</h2>
          <p className="text-gray-600 mt-4 animate-fade-up">
            {t('gutaz.section2')}
          </p>
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontoia */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up animate-duration-200">
            <img
              src={bat}
              alt="Lezo Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid1')}</h3>
              <p className="text-gray-600">
                {t('gutaz.grid1-1')}
              </p>
            </div>
          </div>

          {/* Tinder */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up animate-duration-1000">
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 h-48">
              <img
                src={bi}
                alt="Tinder Emblem"
                className="w-32 h-32 object-contain rounded-full bg-white p-2"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid2')}</h3>
              <p className="text-gray-600">
                {t('gutaz.grid2-2')}
              </p>
            </div>
          </div>

          {/* Trinketeak */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up animate-duration-[1700ms]">
            <img
              src={trinkete}
              alt="Urnieta Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid4')}</h3>
              <p className="text-gray-600">
                {t('gutaz.grid4-4')}
              </p>
            </div>
          </div>

          {/* PRODUKTUAK */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-up">
            <img
              src={eskupilota}
              alt="Urnieta Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid5')}</h3>
              <p className="text-gray-600">
              {t('gutaz.grid5-5')}
              </p>
            </div>
          </div>

          {/* URNIETAKO FRONTOIA */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hiru}
              alt="Urnieta Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid3')}</h3>
              <p className="text-gray-600">
                {t('gutaz.grid3-3')}
              </p>
            </div>
          </div>

          {/* COMING SOON */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={comingsoon}
              alt="Urnieta Frontoia"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
      

      {/* Komunitatea */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-400 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('gutaz.komunitatea')}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            {t('gutaz.komunitatea2')}
          </p>
          <button
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow hover:bg-gray-100 transition active:animate-jump-out focus:animate-jump-out"
            onClick={() => {
              // Espera 1 segundo antes de navegar
              setTimeout(() => {
                navigate("/register"); // Redirige después de la espera
              }, 500);
            }}
          >
            {t("gutaz.register")}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hasiera;
