import React from 'react';
import './produktu.css';

function PerfilaCard({ image, onImageChange }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageChange(event.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top product-img" alt="Perfil" />
      <div className="card-body">
        <label htmlFor="image-upload" className="btn btn-primary w-full">
          Argazkia aldatu
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}

export default PerfilaCard;
