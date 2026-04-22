'use client';
import React, { useState } from 'react';
import SuccessStoryCard from './SuccessStoryCard';
import Lightbox from '@/components/Lightbox/Lightbox';

const CATEGORIES = ['All Transformations', 'Skin', 'Hair', 'Laser'];

export default function SuccessStoriesClient({ stories }) {
  const [activeCategory, setActiveCategory] = useState('All Transformations');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredStories = activeCategory === 'All Transformations'
    ? stories
    : stories.filter(story => story.category?.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 ${
              activeCategory === cat
                ? 'bg-[#EA6490] text-white border-[#EA6490] shadow-xl shadow-[#EA6490]/20'
                : 'bg-white text-slate-400 border-slate-50 hover:border-[#EA6490]/50 hover:text-[#EA6490] hover:shadow-lg'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Stories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-12 md:gap-y-20">

        {filteredStories.map((story, index) => (
          <SuccessStoryCard 
            key={story.id} 
            story={story} 
            onClick={() => openLightbox(index)}
          />
        ))}
        
        {filteredStories.length === 0 && (
          <div className="col-span-full py-32 text-center">
            <div className="text-slate-300 mb-4 flex justify-center">
               <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">
               Our patient transformations for this category are being updated...
            </p>
          </div>
        )}
      </div>

      {/* Lightbox - Using filtered stories for navigation context */}
      {lightboxOpen && (
        <Lightbox 
          images={filteredStories} 
          activeIndex={currentIndex} 
          onClose={closeLightbox} 
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
