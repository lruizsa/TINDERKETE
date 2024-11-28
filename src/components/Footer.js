import React from 'react';
import './footer.css'; 
import img1 from '../images/facebookAplicacion.png';
import img2 from '../images/logoInsta.png';
import img3 from '../images/Xaplicacion.png';

function Footer() {
  return (
    <footer className="text-white text-center py-2">
      <div className="container">
        <p className="mb-1" style={{ fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Tinderkete. All rights reserved.
        </p>
        <p className="mb-2" style={{ fontSize: '0.8rem' }}>
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="text-white text-decoration-none">
            Terms of Service
          </a>
        </p>

        <div className="d-flex justify-content-center gap-2 mt-1">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              src={img1}
              alt="Facebook"
              className="img-fluid"
              style={{ maxHeight: '20px' }}
            />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              src={img2}
              alt="Instagram"
              className="img-fluid"
              style={{ maxHeight: '20px' }}
            />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              src={img3}
              alt="X"
              className="img-fluid"
              style={{ maxHeight: '20px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
