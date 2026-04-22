'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight, FaCheckCircle, FaStethoscope, FaFlask, 
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';

export default function DermapenClient() {


  const benefits = [
    { title: "Skin Rejuvenation", desc: "With the help of dermapen, you can ensure that you receive rejuvenated skin in an essential and effective manner.", icon: <FaMagic /> },
    { title: "Reduction of Wrinkles", desc: "Dermapen treatment also thoroughly makes sure that you can experience a decrease in wrinkles without any worries.", icon: <FaStar /> },
    { title: "Improving Scars", desc: "One can also enhance any and all facial scars with the help of a dermapen treatment.", icon: <FaShieldAlt /> },
    { title: "Minimise Pores", icon: <FaStethoscope />, desc: "Furthermore, it is essential to ensure that you can thoroughly and actively minimise the presence of pores on your face." },
    { title: "Product Absorption", icon: <FaFlask />, desc: "With the help of a dermapen session, you can also ensure that any product you apply goes on smoothly to your face." },
    { title: "Even Skin Tone", icon: <FaCheckCircle />, desc: "A dermapen treatment procedure also ensures the possibility of attaining even skin tone in an essential and effective way." }
  ];



  const testimonials = [
    {
      name: "Ritika Mehra",
      location: "Ludhiana",
      quote: "The Dermapen Grofactor Brightening System at Puri Skin Clinic worked wonders for my facial pigmentation. My skin tone is much more even, and the dark spots have faded significantly. Highly recommend!"
    },
    {
      name: "Neha Kapoor",
      location: "Ludhiana",
      quote: "I saw a huge improvement in my skin after a few Dermapen sessions at Puri Skin Clinic. My pigmentation issues have greatly reduced, and my skin feels smoother and more radiant. Dr. Puri is fantastic."
    },
    {
      name: "Amit Verma",
      location: "Ludhiana",
      quote: "The Dermapen Grofactor Brightening System has been a game-changer. My dark spots have reduced, and my skin’s texture has improved. Dr. Puri and his staff were knowledgeable and supportive."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

        {/* ── HERO SECTION ── */}
         <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
           <Image
             src="/dermapen/Puri-Skin-Clinic-4.jpg"
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
            src="/dermapen/sqw-768x614.avif"
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

      {/* SECTION 2: WHAT IS DERMAPEN? (IMAGE ON RIGHT) */}
      <section className="py-10 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What is <span className="text-[#EA6490]">Dermapen?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                In order to ensure that you can have a rejuvenated appearance of the skin, <strong>dermapen</strong> is employed. It is essentially a <strong>microneedling pen</strong> that offers the possibility of improving the scope of a person’s skin.
              </p>
              <p>
                This technology thoroughly works by making sure to create several punctures in your skin. This will stimulate the body’s <strong>natural healing and collagen production</strong> activities. The process can lead to a reduction in fine lines, wrinkles, acne scars, and other skin imperfections in an essential manner.
              </p>
              
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <p className="text-slate-900 font-bold italic">
                  "Dermapen is the gold standard for clinical microneedling, offering precision and safety that traditional rollers cannot match."
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
            <Image
              src="/dermapen/dd-768x614.avif"
              fill
              className="object-cover"
              alt="How Dermapen Works"
            />
          </div>
        </div>
      </section>
      {/* SECTION 3: HOW IT WORKS (IMAGE ON LEFT) */}
      <section className="py-10 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/skin-related/Dermapen-28.avif"
              fill
              className="object-cover"
              alt="Dermapen Procedure Visualization"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                How Does the <br /><span className="text-[#EA6490]">Treatment Work?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Once you have been prescribed the <strong>dermapen treatment</strong>, it is natural to wonder about the procedure itself. In this section, we thoroughly detail the dermapen treatment procedure to ensure that all our patients are aware of how the treatment procedure works in an effective manner.
              </p>
              
              <ul className="space-y-6">
                {[
                  "The first step of the procedure is to create punctures in a person’s skin using the dermapen’s microneedles in an effective manner.",
                  "These micro injuries then prompt the response of the skin’s natural healing abilities, leading to the production of collagen and elastin.",
                  "Once the skin has reacted to the injuries and formed collagen and elastin, it can thoroughly help in making sure that you are able to reduce the presence of wrinkles, fine lines, and pigmentation. These proteins are thoroughly responsible for making certain that you can appear youthful.",
                  "It is also important to note that the depth of the needles’ penetration can be thoroughly adjusted in an effective manner to address specific issues.",
                  "By encouraging the production of collagen and elastin, you can thoroughly and significantly ensure the possibility of addressing all of your significant concerns, including fine lines, wrinkles, hyperpigmentation, and other skin issues."
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 text-[#EA6490] border border-slate-100 flex items-center justify-center text-sm font-bold group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <span className="text-slate-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: BENEFITS OF DERMAPEN (GRID) */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-[1300px] mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Benefits of <span className="text-[#EA6490]">Dermapen Treatment</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            </div>
            <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed text-center">
              There are several benefits of undergoing the <strong>dermapen treatment</strong> in an effective and essential manner. In this section, we outline some of the advantages you can have once you decide to undergo the treatment procedure through Puri Skin Clinic:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                  key={idx} 
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6 shadow-sm"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <div className="space-y-3 h-full flex flex-col">
                  <h4 className="font-bold text-slate-900 text-xl">{benefit.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
      {/* SECTION 5: TESTIMONIALS */}
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

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-[1300px] mx-auto px-6 mb-20">
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose Puri Skin Clinic for Your <br/><span className="text-[#EA6490]">Dermapen Treatment Possibilities!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Losing one’s facial radiance can thoroughly lead to issues with one’s self-confidence and esteem. With the help of experts at <strong>Puri Skin Clinic</strong>, you can make certain that you are able to address any and all concerns of facial pigmentation in an essential and effective manner.
              </p>
              <p>
                By opting for the <strong>dermapen treatment</strong>, you can make certain that you are able to address any and all permanent acne scarring or general pigmentation on your face in an effective way. Add radiance back into your skin by consulting the experts of Puri Skin Clinic and opting for dermapen treatment today!
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Session <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQAccordion faqs={FAQ_DATA.dermapen} title="Frequently Asked Questions" />
    </div> </div>
  );
}
