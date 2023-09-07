import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Tilt} from 'react-tilt';
import './SobreCard.css';

import mapDesktop from '../components/assets/map-desk.png';

const ContactCard = () => {
  // Função para copiar o texto para a área de transferência
  const copyTextToClipboard = () => {
    const textToCopy = "Rua Duque de Caxias, 557 sala 01 Bairro Vila Operária em Itajaí";
    
    // Cria um elemento de texto temporário
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Adiciona o elemento de texto temporário à DOM
    document.body.appendChild(textArea);

    // Seleciona o texto no elemento
    textArea.select();

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de texto temporário da DOM
    document.body.removeChild(textArea);

    // Informa ao usuário que o texto foi copiado (opcional)
    alert("Pronto, endereço copiado! " + textToCopy);
  };

  return (
    <div className="tilt-container">
      <div className="contact-card">
        <h2>Sobre</h2>
        <p onClick={copyTextToClipboard}>
          Nossa loja física está localizada na<br />
          <span className="blue-text">Rua Duque de Caxias, 557 sala 01 Bairro Vila Operária em Itajaí.</span>
        </p>
        <Link to="https://www.google.com/maps/place/Soberana+Acess%C3%B3rios+de+Luxo+-+Rua+Duque+de+Caxias,+sala+01+-+Vila+Operaria,+Itaja%C3%AD+-+SC/@-26.9551952,-48.7410972,13z/data=!4m5!3m4!1s0x94d8cda8290529a3:0x3854b2d8a5b6c543!8m2!3d-26.9121902!4d-48.6732556?entry=ttu" target="_blank"> 
            
            <img
                src={mapDesktop}
                className="map"
            />
           
        </Link>    
        <p>Nosso horário de atendimento é das 10h às 12h e das 13h30 às 19h.<br />ㅤ</p>
        
      </div>
    </div>
  );
}

export default ContactCard;
