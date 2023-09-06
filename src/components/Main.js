import React, { useEffect } from 'react';
import './Main.css';
import videoUrl from '../components/assets/fundo-soberana.mp4';
import ImageSection from './ImageSection';
import ArtGallery from './ArtGallery';
import Info from './Info';
import Footer from './Footer';
import Wppbtn from './Wppbtn';
import WelcomeContent from './WelcomeContent';

const Main = () => {
  useEffect(() => {
    // Seleciona o elemento de vídeo após o componente ser montado
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
      <WelcomeContent />
      <ImageSection /> 
      <ArtGallery />
      <div className="info mobile-info">
        <Info />
      </div>
      <Wppbtn />
      <Footer />
    </div>
  );
}

export default Main;
