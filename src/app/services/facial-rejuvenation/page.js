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

export default function FacialRejuvenationPage() {
  const sliderImages = [
    "/skin-related/Facial-Rejuvenation-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const modalities = [
    { title: "Microneedling", desc: "Stimulating collagen production to refine skin texture and reduce scarring.", icon: <FaStethoscope /> },
    { title: "Skin Boosters", desc: "Deep hydration treatments to restore volume and a healthy, dewy glow.", icon: <FaHandSparkles /> },
    { title: "Clinical Threads", desc: "Non-surgical lifting to address sagging skin and redefine facial contours.", icon: <FaMagic /> },
    { title: "HIFU Lifting", desc: "High-Intensity Focused Ultrasound for deep tissue tightening and lifting.", icon: <FaShieldAlt /> },
    { title: "Advanced Peels", desc: "Medical-grade resurfacing to unmask your skin's natural radiance.", icon: <FaRegLightbulb /> },
    { title: "Bespoke Plans", desc: "Combining multiple therapies for a comprehensive anti-aging result.", icon: <FaSyncAlt /> }
  ];

  const reasons = [
    { title: "Decades of Experience", desc: "Clinical excellence in facial aesthetics since 1980.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Every treatment plan is tailored to your unique facial structure.", icon: <FaCalendarAlt /> },
    { title: "Advanced Technology", desc: "Using the latest globally recognized non-surgical solutions.", icon: <FaShieldAlt /> },
    { title: "Natural Results", desc: "Focusing on symmetrical enhancement for a refreshed, never overdone look.", icon: <FaStar /> },
    { title: "Safe & Effective", desc: "Strict medical protocols ensuring the highest standards of patient care.", icon: <FaSyncAlt /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Facial-Rejuvenation-28.avif"
          fill
          className="object-cover object-center"
          alt="Facial Rejuvenation Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Facial <span className="text-[#EA6490]">Rejuvenation</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Rediscover Your Natural Radiance in Ludhiana</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Unmask Your <br/><span className="text-[#EA6490]">Inner Glow!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                As we age, our skin naturally undergoes structural changes, leading to fine lines, wrinkles, and loss of volume. Facial rejuvenation at Puri Skin Clinic is designed to address these concerns holistically.
              </p>
              <p>
                We combine a variety of non-surgical procedures tailored to your individual needs. From skin boosters to advanced lifting technologies, our goal is to restore a youthful, refreshed appearance.
              </p>
              <p>
                Our clinical protocols respect the unique characteristics of every face, ensuring that the results look natural and harmonious with your features.
              </p>
            </div>
          </div>

          <div className="">
            <ImageSlider images={sliderImages} aspect="aspect-[4/5]" />
          </div>
        </section>

        {/* SECTION 2: MODALITIES (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Bespoke <span className="text-[#EA6490]">Anti-Aging Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                {modalities.map((item, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                        <div className="text-[#EA6490] text-2xl">{item.icon}</div>
                        <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: TARGET CONCERNS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Clinical <br/><span className="text-[#EA6490]">Indications</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover how our rejuvenation programs address specific signs of facial aging.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “The rejuvenation program at Puri Skin Clinic was truly transformative. My face looks refreshed and my skin has regained its radiance.”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Priya S., Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Dull Face & Loss of Glow",
                  "Persistent Acne Scarring",
                  "Hyperpigmentation & Sun Damage",
                  "Fine Lines and Deep Wrinkles",
                  "Skin Laxity and Sagging",
                  "Loss of Facial Volume"
                ].map((concern, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                            <FaCheckCircle />
                        </div>
                        <span className="font-bold text-slate-800 text-lg">{concern}</span>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Experience the <span className="text-[#EA6490]">Luxury of Rejuvenation</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Rediscover your best self with our expert-led facial aesthetic programs.
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
              Start Your Facial <br/><span className="text-[#EA6490]">Rejuvenation Journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Experience the best clinical facial rejuvenation program in Ludhiana. Our expert team is dedicated to providing symmetrical enhancement and natural-looking results.
              </p>
              <p>
                Every face is unique, and our clinical protocols are designed to respect that individuality while delivering effective anti-aging results.
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Assessment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
        {/* SECTION 6: FAQS */}
        <FAQAccordion faqs={FR_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── FACIAL REJUVENATION SPECIFIC FAQS ───
const FR_FAQS = [
  {
    question: "What is facial rejuvenation?",
    answer: "Facial rejuvenation is a combination of clinical procedures aimed at restoring a youthful appearance by addressing wrinkles, sagging skin, and loss of volume."
  },
  {
    question: "Are the procedures non-surgical?",
    answer: "At Puri Skin Clinic, we specialize in advanced non-surgical rejuvenation procedures like microneedling, skin boosters, and HIFU lifting, which offer minimal downtime."
  },
  {
    question: "How long do the results last?",
    answer: "The duration of results depends on the specific treatment. Most non-surgical procedures provide noticeable improvement for 6 to 18 months."
  },
  {
    question: "Is there any downtime involved?",
    answer: "Most of our rejuvenation procedures have minimal downtime. You may experience slight redness or swelling for 24-48 hours depending on the treatment depth."
  },
  {
    question: "When should I start anti-aging treatments?",
    answer: "Many patients start preventative treatments in their late 20s or early 30s to maintain skin elasticity and delay the appearance of deeper wrinkles."
  },
  {
    question: "Can multiple treatments be combined?",
    answer: "Yes, we often create bespoke plans that combine different modalities like skin boosters and HIFU for more comprehensive and effective results."
  },
  {
    question: "Is facial rejuvenation painful?",
    answer: "Most procedures involve minimal discomfort. We use topical numbing creams and advanced technology to ensure your experience is as comfortable as possible."
  },
  {
    question: "How do I choose the right treatment?",
    answer: "Every journey begins with a personalized consultation where we assess your facial structure and skin type to recommend the most effective pathway for you."
  }
];
