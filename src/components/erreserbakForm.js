import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Erreserbak() {
  const [sportType, setSportType] = useState('');
  const [playerCount, setPlayerCount] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [reservations, setReservations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      sportType,
      playerCount,
      location,
      time,
    };
    setReservations([...reservations, newReservation]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          {/* Card del Formulario */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="card-title">ERRESERBA EGIN</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Kirol mota</label>
                    <input 
                      type="text" 
                      value={sportType} 
                      onChange={(e) => setSportType(e.target.value)} 
                      placeholder="Sartu kirol mota" 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Jokalari kopurua</label>
                    <input 
                      type="number" 
                      value={playerCount} 
                      onChange={(e) => setPlayerCount(e.target.value)} 
                      placeholder="Number of players" 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Lekua</label>
                    <input 
                      type="text" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      placeholder="Location" 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Ordua</label>
                    <input 
                      type="time" 
                      value={time} 
                      onChange={(e) => setTime(e.target.value)} 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={isPublic} 
                        onChange={() => setIsPublic(!isPublic)} 
                      />
                      Publikoa egin
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Sartu</button>
                </form>
              </div>
            </div>
          </div>

          {/* Card de la Lista de Reservas */}
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="card-title">Zure Erreserbak</h5>
              </div>
              <div className="card-body">
                <ul>
                  {reservations.map((reservation, index) => (
                    <li key={index} className="mb-3">
                      <strong>{reservation.sportType}</strong> -- {reservation.playerCount} Jokalari<br />
                      <span>{reservation.location} - {reservation.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Erreserbak;
