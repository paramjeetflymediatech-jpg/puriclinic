'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaArrowRight,
  FaStar, FaShieldAlt, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function BotoxClient() {
  const sliderImages = [
    "/botox/skinn.avif",
    "/botox/skin-2.avif",
    "/botox/br.avif"
  ];

  const signs = [
    "Appearance of wrinkles",
    "Appearance of fine lines",
    "Frown lines",
    "Crow’s feet",
    "Any forehead lines ",
    "Gummy smile",
    "Dropping eyebrows"
  ];

  const reasons = [
    {
      title: "Experts and Professionals",
      desc: "Most people who opt for Botox treatment use it for its cosmetic purposes. More often than not, the procedure is supposed to be done on a person’s face. Therefore, one needs to make sure that they can find professional and experienced experts. At Puri Skin Clinic, you can be assured of finding reliable and trained professionals who will offer you this treatment possibility.",
      icon: <FaUserMd />
    },
    {
      title: "Consultation",
      desc: "Puri Skin Clinic typically starts the procedure with a thorough consultation wherein the patient can lay out all their concerns.",
      icon: <FaCalendarAlt />
    },
    {
      title: "Treatment Plan",
      desc: "During the consultation, the doctor typically devises a treatment plan and discusses it in detail with the patient. Once both parties are satisfied, the plan is set in motion.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Personalised Experience",
      desc: "Puri Skin Clinic ensures that each patient is given a personalised experience based on their specific problems.",
      icon: <FaSyncAlt />
    },
    {
      title: "Your Safety",
      desc: "Our team also thoroughly ensures that the patient’s safety is prioritised in any and all scenarios.",
      icon: <FaShieldAlt />
    }
  ];

  const testimonials = [
    {
      name: "Ayesha Kapoor",
      location: "Ludhiana",
      text: "I had Botox for my forehead lines, and the results are incredible. The wrinkles are significantly reduced, and I feel so much more confident now.",
      rating: 5
    },
    {
      name: "Ravi Sharma",
      location: "Ludhiana",
      text: "The Botox treatment was quick and effective. The team did a fantastic job, and my crow’s feet have vanished.",
      rating: 5
    },
    {
      name: "Meera Singh",
      location: "Ludhiana",
      text: "I was skeptical at first, but the Botox treatment exceeded my expectations. My frown lines are nearly gone, and the process was smooth and professional.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/botox/9-1.jpg"
          fill
          className="object-cover object-center"
          alt="Non-Surgical Facelift Banner"
          priority
        />
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
              Rejuvenate Life <br /><span className="text-[#EA6490]">Back Into Your Face!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Experiencing sagging of skin when you start to age can prove to be a thoroughly disturbing reality. Many people begin to develop wrinkles, eye bags, and all sorts of muscle issues past a certain age. This can thoroughly lead to problems with a person’s self-confidence and esteem.
              </p>
              <p>
                With the help of effective botox treatment, you can make certain that you are able to thoroughly and actively address the issues of your sagging skin in a thorough manner. At Puri Skin Clinic, you can undergo this treatment procedure without any worries.
              </p>
              <p>
                Our experts ensure to offer you a personalised treatment consultation. Botox treatment cost in Ludhiana is also highly affordable. Therefore, you do not need to worry about this aspect under any circumstances.
              </p>
            </div>
          </div>


        </section>

        {/* SECTION 2: WHAT IS BOTOX (SIDE-BY-SIDE) */}
        <section className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What is <span className="text-[#EA6490]">Botox Treatment?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Botox treatment, also known as the botulinum toxin type A procedure, aims to reduce the amount of wrinkles or fine lines on your skin by relaxing the muscles appropriately. This procedure essentially works by ensuring to block the nerve signal that forces the muscles to contract in the first place.
                </p>
                <p>
                  This process allows one to have smooth skin and, therefore, a much more youthful appearance in an effective manner. While the procedure has gained notoriety for its cosmetic purposes, it is also important to note here that one can often use Botox treatment to resolve muscle spasms as well as an overactive bladder.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/botox/sqw.jpg"
                fill
                className="object-cover"
                alt="Botox Treatment Procedure"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: SIGNS YOU NEED BOTOX */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Signs You Need <br /><span className="text-[#EA6490]">Botox Treatment</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            <p className="text-black font-medium text-lg">
            If you have never even thought of undergoing Botox treatment, you can miss out on the clear indications that you need the Botox treatment. In this section, we discuss the common signs you need to keep an eye out for to ensure that you can get this treatment in a timely manner. The following are some of the signs you need to consider for Botox treatment: 
            </p>
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
               If you or someone you know is desiring a refreshed appearance, while also looking for a non-invasive solution, Botox treatment is a perfect option for you. 
              </p>
            
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {signs.map((sign, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-6 group hover:border-[#EA6490] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                  <FaCheckCircle />
                </div>
                <span className="font-bold text-slate-800 text-lg">{sign}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
           Reasons to Opt for Puri Skin Clinic for <br /><span className="text-[#EA6490]">Your Botox Treatment!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
            While there are several clinics that can offer you Botox treatment, it is imperative to ensure that you can undertake this procedure through professionals. The following are some of the reasons you need to opt for Puri Skin Clinic if you want to undergo Botox treatment in Ludhiana: 
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

        {/* SECTION 5: TESTIMONIALS */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our <span className="text-[#EA6490]">Happy Customers</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-all h-full group"
              >
                <div className="flex text-[#EA6490] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-black text-lg italic font-medium leading-relaxed mb-8">“{item.text}”</p>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">{item.name}</h4>
                  <p className="text-[#EA6490] font-bold text-sm uppercase tracking-widest mt-1">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Access Puri Skin Clinic for <br /><span className="text-[#EA6490]">Botox Treatment Today!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
               Undergoing Botox treatment for the first time can prove to be a thoroughly intimidating prospect. One needs to make sure that they can find professionals who can extensively resolve their issues and offer them a chance to undergo the treatment effectively. With the help of Puri Skin Clinic, you can make certain that you are able to thoroughly address your specific concerns and attain personalised treatment programs.
              </p>
              <p>
             One can easily make sure that you are able to undergo the Botox treatment without any complications. It is also important to note that the botox treatment cost in Punjab is relatively affordable when compared to other states in the country. Choose Puri Skin Clinic and undergo the Botox treatment today!
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
      {/* SECTION 7: FAQS */}
      {/* <FAQAccordion faqs={BOTOX_FAQS} title="Frequently Asked Questions" /> */}

    </div>
  );
}

// ─── BOTOX SPECIFIC FAQS ───
const BOTOX_FAQS = [
  {
    question: "When should I expect results from Botox?",
    answer: "You will start noticing noticeable changes in your face within three to five days after the completion of your procedure. Full results are typically visible within 2 weeks."
  },
  {
    question: "How long do the effects of Botox typically last?",
    answer: "Generally, Botox results last between 3 to 6 months. As muscle action gradually returns, the lines and wrinkles begin to reappear and need to be treated again."
  },
  {
    question: "Is undergoing Botox safe for sensitive skin?",
    answer: "Yes, Botox is safe for most skin types. However, we always recommend a thorough consultation with our dermatologists to ensure it's the right choice for your specific skin profile."
  },
  {
    question: "Does the procedure involve a lot of pain?",
    answer: "The procedure involves very minimal discomfort. Most patients describe the sensation as a quick pinch. No anesthesia is typically required."
  },
  {
    question: "Can I return to work immediately after the treatment?",
    answer: "Yes, there is virtually no downtime. You can resume most normal activities immediately, though we recommend avoiding strenuous exercise for 24 hours."
  },
  {
    question: "What are the common side effects of Botox?",
    answer: "Common side effects are minimal and temporary, including slight redness, swelling, or bruising at the injection site. These typically resolve within a few hours."
  },
  {
    question: "At what age should I start considering Botox?",
    answer: "There is no 'right' age, but many patients start in their late 20s or early 30s as a preventative measure to stop dynamic wrinkles from becoming permanent lines."
  },
  {
    question: "Is Botox treatment expensive in Ludhiana?",
    answer: "Botox treatment cost in Punjab is relatively affordable. At Puri Skin Clinic, we offer competitive pricing while maintaining the highest medical standards."
  }
];
