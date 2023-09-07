import React, { useState, useEffect } from 'react';

const ArtGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.REACT_APP_INSTAGRAM_USER_ID;

    fetch(`https://graph.instagram.com/v12.0/${userId}/media?access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setImages(data.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar fotos do Instagram:", error);
      });
  }, []);

  return (
    <div className="art-gallery">
      <h1 className="text">GALERIA</h1>
      <p className="description">Deslize para à esquerda ⇽</p>
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.media_url} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
