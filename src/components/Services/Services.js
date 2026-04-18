import React from 'react';
import Link from 'next/link';
import { Service } from '@/lib/models';

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
          style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
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
            style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
          >
            {service.description}
          </p>
          <Link
            href={`/services/${service.slug || service.link}`}
            className="inline-block text-white px-7 py-3 rounded-[4px] text-[14px] font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif", backgroundColor: 'rgba(0,0,0,0.25)' }}
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
    description: 'Advanced solutions for hair fall, thinning, baldness, including PRP, GFC, FUE hair transplant, Exosomes.',
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
    description: 'Targeted vitiligo care using topical therapy and melanocyte grafting for long-term pigment restoration and skin balance.',
    image_url: '/services/Vitiligo-cure-28.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Acne Treatment',
    description: 'Clear acne with chemical peels, topical medications, and customized advanced dermatological care for lasting results.',
    image_url: '/services/Acne-Treatment-30.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Melasma Treatment',
    description: 'Melasma treatment includes oral medications, exosome therapy, chemical peels, and microneedling to reduce facial pigmentation.',
    image_url: '/services/Melasma-Treatment-30.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Facial rejuvenation Treatment',
    description: 'Facial rejuvenation combines threads, HIFU, microneedling, and skin boosters to lift, tighten, and hydrate skin.',
    image_url: '/services/Facial-Rejuvenation-30.avif',
    slug: 'vitiligo-treatment',
  }
];

const Services = async () => {
  let fetchedServices = [];
  try {
    const rawServices = await Service.findAll({ limit: 6, order: [['createdAt', 'DESC']] });
    fetchedServices = rawServices.map(s => s.get({ plain: true }));
  } catch (err) {
    console.error("Failed to load services from DB:", err);
  }

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
