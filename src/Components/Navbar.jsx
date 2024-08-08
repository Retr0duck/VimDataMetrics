import React from 'react';
import Vlogo from '../assets/V_Logo.png';
import { Link } from 'react-router-dom';

function Navbar({ onScrollToSection }) {
  return (
    <div className="bg-secondary">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={Vlogo} className="bi" width="50" height="50" role="img" aria-label="Logo" />
          </a>
        </div>
        <nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <button className="nav-link px-2 text-light" onClick={() => onScrollToSection('Start')}>Home</button>
          <button className="nav-link px-2 text-light" onClick={() => onScrollToSection('Features')}>Features</button>
          <button className="nav-link px-2 text-light" onClick={() => onScrollToSection('Pricing')}>Pricing</button>
          <button className="nav-link px-2 text-light" onClick={() => onScrollToSection('Faqs')}>FAQs</button>
          <button className="nav-link px-2 text-light" onClick={() => onScrollToSection('About')}>About</button>
        </nav>
        <div className="col-md-3 text-end">
          <Link type="button" to="/login" className="btn btn-primary me-2">Login</Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
