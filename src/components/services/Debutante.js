import React, { useState, useEffect } from 'react';
import './Convidada.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem4.png';
import ContactButton from './ContactButton';


import de1 from '../assets/de1.jpg';
import de2 from '../assets/de2.jpg';
import de3 from '../assets/de3.jpg';
import de4 from '../assets/de4.jpg';


const Debutante = () => {

  const images = [ de1, de2, de3, de4]; // Lista de URLs das imagens
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

const handleVideoClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
};


  return (
    <div className="main"  onClick={handleVideoClick}>
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="new-cont">
        <div className="image-bl">
          <img src={Imagem} alt="Nova Imagem" loading="lazy" /> 
          <p className="c-1-title">DEBUTANTE</p>  
          <p className="c-1">O aniversário de 15 anos de uma menina é um capítulo inesquecível de sua história, marcando a transição graciosa de sonhos de infância para promessas de amanhã. <br/> Os acessórios complementam na composição do visual que deve ser algo lindo e delicado afinal 15 anos é uma idade lembrada com carinho por todas as mulheres.</p>
          <ContactButton message="Olá! eu vim através do site da Soberana, e gostaria de mais informações sobre os serviços de Debutante." />
        </div>
      </div> 
      <div className="art-gallery">
        <h1 className="text">GALERIA</h1>
        <p className="description">Deslize para à esquerda ⇽</p>
        <div className="carousel">
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Imagem ${index + 1}`} loading="lazy" />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Debutante;