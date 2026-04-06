'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    title: 'Advanced Hair Restoration',
    subtitle: 'Pioneers in Hair Transplant',
    description: 'Dr. Gurinderjit Singh Puri pioneered hair transplantation in North India. Experience world-class PRP, GFC, and FUE transplants.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
    ctaPrimary: 'Explore Hair Services',
    ctaPrimaryLink: '/services#hair',
    ctaSecondary: 'Book Consultation',
    ctaSecondaryLink: '/book-appointment'
  },
  {
    id: 2,
    title: 'Radiant, Youthful Skin',
    subtitle: 'Advanced Aesthetic Care',
    description: 'From Botox and Fillers to advanced Chemical Peels. We offer personalized treatments to rejuvenate your skin and restore your glow.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000&auto=format&fit=crop',
    ctaPrimary: 'Explore Skin Services',
    ctaPrimaryLink: '/services#skin',
    ctaSecondary: 'Book Consultation',
    ctaSecondaryLink: '/book-appointment'
  },
  {
    id: 3,
    title: 'Expert Vitiligo Treatment',
    subtitle: 'Comprehensive Care',
    description: 'We provide specialized and effective therapies for Vitiligo and other pigmentation disorders, backed by decades of clinical experience.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop',
    ctaPrimary: 'Learn About Vitiligo',
    ctaPrimaryLink: '/services/vitiligo-treatment',
    ctaSecondary: 'Book Consultation',
    ctaSecondaryLink: '/book-appointment'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
          <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className={styles.content}>
              <span className={styles.badge}>{slide.subtitle}</span>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.ctaGroup}>
                <Link href={slide.ctaPrimaryLink} className="btn btn-primary">
                  {slide.ctaPrimary}
                </Link>
                <Link href={slide.ctaSecondaryLink} className="btn btn-outline">
                  {slide.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
