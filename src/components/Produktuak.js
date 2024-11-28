import React from 'react';
import ProductCard from './ProductCard'; 
import entrenatzailea from '../images/oihanEntrenatzailea.jpg'; 
import pala from '../images/pala.jpg'; 
import pilotak from '../images/frontenisPelotak.jpg'; 
import Nav from './Navbar.js'; 
import Footer from './Footer.js';



const Produktuak = () => {
  const products = [
    {
      name: 'Oihan entrenatzailea',
      price: '25 orduko',
      image: entrenatzailea, 
    },
    {
      name: 'Pala',
      price: 30,
      image: pala,
    },
    {
      name: 'Fronteniseko pilotak',
      price: 10,
      image: pilotak,
    },
   
  ];

  return (
    <div className="d-flex flex-column min-vh-100"> {/* Flexbox para asegurar que ocupa toda la altura de la pantalla */}
      {/* Renderiza el Navbar */}
      <Nav />

      {/* Contenido principal */}
      <div className="container flex-grow-1 mt-5" style={{ marginBottom: '63px' }}> {/* Este div ahora ocupa el espacio restante */}
        <h1 className="text-center mb-4">Gure produktuak</h1>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Renderiza el Footer */}
      <Footer />
    </div>
  );
};

export default Produktuak;
