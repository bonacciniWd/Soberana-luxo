import React, { useState, useEffect } from 'react';
import './Convidada.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem2.png';
import ContactButton from './ContactButton';

import cv1 from '../assets/cv1.jpg';
import cv2 from '../assets/cv2.jpg';
import cv3 from '../assets/cv3.jpg';
import cv4 from '../assets/cv4.jpg';
import cv5 from '../assets/cv5.jpg';


const Convidada = () => {
  const images = [cv1, cv2, cv3, cv4, cv5]; // Lista de URLs das imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Não estamos usando currentIndex

useEffect(() => {
  // Função para atualizar o índice da imagem a cada intervalo de tempo
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000); // Troca de imagem a cada 3 segundos

  return () => {
    clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  };
}, []); // eslint-disable-line react-hooks/exhaustive-deps


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
          <p className="c-1">A vida não tem replay, por isso precisamos contemplar todos os momentos felizes e marcantes de nossas vidas.</p>
          <p className="c-1"> Um evento especial fica marcado para sempre em nossa memória, por isso todos os detalhes são importantes para torná-lo ainda mais inesquecível.</p>
          <p className="c-1">Nossos acessórios trazem beleza e sofisticação ao look, tornando a produção ainda mais linda e memorável.</p>
          <ContactButton message="Olá! eu gostei" />
        </div>
      </div>  
      <div className="art-gallery">
        <h1 className="text">GALERIA</h1>
        <p className="description">Deslize para à esquerda ⇽</p>
        <div className="carousel">
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Imagem ${index + 1}`} />
            </div>
            ))}
        </div>
      </div>
  </div>
  );
}

export default Convidada;