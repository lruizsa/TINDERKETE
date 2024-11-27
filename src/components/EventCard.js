import React from 'react';
import './style.css';


function EventCard({
  title,
  location,
  date,
  time,
  description,
  price,
  participants,
  maxParticipants,
  image,
  participantImages,
}) {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={`${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>{location}</strong> - {date} at {time}
        </p>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Price:</strong> {price}€ <br />
          <strong>Players:</strong> {participants}/{maxParticipants}
        </p>
        <div className="participant-images mb-3">
          <strong>Participants:</strong>
          <div className="d-flex">
            {participantImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Participant"
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
            ))}
          </div>
        </div>
        <button className="btn btn-primary w-100">Apuntatu</button> {/* Botón */}
      </div>
    </div>
  );
}

export default EventCard;
