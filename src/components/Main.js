import React from 'react';
import './Main.css';
import ImageSection from './ImageSection';
import ArtGallery from './ArtGallery';
import Info from './Info';
import Footer from './Footer';
import Wppbtn from './Wppbtn';
import WelcomeContent from './WelcomeContent';

// Importe o seu arquivo GIF aqui
import backgroundGif from '../components/assets/fundo.gif';

const Main = () => {
  return (
    <div className="main">
      {/* Use o arquivo GIF como fundo */}
      <div className="video-container">
        <img className="video-bg" src={backgroundGif} alt="Background" />
      </div>
      <WelcomeContent />
      <ImageSection />
      <ArtGallery />
      <Info />
      <Wppbtn />
      <Footer />
    </div>
  );
}

export default Main;
