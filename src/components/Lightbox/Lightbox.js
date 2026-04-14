'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Premium Lightbox Component
 * @param {Array} images - Array of image objects or URLs
 * @param {number} activeIndex - Currently displayed image index
 * @param {Function} onClose - Close handler
 * @param {Function} onNavigate - Navigation handler (index)
 */
const Lightbox = ({ images, activeIndex, onClose, onNavigate }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    onNavigate(newIndex);
  }, [activeIndex, images.length, onNavigate]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    const newIndex = (activeIndex + 1) % images.length;
    onNavigate(newIndex);
  }, [activeIndex, images.length, onNavigate]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  }, [onClose, handlePrev, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isMounted) return null;

  const currentImage = images[activeIndex];
  const imageUrl = typeof currentImage === 'string' ? currentImage : (currentImage?.image_url || currentImage?.src);

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 animate-in fade-in"
      onClick={onClose}
    >
      {/* ─── CLOSE BUTTON ─── */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[100000] p-4 text-white/50 hover:text-[#EA6490] hover:scale-110 transition-all duration-300"
        aria-label="Close Lightbox"
      >
        <FaTimes size={32} />
      </button>

      {/* ─── NAVIGATION BUTTONS ─── */}
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-8 z-[100000] w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#EA6490] hover:border-[#EA6490] hover:scale-105 transition-all duration-300 group"
          >
            <FaChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-8 z-[100000] w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#EA6490] hover:border-[#EA6490] hover:scale-105 transition-all duration-300 group"
          >
            <FaChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </>
      )}

      {/* ─── IMAGE CONTAINER ─── */}
      <div 
        className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={currentImage?.title || 'Transformation Detail'}
              fill
              className="object-contain animate-in zoom-in-95 duration-500"
              priority
              quality={100}
            />
        </div>

        {/* ─── CAPTION ─── */}
        {currentImage?.title && (
            <div className="absolute bottom-[-60px] left-0 right-0 text-center">
                <h4 className="text-white font-heading text-xl font-bold uppercase tracking-widest drop-shadow-md">
                    {currentImage.title}
                </h4>
                {currentImage.category && (
                    <span className="text-[#4CA6AE] text-xs font-black uppercase tracking-[0.3em] mt-2 block">
                        {currentImage.category}
                    </span>
                )}
            </div>
        )}
      </div>

      {/* ─── COUNTER ─── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">
        {activeIndex + 1} <span className="mx-2 opacity-30">/</span> {images.length}
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
