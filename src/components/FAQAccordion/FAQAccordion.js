'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
        >
          <button 
            className={styles.header} 
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span>{faq.question}</span>
            <FaChevronDown className={styles.icon} />
          </button>
          <div className={styles.content}>
            <div className={styles.inner}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
