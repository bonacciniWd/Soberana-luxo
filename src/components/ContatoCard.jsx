import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Tilt} from 'react-tilt';
import './ContatoCard.css';
import { FaWhatsapp, FaMailBulk, FaInstagram } from 'react-icons/fa';



const ContactCard = () => {
  // Função para copiar o texto para a área de transferência
  const copyTextToClipboard = () => {
    const textToCopy = "soberana.luxo@gmail.com";
    
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
        <h2>Contato</h2>
        <p onClick={copyTextToClipboard}>
            <FaMailBulk style={{color:'#007BFF'}} /> Email: <br />
            <span className="blue-text">soberana.luxo@gmail.com</span>
        </p>
        <p>
         <FaWhatsapp style={{color:'#25D366'}} className="whatsapp-icon"/>  WhatsApp: <br />
           <span className="blue-text">(47) 99792-8173</span> 
        </p>
        
        <p>
         <FaInstagram style={{color:'#E4405F'}} className="whatsapp-icon"/>  Instagram <br />
           <span className="blue-text">@soberana.luxo</span> 
        </p>
      </div>
    </div>
    
  );
}

export default ContactCard;
