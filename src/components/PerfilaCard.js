import React from 'react';
import './produktu.css';

function PerfilaCard({ image, onEditClick }) {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top product-img" />
      <div className="card-body">
        <button className="btn btn-primary w-full" onClick={onEditClick}>Profila editatu</button>
      </div>
    </div>
  );
}

export default PerfilaCard;
