import React, {useState, useEffect} from 'react';
import './Convidada.css';
import videoUrl from '../assets/fundo-soberana.mp4';
import Imagem from '../assets/Imagem.png';
import ContactButton from './ContactButton';

import nv1 from '../assets/nv1.jpg';
import nv2 from '../assets/nv2.jpg';
import nv3 from '../assets/nv3.jpg';
import nv4 from '../assets/nv4.jpg';
import nv5 from '../assets/nv5.jpg';



const Noiva = () => {
  const images = [nv1, nv2, nv3, nv4, nv5]; // Lista de URLs das imagens
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
          <img src={Imagem} alt="Nova Imagem" loading="lazy" /> 
          <p className="c-1-title">NOIVA</p>  
          <p className="c-1">Ser noiva é viver a alegria de um novo começo, onde cada batida do coração é um passo mais perto de um para sempre sonhado. <br/> E cada detalhe é muito importante para tornar o seu “novo começo” num dia inesquecível. Viver a experiência de nossa consultoria, tornará o processo de escolha do teus acessórios algo prazeroso e assertivo.</p>
          <ContactButton message="Olá, vim através do site da Soberana, gostaria de saber sobre os serviços de noiva." />
        </div>
      </div> 
      <div className="art-gallery">
        <h1 className="text">GALERIA</h1>
        <p className="description">Deslize para à esquerda ⇽</p>
        <div className="carousel">
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Imagem ${index + 1}`} loading="lazy"/>
            </div>
            ))}
        </div>
      </div> 
    </div>
  );
}

export default Noiva;