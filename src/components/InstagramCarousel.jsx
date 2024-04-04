import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./InstagramCarousel.css";

const InstagramCarousel = () => {
  // Define os feeds do Instagram
  const instagramFeeds = [
    "https://www.instagram.com/p/C40h8dKOkuo/embed/",
    "https://www.instagram.com/p/C3_Gc_UiZot/embed/",
    "https://www.instagram.com/p/CyCQmiXJD1H/embed/",
    "https://www.instagram.com/p/CyCGeirJOMa/embed/",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instagramFeeds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [instagramFeeds.length]);

  return (
    <div className="instagram-carouseli">
      <div className="carouseli">
        <h1 className="texti">GALERIA</h1>
      <p className="descriptioni">Deslize para à esquerda ⇽</p>
        <Carousel infiniteLoop autoPlay interval={10000}>
          {instagramFeeds.map((feedUrl, index) => (
            <div key={index}>
              <iframe
                src={feedUrl}
                allowfullscreen
                title={`Instagram Feed ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InstagramCarousel;