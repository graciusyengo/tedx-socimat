import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "+243123456789"; // Remplacez par votre numéro WhatsApp
  const message = "Bonjour, je souhaite réserver un billet pour TEDx Socimat !";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="button-text">Réserver un billet</span>
    </button>
  );
};

export default WhatsAppButton;
