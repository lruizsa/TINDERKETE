import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta
import Footer from './Footer'; // Asegúrate de que la ruta sea correcta

function TestPage() {
  return (
    <>
      {/* Renderizar el Navbar */}
      <Navbar />

      {/* Contenido de la página para pruebas */}
      <main className="container text-center mt-5">
        <h1>Bienvenido a la página de prueba</h1>
        <p>Esto es solo un ejemplo para visualizar el Navbar y el Footer.</p>
        <p>Aquí puedes añadir más contenido según lo necesites.</p>
      </main>

      {/* Renderizar el Footer */}
      <Footer />
    </>
  );
}

export default TestPage;
