'use client';

import React from 'react';
import { FAQ_DATA } from '@/constants/constantdata';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMedal, FaMicroscope, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaWaveSquare
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

export default function RadioFrequencyClient() {
  const targetZones = [
    "Forehead and Brows",
    "Cheeks and Nasolabial folds",
    "Jawline and Jowls",
    "Neck and Under Chin",
    "Abdomen and Waist",
    "Arms and Thighs"
  ];

  const reasons = [
    { title: "Non-Invasive", desc: "Achieve skin tightening results without any surgical incisions or clinical downtime.", icon: <FaShieldAlt /> },
    { title: "Collagen Booster", desc: "Directly stimulates the dermis to produce new, healthy collagen fibers.", icon: <FaWaveSquare /> },
    { title: "Comfortable", desc: "A pain-free procedure that feels like a warm, soothing massage on your skin.", icon: <FaStar /> },
    { title: "Natural Lifting", desc: "Gradually lifts and firms sagging skin for a refreshed and natural appearance.", icon: <FaRegLightbulb /> },
    { title: "All Skin Types", desc: "Safe and effective for all skin tones and types throughout the year.", icon: <FaUserMd /> }
  ];

  const testimonials = [
    {
      name: "Ramesh K.",
      location: "Ludhiana",
      quote: "I had a mole on my cheek that always bothered me. Puri Skin Clinic’s RFA treatment was quick and painless. No scarring, great results! Highly recommend for mole removal."
    },
    {
      name: "Priya Mehta",
      location: "Ludhiana",
      quote: "Had a stubborn wart on my hand removed at Puri Skin Clinic. The RFA treatment was smooth and effective. Fantastic service and results! Best skin care in Ludhiana."
    },
    {
      name: "Aarti Singh",
      location: "Ludhiana",
      quote: "Skin tags around my neck were removed effortlessly at Puri Skin Clinic. The RFA treatment was quick and painless. Highly recommend for skin tag removal!"
    }
  ];

  const benefits = [
    {
      title: "Lesion Removal",
      subtitle: "Scarless Results",
      desc: "The treatment extensively offers the possibility of removing Xanthelasma, moles, warts, skin tags, and corns from your skin without leaving any scars behind in an extensive manner. ",
      icon: <FaShieldAlt />
    },
    {
      title: "Collagen Production",
      subtitle: "Elasticity & Firmness",
      desc: "This treatment also extensively promotes the production of collagen. Collagen is responsible for making certain that your skin has elasticity and can promote skin firmness. ",
      icon: <FaWaveSquare />
    },
    {
      title: "Even Skin Tone",
      subtitle: "Healthy Glow",
      desc: "One can thoroughly ascertain the possibility of having even skin tone.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Precise Results",
      subtitle: "Accuracy",
      desc: "With this procedure, you can also ensure you get precise results.",
      icon: <FaMedal />
    },
    {
      title: "Faster Recovery",
      subtitle: "Quick Healing",
      desc: "This process can thoroughly offer you a faster recovery from the procedure.",
      icon: <FaSyncAlt />
    },
    {
      title: "Enhanced Safety",
      subtitle: "Trusted Technology",
      desc: "With the Ellman Radiofrequency Treatment, you can also explore the possibility of having enhanced safety.",
      icon: <FaMicroscope />
    },
    {
      title: "Address Concerns",
      subtitle: "Multi-Purpose",
      desc: "With this procedure, you can also thoroughly make sure that you are able to address several concerns at the same time.",
      icon: <FaUserMd />
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/radio-frequency/RFA.jpg"
          fill
          className="object-cover object-center"
          alt="Radio-Frequency Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: WHAT IS RADIO-FREQUENCY? */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/radio-frequency/as-768x614.avif"
              fill
              className="object-cover"
              alt="Radio-Frequency Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Get Rid of Unwanted Moles and Warts with <span className="text-[#EA6490]">Ellman Radiofrequency Treatment!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                If you have unwanted Xanthelasma, moles, warts, skin tags, and corns on your skin, it might seem impossible to get rid of them. With the help of Ellman radio frequency treatment, you can make certain that you are able to address these issues without any trouble. With the help of Puri Skin Clinic, you can ensure that you undergo radio frequency skin tightening in Ludhiana and also explore a way to rejuvenate your skin in an extensive manner.
              </p>

            </div>
          </div>
        </section>

        {/* SECTION 2: USE OF RF */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is Ellman <span className="text-[#EA6490]">Radiofrequency Treatment?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Ellman radiofrequency treatment ensures that one can thoroughly have a precise, non-surgical removal of different skin conditions such as Xanthelasma, moles, warts, skin tags, and corns. The procedure uses a high-frequency electrical current to thoroughly ensure the possibility of cutting, coagulating, or ablating (vaporising) any unwanted skin growth. This system was developed by Ellman International Ltd.
                </p>

              </div>
            </div>

            <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/radio-frequency/ds-768x614.avif"
                fill
                className="object-cover"
                alt="Radio-Frequency Application"
              />
            </div>
          </div>
        </section>
          {/* SECTION 3: BENEFITS & HOW IT WORKS */}
          <section className="py-20 border-t border-slate-100 bg-white">
            <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column: Benefits */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-2 ">
                  <h2 className="text-2xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    What are the Benefits of Undergoing <span className="text-[#EA6490]">Ellman Radiofrequency Treatment?</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                  <p>
                   There are several benefits of Ellman Radiofrequency Treatment you can avail when you undergo this procedure, some of them are as follows: 
                  </p>
             
                </div>

                <div className="space-y-6">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-6 pb-8 border-b border-slate-50 last:border-0 group">
                      <div className="flex-shrink-0 w-8 h-[2px] mt-4 bg-[#EA6490]/30 group-hover:w-12 group-hover:bg-[#EA6490] transition-all duration-500"></div>
                      <p className="text-slate-700 text-lg leading-[1.5] font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: How It Works */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      How Does Ellman <span className="text-[#EA6490]">Radiofrequency Treatment Work?</span>
                    </h2>
                    <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                  </div>

                  <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                    <p>
                      This treatment procedure essentially employs high-frequency radio waves to thoroughly generate heat between your skin and tissue, which then extensively evaporates the water molecules present in the cells.
                    </p>
                    <p>
                      This then leads to the molecules being converted to steam in an essential manner. This technology easily allows your dermatologists to make sure that they are able to remove any soft skin tissues such as Xanthelasma, moles, warts, skin tags, and corns. The process leads to minimal scarring and damage in an effective way.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all active:scale-95 group">
                      Schedule Consult <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Why Choose Section */}
        <section className="py-2 border-t border-slate-100 bg-white">
          <div className="max-w-[1300px] mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Why Choose <span className="text-[#EA6490]">Ellman Radiofrequency Treatment at Puri Skin Clinic?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Expert Dermatologist", icon: <FaMedal /> },
                { title: "Advanced Techniques", icon: <FaMicroscope /> },
                { title: "Personalized Care", icon: <FaShieldAlt /> },
                { title: "Minimally Invasive", icon: <FaStethoscope /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 shadow-sm flex items-center justify-center text-3xl text-[#EA6490] group-hover:bg-[#EA6490] group-hover:text-white group-hover:rotate-6 transition-all duration-500 border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl tracking-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* SECTION 4: REMARKABLE RESULTS */}
        <section className="py-20 border-t border-slate-100 bg-slate-50/30">
          <div className="max-w-[1300px] mx-auto px-6 space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Remarkable Results <span className="text-[#EA6490]">That Speak Volumes</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
           
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: "/radio-frequency/as-768x614.avif", alt: "Skin rejuvenation result" },
                
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl border border-slate-100"
                >
                  <Image
                    src={item.img}
                    fill
                    className="object-cover"
                    alt={item.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS */}
        <section className="py-20 border-t border-slate-100 bg-slate-50/50 rounded-[3rem]">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our <span className="text-[#EA6490]">Patient Success</span>
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

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose Puri Skin Clinic for Ellman  <br /><span className="text-[#EA6490]">Radiofrequency Treatment!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                If you are unable to figure out how you can get rid of benign skin lesions, it can prove to be a thoroughly daunting reality to face. This is especially true when these growths are extensively unwanted. By undergoing radiotherapy skin tightening in Punjab with the help of Puri Skin Clinic, you can make certain that you are able to address and remove the unwanted growth from your skin and live a skin lesion-free life. Our clinic ensures that you are able to access personalised consultations and treatment options in an effective and essential manner. Address any and all of your skin and hair concerns with the help of Puri Skin Clinic today!    </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Appointment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      <FAQAccordion faqs={FAQ_DATA.radioFrequency} title="Frequently Asked Questions" />

    </div>
  );
}
