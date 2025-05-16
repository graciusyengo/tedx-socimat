import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "+243818866316"; // Remplacez par votre numéro WhatsApp
  const message = "Bonjour et bienvenue ! Envie de faire partie de l’aventure TEDx Socimat ? Écrivez-nous, nous serons ravis d’échanger avec vous!";
  
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
