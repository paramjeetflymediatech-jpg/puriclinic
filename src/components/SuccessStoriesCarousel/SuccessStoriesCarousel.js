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

import { motion } from 'framer-motion';

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
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden text-center">
      <div className="max-w-[1300px] mx-auto space-y-12 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Remarkable Results <span className="text-[#EA6490]">That Speak Volumes</span>
          </h2>
          <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.res-prev',
              nextEl: '.res-next',
            }}
            pagination={{ clickable: true, el: '.res-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {imageSuccessStories.map((story, index) => (
              <SwiperSlide key={story.id}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <SuccessStoryCard
                    story={story}
                    onClick={null} // Click handled by parent motion.div
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows & Pagination */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button className="res-prev w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#EA6490] hover:text-[#EA6490] hover:scale-110 transition-all shadow-sm bg-white cursor-pointer">
              <FaChevronLeft size={20} />
            </button>
            <div className="res-pagination flex items-center gap-3 min-w-[80px] justify-center"></div>
            <button className="res-next w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#EA6490] hover:text-[#EA6490] hover:scale-110 transition-all shadow-sm bg-white cursor-pointer">
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={imageSuccessStories}
          activeIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(idx) => setCurrentIndex(idx)}
        />
      )}

      <style jsx global>{`
        .res-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 !important;
        }
        .res-pagination .swiper-pagination-bullet-active {
          background: #EA6490;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
