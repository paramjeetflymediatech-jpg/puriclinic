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

export default function DermarollerTreatmentPage() {
  const sliderImages = [
    "/skin-related/Derma-Roller-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const benefits = [
    { title: "Acne Scars", desc: "Effectively address deep pitting and scars caused by acne.", icon: <FaShieldAlt /> },
    { title: "Fine Lines", desc: "Smooth out early signs of aging for a more youthful look.", icon: <FaStar /> },
    { title: "Skin Radiance", desc: "Restore the natural glow lost to pollution and environmental stress.", icon: <FaMagic /> },
    { title: "Pore Refinement", desc: "Improve the overall texture and uniformity of your skin.", icon: <FaSyncAlt /> },
    { title: "Tissue Formation", desc: "Trigger natural proteins to stimulate new, healthy tissue.", icon: <FaRegLightbulb /> },
    { title: "Confidence Boost", desc: "Reclaim your self-esteem with clearer, healthier skin.", icon: <FaCheckCircle /> }
  ];

  const reasons = [
    { title: "Time-Tested Therapy", desc: "A reliable and proven method for skin restoration and scarring.", icon: <FaUserMd /> },
    { title: "Sterile Clinical Setting", desc: "We maintain the highest medical standards for all our procedures.", icon: <FaShieldAlt /> },
    { title: "Personalised Consultation", desc: "Tailoring every session to your specific skin concerns and goals.", icon: <FaCalendarAlt /> },
    { title: "Natural Healing", desc: "Utilizing your body's own regenerative processes for safe results.", icon: <FaSyncAlt /> },
    { title: "Expert Supervision", desc: "Our dermatologists oversee every session for optimal outcomes.", icon: <FaRegLightbulb /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Derma-Roller-28.avif"
          fill
          className="object-cover object-center"
          alt="Dermaroller Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Dermaroller <span className="text-[#EA6490]">Therapy</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Time-Tested Skin Restoration in Ludhiana</p>
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
              Reclaim Your <br/><span className="text-[#EA6490]">Skin Radiance!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                If your skin has become dull and lost its radiance over years of exposure to pollution and environmental stress, it can affect your self-confidence significantly.
              </p>
              <p>
                Dermaroller involves a handheld device with hundreds of fine needles. When rolled over the skin, it creates clinical micro-punctures that trigger the body's natural healing response.
              </p>
              <p>
                At Puri Skin Clinic, we use advanced Dermaroller therapy to stimulate new, healthy tissue formation, making it an excellent choice for acne scars and general skin irregularities.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW IT WORKS (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Science of <span className="text-[#EA6490]">Micro-Stimulation</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                The micro-punctures created by the Dermaroller stimulate the production of essential proteins like collagen and elastin. This process, known as Collagen Induction Therapy (CIT), naturally repairs the skin from within.
              </p>
              <p>
                This treatment is particularly influential for resolving acne-induced scarring, surgical marks, and improving the overall surface texture of the face.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Clinical <br/><span className="text-[#EA6490]">Benefits</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover how Dermaroller therapy reconstructs your skin's beauty.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “The texture of my skin has never been better. The Dermaroller treatment at Puri Skin Clinic really helped with my old acne scars.”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Gurpreet K., Ludhiana</p>
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
              Expert clinical care combined with a focus on patient safety and natural skin restoration.
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
              Experience the Best <br/><span className="text-[#EA6490]">Dermaroller Treatment</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Undergo professional Dermaroller therapy effectively and without complications at Puri Skin Clinic. We ensure your skin's health is our top priority.
              </p>
              <p>
                Dermaroller treatment cost in Ludhiana is highly affordable at our clinic, ensuring clinical excellence is accessible to everyone.
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
        <FAQAccordion faqs={DERMAROLLER_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── DERMAROLLER SPECIFIC FAQS ───
const DERMAROLLER_FAQS = [
  {
    question: "How does the Dermaroller actually help my skin?",
    answer: "It creates microscopic punctures that trigger the body's natural wound-healing response, producing new collagen and elastin to repair scars and wrinkles."
  },
  {
    question: "Is the procedure painful?",
    answer: "We use a high-quality topical numbing cream before the procedure to ensure you feel minimal discomfort during the session."
  },
  {
    question: "How long does it take to see results from Dermaroller?",
    answer: "While some glow is visible soon after, significant improvements in scars and texture usually appear after 2 to 3 sessions as new tissue forms."
  },
  {
    question: "Is Dermaroller safe for all skin types?",
    answer: "Yes, it is generally safe for all skin types. However, we avoid active acne areas to prevent the spread of bacteria."
  },
  {
    question: "What is the downtime after a Dermaroller session?",
    answer: "You may experience mild redness and swelling for 24 to 48 hours. Most patients return to their normal routine by the third day."
  },
  {
    question: "How often should I undergo Dermaroller treatment?",
    answer: "Sessions are typically spaced 4 to 6 weeks apart to allow the skin's natural regeneration process to complete."
  },
  {
    question: "Can I do Dermaroller at home?",
    answer: "Home rollers are much shallower and carry a high risk of infection. Professional clinical treatments use medical-grade needles for deeper, safer, and more effective results."
  },
  {
    question: "What should I avoid after the treatment?",
    answer: "Avoid direct sun exposure, strenuous exercise, and harsh skincare products for at least 48 hours post-treatment."
  }
];
