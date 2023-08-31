import React from 'react';
import './Main.css';
import videoUrl from '../components/assets/fundo-soberana.mp4';
import ImageSection from './ImageSection';
import ArtGallery from './ArtGallery';
import Info from './Info';
import Footer from './Footer';
import Wppbtn from './Wppbtn';
import WelcomeContent from './WelcomeContent';

const Main = () => {
  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
