'use client';

import React from 'react';
import { FAQ_DATA } from '@/constants/constantdata';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaSyringe, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function FillersClient() {
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

  const testimonials = [
    {
      name: "Anita Sharma",
      location: "Ludhiana",
      quote: "The filler treatment at Puri Skin Clinic transformed the deep lines around my cheeks. My face looks refreshed and youthful. Highly recommend their expertise! The results were exactly what I hoped for."
    },
    {
      name: "Raghav Arora",
      location: "Chandigarh",
      quote: "I had grooves on my forehead that were really bothering me. The fillers provided by the clinic made a significant difference. My confidence has definitely increased. The procedure was quick and virtually painless."
    },
    {
      name: "Simran Kaur",
      location: "Ludhiana",
      quote: "I was concerned about the hollows under my eyes. The filler treatment was precise and effective. My under-eye area looks plumper and rejuvenated now. I’m thrilled with the natural-looking results."
    }
  ];

  const benefits = [
    {
      title: "Quick Results",
      subtitle: "Minimal Downtime",
      desc: "Dermal fillers provide instant results within a 30-minute session. Continue your normal routine immediately with zero significant recovery period required.",
      icon: <FaSyncAlt />
    },
    {
      title: "Anti-Aging",
      subtitle: "Minimal Signs",
      desc: "Hyaluronic acid molecules retain moisture while hydrating and plumping. Other fillers stimulate collagen for tighter, more radiant, and youthful skin.",
      icon: <FaShieldAlt />
    },
    {
      title: "Youthful Restoration",
      subtitle: "Plumped Skin",
      desc: "Reverse aging by restoring volume to hollow eyes and sunken cheeks. Achieve fuller-looking, smooth facial contours with precise clinical application.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Fuller Pout",
      subtitle: "Natural Glamour",
      desc: "Transform flat or unsatisfactory lips into trending, natural-looking, and glamorous results with our precision lip plumping techniques.",
      icon: <FaSyringe />
    },
    {
      title: "Defined Contours",
      subtitle: "Jawline & Chin",
      desc: "Add strategic volume to weak jawlines or chins. Achieve sleek, beautiful facial symmetry and sharp contours tailored to your unique structure.",
      icon: <FaUserMd />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/fillers/8-1.jpg"
          fill
          className="object-cover object-center"
          alt="Dermal Fillers Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: WHAT ARE DERMAL FILLERS? (IMAGE ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/fillers/derm.jpg"
              fill
              className="object-cover"
              alt="Dermal Fillers Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What are <span className="text-[#EA6490]">Dermal Fillers?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Dermal filler injections are considered to be nonsurgical cosmetic procedures. These fillers are effective in plumping up the wrinkles and smooth lines and are beneficial in bringing back the face volume. The dermal filler substance is injected under the skin for the desired results.
              </p>
              <p>
                However, people decide to get dermal fillers so that they can enhance the features of their face and achieve a youthful appearance. The treatment takes very little time to complete, plus the recovery time is also very minimal.
              </p>
              <p>
                With dermal fillers, you can get instant results. Plus, these fillers have quite a nice longevity depending on its types and locations. No wonder there are different dermal filler types, and everything is discussed before finalising it.
              </p>
              <p>
                Also, it is essential to understand that <strong>dermal fillers cost in Ludhiana, Punjab</strong>, can vary from other locations and cosmetic facilities.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: USE OF DERMAL FILLERS (IMAGE ON RIGHT) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is the <span className="text-[#EA6490]">use of dermal fillers?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  With increasing age, the body starts to produce less collagen. It is an essential substance that is available in the entire body, be it skin, muscles, connective tissues, etc. The lower amount of collagen in the skin can lead to loose skin and less volume. Due to all this, the skin can get thinner and elasticity can be lost along with skin sagging.
                </p>
                <div className="space-y-4">
                  <p className="font-bold text-slate-900">The involvement of dermal fillers helps in:</p>
                  <ul className="space-y-4">
                    {[
                      "Adding volume to the skin that is sagging.",
                      "Making the facial features symmetrical.",
                      "Helps plump the lips and cheeks.",
                      "Helps in smoothing out the wrinkles and facial creases.",
                      "Helps in restoring facial volume."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-700">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center">
                          <FaCheckCircle className="text-xs" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/fillers/derm-1.avif"
                fill
                className="object-cover"
                alt="Use of Dermal Fillers"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: DIFFERENT TYPES OF DERMAL FILLERS */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-16">
            <div className="max-w-4xl mx-auto space-y-12 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Different types of <span className="text-[#EA6490]">Dermal Fillers</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  It is often believed that dermal fillers are of just one kind, but this is not true. There are different dermal filler types that can allow you to achieve the desired results. Along with off-the-shelf fillers, the healthcare providers can even use body fat to complete the procedure of autologous fat grafting. In simple words, the fat from one body part is removed and later injected into the face.
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  Off-the-shelf fillers are of different kinds, such as:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Hyaluronic acid",
                  desc: "This is an acid that naturally occurs in the skin. It is meant to give volume to the skin and hydrate it. Getting HA injections can last for around six months to one year.",
                  icon: <FaSyncAlt />
                },
                {
                  title: "Calcium hydroxylapatite",
                  desc: "This is another filler type. There is a unique substance involved in it which can be found in the bones. CaHa can last for around one year and is meant to be used for deep wrinkles.",
                  icon: <FaShieldAlt />
                },
                {
                  title: "Poly-L-lactic acid",
                  desc: "This is another substance that can be beneficial in allowing your body to create collagen. Many healthcare providers use this dermal filler type for deep wrinkles visible on the face. Poly-L-lactic acid has a longevity of around two years and even more.",
                  icon: <FaRegLightbulb />
                },
                {
                  title: "Polymethyl methacrylate",
                  desc: "This filler involves collagen along with tiny balls. The balls remain under the skin after they get injected. The purpose of the balls is to give volume and add firmness to the skin.",
                  icon: <FaSyringe />
                }
              ].map((filler, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col h-full group hover:bg-white hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                    {filler.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{filler.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {filler.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFITS OF GETTING DERMAL FILLERS (LIGHT THEME) */}
        <section className="pt-24 pb-8 border-t border-slate-100 bg-white rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10 space-y-20">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What are the <span className="text-[#EA6490]">benefits of getting dermal fillers?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
                Discover the transformative power of dermal fillers for your skin's health and aesthetic beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12 }}
                  className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-sm border border-slate-100 transition-all group-hover:bg-[#EA6490] group-hover:text-white group-hover:rotate-6">
                    {benefit.icon}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#EA6490] text-xs font-black uppercase tracking-widest mb-1">{benefit.subtitle}</h4>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Decorative CTA card in grid */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center items-center text-center space-y-6 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA6490]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-black leading-tight uppercase tracking-tighter relative z-10">Ready for your <br/>Transformation?</h3>
                <Link href="/book-appointment/" className="bg-[#EA6490] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-slate-900 transition-all active:scale-95 relative z-10">
                  Book Session Now
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

    

        {/* SECTION 8: TESTIMONIALS */}
        <section className="py-20 border-t border-slate-100 bg-slate-50/50 rounded-[3rem]">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our <span className="text-[#EA6490]">Happy Customers</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col justify-between h-full relative"
                >
                  <div className="space-y-6">
                    <div className="flex gap-1 text-[#EA6490]">
                      {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                      <span className="ml-2 text-xs font-bold tracking-widest uppercase">5/5</span>
                    </div>
                    <p className="text-slate-700 italic font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-10 pt-8 border-t border-slate-50">
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-[#EA6490] text-xs font-bold tracking-widest uppercase mt-1">{t.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Experience Premium <br/><span className="text-[#EA6490]">Facial Contouring</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Don't let volume loss affect your confidence. Our expert team provides clinical excellence in fillers with a focus on symmetrical enhancement and natural results.
              </p>
              <p>
                By opting for premium fillers at <strong>Puri Skin Clinic</strong>, you can ensure your safety and satisfaction through the hands of our experienced dermatologists.
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Session <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 10: FAQS */}
      <FAQAccordion faqs={FAQ_DATA.fillers} title="Frequently Asked Questions" />

    </div>
  );
}

