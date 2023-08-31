import React, { useState, useEffect } from "react";
import './ArtGallery.css';
import ca1 from './assets/ca1.jpg';
import ca2 from './assets/ca2.jpg';
import ca3 from './assets/ca3.jpg';
import ca4 from './assets/ca4.jpg';
import ca5 from './assets/ca5.jpg';
import ca6 from './assets/ca6.jpg';
import ca7 from './assets/ca7.jpg';
import ca8 from './assets/ca8.jpg';
import ca9 from './assets/ca9.jpg';
import ca10 from './assets/ca10.jpg';
import ca11 from './assets/ca11.jpg';
import ca12 from './assets/ca12.jpg';
import ca13 from './assets/ca13.jpg';
import ca14 from './assets/ca14.jpg';
import ca15 from './assets/ca15.jpg';


const ArtGallery = () => {
  const images = [ca2, ca1, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10, ca11, ca12, ca13, ca14, ca15]; // Lista de URLs das imagens
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
    );
}

export default ArtGallery;
