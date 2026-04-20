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

export default function NonSurgicalFaceliftPage() {
  const sliderImages = [
    "/skin-related/Non-Surgical-Facelift-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const modalities = [
    { title: "Dermal Fillers", desc: "Restoring volume to sunken areas and smoothing out deep facial folds.", icon: <FaStethoscope /> },
    { title: "Thread Lift", desc: "Using dissolvable threads to lift sagging skin and redefine your jawline.", icon: <FaMagic /> },
    { title: "Botox Injections", desc: "Relaxing dynamic muscles to soften expression lines and wrinkles.", icon: <FaHandSparkles /> },
    { title: "Laser Therapy", desc: "Advanced energy-based devices to tighten skin and improve texture.", icon: <FaCheckCircle /> },
    { title: "Microneedling RF", desc: "Combining microneedling with radiofrequency for deep skin tightening.", icon: <FaUserMd /> },
    { title: "HIFU Tech", desc: "High-Intensity Focused Ultrasound for non-invasive deep tissue lifting.", icon: <FaShieldAlt /> }
  ];

  const reasons = [
    { title: "Minimally Invasive", desc: "Achieve transformative results without the need for large clinical incisions.", icon: <FaMagic /> },
    { title: "No Downtime", desc: "Return to your normal routine almost immediately after your session.", icon: <FaSyncAlt /> },
    { title: "Natural Enhancement", desc: "Focusing on symmetrical results that respect your unique facial structure.", icon: <FaStar /> },
    { title: "Personalised Care", desc: "Every journey begins with a detailed clinical assessment of your skin.", icon: <FaCalendarAlt /> },
    { title: "Proven Expertise", desc: "Performed by seasoned professionals using world-class medical protocols.", icon: <FaUserMd /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>


      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/non-surgical-facelift/10.jpg"
          fill
          className="object-cover object-center"
          alt="Chemical Peel Banner"
          priority
        />
      </section>


      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (IMAGE ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/non-surgical-facelift/rff.avif"
              fill
              className="object-cover"
              alt="Dermapen Treatment Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Rejuvenate Your Skin with <br /><span className="text-[#EA6490]">Dermapen Treatment!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                As a person ages, they naturally lose all the glow and radiance of their youth in a thorough and effective manner. It can lead to issues with your overall appearance. If you do not feel confident in your appearance, it can significantly affect self-esteem and confidence issues extensively.
              </p>
              <p>
                With the help of <strong>dermapen treatment in Ludhiana</strong>, you can be sure to address these issues of hyperpigmentation comprehensively. At <strong>Puri Skin Clinic</strong>, you can not only make sure to address your facial pigmentation, but our team of experts ensures that you can receive a personalised treatment plan so we can resolve all your concerns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Best Non-Surgical <br /><span className="text-[#EA6490]">Facelift in Ludhiana</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Undertake this delicate procedure through seasoned professionals for safe, natural results. Our clinical team is dedicated to providing symmetrical enhancement and natural-looking results.
              </p>
              <p>
                Rediscover your best self with our expert-led facial aesthetic programs. Access the highest medical standards in Punjab.
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
      <FAQAccordion faqs={NSFL_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── NON-SURGICAL FACELIFT SPECIFIC FAQS ───
const NSFL_FAQS = [
  {
    question: "How does a non-surgical facelift differ from a surgical one?",
    answer: "A non-surgical facelift uses minimally invasive techniques like fillers and threads instead of large clinical incisions. It requires no general anesthesia and has significantly less downtime."
  },
  {
    question: "Is the procedure painful?",
    answer: "Most procedures involve minimal discomfort. We use topical numbing and local anesthesia where required to ensure a comfortable experience."
  },
  {
    question: "How long do the results of a thread lift last?",
    answer: "The effects of a thread lift typically last between 12 to 18 months, as the threads stimulate natural collagen production before being absorbed by the body."
  },
  {
    question: "Can I combine Botox and Fillers in one session?",
    answer: "Yes, combining different modalities is often recommended for more comprehensive rejuvenation, addressing both dynamic wrinkles and volume loss."
  },
  {
    question: "When can I return to work after the treatment?",
    answer: "Most patients can return to work within 24 to 48 hours. Some treatments, like certain fillers, have almost immediate recovery."
  },
  {
    question: "Are there any side effects to worry about?",
    answer: "Temporary side effects can include mild swelling, bruising, or redness at the treatment sites, which typically resolve within a few days."
  },
  {
    question: "Is the non-surgical facelift permanent?",
    answer: "No, the results are long-lasting but not permanent. Maintenance sessions are usually recommended every 12 to 24 months to sustain the youthful effect."
  },
  {
    question: "Is non-surgical facelift treatment expensive in Ludhiana?",
    answer: "At Puri Skin Clinic, we offer competitive and transparent pricing, ensuring world-class age management is accessible to our patients."
  }
];
