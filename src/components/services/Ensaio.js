import React from 'react';
import './Ensaio.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem5.png';
import ContactButton from './ContactButton';

const Ensaio = () => {
  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="new-cont">
        <div className="image-bl">
          <img src={Imagem} alt="Nova Imagem" /> 
          <p className="c-1-title">Ensaio</p>  
          <p className="c-1">Nosso acervo é composto por acessórios das melhores marcas do mercado nacional. <br/> Peças marcantes que ficam maravilhosas em fotos de ensaios corporativas, de gestantes e pré wedding.</p>
          <ContactButton />
        </div>
      </div>  
    </div>
  );
}

export default Ensaio;