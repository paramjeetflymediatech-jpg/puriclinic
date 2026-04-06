import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "919815673163";
  const defaultMessage = "Hello Puri Skin Clinic, I would like to book an appointment or ask a question.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-[30px] left-[30px] z-[1000] bg-[#25D366] text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-[32px] shadow-lg hover:scale-110 transition-transform duration-300 animate-[pulse-glow_2s_infinite] md:bottom-[30px] md:left-[30px] max-md:bottom-[20px] max-md:left-[20px] max-md:w-[50px] max-md:h-[50px] max-md:text-[28px]"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
