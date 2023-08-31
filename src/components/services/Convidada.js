import React from 'react';
import './Convidada.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem2.png';
import ContactButton from './ContactButton';

const Convidada = () => {
  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay"></div> {/* Add an overlay element */}
      <div className="content">
        <div className="image-bl">
          <img src={Imagem} alt="Nova Imagem" /> 
          <p className="c-1-title">CONVIDADA</p>  
          <p className="c-1">A vida não tem replay, por isso precisamos contemplar todos os momentos felizes e marcantes de nossas vidas. Um evento especial fica marcado para sempre em nossa memória, por isso todos os detalhes são importantes para torná-lo ainda mais inesquecível. <br/>Nossos acessórios trazem beleza e sofisticação ao look, tornando a produção ainda mais linda e memorável.</p>
          <ContactButton />
        </div>
      </div>  
    </div>
  );
}

export default Convidada;