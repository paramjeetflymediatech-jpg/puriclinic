'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    image: '/slider-image-3.avif',
    alt: 'Hair Transplant Legacy northern india 1988',
  },
  {
    id: 2,
    image: '/slider-image-2.avif',
    alt: 'Skin & Hair Care Ludhiana',
  },
  {
    id: 3,
    image: '/slider-image-1.avif',
    alt: 'Effective Acne Treatment Plans',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] overflow-hidden bg-gray-50 border-b border-gray-100">
      
      {/* ─── MAIN SLIDER SLIDES ─── */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* ─── NAVIGATION ARROWS (Deto: Simple Black Chevrons) ─── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-0 md:px-0 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto bg-transparent text-black/40 hover:text-black transition-colors"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-2xl md:text-3xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto bg-transparent text-black/40 hover:text-black transition-colors"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-2xl md:text-3xl" />
        </button>
      </div>

    </section>
  );
};

export default Hero;