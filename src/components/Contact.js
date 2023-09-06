import React, { useEffect } from 'react';
import './ContatoCard.css';
import videoUrl from '../components/assets/fundo-soberana.mp4';
import ContatoCard from './ContatoCard';
import soberana from './assets/Soberana.png';

const Main = () => {
  useEffect(() => {
    const video = document.querySelector('.video-bg');

    // Desativa o som após o vídeo ser carregado e iniciado
    video.addEventListener('canplaythrough', () => {
      video.muted = true;
    });
  }, []);

  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="contact-container">
        <ContatoCard />
      </div>
      
          <div className="foto">
            <img src={soberana}/>
          </div>  
       
    </div>  
  );
}

export default Main;