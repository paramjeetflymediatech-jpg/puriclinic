'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaFlask, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function ChemicalPeelPage() {
  const sliderImages = [
    "/skin-related/Chemical-Peel-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const types = [
    { title: "Superficial Peels", desc: "Target the epidermis to improve mild skin texture issues and fine lines." },
    { title: "Medium Peels", desc: "Reach the middle layer of the skin for addressing deeper wrinkles and uneven tone." },
    { title: "Deep Peels", desc: "Intense treatment for severe skin damage, scarring, and deep-set pigment concerns." }
  ];

  const reasons = [
    { title: "Expert Application", desc: "Our dermatologists ensure precise application of medical-grade solutions.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Starting each journey by identifying your specific skin type and needs.", icon: <FaCalendarAlt /> },
    { title: "Safe & Effective", desc: "Strict protocols to ensure maximum safety and clinical effectiveness.", icon: <FaShieldAlt /> },
    { title: "Skin Rejuvenation", desc: "Promoting natural healing and collagen production for lasting results.", icon: <FaSyncAlt /> },
    { title: "Medical Excellence", desc: "Using the highest quality clinical products for all our peeling treatments.", icon: <FaFlask /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Chemical-Peel-28.avif"
          fill
          className="object-cover object-center"
          alt="Chemical Peel Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Chemical <span className="text-[#EA6490]">Peel</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Precise Clinical Resurfacing in Ludhiana</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="">
            <ImageSlider images={sliderImages} aspect="aspect-[4/5]" />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Chemical <br /><span className="text-[#EA6490]">Peeling Therapy</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Are you looking for ways to revitalise your skin? Having youthful and radiant skin can be hard to achieve when you do not know which ways or solutions to look for. However, chemical peeling therapy can be the right solution for you. 
              </p>
              <p>
                This highly loved cosmetic procedure has helped many people with various skin concerns, be it uneven skin, fine lines, acne marks, and much more. At Puri Skin Clinic, we ensure you receive a treatment plan that perfectly matches your skin's unique requirements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: UNDERSTANDING CHEMICAL PEELING (SIDE-BY-SIDE) */}
        <section className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Understanding <span className="text-[#EA6490]">Chemical Peeling</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Chemical peeling therapy is a cosmetic procedure that is beneficial in enhancing the skin’s appearance. The treatment is done by applying a chemical solution to the skin. It later helps in exfoliating the skin, and after some time, it peels off. The chemical solution leaves the skin feeling fresher and young-looking from within.
                </p>
                <p>
                  The entire process is effective in getting rid of the dead skin cells and producing new skin cells as well as collagen. This can be beneficial in enhancing the texture of the skin, skin tone, and its overall appearance. Chemical peels can have different strengths. If you are going for a mild peeling option then the downtime is going to be less. Otherwise, high intensity or deep peels will require some weeks to heal.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image 
                    src="/skin-related/Chemical-Peel-28.avif" 
                    fill 
                    className="object-cover" 
                    alt="Chemical Peeling Understanding" 
                />
            </div>
          </div>
        </section>

        {/* SECTION 3: TYPES OF PEELS (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Specialized <span className="text-[#EA6490]">Peeling Solutions</span>
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

        {/* SECTION 4: BENEFITS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Clinical <br /><span className="text-[#EA6490]">Benefits</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            <p className="text-black font-medium text-lg">
              How chemical peeling enhances your skin health and aesthetic appearance.
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                “My skin texture improved dramatically after just two sessions. The pigmentation from old acne marks is almost gone.”
              </p>
              <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Priya M., Ludhiana</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Clearing Clogged Pores",
              "Reversing Sun Damage",
              "Addressing Hyperpigmentation",
              "Smoothing Fine Lines",
              "Enhancing Skin Radiance",
              "Treating Active Acne",
              "Improving Scar Appearance"
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  <FaMagic />
                </div>
                <span className="font-bold text-slate-800 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Puri Skin Clinic <br /><span className="text-[#EA6490]">Advantage</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Combining medical science with aesthetic artistry for remarkable clinical results.
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

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Start Your Skin <br /><span className="text-[#EA6490]">Rejuvenation Journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Experience the best chemical peel treatment in Ludhiana with personalized medical care. Our team ensures that your procedure is safe, effective, and results-oriented.
              </p>
              <p>
                From gentle refreshing peels to deep resurfacing, we have the expertise to help you achieve your desired skin goals.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Schedule Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 7: FAQS */}
      <FAQAccordion faqs={PEEL_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── PEEL SPECIFIC FAQS ───
const PEEL_FAQS = [
  {
    question: "How long does a chemical peel session take?",
    answer: "A typical session takes about 30 to 45 minutes, making it a convenient procedure that can even be done during a lunch break."
  },
  {
    question: "Will my skin actually 'peel' after the treatment?",
    answer: "Depending on the depth of the peel, you may experience mild flaking or more significant peeling for 3 to 7 days. Our dermatologists will explain what to expect for your specific peel."
  },
  {
    question: "Is the procedure painful?",
    answer: "Most patients feel a warm or tingling sensation during application. Cooling fans or soothing masks are used to manage any discomfort."
  },
  {
    question: "How many sessions are recommended for best results?",
    answer: "While some results are visible after one session, a series of 3 to 6 sessions is often recommended for significant improvements in texture and pigmentation."
  },
  {
    question: "Can I go out in the sun after a chemical peel?",
    answer: "Your skin will be more sensitive to UV rays post-peel. It is essential to wear high-SPF sunscreen and avoid direct sun exposure for at least a week."
  },
  {
    question: "Are chemical peels safe for acne?",
    answer: "Yes, certain peels are specifically designed to treat active acne and prevent future breakouts by unclogging pores and reducing bacteria."
  },
  {
    question: "What is the downtime associated with peeling?",
    answer: "For superficial peels, there is zero downtime. For medium or deep peels, you may want to plan for 3-5 days of social downtime as the skin exfoliates."
  },
  {
    question: "Can I wear makeup after the procedure?",
    answer: "We usually recommend waiting at least 24 hours before applying makeup to allow the skin to begin its healing process undisturbed."
  }
];
