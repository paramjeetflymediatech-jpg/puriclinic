'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight, 
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function LaserHairRemovalPage() {
  const sliderImages = [
    "/skin-related/Laser-Hair-Removal-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const targetAreas = [
    "Full Face & Jawline", "Underarms", "Arms & Hands",
    "Legs & Feet", "Back & Shoulders", "Bikini Line"
  ];

  const reasons = [
    { title: "US-FDA Approved", desc: "Using the latest globally recognized laser technologies for maximum safety.", icon: <FaShieldAlt /> },
    { title: "Virtually Painless", desc: "Advanced cooling systems ensure a comfortable and smooth experience.", icon: <FaHandSparkles /> },
    { title: "Safe for Indian Skin", desc: "Expertly calibrated settings for diverse skin tones and hair types.", icon: <FaUserMd /> },
    { title: "Permanent Results", desc: "Significantly inhibit hair growth for long-term, hair-free skin.", icon: <FaSyncAlt /> },
    { title: "Clinical Supervision", desc: "Every session is overseen by our expert dermatologists.", icon: <FaRegLightbulb /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Laser-Hair-Removal-28.avif"
          fill
          className="object-cover object-center"
          alt="Laser Hair Removal Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Laser <span className="text-[#EA6490]">Hair Removal</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Smooth, Hair-Free Skin Permanently</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-[4/5]" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Experience the <br/><span className="text-[#EA6490]">Freedom of Smoothness!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Tired of the constant cycle of shaving, waxing, and plucking? Laser hair removal offers a permanent medical solution to unwanted body and facial hair.
              </p>
              <p>
                At Puri Skin Clinic, we use concentrated light energy to target hair follicles, inhibiting future growth without damaging the surrounding skin.
              </p>
              <p>
                Our US-FDA approved technology is safe for all Indian skin types and ensures a virtually painless experience with long-lasting clinical results.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE TECHNOLOGY (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Ludhiana's Most <span className="text-[#EA6490]">Advanced Laser Lab</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Our laser systems are specifically calibrated for the pigment in your hair. The light energy is converted to heat, which safely disables the sac that produces the hair strand.
              </p>
              <p>
                With advanced cooling tips and precise clinical protocols, we provide the gold standard in permanent hair reduction for both men and women.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: TARGET AREAS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Common <br/><span className="text-[#EA6490]">Target Areas</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover the versatility of our laser hair removal treatments.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “The best decision I ever made! No more painful waxing sessions, and the results at Puri Skin Clinic are fantastic.”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Amrit K., Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetAreas.map((area, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                            <FaCheckCircle />
                        </div>
                        <span className="font-bold text-slate-800 text-lg">{area}</span>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Permanent <span className="text-[#EA6490]">Smoothness Advantage</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Safe, effective, and clinical-grade laser treatments designed for lasting freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-all h-full group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-lg transition-transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">{item.title}</h4>
                <p className="text-black text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Ditch the Razor <br/><span className="text-[#EA6490]">Forever</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Experience the luxury of permanent smoothness with our virtually painless clinical lasers. Our expert team ensures your safety and comfort throughout the entire journey.
              </p>
              <p>
                Laser hair removal cost in Ludhiana is an investment in your long-term convenience and skin health. Book your consultation today.
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book My Laser Slot <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
        {/* SECTION 6: FAQS */}
        <FAQAccordion faqs={LASER_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── LASER SPECIFIC FAQS ───
const LASER_FAQS = [
  {
    question: "Is laser hair removal permanent?",
    answer: "Yes, it effectively inhibits hair growth for the long term. Most patients experience a permanent and significant reduction in hair growth after a complete cycle of sessions."
  },
  {
    question: "How many sessions are typically required?",
    answer: "Most patients require 6 to 8 sessions spaced about 4 to 6 weeks apart to achieve optimal and lasting results, as the laser targets hair in its active growth phase."
  },
  {
    question: "Is the procedure painful?",
    answer: "Our advanced US-FDA approved lasers feature integrated cooling systems that make the procedure virtually painless. Most patients describe the sensation as a mild tingling."
  },
  {
    question: "Is it safe for all skin types?",
    answer: "Yes, our technology is specifically designed and calibrated to be safe and effective for all Indian skin tones and hair types."
  },
  {
    question: "Can I go out in the sun after my session?",
    answer: "We recommend avoiding direct sun exposure on the treated area and wearing a high-SPF sunscreen for at least a week after each session."
  },
  {
    question: "Are there any side effects?",
    answer: "You may experience slight redness or a mild sunburn sensation for a few hours, which typically resolves quickly. Our clinical team provides full post-care guidance."
  },
  {
    question: "Can facial hair be treated safely?",
    answer: "Absolutely. We use precise clinical parameters specifically for delicate facial skin to safely remove unwanted upper lip, chin, or jawline hair."
  },
  {
    question: "How should I prepare for my first session?",
    answer: "You should shave the area to be treated 24 hours before your session. Avoid waxing or plucking for at least 4 weeks prior."
  }
];
