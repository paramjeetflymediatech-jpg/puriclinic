'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles, FaBolt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function VitiligoTreatmentPage() {
  const sliderImages = [
    "/skin-related/Vitiligo-Treatment-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const classifications = [
    { title: "Non-Segmental", desc: "Symmetrical patches appearing on both sides of the body (the most common type)." },
    { title: "Segmental Vitiligo", desc: "Typically occurs at an early age and is limited to one side of the body." },
    { title: "Focal Vitiligo", desc: "Limited to small areas that do not spread for many years." },
    { title: "Lip & Mucosal", desc: "Affecting delicate areas like the lips, inner mouth, and nasal membranes." }
  ];

  const pathways = [
    { title: "Advanced NB-UVB", desc: "Narrowband Ultraviolet B light therapy to safely stimulate melanocytes.", icon: <FaBolt /> },
    { title: "Targeted Excimer", desc: "Powerful laser tech for localized patches with rapid repigmentation.", icon: <FaStethoscope /> },
    { title: "Surgical Grafting", desc: "Permanent surgical solution for stable vitiligo cases (>1 year stability).", icon: <FaMagic /> },
    { title: "Topical Management", desc: "Specialized clinical creams to regulate immune response and restore color.", icon: <FaRegLightbulb /> }
  ];

  const reasons = [
    { title: "Legacy of Care", desc: "Decades of success in managing complex vitiligo cases in Ludhiana.", icon: <FaUserMd /> },
    { title: "Holistic Diagnosis", desc: "Thorough assessment of stability and type before starting any treatment.", icon: <FaCalendarAlt /> },
    { title: "Advanced Protocols", desc: "Combining light therapy, medication, and surgery for optimal results.", icon: <FaShieldAlt /> },
    { title: "Confidential Support", desc: "Prioritizing your emotional well-being and privacy throughout the journey.", icon: <FaStar /> },
    { title: "Repigmentation Focus", desc: "Specialized clinical expertise in restoring natural skin color to white patches.", icon: <FaSyncAlt /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Vitiligo-Treatment-28.avif"
          fill
          className="object-cover object-center"
          alt="Vitiligo Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Vitiligo <span className="text-[#EA6490]">Treatment</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Embrace Your Unique Beauty with Confidence</p>
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
              Restore Color, <br /><span className="text-[#EA6490]">Regain Confidence!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Vitiligo is a long-term skin condition where white patches appear due to the loss of skin pigment (melanin). While not physically harmful, it can significantly impact emotional well-being.
              </p>
              <p>
                At Puri Skin Clinic, we offer a comprehensive range of clinical and surgical options to restore pigmentation, especially in visible areas like the face, hands, and lips.
              </p>
              <p>
                Our expert dermatologists utilize advanced light therapies and surgical grafting techniques to help you reclaim your skin's natural color and your self-assurance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CLASSIFICATIONS (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <span className="text-[#EA6490]">Vitiligo Types</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-12">
              {classifications.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: TREATMENT PATHWAYS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Clinical <br /><span className="text-[#EA6490]">Pathways</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            <p className="text-black font-medium text-lg">
              Discover our multi-faceted approach to restoring skin pigmentation safely.
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                “The repigmentation treatment at Puri Skin Clinic has been amazing. My patches are almost invisible now, and I feel so much better.”
              </p>
              <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Jasleen K., Ludhiana</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((path, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  {path.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{path.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{path.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Ludhiana's Most <span className="text-[#EA6490]">Trusted Vitiligo Center</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Expert clinical care combined with a deep understanding of the physiological and emotional aspects of vitiligo.
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
              Start Your Journey Toward <br /><span className="text-[#EA6490]">Repigmentation</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Recovery is possible with the right clinical guidance. Join thousands of patients who have successfully regained their skin color and confidence at Puri Skin Clinic.
              </p>
              <p>
                Our vitiligo treatment cost in Ludhiana is designed to be affordable while maintaining the highest medical standards in Punjab.
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
      <FAQAccordion faqs={VITILIGO_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── VITILIGO SPECIFIC FAQS ───
const VITILIGO_FAQS = [
  {
    question: "Is vitiligo a contagious disease?",
    answer: "No, vitiligo is absolutely not contagious. It is not an infection and cannot be spread from person to person through contact."
  },
  {
    question: "Can vitiligo be cured completely?",
    answer: "While 'cure' is a complex word in autoimmune conditions, we can achieve significant and often total repigmentation in stable cases using advanced therapies."
  },
  {
    question: "Is surgical grafting safe for vitiligo?",
    answer: "Yes, surgical grafting is a very safe and effective procedure for stable vitiligo where the patches haven't spread for at least a year."
  },
  {
    question: "How long does NB-UVB therapy take to show results?",
    answer: "NB-UVB therapy typically requires 2 to 3 sessions per week. Visible repigmentation usually begins to appear after 8 to 12 weeks of consistent treatment."
  },
  {
    question: "What triggers vitiligo to spread?",
    answer: "Triggers can include severe emotional stress, physical trauma to the skin (like a cut or burn), and sometimes hormonal changes."
  },
  {
    question: "Can diet help in managing vitiligo?",
    answer: "While there is no specific 'vitiligo diet,' maintaining a healthy immune system through balanced nutrition is generally beneficial. We provide guidance on this during consultation."
  },
  {
    question: "Does vitiligo affect internal organs?",
    answer: "No, vitiligo only affects the skin's pigment-producing cells and does not impact any internal organs or overall physical health."
  },
  {
    question: "Is treatment more effective if started early?",
    answer: "Yes, early clinical intervention often leads to better and faster repigmentation results, especially for smaller, localized patches."
  }
];
