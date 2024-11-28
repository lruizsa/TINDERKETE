import React, { useState } from 'react';
import './MapaLista.css';
import Nav from './Navbar.js'; 
import Footer from './Footer.js';

function MapaLista() {
  // Listas de Frontones y Trinketes con URLs del iframe de Google Maps
  const frontoiak = [
    { name: 'Antiguakoa', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10345.314412364152!2d-2.006094752446477!3d43.31309128937382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51baa707632f93%3A0x8680d5efa9844049!2sAntiguako%20Frontoia%20-%20Front%C3%B3n%20del%20Antiguo!5e0!3m2!1ses!2ses!4v1732786583382!5m2!1ses!2ses', url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd51baa707632f93:0x8680d5efa9844049?sa=X&ved=1t:8290&ictx=111' },
    { name: 'Altzakoa', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.991527068214!2d-1.9351077999999997!3d43.314436799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a550f90a838d%3A0x28566489181455d0!2sFront%C3%B3n%20Municipal%20de%20ALTZA!5e0!3m2!1ses!2ses!4v1732787281587!5m2!1ses!2ses',},
    { name: 'Amara Zaharra', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.01593288799!2d-1.9857721583862378!3d43.313925895451725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a555a4e1e139%3A0x276870686cb452de!2sFront%C3%B3n%20Amara!5e0!3m2!1ses!2ses!4v1732787728431!5m2!1ses!2ses'},
    { name: 'Anoeta', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.629975974815!2d-1.9757886000000002!3d43.3010701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51afee38af9b4d%3A0x5c0d81e6760b8468!2sFront%C3%B3n%20Municipal%20Atano%20III!5e0!3m2!1ses!2ses!4v1732788161374!5m2!1ses!2ses'},
    { name: 'Sagues', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3893105785983!2d-1.9707720999999998!3d43.32704189999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a5089d050a1d%3A0x6e318e5e5f818bb0!2sSagues%20Pilotalekua%2FFront%C3%B3n%20Sag%C3%BCes!5e0!3m2!1ses!2ses!4v1732788547745!5m2!1ses!2ses'},
    { name: 'Loiola', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.1020884775007!2d-1.9650276999999996!3d43.3121223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51af8a72ed634d%3A0x768c2263a39256a0!2sFront%C3%B3n%20Municipal%20de%20Loiola!5e0!3m2!1ses!2ses!4v1732788654614!5m2!1ses!2ses'}
  ];

  const trinketeak = [
    { name: 'Lasarte', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.058367744465!2d-2.0200586999999994!3d43.27115299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b16506069fd1%3A0xa72908fba774ae15!2sMirentxu%20Trinketea!5e0!3m2!1seu!2ses!4v1732814539894!5m2!1seu!2ses   ' },
    { name: 'Igara', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6809573784603!2d-2.0144843999999997!3d43.3000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b06e5009e285%3A0xaac86f3b136e557c!2sIbaeta%20Padel%20Trinketea!5e0!3m2!1seu!2ses!4v1732814582015!5m2!1seu!2ses'},
    { name: 'Gasca - Anoeta', iframe: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2903.616810377154!2d-1.9793131238417299!3d43.30134577112105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE4JzA0LjgiTiAxwrA1OCczNi4zIlc!5e0!3m2!1ses!2ses!4v1732814705358!5m2!1ses!2ses' },
    { name: 'Goizueta', iframe: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2903.616810377154!2d-1.9793131238417299!3d43.30134577112105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE4JzA0LjgiTiAxwrA1OCczNi4zIlc!5e0!3m2!1ses!2ses!4v1732814705358!5m2!1ses!2ses' },
    { name: 'Urnieta', iframe: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2903.616810377154!2d-1.9793131238417299!3d43.30134577112105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE4JzA0LjgiTiAxwrA1OCczNi4zIlc!5e0!3m2!1ses!2ses!4v1732814705358!5m2!1ses!2ses' },
    { name: 'Urdazubi', iframe: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2903.616810377154!2d-1.9793131238417299!3d43.30134577112105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE4JzA0LjgiTiAxwrA1OCczNi4zIlc!5e0!3m2!1ses!2ses!4v1732814705358!5m2!1ses!2ses' },
    { name: '', iframe: ''}
  ];

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />

      <div className="container flex-grow-1 mt-5" style={{ marginBottom: '63px' }}>
        <div className="mapa-lista-container">

          <div className="lists-container">
            <List title="FRONTOIAK" items={frontoiak} onSelect={handleSelect} />
            <List title="TRINKETEA" items={trinketeak} onSelect={handleSelect} />
          </div>

          <div className="map-container">
            {selectedPlace ? (
              <div className="map-info">

                <iframe
                  title={`Mapa de ${selectedPlace.name}`}
                  src={selectedPlace.iframe}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h2>{"📌 " + selectedPlace.name.toUpperCase()}</h2>

              </div>
            ) : (
              <p>Hautatu frontoi edo trinkete bat.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


function List({ title, items, onSelect }) {
  return (
    <div className="list-container">
      <h3>{title}</h3>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => onSelect(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapaLista;
