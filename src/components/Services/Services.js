'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Hair Services',
    description: 'Access advanced treatment for receding hairlines and thinning bald spots with solutions such as PRP, GRC, as well as the FUE hair transplant procedure.',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Hair-related-services-28.jpg',
    link: '/hair-related-services',
  },
  {
    title: 'Skin Services',
    description: 'Take care of your face and appearance by opting for acne treatments, pigmentation solutions, and rejuvenating dull skin with the help of chemical peels, microneedling, Botox fillers, and many more solutions.',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Skin-related-services-28.jpg',
    link: '/skin-related-services',
  },
  {
    title: 'Undergo Vitiligo Treatment',
    description: 'If you suffer from vitiligo, it can prove to be a complex disorder to manage. However, with the advancements made in the dermatology field, you can now address this issue!',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Vitiligo-cure-28.jpg',
    link: '/vitiligo-treatment',
  },
  {
    title: 'Access Acne Treatment',
    description: 'If you have been struggling with adult acne, it can prove to be an obstacle in your life. With the help of Puri Skin Clinic, you can address the issue of acne in an essential manner.',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Acne-Treatment-30.jpg',
    link: '/acne-treatment',
  },
  {
    title: 'Ensure Melasma Treatment',
    description: 'Suffering from melasma can foster insecurities in a person. One can easily address this issue with the help of experts at Puri Skin Clinic.',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Melasma-Treatment-30.jpg',
    link: '/melasma-treatment',
  },
  {
    title: 'Undergo Facial Rejuvenation',
    description: 'Tighten, skin, and lift your face by opting for facial rejuvenation services as offered by the Puri Skin Clinic. Incorporate threads, HIFU, microneedling, and skin boosters into your facial rejuvenation treatment.',
    image: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Facial-Rejuvenation-30.jpg',
    link: '/facial-rejuvenation',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative rounded-[15px] bg-[#EA6490] overflow-hidden h-[340px] cursor-pointer">

      {/* ── FRONT (always visible) ── */}
      {/* Inset image with 15px padding and rounded corners */}
      <div className="p-[15px] pb-0 h-[255px]">
        <div className="w-full h-full rounded-[15px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Title label at bottom */}
      <div className="flex items-center justify-center h-[85px] px-4">
        <h4
          className="text-white text-center font-bold text-[18px] leading-snug"
          style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
        >
          {service.title}
        </h4>
      </div>

      {/* ── HOVER OVERLAY (zoom-in: chote se bara, smooth transition) ── */}
      <div
        className="absolute inset-0 z-20 rounded-[15px] bg-[#4CA6AE] flex flex-col items-center justify-center text-center text-white
          opacity-0 group-hover:opacity-100"
        style={{
          padding: '35px',
          transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Inner content scales from 0.4 → 1 smoothly */}
        <div
          className="transform scale-[0.4] group-hover:scale-100 opacity-0 group-hover:opacity-100"
          style={{
            transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease',
          }}
        >
          <p
            className="text-white text-[14px] leading-[1.75] mb-5"
            style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
          >
            {service.description}
          </p>
          <Link
            href={service.link}
            className="inline-block text-white px-7 py-3 rounded-[4px] text-[14px] font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif",
              backgroundColor: 'rgba(0,0,0,0.25)',
            }}
          >
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
};

const Services = () => {
  return (
    <section className="py-[70px] bg-[#f0f4f8]">
      <div className="max-w-[1140px] mx-auto px-[15px]">

        {/* Section Heading — Playfair Display, 46px, black, matching reference exactly */}
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

        {/* 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
