import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Nav from './Navbar.js'; 
import Footer from './Footer.js';

function Kontaktu() {
  const [izen, setIzen] = useState('');
  const [email, setEmail] = useState('');
  const [telefonoa, setTelefonoa] = useState('');
  const [mezua, setMezua] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { izen, email, telefonoa, mezua });
  };

  return (
    <div className="d-flex flex-column min-vh-100"> {/* Aseguramos que el footer esté abajo */}
      <Nav />

      <div className="container flex-grow-1 mt-5" style={{ marginBottom: '63px' }}> {/* Se asegura que el contenido crezca y el footer quede abajo */}
        <h2 className="mb-4 text-center">Jarri gurekin kontaktuan</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo de nombre */}
          <div className="form-group mb-3"> 
            <label htmlFor="izen">Izen abizenak</label>
            <input
              type="text"
              className="form-control"
              id="izen"
              value={izen}
              onChange={(e) => setIzen(e.target.value)}
              placeholder="Sartu izen abizenak"
              required
            />
          </div>

          {/* Campo de email */}
          <div className="form-group mb-3"> 
            <label htmlFor="email">Email-a</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Idatzi email-a"
              required
            />
          </div>

          {/* Campo de teléfono */}
          <div className="form-group mb-3"> 
            <label htmlFor="telefonoa">Telefonoa</label>
            <input
              type="text"
              className="form-control"
              id="telefonoa"
              value={telefonoa}
              onChange={(e) => setTelefonoa(e.target.value)}
              placeholder="Idatzi telefonoa"
              required
            />
          </div>

          {/* Campo de mensaje */}
          <div className="form-group mb-3"> 
            <label htmlFor="mezua">Mezua</label>
            <textarea
              className="form-control"
              id="mezua"
              value={mezua}
              onChange={(e) => setMezua(e.target.value)}
              placeholder="Idatzi zure mezua"
              required
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-block">
              Bidali
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Kontaktu;
