import React from "react";
import Nav from './Navbar.js'; 
import Footer from './Footer.js';
import bat from '../images/LezoFrontoia.jpg'; 
import bi from '../images/Tinder-Emblem.png';
import hiru from '../images/urnietafrontoia.jpg';

function Hasiera() {
  return (
    <div className="d-flex flex-column min-vh-100"> 
      <Nav />
      <div className="container flex-grow-1 mt-5" style={{ marginBottom: '63px' }}> 
        <div className="d-flex justify-content-center mb-4">
          <h1 className="display-1">TINDERKETE</h1>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="text-justify">
              Gazteek euskal kirolak praktikatzearen ohitura sustatzea da gure helburua, gainera, batzuetan zaila izan daiteke trinketean eta frontoian jolastea, jende asko egoten baita. Aplikazio honi esker, erreserbak eta "partida taldeak" sortu ahal izango dira, bai talde irekiak eta bai talde itxiak. Horrez gain, jende berria ezagutzeko aukera eta tokiak erreserbatzeko modu errazago bat lortu nahi da.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 text-center mb-4">
            <img src={bat} alt="Imagen 1" className="img-fluid rounded-3" />
          </div>
          <div className="col-12 col-md-4 text-center mb-4">
            <img src={bi} alt="Imagen 2" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 text-center mb-4">
            <img src={hiru} alt="Imagen 3" className="img-fluid rounded-3" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Hasiera;
