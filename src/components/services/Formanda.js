import React from 'react';
import './Formanda.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem2.jpg';
import ContactButton from './ContactButton';

const Formanda = () => {
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
          <p className="c-1-title">Formanda</p>  
          <p className="c-1">Sabemos que a Formatura é um março significativo na sua vida profissional, é um momento de celebração e reconhecido de todo o esforço e dedicação ao longo dos últimos anos. <br/> Acreditamos que os detalhes fazem toda a diferença em ocasiões tão memoráveis, por isso oferecemos um seleção exclusiva de acessórios elegantes e sofisticados, perfeitos para realçar a sua beleza e completar seus looks de formatura.</p>
          <ContactButton />
        </div>
      </div>  
    </div>
  );
}

export default Formanda;