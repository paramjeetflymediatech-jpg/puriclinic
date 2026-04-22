'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    image: '/slider-image-3.avif',
    mobileImage: '/mobile-slider/first.png',
    alt: 'Hair Transplant Legacy northern india 1988',
  },
  {
    id: 2,
    image: '/slider-image-2.avif',
    mobileImage: '/mobile-slider/second.png',
    alt: 'Skin & Hair Care Ludhiana',
  },
  {
    id: 3,
    image: '/slider-image-1.avif',
    mobileImage: '/mobile-slider/third.png',
    alt: 'Effective Acne Treatment Plans',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[350px] lg:h-[420px] overflow-hidden bg-gray-50 border-b border-gray-100">
      
      {/* ─── MAIN SLIDER SLIDES (Full Width) ─── */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Desktop Image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="hidden md:block object-cover object-center"
            />
            {/* Mobile Image */}
            <Image
              src={slide.mobileImage}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="block md:hidden object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* ─── NAVIGATION & CONTENT CONTAINER (max-w-7xl) ─── */}
      <div className="absolute inset-x-0 inset-y-0 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="pointer-events-auto bg-transparent text-black/40 hover:text-black transition-colors"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-2xl md:text-3xl" />
          </button>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="pointer-events-auto bg-transparent text-black/40 hover:text-black transition-colors"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-2xl md:text-3xl" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;