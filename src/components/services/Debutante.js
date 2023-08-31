import React from 'react';
import './Debutante.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem4.png';
import ContactButton from './ContactButton';

const Debutante = () => {
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
          <p className="c-1-title">Debutante</p>  
          <p className="c-1">O aniversário de 15 anos de uma menina é um capítulo inesquecível de sua história, marcando a transição graciosa de sonhos de infância para promessas de amanhã. <br/> Os acessórios complementam na composição do visual que deve ser algo lindo e delicado afinal 15 anos é uma idade lembrada com carinho por todas as mulheres.</p>
          <ContactButton />
        </div>
      </div>  
    </div>
  );
}

export default Debutante;