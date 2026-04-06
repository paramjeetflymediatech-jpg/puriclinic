import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  // Mobile number without "+" or spaces
  const phoneNumber = "919815673163";
  const defaultMessage = "Hello Puri Skin Clinic, I would like to book an appointment or ask a question.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={styles.floatingBtn} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
