import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ContactButton.css'; // Importe seu arquivo CSS aqui

const ContactButton = ({ message }) => {
  const whatsappLink = `https://wa.me/554796420304?text=${encodeURIComponent(message)}`;

  return (
    <button className='contact-button'>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" /> Entrar em Contato
      </a>
    </button>
  );
}

export default ContactButton;
