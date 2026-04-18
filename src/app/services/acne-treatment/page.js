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

export default function AcneTreatmentPage() {
  const sliderImages = [
    "/skin-related/Acne-Treatment-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const classifications = [
    { title: "Comedonal Acne", desc: "Whiteheads and blackheads caused by surface level clogging." },
    { title: "Inflammatory Acne", desc: "Red, swollen papules and pustules requiring medical intervention." },
    { title: "Cystic Acne", desc: "Deep, painful lesions that are prone to scarring without expert care." },
    { title: "Hormonal Acne", desc: "Typically appearing along the jawline and chin in adults." }
  ];

  const reasons = [
    { title: "Expert Diagnosis", desc: "Identifying the root cause of your acne for long-term clinical relief.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Every patient receives a treatment plan tailored to their skin type.", icon: <FaCalendarAlt /> },
    { title: "Advanced Solutions", desc: "From medical peels to laser therapy, we use the latest clinical tech.", icon: <FaShieldAlt /> },
    { title: "Scar Prevention", desc: "Focusing on treating active acne while minimizing the risk of permanent scarring.", icon: <FaSyncAlt /> },
    { title: "Proven Track Record", desc: "Trusted by thousands of patients in Ludhiana for clear, healthy skin.", icon: <FaStar /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Acne-Treatment-28.avif"
          fill
          className="object-cover object-center"
          alt="Acne Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Acne <span className="text-[#EA6490]">Treatment</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Clear Your Skin with Clinical Expertise</p>
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
              Your Journey to <br /><span className="text-[#EA6490]">Clear Skin!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Acne is a skin condition where hair follicles become clogged with sebum, oil, or dead skin cells. It is one of the most common concerns for both teenagers and adults in Ludhiana.
              </p>
              <p>
                At Puri Skin Clinic, we focus on identifying the exact type of acne you're suffering from and providing a targeted medical pathway to ensure permanent and effective relief.
              </p>
              <p>
                Our expert dermatologists combine clinical excellence with personalized care to help you reclaim your skin's health and your self-confidence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPES OF ACNE (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <span className="text-[#EA6490]">Your Acne</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              {classifications.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CLINICAL SOLUTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Expert <br /><span className="text-[#EA6490]">Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            <p className="text-black font-medium text-lg">
              Discover our multi-faceted approach to resolving even the most stubborn acne.
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                “The acne treatment at Puri Skin Clinic was life-changing for me. My skin has never been this clear in years!”
              </p>
              <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Ravinder S., Ludhiana</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Topical Therapy", desc: "Medical-grade creams and retinoids focused on deep pore clearing.", icon: <FaRegLightbulb /> },
              { title: "Clinical Peels", desc: "Salicylic and Glycolic peels to exfoliate and unblock sebaceous glands.", icon: <FaMagic /> },
              { title: "Laser Therapy", desc: "Using advanced light energy to kill bacteria and reduce inflammation.", icon: <FaStethoscope /> },
              { title: "Oral Medication", desc: "Expertly managed antibiotics or isotretinoin for severe nodulocystic cases.", icon: <FaShieldAlt /> }
            ].map((solution, idx) => (
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
              The Clear Skin <br /><span className="text-[#EA6490]">Advantage</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Combining world-class dermatology with a deep understanding of Indian skin types.
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
              Say Goodbye to <br /><span className="text-[#EA6490]">Stubborn Acne</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Don't let acne hold you back from living your best life. Our clinical team is dedicated to helping you achieve and maintain the clear skin you deserve.
              </p>
              <p>
                Professional acne treatment in Ludhiana is now more accessible and effective than ever at Puri Skin Clinic.
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
      <FAQAccordion faqs={ACNE_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── ACNE SPECIFIC FAQS ───
const ACNE_FAQS = [
  {
    question: "What is the primary cause of acne?",
    answer: "Acne is primarily caused by hair follicles becoming clogged with oil (sebum), dead skin cells, and bacteria. Hormonal changes, stress, and certain skincare products can also be triggers."
  },
  {
    question: "Can professional treatment prevent acne scars?",
    answer: "Absolutely. Early clinical intervention is the best way to resolve active acne and prevent permanent pitting or hyperpigmentation on the skin."
  },
  {
    question: "How long does it take to see results from treatment?",
    answer: "While some improvement is visible within 2 to 4 weeks, significant and lasting results typically take 2 to 3 months as skin cells regenerate."
  },
  {
    question: "Are chemical peels safe for active acne?",
    answer: "Yes, specialized medical-grade peels are highly effective for unblocking pores and reducing inflammation in active acne cases."
  },
  {
    question: "Does diet affect acne?",
    answer: "While diet isn't the only cause, certain high-glycemic foods can trigger inflammation. We provide nutritional guidance as part of our holistic treatment plan."
  },
  {
    question: "Is laser treatment effective for acne?",
    answer: "Yes, laser therapy can kill acne-causing bacteria and shrink overactive sebaceous glands, offering a powerful non-medication alternative."
  },
  {
    question: "Will my acne come back after treatment?",
    answer: "Our goal is to identify the root cause. While acne can be persistent, our long-term maintenance plans help keep your skin clear for years."
  },
  {
    question: "Is acne treatment expensive in Ludhiana?",
    answer: "Puri Skin Clinic offers competitive and affordable pricing for all acne treatments, ensuring world-class dermatology is accessible to everyone."
  }
];
