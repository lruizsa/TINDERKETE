// // import React from "react";
// // import Nav from "./Navbar.js";
// // import Footer from "./Footer.js";
// // import bat from "../images/LezoFrontoia.jpg";
// // import bi from "../images/Tinder-Emblem.png";
// // import hiru from "../images/urnietafrontoia.jpg";
// import lau from '../images/match.png';
// import bost from '../images/DALL·E 2024-12-03 13.08.48 - A young couple deeply in love, each in their respective rooms, chatting affectionately via text messages on their phones. The man, with short dark hai.webp';
// import sei from '../images/win.jpg';
// // import { useNavigate } from "react-router-dom";

// // function Hasiera() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gray-100">
// //       {/* Navbar */}
// //       <Nav />

// //       {/* Main */}

// //       <section className="relative bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-16">
// //       <div id="demo" class="carousel slide w-7/12 mx-auto" data-bs-ride="carousel">

// //         <div class="carousel-indicators">
// //           <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
// //           <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
// //           <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
// //         </div>

// //         <div class="carousel-inner">
// //           <div class="carousel-item active">
// //             <img src={lau} alt="Los Angeles" class="d-block rounded-lg bg-slate-300 p-3" style={{ width: '1792px', height: '1024px'}}/>
// //           </div>
// //           <div class="carousel-item">
// //             <img src={bost} alt="Chicago" class="d-block rounded-lg bg-slate-300 p-3"/>
// //           </div>
// //           <div class="carousel-item">
// //             <img src={sei} alt="New York" class="d-block rounded-lg bg-slate-300 p-3"/>
// //           </div>
// //         </div>

// //         <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
// //           <span class="carousel-control-prev-icon"></span>
// //         </button>
// //         <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
// //           <span class="carousel-control-next-icon"></span>
// //         </button>
// //         </div>
// //        </section>

// //       {/* Komunitatea */}
// //       <section className="bg-blue-600 text-white py-16">
// //         <div className="container mx-auto text-center">
// //           <h2 className="text-3xl font-bold mb-4">Egin bat Komunitatearekin!</h2>
// //           <p className="text-lg max-w-2xl mx-auto mb-6">
// //             Euskal kiroletan aritzeko lagunik aurkitu nahi? Erregistratu gaur eta hasi zure esperientzia!
// //           </p>
// //           <button
// //             className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow hover:bg-gray-100 transition"
// //             onClick={() => navigate("/register")}
// //           >
// //             Erregistratu orain
// //           </button>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Hasiera;



// import React from "react";
// import Nav from "./Navbar.js";
// import Footer from "./Footer.js";
// import bat from "../images/LezoFrontoia.jpg";
// import bi from "../images/Tinder-Emblem.png";
// import hiru from "../images/urnietafrontoia.jpg";
// import { useNavigate } from "react-router-dom";

// function Hasiera() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <Nav />

//       {/* Main */}

//       <section className="relative bg-gradient-to-r from-blue-200 to-indigo-700 text-white py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-7xl font-extrabold mb-6">MATCH!</h1>
//           <h1 className="text-7xl font-extrabold mb-6">CHAT!</h1>
//           <h1 className="text-7xl font-extrabold mb-6">WIN!</h1>
//           <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Frontoia */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={lau}
//               alt="Lezo Frontoia"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 text-center">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">MATCH!</h3>
//               <p className="text-gray-600">
//               </p>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={bost}
//               alt="Lezo Frontoia"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 text-center">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">CHAT!</h3>
//               <p className="text-gray-600">
//               </p>
//             </div>
//           </div>
//           {/* Tinder */}
//           {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 h-48">
//               <img
//                 src={bost}
//                 alt="Tinder Emblem"
//                 className="w-32 h-32 object-contain bg-white p-2"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Partida Taldeak</h3>
//               <p className="text-gray-600">
//                 Sortu eta batu taldeetan, ezagutu beste jokalariak eta hasi jolasten.
//               </p>
//             </div>
//           </div> */}

//           {/* Trinketeak */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img
//               src={sei}
//               alt="Urnieta Frontoia"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 text-center">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">WIN!</h3>
//               <p className="text-gray-600">
//               </p>
//             </div>
//           </div>
//           <div>
//             <p>

//             </p>
//           </div>
//         </div>
//       </div>
//         </div>
//       </section>
//        <section className="relative bg-white text-gray-800 py-16">
//          <div className="container mx-auto px-6 text-center">
//           <h1 className="text-6xl font-extrabold mb-6">TINDERKETE</h1>
//            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
//              Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua.
//              Jolastu frontoian eta trinketean erraz, talde irekiak edo itxiak sortuz eta
//              tokiak erreserbatuz. Ezagutu zale amorratuak eta hasi parte hartzen!/           
//              </p>
//          </div>
//        </section>

//       {/* Komunitatea */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Egin bat Komunitatearekin!</h2>
//           <p className="text-lg max-w-2xl mx-auto mb-6">
//             Euskal kiroletan aritzeko lagunik aurkitu nahi? Erregistratu gaur eta hasi zure esperientzia!
//           </p>
//           <button
//             className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow hover:bg-gray-100 transition"
//             onClick={() => navigate("/register")}
//           >
//             Erregistratu orain
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default Hasiera;

import React from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import bat from "../images/LezoFrontoia.jpg";
import bi from "../images/Tinder-Emblem.png";
import hiru from "../images/urnietafrontoia.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hasiera() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Nav />

      {/* Main */}

      <section className="relative bg-gradient-to-r from-blue-400 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6">MATCH, CHAT, WIN!</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua.
            Jolastu frontoian eta trinketean erraz, talde irekiak edo itxiak sortuz eta
            tokiak erreserbatuz. Ezagutu zale amorratuak eta hasi parte hartzen!
          </p>
        </div>
      </section>

      {/* Section izenburu */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Ezagutu Webgunea</h2>
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
      <section className="bg-gradient-to-r from-indigo-800 to-blue-400 text-white py-16">
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
