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
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Non-Surgical-Facelift-28.avif"
          fill
          className="object-cover object-center"
          alt="Non-Surgical Facelift Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Non-Surgical <span className="text-[#EA6490]">Facelift</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Ludhiana's Destination for Age Reversal</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Youthful Transformation <br/><span className="text-[#EA6490]">Without Surgery!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                A non-surgical facelift is a combination of minimally invasive procedures designed to rejuvenate and refresh your appearance. Unlike surgical options, these techniques require no large incisions or general anesthesia.
              </p>
              <p>
                At Puri Skin Clinic, we focus on a personalized approach to restore volume, lift sagging skin, and smooth out deep wrinkles using a variety of clinical modalities tailored to your unique facial profile.
              </p>
              <p>
                Experience natural-looking results and a significant boost in self-confidence with Ludhiana's best age-management programs, all with near-zero recovery time.
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
              Our Clinical <span className="text-[#EA6490]">Modalities</span>
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

        {/* SECTION 3: CANDIDATES & ELIGIBILITY */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Is it <br/><span className="text-[#EA6490]">Right for You?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Discover if you are an ideal candidate for our non-surgical rejuvenation.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “I was nervous about surgery, so the non-surgical facelift at Puri Skin Clinic was the perfect solution. The results are subtle yet stunning.”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Gurpreet K., Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
                <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <h3 className="text-2xl font-bold mb-8 text-slate-900">Ideal Candidates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Loss of facial volume",
                            "Fine lines and deep wrinkles",
                            "Sunken cheeks or temples",
                            "Mild to moderate skin laxity"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <FaCheckCircle className="text-[#EA6490] shrink-0" />
                                <span className="font-bold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-10 bg-slate-900 text-white rounded-[2.5rem]">
                    <h3 className="text-2xl font-bold mb-8">When to Avoid</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Active facial acne or rashes",
                            "Existing facial implants",
                            "Severe skin sagging (may require surgery)",
                            "Pregnancy or breastfeeding"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <FaCheckCircle className="text-[#EA6490] shrink-0" />
                                <span className="font-bold text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Unveil Your Most <br/><span className="text-[#EA6490]">Youthful Self</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              We focus on symmetrical enhancement to achieve a naturally youthful and refreshed appearance.
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
              The Best Non-Surgical <br/><span className="text-[#EA6490]">Facelift in Ludhiana</span>
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
