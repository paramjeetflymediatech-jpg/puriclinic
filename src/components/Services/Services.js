'use client';

import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative rounded-[15px] bg-[#EA6490] overflow-hidden h-[340px] cursor-pointer">

      {/* ── FRONT (always visible) ── */}
      <div className="p-[15px] pb-0 h-[255px]">
        <div className="w-full h-full rounded-[15px] overflow-hidden">
          <img
            src={service.image_url || 'https://puriskinclinic.com/wp-content/uploads/2025/08/Skin-related-services-28.jpg'}
            alt={service.name || service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center h-[85px] px-4">
        <h4
          className="text-white text-center font-bold text-[18px] leading-snug"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {service.name || service.title}
        </h4>
      </div>

      {/* ── HOVER OVERLAY ── */}
      <div
        className="absolute inset-0 z-20 rounded-[15px] bg-[#4CA6AE] flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100"
        style={{ padding: '35px', transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        <div
          className="transform scale-[0.4] group-hover:scale-100 opacity-0 group-hover:opacity-100"
          style={{ transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease' }}
        >
          <p
            className="text-white text-[14px] leading-[1.75] mb-5 line-clamp-4"
          >
            {service.description}
          </p>
          <Link
            href={`/services/${service.slug || service.link}/`}
            className="inline-block text-white px-7 py-3 rounded-[4px] text-[14px] font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
          >
            Read More
          </Link>
        </div>
      </div>

    </div>
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

const Services = () => {
  const displayServices = defaultServices;

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
