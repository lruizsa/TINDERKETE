import React from 'react';
import './produktu.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top product-img" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Prezioa: {price}€</p>
        <button className="btn btn-primary">Erosi</button>
      </div>
    </div>
  );
}

export default ProductCard;
