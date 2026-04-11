'use client';
import Image from 'next/image';
import { FaPlay, FaFilm } from 'react-icons/fa';

export default function SuccessStoryCard({ story }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-700">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
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
               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-100 group-hover/video:scale-125 group-hover/video:opacity-0 transition-all duration-500">
                  <FaPlay size={12} className="ml-1" />
               </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-white text-[8px] font-black uppercase tracking-widest border border-white/10">
               <FaFilm className="text-amber-400" /> Video Result
            </div>
          </div>
        ) : (
          <Image 
            src={story.image_url} 
            alt={story.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        )}
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#EA6490] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-50">
          {story.category}
        </div>
      </div>
      
      <div className="p-6 text-center bg-white">
        <h3 className="text-lg font-heading text-gray-900 font-bold uppercase tracking-wider mb-2 leading-tight">
          {story.title}
        </h3>
        <div className="w-6 h-0.5 bg-gray-100 mx-auto group-hover:w-16 group-hover:bg-[#EA6490] transition-all duration-500"></div>
      </div>
    </div>
  );
}
