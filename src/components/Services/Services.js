'use client';

import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  const href = `/${service.slug || service.link}`;
  
  return (
    <Link href={href} className="group relative rounded-[15px] bg-[#EA6490] overflow-hidden h-[360px] cursor-pointer block shadow-sm hover:shadow-xl transition-all duration-500">
      {/* ── FRONT (always visible) ── */}
      <div className="p-[12px] pb-0 h-[260px]">
        <div className="w-full h-full rounded-[12px] overflow-hidden bg-white/10">
          <img
            src={service.image_url || '/services/Skin-related-services-28.avif'}
            alt={service.name || service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-center h-[100px] px-5">
        <h4
          className="text-white text-center font-bold text-[18px] leading-[1.3] group-hover:opacity-0 transition-opacity duration-300"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {service.name || service.title}
        </h4>
      </div>

      {/* ── HOVER OVERLAY ── */}
      <div
        className="absolute inset-0 z-20 rounded-[15px] bg-[#4CA6AE] flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100"
        style={{ padding: '30px', transition: 'all 0.4s ease-in-out' }}
      >
        <div
          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          <h4 className="text-white font-bold text-[20px] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {service.name || service.title}
          </h4>
          <p className="text-white/90 text-[14px] leading-[1.6] mb-6 line-clamp-6">
            {service.description}
          </p>
          <span
            className="inline-block bg-white text-[#4CA6AE] px-8 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest shadow-lg"
          >
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

const defaultServices = [
  {
    name: 'Hair Services',
    description: 'Access advanced treatment for receding hairlines and thinning bald spots with solutions such as PRP, GRC, as well as the FUE hair transplant procedure.',
    image_url: '/services/Hair-related-services-28.avif',
    slug: 'hair-related-services',
  },
  {
    name: 'Skin Services',
    description: 'Take care of your face and appearance by opting for acne treatments, pigmentation solutions, and rejuvenating dull skin with the help of chemical peels, microneedling, Botox fillers, and many more solutions.',
    image_url: '/services/Skin-related-services-28.avif',
    slug: 'skin-related-services',
  },
  {
    name: 'Undergo Vitiligo Treatment',
    description: 'If you suffer from vitiligo, it can prove to be a complex disorder to manage. However, with the advancements made in the dermatology field, you can now address this issue!',
    image_url: '/services/Vitiligo-cure-28.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Access Acne Treatment',
    description: 'If you have been struggling with adult acne, it can prove to be an obstacle in your life. With the help of Puri Skin Clinic, you can address the issue of acne in an essential manner.',
    image_url: '/services/Acne-Treatment-30.avif',
    slug: 'acne-treatment',
  },
  {
    name: 'Ensure Melasma Treatment',
    description: 'Suffering from melasma can foster insecurities in a person. One can easily address this issue with the help of experts at Puri Skin Clinic.',
    image_url: '/services/Melasma-Treatment-30.avif',
    slug: 'melasma-treatment',
  },
  {
    name: 'Undergo Facial Rejuvenation',
    description: 'Tighten, skin, and lift your face by opting for facial rejuvenation services as offered by the Puri Skin Clinic. Incorporate threads, HIFU, microneedling, and skin boosters into your facial rejuvenation treatment.',
    image_url: '/services/Facial-Rejuvenation-30.avif',
    slug: 'facial-rejuvenation',
  }
];

const Services = ({ displayServices }) => { 
  if (displayServices === undefined) {
    displayServices = defaultServices;
  }

  return (
    <section className="py-[70px] bg-[#f0f4f8]">
      <div className="max-w-[1140px] mx-auto px-[15px]">

        <div className="text-center mb-[50px]">
          <h3
            className="text-black text-[36px] md:text-[46px] leading-tight"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 400,
              margin: '0 0 20px 0',
            }}
          >
            Access our Exclusive Services!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {displayServices.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
