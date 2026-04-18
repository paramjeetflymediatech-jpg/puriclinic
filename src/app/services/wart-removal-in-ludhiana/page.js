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

export default function WartRemovalPage() {
  const sliderImages = [
    "/skin-related/Wart-Removal-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const methods = [
    { title: "Cryotherapy", desc: "Using liquid nitrogen to freeze and destroy wart tissue effectively.", icon: <FaStethoscope /> },
    { title: "Laser Removal", desc: "Concentrated light energy to seal off blood supply to the wart safely.", icon: <FaHandSparkles /> },
    { title: "Electrosurgery", desc: "Using high-frequency electric current for rapid and precise removal.", icon: <FaMagic /> },
    { title: "Topical Acids", desc: "Medical-grade formulas to gradually peel away persistent wart layers.", icon: <FaRegLightbulb /> }
  ];

  const reasons = [
    { title: "Scar-Free Result", desc: "Our advanced methods ensure permanent removal with minimal marking.", icon: <FaMagic /> },
    { title: "Expert Diagnosis", desc: "Ensuring every growth is correctly identified before clinical removal.", icon: <FaUserMd /> },
    { title: "HPV Prevention", desc: "Addressing the root viral cause to minimize the risk of recurrence.", icon: <FaShieldAlt /> },
    { title: "Quick & Effective", desc: "Most warts can be removed in a single session lasting under 30 minutes.", icon: <FaSyncAlt /> },
    { title: "Sterile Clinical Care", desc: "Maintaining the highest medical standards for your safety and comfort.", icon: <FaCheckCircle /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Wart-Removal-28.avif"
          fill
          className="object-cover object-center"
          alt="Wart Removal Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Wart <span className="text-[#EA6490]">Removal</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Scar-Free Permanent Relief in Ludhiana</p>
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
              Reclaim Your <br /><span className="text-[#EA6490]">Smooth Skin!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Warts are noncancerous skin growths caused by the Human Papillomavirus (HPV). They can be both physically uncomfortable and aesthetically concerning.
              </p>
              <p>
                At Puri Skin Clinic, we offer permanent, scar-free clinical removal using advanced technology. Our experts ensure the root cause is addressed to prevent recurrence.
              </p>
              <p>
                Experience professional dermatological surgery that prioritizes your comfort and delivers rapid, effective results for all types of skin growths.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE METHODS (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Advanced <span className="text-[#EA6490]">Removal Techniques</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-12">
              {methods.map((method, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="text-[#EA6490] text-2xl">{method.icon}</div>
                  <h4 className="font-bold text-slate-900 text-xl">{method.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Clinical <br /><span className="text-[#EA6490]">Benefits</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            <p className="text-black font-medium text-lg">
              Discover why we are North India's trusted choice for dermatological procedures.
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                “I had several warts on my hands that were causing me a lot of stress. The removal at Puri Skin Clinic was quick, painless, and left no scars.”
              </p>
              <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Amit V., Ludhiana</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Complete Viral Eradication",
              "Cosmetic Appearance Improvement",
              "Relief from Physical Discomfort",
              "Prevention of HPV Spread",
              "Painless Clinical Procedure",
              "Rapid Healing Pathway"
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  <FaCheckCircle />
                </div>
                <span className="font-bold text-slate-800 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Permanent <span className="text-[#EA6490]">Wart Relief</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Precision dermatological surgery designed for lasting results and patient comfort.
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
              Say Goodbye to <br /><span className="text-[#EA6490]">Unwanted Warts</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Don't let warts affect your self-confidence or comfort any longer. Our clinical team provides the expert care you need for permanent and scar-free removal.
              </p>
              <p>
                Wart removal cost in Ludhiana is highly competitive at Puri Skin Clinic, making world-class dermatological surgery accessible to all.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Procedure <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 6: FAQS */}
      <FAQAccordion faqs={WART_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── WART SPECIFIC FAQS ───
const WART_FAQS = [
  {
    question: "Is wart removal painful?",
    answer: "No, we use local numbing agents or integrated cooling technology to ensure that the procedure is virtually painless for all our patients."
  },
  {
    question: "How long does a removal session take?",
    answer: "Most warts can be removed in a single session lasting between 15 to 30 minutes, depending on the number and size of the growths."
  },
  {
    question: "Will the wart grow back after removal?",
    answer: "Our advanced clinical methods target both the growth and the underlying virus to significantly minimize the chance of recurrence."
  },
  {
    question: "What is the recovery process like?",
    answer: "Recovery is typically very fast. A small scab may form and fall off within a few days, revealing smooth, healthy skin underneath."
  },
  {
    question: "Are there any side effects?",
    answer: "Temporary side effects are minimal and may include slight redness or mild swelling at the site, which typically resolve very quickly."
  },
  {
    question: "Can warts spread to other people?",
    answer: "Yes, warts are caused by a virus (HPV) and can be contagious through direct contact. Removing them is the best way to stop the spread."
  },
  {
    question: "Is clinical removal better than home remedies?",
    answer: "Yes, professional removal is safer, more effective, and ensures that the growth is correctly diagnosed before any procedure is performed."
  },
  {
    question: "Is wart removal expensive in Ludhiana?",
    answer: "At Puri Skin Clinic, we offer affordable and transparent pricing for all our dermatological procedures, ensuring expert care is accessible."
  }
];
