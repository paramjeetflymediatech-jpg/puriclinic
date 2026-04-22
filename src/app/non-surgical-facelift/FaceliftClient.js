'use client';

import React from 'react';
import { FAQ_DATA } from '@/constants/constantdata';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles,
  FaFlask, FaWind, FaSnowflake
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function FaceliftClient() {
  const sliderImages = [
    "/skin-related/Non-Surgical-Facelift-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const modalities = [
    { 
      title: "Dermal Fillers", 
      desc: "Small gel injectables that help bring back lost facial volume with immediate results. These fillers hydrate the skin with hyaluronic acid and create youthful vibrancy in sunken areas.", 
      icon: <FaStethoscope /> 
    },
    { 
      title: "Thread Lift", 
      desc: "Inserting fine, absorbable threads to lift and tighten sagging areas for a subtle, youthful appearance without surgery.", 
      icon: <FaMagic /> 
    },
    { 
      title: "Botox", 
      desc: "Helpful in relaxing muscles to get rid of wrinkles, forehead creases, and crows’ feet. Results develop over time for a smoother look.", 
      icon: <FaHandSparkles /> 
    },
    { 
      title: "Laser Treatments", 
      desc: "A needleless procedure that tightens skin and pores, enhancing your natural glow in just a few hours.", 
      icon: <FaCheckCircle /> 
    },
    { 
      title: "Micro-needling RF", 
      desc: "Effectively improves skin texture and opens pores through combined energy, typically requiring a few sessions for optimal results.", 
      icon: <FaUserMd /> 
    },
    { 
      title: "HIFU Technology", 
      desc: "High-intensity focused ultrasound that uses ultrasound energy to make the skin firm by enhancing natural collagen production.", 
      icon: <FaShieldAlt /> 
    },
    { 
      title: "Carboxytherapy", 
      desc: "Diffusion of CO2 gas within the skin's middle layer to stimulate blood flow and nutrients, leading to increased collagen formation.", 
      icon: <FaWind /> 
    },
    { 
      title: "Chemical Peels", 
      desc: "A trusted, non-invasive technique effective in shrinking large pores and significantly enhancing overall skin quality.", 
      icon: <FaFlask /> 
    },
    { 
      title: "Cryolipolysis", 
      desc: "A painless freezing technique effective in dissolving fat from the chin to provide a more defined jawline and lifting effect.", 
      icon: <FaSnowflake /> 
    }
  ];

  const reasons = [
    { 
      title: "Minimally invasive procedure", 
      desc: "Non-surgical facelift procedures can be effective in achieving the best results. These treatments are done with the help of tiny needles, which makes them minimally invasive and safe compared to surgical processes.", 
      icon: <FaMagic /> 
    },
    { 
      title: "Zero to minimal downtime", 
      desc: "Non-surgical facelifts need zero to minimal downtime. After going through this procedure, patients can get back to their normal routine, which is completely convenient amidst a busy lifestyle.", 
      icon: <FaSyncAlt /> 
    },
    { 
      title: "Natural results", 
      desc: "Non-surgical facelift procedures can give a nice lift to the facial contours of your face. This way, the youthful volume and the facial definition can be restored. Also, this procedure can provide subtle and very noticeable results, which can enhance your overall features.", 
      icon: <FaStar /> 
    },
    { 
      title: "Treatments can be customized.", 
      desc: "There is an option to customize non-surgical facelift procedures. This way, the patients can complete their aesthetic goals and work on their concerns. Whether it is about working on the fine lines, volume loss, sagging skin, etc., a complete and personalised plan can be opted for to meet the demands.", 
      icon: <FaCalendarAlt /> 
    },
    { 
      title: "Great and lasting results", 
      desc: "No wonder these procedures are meant to be permanent, but they do offer lasting results. They can stay with you for several months, depending on the treatment you are opting for. Also, the maintenance of these treatments can enhance their longevity.", 
      icon: <FaUserMd /> 
    }
  ];

  const testimonials = [
    {
      name: "Radhe motwani",
      location: "Chandigarh",
      quote: "I was amazed by the results of the non-surgical facelift. My face looks visibly lifted and rejuvenated without any downtime. It’s a fantastic option for anyone looking to refresh their appearance."
    },
    {
      name: "Sheetal Aharwal",
      location: "Ludhiana",
      quote: "The non-surgical facelift at Puri Skin Clinic was a game-changer for me. The procedure was quick, painless, and the results were remarkable—my wrinkles have smoothed out and my skin looks vibrant."
    },
    {
      name: "Charu Narang",
      location: "Ludhiana",
      quote: "I’ve tried various treatments, but the non-surgical facelift exceeded my expectations. My face feels firmer and more youthful, and I appreciate the natural-looking results it has provided."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>


      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/non-surgical-facelift/10.jpg"
          fill
          className="object-cover object-center"
          alt="Non-Surgical Facelift Banner"
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
                Understanding <br /><span className="text-[#EA6490]">Non-Surgical Facelift</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                A non-surgical facelift is a minimally invasive procedure that is effective in addressing aging skin while rejuvenating and refreshing its appearance. This is not considered to be one procedure but is an amalgamation of many. 
              </p>
              <p>
                The dermatologists or cosmetologists use this procedure so that people can get their desired skin. Also, it is becoming highly popular among people who wish to have some volume in their cheeks, temples, mouth area, under eyes, and other parts of the face. With the help of dermal fillers, a youthful skin or appearance can be achieved.
              </p>
              <p>
                No wonder there are different kinds of fillers that can be opted to have a lifted skin without needing to add any extra volume. This is the best choice for people who want a slight facelift but not with too much volume.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPARISON (SURGICAL VS NON-SURGICAL) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Non-Surgical vs. <br /><span className="text-[#EA6490]">Surgical Facelift</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  A <strong>surgical facelift</strong> is also known as <em>rhytidectomy</em>, where cuts are made on the face so that the skin can be tightened on the face and neck. While following this procedure, fat can be transferred to the face so that facial muscles can be adjusted. To complete this procedure, general anesthesia and complete hospitalisation are required.
                </p>
                <p>
                  Whereas in a <strong>non-surgical facelift</strong>, there is no need for fat transfer and it is a minimally invasive process. It is an excellent choice for those seeking rejuvenation without the downtime of surgery, although it generally delivers more short-term skin results that can be maintained with periodic sessions.
                </p>
                
                <div className="p-8 rounded-3xl bg-[#EA6490]/5 border border-[#EA6490]/10">
                  <p className="text-slate-900 font-bold italic">
                    "Choose the non-surgical path for immediate results, zero hospitalisation, and a natural enhancement that respects your features."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/non-surgical-facelift/Untitled-1-1.avif"
                fill
                className="object-cover"
                alt="Comparison of Facelift Techniques"
              />
            </div>
          </div>
        </section>
  

        {/* SECTION 3: TREATMENT MODALITIES (GRID) */}
            
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1500px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the types of  <span className="text-[#EA6490]">Non-Surgical Facelifts?</span>
                </h2>
                <div className="w-36 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed">
                There are different types of non-surgical facelifts. This can help the patients to choose any one of them that meets their needs and addresses the issues that they want to get rid of. The types of procedures are listed below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {modalities.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6 shadow-sm"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE NON-SURGICAL (IMAGE ON LEFT) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image
                src="/fillers/derm.jpg"
                fill
                className="object-cover"
                alt="Non-Surgical Facelift Benefits"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Why opt for non-surgical facelifts? <br /><span className="text-[#EA6490]">Know the benefits</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6">
                <ul className="space-y-6">
                  {reasons.map((reason, idx) => (
                    <li key={idx} className="flex gap-6 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 text-[#EA6490] border border-slate-100 flex items-center justify-center text-xl group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                        {reason.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 text-xl">{reason.title}</h4>
                        <p className="text-slate-600 font-medium leading-relaxed">{reason.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CANDIDACY (IDEAL CANDIDATES VS WHO SHOULD AVOID) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Who is the right candidate for <br /><span className="text-[#EA6490]">Non-Surgical Facelifts?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg leading-relaxed pt-4">
                  People who are always concerned about their aging skin or have various skin issues can opt for non-surgical facelifts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* IDEAL CANDIDATES */}
                <div className="p-8 rounded-[2rem] bg-emerald-50 border border-emerald-100 space-y-6">
                  <h4 className="font-bold text-emerald-900 text-xl flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500" /> Ideal Candidates
                  </h4>
                  <ul className="space-y-3 text-emerald-800 font-medium text-sm leading-relaxed">
                    <li>• Sagging skin or aging jowls</li>
                    <li>• Shadows near the eyes</li>
                    <li>• Sunken cheeks</li>
                    <li>• Thin lips</li>
                    <li>• Wrinkles (frown lines, marionette lines)</li>
                  </ul>
                </div>

                {/* WHO SHOULD AVOID */}
                <div className="p-8 rounded-[2rem] bg-rose-50 border border-rose-100 space-y-6">
                  <h4 className="font-bold text-rose-900 text-xl flex items-center gap-3">
                    <FaShieldAlt className="text-rose-500" /> When to Stay Away
                  </h4>
                  <ul className="space-y-3 text-rose-800 font-medium text-sm leading-relaxed">
                    <li>• Active acne or Cold sores</li>
                    <li>• Psoriasis or Eczema</li>
                    <li>• Moles or freckles on the skin</li>
                    <li>• Skin burns or rashes</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <p className="text-slate-700 font-medium text-sm italic leading-relaxed">
                  <strong>Important Note:</strong> Non-surgical facelifts can be ineffective for deep wrinkles, acne scars, or excessive loose/saggy skin. In such cases, a surgical assessment may be required.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image
                src="/fillers/derm-1.avif"
                fill
                className="object-cover"
                alt="Non-Surgical Facelift Candidacy"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: TESTIMONIALS */}
        <section className="py-20 border-t border-slate-100 bg-slate-50/50">
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

        {/* SECTION 7: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Get the best facelift with <br /><span className="text-[#EA6490]">Puri Skin Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                If you are willing to say goodbye to your dull, wrinkled, and saggy skin, then choosing a non-surgical facelift can be the best procedure for you. It is considered to be minimally invasive and allows people to get back to their routine within a short time. Also, in this journey, <strong>Puri Skin Clinic</strong> can be of great help to you. We have the best team of skin doctors who will assess your skin properly and offer you the best treatments.
              </p>
              <p>
                Also, we even guide you about which non-surgical facelift procedure type you should go for and the details related to the non-surgical facelift cost in Ludhiana, Punjab. Thus, Puri Skin Clinic ensures that you get the best facelift or the desired results for your skin.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 6: FAQS */}
      <FAQAccordion faqs={FAQ_DATA.nonSurgicalFacelift} title="Frequently Asked Questions" />

    </div>
  );
}

