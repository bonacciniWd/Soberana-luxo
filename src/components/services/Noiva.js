import React from 'react';
import './Noiva.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem.png';
import ContactButton from './ContactButton';

const Noiva = () => {
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
          <p className="c-1-title">Noiva</p>  
          <p className="c-1">Ser noiva é viver a alegria de um novo começo, onde cada batida do coração é um passo mais perto de um para sempre sonhado. <br/> E cada detalhe é muito importante para tornar o seu “novo começo” num dia inesquecível. Viver a experiência de nossa consultoria, tornará o processo de escolha do teus acessórios algo prazeroso e assertivo.</p>
          <ContactButton />
        </div>
      </div>  
    </div>
  );
}

export default Noiva;