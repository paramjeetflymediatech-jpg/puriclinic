'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight, 
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function DermapenTreatmentPage() {
  const sliderImages = [
    "/skin-related/Dermapen-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const benefits = [
    { title: "Skin Rejuvenation", desc: "Revitalise your complexion and restore the natural glow of youth.", icon: <FaMagic /> },
    { title: "Reduction of Wrinkles", desc: "Target fine lines and dynamic wrinkles for a smoother facial appearance.", icon: <FaStar /> },
    { title: "Improving Scars", desc: "Significantly reduce the appearance of acne scars and surgical marks.", icon: <FaShieldAlt /> },
    { title: "Minimise Pores", icon: <FaStethoscope />, desc: "Refine skin texture and reduce the visibility of enlarged pores." },
    { title: "Even Skin Tone", icon: <FaCheckCircle />, desc: "Address hyperpigmentation and uneven patches for a uniform look." },
    { title: "Safe & Precise", icon: <FaShieldAlt />, desc: "Pinpoint accuracy even in sensitive areas like around the eyes." }
  ];

  const reasons = [
    { title: "Gold Standard Tech", desc: "Using the world's leading automated microneedling device for your skin.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Every treatment starts with a deep dive into your unique skin profile.", icon: <FaCalendarAlt /> },
    { title: "Advanced Protocols", desc: "Medical-grade safety and clinical precision in every session.", icon: <FaShieldAlt /> },
    { title: "Natural Regeneration", desc: "Stimulating your body's own collagen and elastin for lasting effects.", icon: <FaSyncAlt /> },
    { title: "Expert Care", desc: "Our dermatologists ensure a comfortable and effective clinical experience.", icon: <FaRegLightbulb /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Dermapen-28.avif"
          fill
          className="object-cover object-center"
          alt="Dermapen Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Dermapen <span className="text-[#EA6490]">Treatment</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Advanced Microneedling in Ludhiana</p>
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
              Transform Your <br/><span className="text-[#EA6490]">Skin Naturally!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                As we age, our skin naturally loses the glow and radiance of youth. Dermapen therapy at Puri Skin Clinic offers a sophisticated way to trigger your body's natural wound-healing response.
              </p>
              <p>
                Dermapen is the world's leading automated microneedling device. It creates thousands of microscopic 'micro-channels' in the skin, which leads to a massive surge in collagen and elastin production.
              </p>
              <p>
                This medical-grade treatment makes your skin look smoother, firmer, and more youthful, addressing everything from fine lines to acne scarring with clinical precision.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SCIENCE (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Gold Standard <span className="text-[#EA6490]">in Microneedling</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Unlike traditional dermarollers, the Dermapen's unique vertical needling technology allows for more effective treatment of sensitive areas. It reduces epidermal damage and reduces pain and discomfort.
              </p>
              <p>
                This allows us to treat difficult zones like the area around the eyes and nose with pinpoint accuracy, delivering influential growth factors where they are needed most.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Clinical <br/><span className="text-[#EA6490]">Advantages</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover why Dermapen is the preferred choice for skin resurfacing.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “My acne scars have faded significantly after just three Dermapen sessions. The results are better than I expected!”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Ravinder S., Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                            {benefit.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg">{benefit.title}</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{benefit.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SECTION 4: THE DIFFERENCE */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Why Choose <br/><span className="text-[#EA6490]">Puri Skin Clinic?</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Combining world-class technology with expert medical supervision for safe, transformative results.
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
              Access Advanced <br/><span className="text-[#EA6490]">Dermapen Therapy</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Undergoing microneedling can be a daunting prospect, but our team ensures a smooth and effective experience. We prioritize your comfort and safety at every step.
              </p>
              <p>
                Dermapen treatment cost in Ludhiana is highly competitive at Puri Skin Clinic, making advanced rejuvenation accessible to all our patients.
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Session <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
        {/* SECTION 6: FAQS */}
        <FAQAccordion faqs={DERMAPEN_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── DERMAPEN SPECIFIC FAQS ───
const DERMAPEN_FAQS = [
  {
    question: "How is Dermapen different from a traditional Dermaroller?",
    answer: "Dermapen uses vertical needles that oscillate at high speed, creating more precise micro-channels with less epidermal damage and pain compared to the rolling action of traditional rollers."
  },
  {
    question: "Does Dermapen treatment hurt?",
    answer: "Most patients feel a vibrating or tingling sensation. For deeper treatments, we apply a topical numbing cream to ensure the procedure is comfortable."
  },
  {
    question: "How many sessions will I need for acne scars?",
    answer: "For significant improvement in acne scarring, we typically recommend a series of 4 to 6 sessions spaced 4 to 6 weeks apart."
  },
  {
    question: "Is there any downtime after the procedure?",
    answer: "You may experience mild redness similar to a sunburn for 24 to 48 hours. Most patients return to work the next day."
  },
  {
    question: "When will I see results?",
    answer: "Visible improvements in skin texture and radiance can be seen after the first session, with significant collagen remodeling occurring over 3 to 6 months."
  },
  {
    question: "Can Dermapen be used on sensitive areas?",
    answer: "Yes, its precision technology allows us to treat delicate areas like the upper lip and around the eyes safely and effectively."
  },
  {
    question: "What should I apply to my skin after the treatment?",
    answer: "We recommend using only professional, sterile products provided by our clinic for the first 24 hours to ensure safe healing."
  },
  {
    question: "Is Dermapen safe for all skin types?",
    answer: "Yes, Dermapen is safe for all skin tones and types, making it a versatile option for diverse rejuvenation needs."
  }
];
