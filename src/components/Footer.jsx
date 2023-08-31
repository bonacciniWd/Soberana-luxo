import React from 'react';
import './Footer.css'; // Importe o arquivo de estilos para o Footer
import Bonaccini from '../components/assets/WB.png'

const Footer = () => {
  return (
    
    <footer className="footer">
      <nav>
        <ul className="nav-li">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/">Produtos</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
      <div className="logo-1">
       <a href="https://bonaccini.vercel.app" target="_blank" rel="noopener noreferrer">
         <img src={Bonaccini} alt="Logo" />
       </a>
      </div>
      <p className="copyright">© 2023 Soberana Acessórios de Luxo</p>
    </footer>
  );
};

export default Footer;
