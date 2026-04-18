'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight, 
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaFlask
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function MelasmaTreatmentPage() {
  const sliderImages = [
    "/skin-related/Melasma-Treatment-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const types = [
    { title: "Epidermal Melasma", desc: "Affects the top layer of skin with dark brown patches and well-defined borders." },
    { title: "Dermal Melasma", desc: "Involves deeper layers, appearing as bluish-gray patches with less defined borders." },
    { title: "Mixed Melasma", desc: "The most common type, featuring a combination of brown and gray patches." }
  ];

  const solutions = [
    { title: "Oral Medication", desc: "Targeted systemic blockers to inhibit pigmentation at the source.", icon: <FaFlask /> },
    { title: "Exosome Therapy", desc: "Advanced regenerative treatment to repair skin cells and even tone.", icon: <FaShieldAlt /> },
    { title: "Chemical Peels", desc: "Controlled exfoliation to lift surface-level epidermal pigmentation.", icon: <FaMagic /> },
    { title: "Microneedling", desc: "Stimulating renewal and allowing deep penetration of lightening agents.", icon: <FaStethoscope /> }
  ];

  const reasons = [
    { title: "Pigmentation Experts", desc: "Deep clinical understanding of complex pigmentary disorders.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Starting each journey with a thorough diagnosis of your melasma type.", icon: <FaCalendarAlt /> },
    { title: "Advanced Protocols", desc: "Combining oral, topical, and clinical treatments for optimal results.", icon: <FaShieldAlt /> },
    { title: "Safe & Effective", desc: "Carefully chosen treatments to ensure safety across all skin tones.", icon: <FaSyncAlt /> },
    { title: "Proven Results", desc: "Helping thousands of patients achieve and maintain an even skin tone.", icon: <FaStar /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Melasma-Treatment-28.avif"
          fill
          className="object-cover object-center"
          alt="Melasma Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Melasma <span className="text-[#EA6490]">Treatment</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Specialist Pigmentation Care in Ludhiana</p>
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
              Fade Pigmentation, <br/><span className="text-[#EA6490]">Reveal Your Glow!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Melasma is a common skin pigmentation irregularity causing facial discoloration, particularly in dark skin tones. It often manifests as brown or gray-brown patches on the cheeks, forehead, and upper lip.
              </p>
              <p>
                At Puri Skin Clinic, we specialize in fading these stubborn pigmentary changes using a combination of oral medication, exosomes, medical-grade peels, and microneedling.
              </p>
              <p>
                Our expert dermatologists ensure that each treatment is carefully calibrated for your specific type of melasma, delivering safe and radiant, even-toned results.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE TYPES (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <span className="text-[#EA6490]">Melasma Types</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                {types.map((type, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                        <h4 className="font-bold text-slate-900 text-xl">{type.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{type.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CLINICAL SOLUTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Treatment <br/><span className="text-[#EA6490]">Pathways</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover our comprehensive clinical approach to managing facial pigmentation.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “The melasma treatment at Puri Skin Clinic significantly reduced the dark patches on my cheeks. My skin tone is finally even!”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Amrit K., Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                            {solution.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg">{solution.title}</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{solution.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Pigmentation <span className="text-[#EA6490]">Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Clinical excellence in managing complex pigmentary disorders with a personalized touch.
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
              Reclaim Your <br/><span className="text-[#EA6490]">Even Skin Tone</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Don't let melasma define your appearance. Our expert pigmentation specialists are here to guide you toward a clearer, more uniform complexion.
              </p>
              <p>
                Professional melasma treatment in Ludhiana is tailored to your unique clinical needs at Puri Skin Clinic.
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
        <FAQAccordion faqs={MELASMA_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── MELASMA SPECIFIC FAQS ───
const MELASMA_FAQS = [
  {
    question: "What exactly is melasma?",
    answer: "Melasma is a pigmentary disorder that causes dark, discolored patches on the skin. It is most common on the face and is often triggered by hormonal changes or sun exposure."
  },
  {
    question: "Is melasma treatment permanent?",
    answer: "While we can significantly fade melasma, it can be persistent and may recur if triggers like sun exposure aren't managed. We provide long-term maintenance plans to prevent recurrence."
  },
  {
    question: "How long does it take to see results?",
    answer: "Fading melasma is a gradual process. Most patients see noticeable improvement after 4 to 8 weeks of consistent clinical treatment and home care."
  },
  {
    question: "Is sun protection important during treatment?",
    answer: "Yes, strict sun protection is the single most important factor in managing melasma. Even a few minutes of unprotected exposure can trigger pigmentation."
  },
  {
    question: "Can melasma be treated during pregnancy?",
    answer: "We typically wait until after pregnancy and breastfeeding to start intensive treatments, as melasma (often called 'the mask of pregnancy') can resolve naturally after childbirth."
  },
  {
    question: "Are chemical peels safe for melasma?",
    answer: "Yes, professional superficial peels can be highly effective for epidermal melasma when combined with the right topical and oral treatments."
  },
  {
    question: "Does microneedling help melasma?",
    answer: "Yes, microneedling helps break up pigment and allows for deeper penetration of depigmenting agents, especially for dermal melasma."
  },
  {
    question: "Is melasma treatment expensive?",
    answer: "Puri Skin Clinic offers competitive pricing for melasma treatments, ensuring that advanced clinical care for pigmentation is accessible."
  }
];
