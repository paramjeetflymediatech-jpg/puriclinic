'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Services from '@/components/Services/Services';

const displayServices=[
  {
    name: 'Hair Services',
    description: 'Advanced solutions for hair fall, thinning, baldness, including PRP, GFC, FUE hair transplant, Exosomes.',
    image_url: '/services/Hair-related-services-28.avif',
    slug: 'hair-related-services',
  },
  {
    name: 'Skin Services',
    description: 'Comprehensive care for acne, pigmentation, aging, and dull skin using chemical peels, microneedling, Botox, fillers, and laser treatments.',
    image_url: '/services/Skin-related-services-28.avif',
    slug: 'skin-related-services',
  },
  {
    name: 'Vitiligo Treatment',
    description: 'Targeted vitiligo care using topical therapy and melanocyte grafting for long-term pigment restoration and skin balance.',
    image_url: '/services/Vitiligo-cure-28.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Acne Treatment',
    description: 'Clear acne with chemical peels, topical medications, and customized advanced dermatological care for lasting results',
    image_url: '/services/Acne-Treatment-30.avif',
    slug: 'acne-treatment',
  },
  {
    name: 'Melasma Treatment',
    description: 'Melasma treatment includes oral medications, exosome therapy, chemical peels, and microneedling to reduce facial pigmentation.',
    image_url: '/services/Melasma-Treatment-30.avif',
    slug: 'melasma-treatment',
  },
  {
    name: 'Facial Rejuvenation',
    description: 'Facial rejuvenation combines threads, HIFU, microneedling, and skin boosters to lift, tighten, and hydrate skin.',
    image_url: '/services/Facial-Rejuvenation-30.avif',
    slug: 'facial-rejuvenation',
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a]" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>
      {/* ── REFERENCE STYLE HERO ── */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900 px-6 text-center">
        <Image
          src="/dermatology-3.jpg"
          fill
          className="object-cover opacity-60"
          alt="Clinical Excellence"
          priority
        />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-[60px] font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our Services
            </h1>

            {/* Centered Breadcrumbs inside Hero */}
            <div className="flex items-center justify-center gap-3 text-white/80 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={8} className="opacity-50" />
              <span className="text-white">Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Services displayServices={displayServices} />

      {/* ── CTA SECTION ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div
          className="rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[50px] font-bold mb-8 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Expert Skin & Hair Consultation
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
              Book your consultation at Ludhiana’s top clinic. Over 40+ Combined years of experience in personalized skin and hair solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-appointment/"
                className="bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-slate-900 transition-all shadow-lg"
              >
                Schedule Appointment
              </Link>
              <a
                href="tel:+919876170054"
                className="inline-flex items-center gap-3 border border-white/20 px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/5 transition-all text-white"
              >
                Call: +91 98761 70054
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
