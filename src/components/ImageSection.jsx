import React from 'react';
import { Link } from 'react-router-dom';
import {Tilt} from 'react-tilt'; // Importe o componente Tilt
import './ImageSection.css'; // Importe o CSS específico para essa seção
import Imagem from '../components/assets/Imagem.png';
import Imagem2 from '../components/assets/Imagem2.jpg';
import Imagem3 from '../components/assets/Imagem2.png';
import Imagem4 from '../components/assets/Imagem4.png';
import Imagem5 from '../components/assets/Imagem5.png';

const ImageSection = () => {
  return (
    <div className="new-content">
          <div className="image-block">
            <Link to="/noiva" className="link-no-underline">
              <Tilt options={{ max: 25 }}>
                 <img src={Imagem} alt="Nova Imagem" />
              </Tilt>
              <p className="p-1-title">Noiva</p>
            </Link>
          </div>

      <div className="image-block" href="/formanda">
      <Tilt options={{ max: 25 }}>   
        <Link to="/formanda" className="link-no-underline">  
            <img src={Imagem2} alt="Nova Imagem" />
            <p className="p-1-title">Formanda</p>
        </Link>
      </Tilt>  
      </div>

      <div className="image-block" href="/convidada">
        <Tilt options={{ max: 25 }}>
          <Link to="/convidada" className="link-no-underline"  >
            <img src={Imagem3} alt="Nova Imagem" />
            <p className="p-1-title">Convidada</p>
          </Link>
        </Tilt>  
      </div>

      <div className="image-block">
       <Tilt options={{ max: 25}}>
        <Link to="/15anos" className="link-no-underline"  > 
          <img src={Imagem4} alt="Nova Imagem" />
          <p className="p-1-title">15 Anos</p>
        </Link>
       </Tilt> 
      </div>

      <div className="image-block" href="/ensaio">
       <Tilt options={{ max: 25}}>   
          <Link to="/ensaio" className="link-no-underline"  >  
            <img src={Imagem5} alt="Nova Imagem" />
            <p className="p-1-title">Ensaio fotográfico</p>
          </Link>
       </Tilt>
      </div>

    </div>
  );
}

export default ImageSection;