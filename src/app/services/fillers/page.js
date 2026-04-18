'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight, 
  FaStar, FaShieldAlt, FaSyringe, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function FillersTreatmentPage() {
  const sliderImages = [
    "/skin-related/Fillers-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const targetZones = [
    "Nasolabial folds (Laugh lines)",
    "Grooves on the forehead",
    "Hollows under the eyes",
    "Loss of cheek volume",
    "Sunken temples",
    "Marionette lines around mouth"
  ];

  const reasons = [
    { title: "Experts & Professionals", desc: "Reliable and trained professionals specializing in facial aesthetic procedures.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Starting each journey by listening to and addressing all specific patient concerns.", icon: <FaCalendarAlt /> },
    { title: "Custom Treatment Plan", desc: "Devising detailed plans tailored to your facial structure and desired outcome.", icon: <FaRegLightbulb /> },
    { title: "Personalised Experience", desc: "Ensuring each patient receives a unique experience based on their specific needs.", icon: <FaSyncAlt /> },
    { title: "Prioritised Safety", desc: "Strict medical protocols to ensure patient safety in any and all treatment scenarios.", icon: <FaShieldAlt /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/Fillers-28.avif"
          fill
          className="object-cover object-center"
          alt="Fillers Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Dermal <span className="text-[#EA6490]">Fillers</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full mb-6"></div>
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] opacity-80">Erase Grooves & Enhance Volume</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Restore Your <br/><span className="text-[#EA6490]">Facial Volume!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                As we age, our skin naturally loses its volume and elasticity. Dermal filler injections are considered to be nonsurgical cosmetic procedures that are effective in plumping up the wrinkles and smooth lines.
              </p>
              <p>
                At Puri Skin Clinic, we use precision fillers to enhance your facial features and achieve a naturally youthful appearance without the need for invasive surgery.
              </p>
              <p>
                Our experts ensure to offer you a personalised treatment consultation to address your specific concerns and facial structure effectively.
              </p>
            </div>
          </div>

          <div className="">
            <ImageSlider images={sliderImages} aspect="aspect-[4/5]" />
          </div>
        </section>

        {/* SECTION 2: WHAT ARE FILLERS (CENTERED) */}
        <section className="py-20 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <span className="text-[#EA6490]">Facial Fillers</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Dermal fillers work by injecting substances like Hyaluronic Acid (HA) into the skin to restore lost volume and smooth out grooves. HA is a naturally occurring substance in your body that keeps skin hydrated and plump.
              </p>
              <p>
                We also utilize Calcium hydroxylapatite (CaHA) and Poly-L-lactic acid (PLLA) for deeper wrinkles and long-term collagen stimulation, ensuring a comprehensive approach to facial rejuvenation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: TARGET ZONES */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
            <div className="lg:col-span-1 space-y-8 sticky top-32">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Primary <br/><span className="text-[#EA6490]">Target Zones</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg">
                    Where fillers can make the most significant impact on your facial harmony.
                </p>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <p className="italic text-slate-300 font-medium leading-relaxed">
                        “I was conscious about my sunken cheeks. The fillers at Puri Skin Clinic restored my volume perfectly and naturally.”
                    </p>
                    <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Amrit Kaur, Ludhiana</p>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetZones.map((zone, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 10 }}
                        className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                            <FaSyringe />
                        </div>
                        <span className="font-bold text-slate-800 text-lg">{zone}</span>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Puri Skin Clinic <br/><span className="text-[#EA6490]">Difference</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Precision, safety, and natural aesthetics are at the heart of our facial contouring treatments.
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
              Experience Premium <br/><span className="text-[#EA6490]">Facial Contouring</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Don't let volume loss affect your confidence. Our expert team provides clinical excellence in fillers with a focus on symmetrical enhancement.
              </p>
              <p>
                Fillers treatment cost in Ludhiana is tailored to the product used and the complexity of the procedure. We ensure value through exceptional results and safety.
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Volumetric Assessment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
        {/* SECTION 6: FAQS */}
        <FAQAccordion faqs={FILLER_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── FILLER SPECIFIC FAQS ───
const FILLER_FAQS = [
  {
    question: "How long do dermal fillers typically last?",
    answer: "Fillers generally last between 6 to 18 months, depending on the type of filler used and the area being treated. Highly mobile areas like lips may require touch-ups sooner."
  },
  {
    question: "Is the filler injection procedure painful?",
    answer: "Most fillers contain Lidocaine, a numbing agent, to ensure comfort. We also offer topical numbing creams to make the experience as painless as possible."
  },
  {
    question: "Are there any side effects to worry about?",
    answer: "Common side effects include mild swelling, redness, or bruising at the injection site, which typically resolve within a few days."
  },
  {
    question: "Can fillers be dissolved if I'm not happy?",
    answer: "Yes, Hyaluronic Acid fillers can be easily dissolved using an enzyme called hyaluronidase, making it a safe and reversible option."
  },
  {
    question: "When will I see the final results?",
    answer: "Results are immediate, although some initial swelling may occur. The 'final' settled look is usually visible after 1-2 weeks."
  },
  {
    question: "How do I choose between Botox and Fillers?",
    answer: "Botox is for dynamic wrinkles (caused by muscle movement), while fillers are for static wrinkles and volume loss. A consultation will determine the best mix for you."
  },
  {
    question: "Is there any downtime after fillers?",
    answer: "There is minimal downtime. You can return to work immediately, though we advise avoiding intense exercise for 24-48 hours."
  },
  {
    question: "Who should avoid dermal fillers?",
    answer: "Fillers are generally avoided for pregnant or breastfeeding women and those with active skin infections at the treatment site."
  }
];
