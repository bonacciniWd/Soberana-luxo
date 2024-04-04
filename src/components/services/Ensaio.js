import React, {useState, useEffect} from 'react';
import './Convidada.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem5.jpg';
import ContactButton from './ContactButton';

import en1 from "../assets/en1.jpg";
import en2 from "../assets/en2.jpg";
import en3 from "../assets/en3.jpg";
import en4 from "../assets/en4.jpg";
import en5 from "../assets/en5.jpg";

const Ensaio = () => {
  const images = [en4, en2, en3, en1, en5]; // Lista de URLs das imagens
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
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="new-cont">
        <div className="image-bl">
          <img src={Imagem} alt="Nova Imagem" /> 
          <p className="c-1-title">Ensaio</p>  
          <p className="c-1">Nosso acervo é composto por acessórios das melhores marcas do mercado nacional. <br/> Peças marcantes que ficam maravilhosas em fotos de ensaios corporativas, de gestantes e pré wedding.</p>
          <ContactButton message="Olá! eu vim através do site da Soberana, e gostaria de mais informações sobre os serviços de Ensaios Fotográficos." />
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

export default Ensaio;