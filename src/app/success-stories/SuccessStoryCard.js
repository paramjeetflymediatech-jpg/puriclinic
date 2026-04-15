'use client';
import Image from 'next/image';
import { FaPlay, FaFilm } from 'react-icons/fa';

export default function SuccessStoryCard({ story, onClick }) {
  // Fallback title if database title is empty or just whitespace
  const displayTitle = (story.title && story.title.trim().length > 0) 
    ? story.title 
    : `${story.category} Transformation`;

  return (
    <div className="group space-y-5">
      {/* Treatment Title - Placed ABOVE the image frame with Serif styling */}
      <h3 className="text-lg md:text-xl font-heading text-slate-800 font-bold uppercase tracking-[0.1em] text-center leading-tight group-hover:text-[#EA6490] transition-colors duration-500 min-h-[1.5em] flex items-center justify-center">
        {displayTitle}
      </h3>

      {/* Main Image Frame */}
      <div 
        className={`relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)] transition-all duration-700 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          {story.media_type === 'video' ? (
            <div className="relative w-full h-full group/video">
              <video 
                src={story.image_url} 
                className="object-cover w-full h-full"
                loop
                muted
                playsInline
                onPointerOver={e => e.target.play()}
                onPointerOut={e => {e.target.pause(); e.target.currentTime = 0;}}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/video:bg-transparent transition-all pointer-events-none">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-100 group-hover/video:scale-125 group-hover/video:opacity-0 transition-all duration-500">
                    <FaPlay size={16} className="ml-1" />
                 </div>
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                 <FaFilm className="text-amber-400" /> Video Result
              </div>
            </div>
          ) : (
            <Image 
              src={story.image_url} 
              alt={displayTitle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          )}
          
          {/* Category Tag */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#EA6490] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg border border-slate-100">
            {story.category}
          </div>

          {/* Transformation Footer Label - High Visibility */}
          <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md py-4 text-center border-t border-slate-200">
             <span className="text-[11px] font-black text-slate-800 uppercase tracking-[0.5em]">
                BEFORE <span className="text-[#EA6490] mx-2">/</span> AFTER
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
