import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoDesktop from '../components/assets/logo.png';
import logoMobile from '../components/assets/logo-mobile.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoDesktop} alt="Desktop Logo" className="desktop-logo" />
          <img src={logoMobile} alt="Mobile Logo" className="mobile-logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
