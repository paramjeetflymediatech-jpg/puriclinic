import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-[#EA6490]/10 transition-all duration-700 hover:-translate-y-2">
      <Link href={`/services/${service.slug}`} className="relative w-full h-[300px] overflow-hidden">
        <Image 
          src={service.image_url || 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800'}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
      </Link>
      
      <div className="p-10 flex flex-col items-center text-center flex-grow">
        <h3 className="text-2xl font-heading text-[#222222] font-bold mb-6 group-hover:text-[#EA6490] transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
          {service.name}
        </h3>
        
        <p className="text-gray-500 font-medium line-clamp-4 leading-relaxed mb-10 flex-grow text-[0.95rem]">
          {service.description}
        </p>
        
        <Link 
          href={`/services/${service.slug}`} 
          className="inline-block px-10 py-4 bg-[#EA6490]/10 text-[#EA6490] hover:bg-[#EA6490] hover:text-white rounded-full font-black uppercase text-[0.75rem] tracking-[0.2em] transition-all duration-500 shadow-sm hover:shadow-lg active:scale-95"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
