import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Tinderkete. All rights reserved.
        </p>
        <p className="mb-0">
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="text-white text-decoration-none">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
