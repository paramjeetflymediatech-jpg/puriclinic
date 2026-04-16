'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SuccessStoryCard from '@/app/success-stories/SuccessStoryCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Lightbox from '@/components/Lightbox/Lightbox';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SuccessStoriesCarousel() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch('/api/success-stories');
        const data = await res.json();
        if (data.successStories) {
          setStories(data.successStories);
        }
      } catch (err) {
        console.error('Failed to fetch success stories for carousel:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-400 font-bold uppercase tracking-widest animate-pulse">
        Sourcing Patient Transformations...
      </div>
    );
  }

  if (stories.length === 0) return null;

  // Filter for only images as per clinical request
  const imageSuccessStories = stories.filter(s => s.media_type === 'image');

  if (imageSuccessStories.length === 0) return null;

  return (
    <section className="py-10 bg-[#FAFAFA] overflow-hidden">
      <div className="flex flex-col text-center justify-center">
        <div className="max-w-2xl mx-auto">
          <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }} className="text-4xl md:text-5xl font-heading text-gray-900 font-bold leading-tight">
            Our Success Stories
          </h3>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-8">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-20"
          >
            {imageSuccessStories.map((story, index) => (
              <SwiperSlide key={story.id}>
                <SuccessStoryCard
                  story={story}
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {lightboxOpen && (
            <Lightbox
              images={imageSuccessStories}
              activeIndex={currentIndex}
              onClose={() => setLightboxOpen(false)}
              onNavigate={(idx) => setCurrentIndex(idx)}
            />
          )}


          <div className="swiper-custom-pagination flex justify-center gap-2 mt-[-20px] px-20"></div>
        </div>
        <div className="flex gap-4 mt-8 text-center justify-center">
          <button className="swiper-prev-btn w-14 h-14 rounded-full border-2 border-[#EA6490] text-[#EA6490] flex items-center justify-center hover:bg-[#EA6490] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#EA6490]">
            <FaChevronLeft size={18} />
          </button>
          <button className="swiper-next-btn w-14 h-14 rounded-full border-2 border-[#EA6490] text-[#EA6490] flex items-center justify-center hover:bg-[#EA6490] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#EA6490]">
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>


      <style jsx global>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #EA6490;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
