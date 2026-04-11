'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight,FaGoogle } from 'react-icons/fa';
import styles from './TestimonialSlider.module.css';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, (testimonials?.length || 0) - 3);

  // Auto slide
  useEffect(() => {
    if (!testimonials || testimonials.length <= 3) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [testimonials, maxIndex]);

  if (!testimonials || testimonials.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainWrapper}>
        <div className={styles.leftSummary}>
          <div className={styles.statusBadge}>EXCELLENT</div>
          <div className={styles.largeStars}>
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <p className={styles.basedOn}>Based on 68 reviews</p>
          <div className={styles.googleGoogle}>
            <FaGoogle className={styles.gLogo} />
            <span>Google</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.sliderContainer}>
          <div 
            className={styles.sliderTrack} 
            style={{ transform: `translateX(-${currentIndex * 34.5}%)` }}
          >
            {testimonials.map((test, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatar}>
                      {test.author ? test.author.charAt(0).toUpperCase() : 'P'}
                    </div>
                    <div className={styles.headerText}>
                      <div className={styles.authorName}>{test.author}</div>
                      <div className={styles.date}>8 months ago</div>
                    </div>
                    <FaGoogle className={styles.cardG} />
                  </div>
                  
                  <div className={styles.cardRating}>
                    <div className={styles.smallStars}>
                      {[...Array(test.rating || 5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <div className={styles.verifiedBadge}>
                      <span className={styles.check}>✓</span> Verified
                    </div>
                  </div>

                  <p className={styles.reviewText}>{test.review}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
             <button onClick={prevSlide} className={styles.navBtn} aria-label="Previous"><FaChevronLeft /></button>
             <button onClick={nextSlide} className={styles.navBtn} aria-label="Next"><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
