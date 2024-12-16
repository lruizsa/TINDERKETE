import React, { useEffect } from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import bat from "../images/LezoFrontoia.jpg";
import bi from "../images/Tinder-Emblem.png";
import hiru from "../images/urnietafrontoia.jpg";
import eskupilota from "../images/eskupilota.jpg";
import trinkete from "../images/trinkete.jpg";
import comingsoon from "../images/comingsoon.jpg";
import bikoteatenis from "../images/bikotetenis.png";
import bikotea from "../images/bikotea.png";
import palaikono from "../images/palaikono.png";
import bikoteikono from "../images/bikoteikono.png";
import tenispelota from "../images/tenispelota.png";
import raketatenis from "../images/raketatenis.png";
import jaialaipala from "../images/jaialaipala.png";
import bikoteaproba from "../images/bikoteaproba.png";
import bikoteaproba2 from "../images/bikoteaproba2.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Hasiera() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800, // Animazioaren iraupena (milisegundutan)
      once: true, // Behin bakarrik egin scroll egiterakoan
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Nav />

      {/* Main */}
      <div className="relative">
        <header className="relative flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-800 h-[20vh] md:h-[65vh] lg:h-100vh">
          <div className="absolute inset-0 flex justify-between items-center w-full">
            {/* Imagen izquierda */}
            <div className="relative w-1/3 h-full flex justify-center items-center">
              {/* Primer jugador (más centrado y arriba) */}
              <img
                className="absolute left-[10%] z-10 h-auto max-h-[100%] object-contain animate-fade-right"
                src={bikoteatenis} // Cambia por la ruta correcta
                alt="Altuna"
                fetchpriority="high"
              />
            </div>

            {/* Eslogan centrado */}
            <div className="relative z-20 text-center">
              <h1 className="font-boxing text-3xl lg:text-5xl font-bold text-white animate-jump-in">
                <span className="bg-clip-text text-6xl text-transparent bg-gradient-to-b from-white via-gray-300 to-white">
                  MATCH, CHAT, WIN!
                </span>
              </h1>
            </div>

            {/* Imagen derecha */}
            <div className="relative w-1/3 h-full flex justify-center items-center">
              <img
                className="absolute right-[10%] top-[1.5%] z-10 h-auto max-h-[100%] object-contain animate-fade-left"
                src={bikotea} // Cambia por la ruta correcta
                alt="Aldabe"
                sizes="width:200px"
                fetchpriority="high"
              />
            </div>
          </div>

          {/* Título y Subtítulo */}
          <div className="relative z-20 text-center px-4 sm:px-0 flex flex-col justify-center items-center sm:mt-15 h-full">
            <h1 className="font-boxing text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white animate-jump-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-white">
                MATCH, CHAT, WIN!
              </span>
            </h1>
            <p className="text-sm sm:text-lg max-w-md sm:max-w-3xl mx-auto leading-relaxed text-white animate-jump-in mt-3">
              {t('gutaz.main')}
            </p>
          </div>

          {/* Imagen derecha (oculta en móvil) */}
          <div className="relative block w-full sm:w-1/3 h-full flex justify-center items-center hidden sm:block">
            <img
              className="w-full h-full object-cover animate-fade-left"
              src={bikoteaproba2}
              alt="Bikotea"
              fetchpriority="high"
            />
          </div>
        </header>
      </div>

      {/* Header azpian dauden ikonoak */}
      <section className="flex w-full relative bg-white text-white py-3 justify-around">
        {/* Imagen 1 */}
        <div className="bg-blue-200 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-right">
          <img className="w-full h-auto object-contain" src={jaialaipala} alt="Jaialai Pala" />
        </div>

        {/* Imagen 2 */}
        <div className="bg-blue-400 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-right animate-delay-300">
          <img className="w-full h-auto object-contain" src={palaikono} alt="Pala Ikono" />
        </div>

        {/* Imagen 3 */}
        <div className="bg-blue-600 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade animate-delay-500">
          <img className="rounded-full w-full h-auto object-contain" src={bikoteikono} alt="Bikote Ikono" />
        </div>

        {/* Imagen 4 */}
        <div className="bg-blue-400 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-left animate-delay-300">
          <img className="w-full h-auto object-contain" src={tenispelota} alt="Tenis Pelota" />
        </div>

        {/* Imagen 5 */}
        <div className="bg-blue-200 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-left">
          <img className="w-full h-auto object-contain" src={raketatenis} alt="Raketa Tenis" />
        </div>
      </section>

      {/* Section izenburu */}
      <section className="container mx-auto px-6 py-16" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t('gutaz.section')}</h2>
          <p className="text-gray-600 mt-4">{t('gutaz.section2')}</p>
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontoia */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <img
              src={bat}
              alt="Lezo Frontoia"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid1')}</h3>
              <p className="text-gray-600">{t('gutaz.grid1-1')}</p>
            </div>
          </div>

          {/* Tinder */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 h-48">
              <img
                src={bi}
                alt="Tinder Emblem"
                className="w-32 h-32 object-contain rounded-full bg-white p-2"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid2')}</h3>
              <p className="text-gray-600">{t('gutaz.grid2-2')}</p>
            </div>
          </div>

          {/* Trinketeak */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <img
              src={trinkete}
              alt="Trinkete"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('gutaz.grid3')}</h3>
              <p className="text-gray-600">{t('gutaz.grid3-3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hasiera;
