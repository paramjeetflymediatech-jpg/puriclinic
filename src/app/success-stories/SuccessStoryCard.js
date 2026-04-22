'use client';
import Image from 'next/image';
import { FaPlay, FaFilm } from 'react-icons/fa';

export default function SuccessStoryCard({ story, onClick }) {
  // Fallback title if database title is empty or just whitespace
  const displayTitle = (story.title && story.title.trim().length > 0) 
    ? story.title 
    : `${story.category} Transformation`;

  return (
    <div 
      className={`group bg-white rounded-2xl md:rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative aspect-[3/2] overflow-hidden">

        {story.media_type === 'video' ? (
          <div className="relative w-full h-full group/video">
            <video 
              src={story.image_url} 
              className="object-contain w-full h-full bg-slate-50"
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
          </div>
        ) : (
          <Image 
            src={story.image_url} 
            alt={displayTitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain bg-slate-50 transition-transform duration-1000 group-hover:scale-100"
          />
        )}
      </div>

      {/* Category Tag Overlay (Optional but nice for quick context) */}
      <div className="absolute top-[80px] right-6 opacity-0 group-hover:opacity-0 transition-opacity duration-500">
        <span className="bg-white/90 backdrop-blur-md text-[#EA6490] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
          
        </span>
      </div>
    </div>
  );
}