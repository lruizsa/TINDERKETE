import React from "react";
import NavbarAdmin from "./NavbarAdmin.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ezarpenak from '../images/ezarpenak.png';
import ezarpenak2 from '../images/ezarpenak2.png'
import ezarpenak3 from '../images/ezarpenak3.png';

function Hasiera() {
  const { t } = useTranslation(); 

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
                  {t('hasieraAdmin.header')}
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



