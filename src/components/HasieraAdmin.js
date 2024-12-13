import React from "react";
import NavbarAdmin from "./NavbarAdmin.js";
import Footer from "./Footer.js";
// import bat from "../images/LezoFrontoia.jpg";
// import bi from "../images/Tinder-Emblem.png";
// import hiru from "../images/urnietafrontoia.jpg";
// import eskupilota from "../images/eskupilota.jpg";
// import trinkete from "../images/trinkete.jpg";
// import comingsoon from "../images/comingsoon.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

// import altuna from '../images/altuna.png';
// import aldabe from '../images/aldabe.png';
// import dario from '../images/dario.png';
// import bikuna from '../images/bikuna.png';
// import tenis from '../images/tenis.png';
// import tenisneska from '../images/tenisneska.png';
// import kirolaria from '../images/kirolaria.png';
// import kirolarianeska from '../images/kirolarianeska.png';
// import bikotea from '../images/Removal-512.png';
// import bikoteneska from '../images/bikoteneska.png';
// import bikotemutila from '../images/bikotemutila.png';
// import pelotarihandia from '../images/pelotarihandia.png';
// import zestapunta from '../images/zestapunta.png';
// import bikotetenis from '../images/bikotetenis.png';
// import bikote from '../images/bikotea.png';
// import jaialai from '../images/jaialai.png';
import palaikono from '../images/palaikono.png';
import bikoteikono from '../images/bikoteikono.png';
import tenispelota from '../images/tenispelota.png';
import raketatenis from '../images/raketatenis.png';
import jaialaipala from '../images/jaialaipala.png'
import ezarpenak from '../images/ezarpenak.png';
import ezarpenak2 from '../images/ezarpenak2.png'
import ezarpenak3 from '../images/ezarpenak3.png';

function Hasiera() {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación (en milisegundos)
      once: true, // Animar solo una vez al hacer scroll
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <NavbarAdmin />

      {/* Main */}
     <div className="relative">
        <header className="relative flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-800 h-[20vh] md:h-[65vh] lg:h-100vh">
          <div className="absolute inset-0 flex justify-between items-center w-full">
            <div className="relative w-1/3 h-full flex justify-center items-center">
            </div>
            {/* Izenburua */}
            <div className="relative z-20 text-center">
              <h1 className="font-boxing text-3xl lg:text-5xl font-bold text-white animate-jump-in">
                <span
                  className="bg-clip-text text-6xl text-transparent text-white"
                >
                  Aplikazioa Kudeatzeko Kontrol Panela
                </span>
              </h1>
            </div>
            <div className="relative w-1/3 h-full flex justify-center items-center">
            </div>
          </div>
        </header>
      </div>

      <section className="flex w-full relative bg-white text-white py-4 justify-center">
        <div className="bg-blue-400 rounded-full p-4 w-[8%] animate-fade-right animate-delay-300 mx-5">
        <img src={ezarpenak2} />
        </div>
        <div className="bg-blue-600 rounded-full p-4 w-[8%] animate-fade animate-delay-500 mx-5">
        <img className="rounded-full" src={ezarpenak} />
        </div>
        <div className="bg-blue-400 rounded-full p-4 w-[8%] animate-fade-left animate-delay-300 mx-5">
        <img src={ezarpenak3} />
        </div>
      </section>    
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hasiera;



