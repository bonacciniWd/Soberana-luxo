import React from 'react';
import './Wppbtn.css'; // Importe o arquivo de estilos para o botão
import Wpp from '../components/assets/wpp-logo.svg';

const Wppbtn = () => {
  // Mensagem personalizada
  const message = encodeURIComponent('Olá! vim através do site da Soberana, gostaria de atendimento personalizado 🌟');

  // Link para a conversa no WhatsApp com a mensagem personalizada
  const whatsappLink = `https://wa.me/5547997020079?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="wpp-btn"
    >
      <img
        src={Wpp}
        alt="Botão WhatsApp"
        className="wpp-icon"
      />
    </a>
  );
};

export default Wppbtn;
