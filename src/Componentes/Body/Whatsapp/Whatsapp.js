import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import "./Whatsapp.css"
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/3125293348" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
};
export default WhatsAppButton;
