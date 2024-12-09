import React from 'react';
import './produktu.css';
import { useTranslation } from "react-i18next";

function ProductCard({ name, price, image }) {
  const { t } = useTranslation(); 

  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top product-img" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{t('produktCard.prezioa')} {price}€</p>
        <button className="btn btn-primary w-full">{t('produktCard.erosi')}</button>
      </div>
    </div>
  );
}

export default ProductCard;
