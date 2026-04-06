'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaGoogle } from 'react-icons/fa';
import styles from './TestimonialSlider.module.css';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.sliderTrack} 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((test, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <div className={styles.stars}>
                {[...Array(test.rating || 5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className={styles.review}>"{test.review}"</p>
              <h4 className={styles.author}>{test.author}</h4>
              <div className={styles.source}>
                <FaGoogle /> Verified on {test.source || 'Google'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={prevSlide} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>
          <button className={styles.controlBtn} onClick={nextSlide} aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
