'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight, FaStethoscope, FaFlask, FaUserMd, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    id: 'hair',
    title: 'Hair Related Services',
    subtitle: ' Trichology Division',
    icon: <FaUserMd />,
    image: '/services/Hair-related-services-28.avif',
    description: 'Specialized hair restoration and transplant services using globally recognized FUE and PRP techniques for permanent results.',
    link: '/services/hair-related-services',
    stats: { patients: '15k+', years: '40+', success: '99%' }
  },
  {
    id: 'skin',
    title: 'Skin Related Services',
    subtitle: ' Dermatology Science',
    icon: <FaFlask />,
    image: '/services/Skin-related-services-28.avif',
    description: 'Advanced aesthetic solutions for rejuvenation, pigmentation, and chronic skin conditions delivered with medical precision.',
    link: '/services/skin-related-services',
    stats: { patients: '25k+', years: '40+', success: '98%' }
  },
  {
    id: 'vitiligo',
    title: 'Vitiligo Treatment',
    subtitle: 'Pigment Restoration',
    icon: <FaStethoscope />,
    image: '/services/Vitiligo-cure-28.avif',
    description: 'Expert management and treatment for vitiligo using specialized topical therapy and melanocyte grafting techniques.',
    link: '/services/vitiligo-treatment',
    stats: { patients: '5k+', years: '40+', success: '95%' }
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

      {/* ── INTRO SECTION ── */}
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Welcome to North India's Premier <span className="text-[#EA6490]">Clinical Destination</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 font-medium leading-[1.8] mb-8 italic">
              "We take pride in providing our patients with the best services and care. At Puri Skin Clinic, we focus on treatments that are scientifically proven and clinically safe."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Clinical Expertise', text: '40+ years of medical excellence.' },
                { title: 'Advanced Tech', text: 'World-class lasers & equipments.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="p-3 bg-[#EA6490]/10 rounded-xl"><FaStethoscope className="text-[#EA6490]" /></span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/services/Hair-related-services-28.avif"
              width={600}
              height={500}
              className="object-cover w-full h-auto"
              alt="Clinic"
            />
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16 md:mb-24">
          <span className="text-[#EA6490] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Medical Segments</span>
          <h2 className="text-3xl md:text-[50px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Our Specialized Divisions
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 space-y-32">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={cat.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={cat.title}
                  />
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-8 rounded-3xl border border-white/10 hidden xl:block shadow-2xl">
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{cat.stats.patients}</p>
                      <p className="text-[10px] uppercase font-black tracking-widest text-[#EA6490]">Patients</p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{cat.stats.success}</p>
                      <p className="text-[10px] uppercase font-black tracking-widest text-[#EA6490]">Success</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 max-w-xl">
                <div className={`flex items-center gap-3 text-[#EA6490] font-black uppercase tracking-[0.4em] text-[12px] mb-6 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <span className="p-3 bg-[#EA6490]/10 rounded-2xl">{cat.icon}</span> {cat.subtitle}
                </div>
                <h3
                  className={`text-4xl md:text-[48px] font-bold text-slate-900 mb-8 leading-[1.1] ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {cat.title}
                </h3>
                <p className={`text-slate-600 text-lg leading-relaxed mb-10 ${idx % 2 !== 0 ? 'lg:text-right text-balance' : ''}`}>
                  {cat.description}
                </p>

                <div className={`flex ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                  <Link
                    href={cat.link}
                    className="group inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-[#EA6490] transition-all shadow-xl active:scale-95"
                  >
                    View Treatments <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div
          className="rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[50px] font-bold mb-8 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Secure Your Consult Today
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
              Step into the world of professional dermatology where care meets high-end clinical science.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-appointment"
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
