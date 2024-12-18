import React from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

{/* Header Argazkiak */ }
import ezkerrekoBikotea from '../images/bikotetenis.png';
import eskuinekoBikotea from '../images/bikoteaproba2.png';

{/* Header Ikonoak */ }
import jaiAlaiPala from '../images/jaialaipala.png';
import palaIkono from '../images/palaikono.png';
import bikoteIkono from '../images/bikoteikono.png';
import tenisPelotaIkono from '../images/tenispelota.png';
import raketaTenisIkono from '../images/raketatenis.png';

{/* Section Argazkiak */ }
import lezokoFrontoia from "../images/LezoFrontoia.jpg";
import tinderLogo from "../images/Tinder-Emblem.png";
import produktuak from "../images/eskupilota.jpg";
import trinkete from "../images/trinkete.jpg";
import urnietakoFrontoia from "../images/urnietafrontoia.jpg";
import comingsoon from "../images/comingsoon.jpg";

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
        <header className="relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-800 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh]">
          {/* Header */}
          <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center w-full h-full">
            {/* Ezkerriko irudia */}
            <div className="relative w-full sm:w-1/3 h-full flex justify-center items-center hidden sm:block">
              <img
                className="w-full h-full object-cover animate-fade-right"
                src={ezkerrekoBikotea}
                alt="Teniseko Bikotea"
                fetchpriority="high"
              />
            </div>

            {/* Izenburua */}
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

            {/* Eskuineko irudia */}
            <div className="relative block w-full sm:w-1/3 h-full flex justify-center items-center hidden sm:block">
              <img
                className="w-full h-full object-cover animate-fade-left"
                src={eskuinekoBikotea}
                alt="Bikotea"
                fetchpriority="high"
              />
            </div>
          </div>
        </header>
      </div>

      {/* Header azpian dauden ikonoak */}
      <section className="flex w-full relative bg-white text-white py-3 justify-around">
        {/* Ikono 1 */}
        <div className="bg-blue-200 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-right">
          <img className="w-full h-auto object-contain" src={jaiAlaiPala} alt="Jaialai Pala" />
        </div>
        {/* Ikono 2 */}
        <div className="bg-blue-400 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-right animate-delay-300">
          <img className="w-full h-auto object-contain" src={palaIkono} alt="Pala Ikono" />
        </div>
        {/* Ikono 3 */}
        <div className="bg-blue-600 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade animate-delay-500">
          <img className="rounded-full w-full h-auto object-contain" src={bikoteIkono} alt="Bikote Ikono" />
        </div>
        {/* Ikono 4 */}
        <div className="bg-blue-400 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-left animate-delay-300">
          <img className="w-full h-auto object-contain" src={tenisPelotaIkono} alt="Tenis Pelota" />
        </div>
        {/* Ikono 5 */}
        <div className="bg-blue-200 rounded-full p-4 w-[15%] sm:w-[15%] lg:w-[8%] animate-fade-left">
          <img className="w-full h-auto object-contain" src={raketaTenisIkono} alt="Raketa Tenis" />
        </div>
      </section>


      {/* Section izenburu */}
      <section className="container mx-auto px-6 py-16" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t('gutaz.section')}</h2>
          <p className="text-gray-600 mt-4">
            {t('gutaz.section2')}
          </p>
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontoia */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <img
              src={lezokoFrontoia}
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 h-48">
              <img
                src={tinderLogo}
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
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

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="500">
            <img
              src={produktuak}
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

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="700">
            <img
              src={urnietakoFrontoia}
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

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="900">
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
              // Segundu erdia itxaron
              setTimeout(() => {
                navigate("/register");
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