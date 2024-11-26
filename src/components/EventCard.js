import React from 'react';

function EventCard({ title, location, date, time, price, players, image }) {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={`${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>{location}</strong> - {date} at {time}
        </p>
        <p className="card-text">
          <strong>Price:</strong> {price}€ <br />
          <strong>Players:</strong> {players}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
