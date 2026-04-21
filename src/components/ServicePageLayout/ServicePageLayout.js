'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaCalendarAlt, FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';

export default function ServicePageLayout({
  name,
  tagline,
  heroImage,
  category,
  categoryLink,
  aboutContent,
  symptoms = [],
  treatments = [],
  faqs = [],
  faqTitle = "Frequently Asked Questions",
  children
}) {
  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── EXACT REPLICA HERO ── */}
      <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center px-6 overflow-hidden" style={{ backgroundColor: '#D5E8E4' }}>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Star Rating Trust Signal */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="flex gap-1 text-yellow-500 text-lg">
                {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                Trusted by 50,000+ Verified Patients
              </span>
            </div>

            <h1 className="text-4xl md:text-[60px] font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {name}
            </h1>

            {tagline && (
              <p className="text-lg md:text-[24px] font-medium text-[#444444] mb-12 max-w-4xl mx-auto leading-relaxed italic opacity-80">
                "{tagline}"
              </p>
            )}

            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-slate-600 font-bold uppercase tracking-[0.15em] text-[10px] mt-8">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={8} className="text-slate-300" />
              <Link href="/services/" className="hover:text-[#EA6490] transition-colors">Services</Link>
              {category && (
                <>
                  <FaChevronRight size={8} className="text-slate-300" />
                  <Link href={categoryLink} className="hover:text-[#EA6490] transition-colors">{category}</Link>
                </>
              )}
              <FaChevronRight size={8} className="text-slate-300" />
              <span className="text-[#EA6490]">{name}</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements to match the reference's airy feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* PRIMARY CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-20 md:space-y-28">

            {/* 1. PRIMARY MEDIA / GALLERY */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <div className="relative aspect-[16/10]">
                <Image
                  src={heroImage || '/dermatology-3.jpg'}
                  fill
                  className="object-cover"
                  alt={name}
                />
              </div>
            </div>

            {/* 2. OVERVIEW SECTION */}
            <section className="relative">
              <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-10 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Understanding the <span className="text-[#EA6490]">Procedure</span>
              </h2>
              <div className="text-[#333333] leading-[1.8] text-lg font-medium whitespace-pre-wrap max-w-none">
                {aboutContent}
              </div>
            </section>

            {/* Custom Content Injection */}
            {children}

            {/* 3. SYMPTOMS / INDICATIONS */}
            {symptoms.length > 0 && (
              <section className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-12" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Common <span className="text-[#EA6490]">Observations</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#EA6490]/10 flex items-center justify-center shrink-0 border border-[#EA6490]/20 text-[#EA6490]">
                          <FaCheckCircle size={14} />
                        </div>
                        <p className="text-lg font-bold text-slate-700 leading-snug">{symptom}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 4. TREATMENT MODALITIES */}
            {treatments.length > 0 && (
              <section className="space-y-12">
                <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Medical <span className="text-[#EA6490]">Interventions</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {treatments.map((tr, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="p-10 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] text-2xl mb-8 group-hover:scale-110 transition-transform">
                        <FaStethoscope />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{tr.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{tr.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. FAQs */}
            {faqs.length > 0 && (
              <section className="space-y-10">
                <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Clinical <span className="text-[#EA6490]">FAQs</span>
                </h2>
                <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                  <FAQAccordion
                    faqs={faqs}
                    title={faqTitle}
                  />
                </div>
              </section>
            )}

          </div>

          {/* STICKY SIDEBAR (4 cols) */}
          <aside className="lg:col-span-4 sticky top-32 space-y-10">

            {/* EXACT PINK APPOINTMENT BOX */}
            <div
              className="rounded-[20px] p-8 md:p-10 text-white relative overflow-hidden shadow-xl"
              style={{ backgroundColor: '#E1708E' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Get in touch
              </h3>
              <p className="text-white/90 text-sm font-medium mb-8 text-center leading-relaxed">
                Schedule your medical assessment with our experts today.
              </p>

              <AppointmentForm theme="pink" />
            </div>

            {/* QUICK CONTACTS */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-8 shadow-sm space-y-6">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-[#EA6490] rounded-full"></span> Reach Us Fast
              </h4>
              <a href="tel:+919876170054" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#EA6490] group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Call Now</p>
                  <p className="text-sm font-bold text-slate-800 tracking-wide">+91 98761 70054</p>
                </div>
              </a>
              <a href="mailto:puriskinclinic@gmail.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#EA6490] group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Us</p>
                  <p className="text-sm font-bold text-slate-800 tracking-wide">puriskinclinic@gmail.com</p>
                </div>
              </a>
            </div>

            {/* SIDEBAR BLOGS */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-8 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-6 bg-[#4CA6AE] rounded-full"></span> Relevant Insights
              </h4>
              <BlogSidebar theme="clinical" props={{ width: 'w-full' }} />
            </div>

          </aside>
        </div>
      </div>

      {/* ── FOOTER TRUST SIGNAL ── */}
      <section className="bg-slate-50 py-20 border-t border-slate-100 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-[#EA6490] mx-auto mb-10 rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Clinical Excellence Since 1980
          </h2>
          <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed italic opacity-80">
            "Puri Skin Clinic remains North India's benchmark for complex dermatological care."
          </p>
          <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-[#EA6490] transition-all shadow-xl active:scale-95">
            Calculate Treatment Fee <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
