import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ContactButton.css'; // Make sure to import your CSS file

const ContactButton = () => {
  return (
    <div className="c-1-button">
        <button className="contact-button">
        <p className="btn-txt">
            Entre em contato via
        </p>
        <FaWhatsapp style={{ marginLeft: '10px', width: '20px', height: '20px' }} />
        </button>
    </div>    
  );
};

export default ContactButton;
