'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaSmile, FaStethoscope, FaArrowRight, FaUser, FaVenus, FaWalking,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

export default function LaserHairRemovalPage() {

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/laser-hair/Puri-Skin-Clinic-3.jpg"
          fill
          className="object-cover object-center"
          alt="Laser Hair Removal Banner"
          priority
        />

      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 md:py-10 space-y-10">

        {/* SECTION 1: INTRODUCTION (IMAGE SLIDER ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/laser-hair/laser-r.avif"
              fill
              className='object-cover'
              alt="Vitiligo Treatment Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Get Rid of Unwanted Hair by <br /><span className="text-[#EA6490]">Laser Hair Removal!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Having hair where you do not want it can be a nuisance to deal with. Most men and women opt for solutions such as waxing, plucking, hair removal creams, and various other methods. However, it is essential to note that none of these options offers a permanent solution to your trouble. The hair grows back almost immediately.
              </p>
              <p>
                With the help of laser hair removal treatment, you can make sure to not only reduce the intensity of body hair but also ensure that you are able to permanently remove the body hair. One can opt for laser hair removal anywhere they want on the body. With the help of experts at Puri Skin Clinic, you can make certain that you are able to undergo the possibility of laser hair removal and receive treatment.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS TREATMENT (SIDE-BY-SIDE) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is <span className="text-[#EA6490]">Laser Hair Removal Treatment?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Laser hair removal is a cosmetic procedure wherein one can expect to remove the unwanted hair on their body. This process employs the use of concentrated beams of light in order to ensure that the expert can target and destroy the hair follicles in a thorough and effective manner.
                </p>
                <p>
                  The process involves the laser’s concentrated energy being absorbed by the melanin in the hair, which is later converted into heat. This heat then damages the hair follicles and prohibits any future hair growth in an effective and essential manner.
                </p>
                <p>
                  Laser hair removal treatment procedure thoroughly offers the ability to ensure that one can find a long-term solution to the problem of unwanted body hair. This procedure often requires multiple sessions to ensure that one can receive optimum results.
                </p>
                <div className="p-8 rounded-3xl bg-[#EA6490]/5 border border-[#EA6490]/20">
                  <p className="text-slate-900 font-bold italic">
                    "If you are worried about the laser hair removal cost in Ludhiana, you need not be! At Puri Skin Clinic, you can expect competitive rates and exceptional service."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image
                src="/laser-hair/lashd.avif"
                fill
                className="object-cover"
                alt="Professional Laser Hair Removal"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS (TEXT ONLY - CENTERED) */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                How Does the Laser Hair Removal <span className="text-[#EA6490]">Treatment Work?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            </div>

            <div className="space-y-8 text-black font-medium text-lg leading-[1.8] text-center px-4">
              <p>
                If you have never undergone or considered the possibility of undergoing a laser hair removal treatment, it can be an intimidating prospect when you do undergo it. It is natural to want to know and understand the hair removal procedure and how it works. At Puri Skin Clinic, we extensively understand this anxiety. Our team has extensively made sure that in this section, you can appreciate the laser hair removal process and how it works. By being aware of the procedure, you can ensure that you do not have to worry about anything during the procedure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
              {[
                {
                  title: "Targeting the Hair Follicle",
                  desc: "One of the first steps required in the process of laser hair removal is the expert's ability to identify which hair follicles need to be targeted. Once targeted, we can effectively address the issue.",
                  icon: <FaStethoscope />
                },
                {
                  title: "Ensuring to Generate the Heat",
                  desc: "The next step is to make sure that the machine is able to generate heat by targeting the melanin in the hair. This ensures the precise delivery of energy where it's needed most.",
                  icon: <FaShieldAlt />
                },
                {
                  title: "Damaging the Hair Follicle",
                  desc: "Next, the heat ensures the damage to the hair follicle, thoroughly and effectively safeguarding the possibility of long-term hair reduction.",
                  icon: <FaMagic />
                },
                {
                  title: "Growth Inhibition",
                  desc: "Once the hair follicle is damaged, the growth of the hair is thoroughly inhibited. This technique ensures a significant reduction in hair intensity and offers lasting relief.",
                  icon: <FaSyncAlt />
                },
                {
                  title: "Multiple Sessions",
                  desc: "More often than not, multiple sessions are required to make sure that you can attain optimum results and complete skin clarity.",
                  icon: <FaCalendarAlt />
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#EA6490] transition-all h-full group flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-slate-900">{step.title}</h4>
                  <p className="text-sm leading-relaxed font-medium text-slate-600">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFITS (HYBRID: HEADER -> IMAGE+GRID ROW -> BOTTOM GRID) */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">

            {/* TOP: HEADER & INTRO */}
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the Benefits of Accessing and Undergoing <br /><span className="text-[#EA6490]">Laser Hair Removal Treatment?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg leading-relaxed">
                One might wonder what the point of undergoing this procedure is? In this section, we offer the advantages one can receive if they opt to undergo the laser hair removal treatment procedure. The following are some of the clear-cut benefits you can avail from the procedure:
              </p>
            </div>

            {/* MIDDLE ROW: IMAGE + 4 CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-full">
                <Image
                  src="/laser-hair/efjh.avif"
                  fill
                  className="object-cover"
                  alt="Benefits of Laser Hair Removal"
                />
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                {[
                  {
                    title: "Long-term solution",
                    desc: "Receive a permanent solution for unwanted hair.",
                    icon: <FaSyncAlt />
                  },
                  {
                    title: "Low maintenance",
                    desc: "Thoroughly low-maintenance lifestyle.",
                    icon: <FaShieldAlt />
                  },
                  {
                    title: "Minimal side effects",
                    desc: "Little to no complications post-treatment.",
                    icon: <FaRegLightbulb />
                  },
                  {
                    title: "Quick Procedure",
                    desc: "Fast sessions that save you significant time.",
                    icon: <FaCalendarAlt />
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center text-center space-y-4 group hover:border-[#EA6490] hover:shadow-xl transition-all shadow-sm h-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center text-lg shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">{benefit.title}</h4>
                      <p className="text-[14px] text-slate-600 font-medium leading-tight">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BOTTOM: REST OF THE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "No Ingrown Hair",
                  desc: "Avoid suffering through painful instances of ingrown hair.",
                  icon: <FaCheckCircle />
                },
                {
                  title: "Less Painful",
                  desc: "Significantly less sore than other hair removal methods.",
                  icon: <FaHandSparkles />
                },
                {
                  title: "Thoroughly Safe",
                  desc: "Clinically safe with little to no side effects.",
                  icon: <FaShieldAlt />
                },
                {
                  title: "Precise Treatment",
                  desc: "Precise targeting with surgical accuracy.",
                  icon: <FaStethoscope />
                },
                {
                  title: "US-FDA Approved",
                  desc: "Latest globally recognized laser technologies.",
                  icon: <FaShieldAlt />
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center text-center space-y-4 group hover:border-[#EA6490] hover:shadow-xl transition-all shadow-sm h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{benefit.title}</h4>
                    <p className="text-[14px] text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TREATABLE AREAS (NEW) */}
       <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Areas where <span className="text-[#EA6490]">Laser Hair Removal</span> can be performed
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg leading-relaxed">
                At Puri Skin Clinic, we offer precise laser hair removal for almost any part of the body. Our advanced technology is safe for both delicate facial skin and larger body areas, providing a comprehensive solution for unwanted hair.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT SIDE: CLINICAL IMAGE */}
              <div className="lg:col-span-5 relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
                <Image 
                  src="/laser-hair/41aebf_4f6e2fce69f3473a8259617c4914f2d5mv2-823x1024.avif" 
                  fill 
                  className="object-cover" 
                  alt="Treatable Areas for Laser Hair Removal" 
                />
              </div>

              {/* RIGHT SIDE: AREAS GRID */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Facial Hair", desc: "Precision removal for upper lip, chin, sideburns, and forehead with delicate clinical care.", icon: <FaSmile /> },
                  { title: "Arms & Underarms", desc: "Silky smooth results for full or half arms, and sensitive underarm areas.", icon: <FaUser /> },
                  { title: "Legs", desc: "Long-lasting smoothness for full legs or half legs, eliminating the need for regular waxing.", icon: <FaWalking /> },
                  { title: "Back & Chest", desc: "A popular choice for men seeking a clean, groomed look with permanent reduction.", icon: <FaShieldAlt /> },
                  { title: "Bikini Line", desc: "Safe, hygienic, and comfortable treatment for sensitive and private areas.", icon: <FaVenus /> },
                  { title: "Full Body", desc: "Comprehensive clinical packages for head-to-toe smoothness and ultimate confidence.", icon: <FaMagic /> }
                ].map((area, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col items-center text-center space-y-6 group hover:border-[#EA6490] hover:shadow-2xl transition-all shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-3">{area.title}</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{area.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TESTIMONIALS (OUR HAPPY CUSTOMERS) */}
        <section className="py-12 border-t border-slate-100 bg-slate-50/50">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our <span className="text-[#EA6490]">Happy Customers</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              <p className="text-slate-600 font-medium text-lg">
                Hear directly from our patients about their life-changing experiences with laser hair removal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Simran Kaur",
                  location: "Ludhiana",
                  quote: "“I was skeptical at first, but the laser hair removal for my facial hair at Puri Skin Clinic has been a game-changer. The staff was professional, and the results are fantastic. Thank you, Dr. Puri!”",
                  rating: 5
                },
                {
                  name: "Rajat Mehta",
                  location: "Chandigarh",
                  quote: "“Getting laser hair removal for my underarms at Puri Skin Clinic was the best decision ever. The process was quick and nearly painless. No more waxing for me!”",
                  rating: 5
                },
                {
                  name: "Anjali Sharma",
                  location: "Ludhiana",
                  quote: "“Puri Skin Clinic’s laser hair removal service is top-notch. The results are impressive, and the team is incredibly skilled and friendly. Highly recommended!”",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 italic font-medium leading-[1.8] flex-grow text-lg">
                    {testimonial.quote}
                  </p>

                  <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#EA6490] font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-xs text-[#EA6490] font-bold uppercase tracking-widest">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose <span className="text-[#EA6490]">Puri Skin Clinic</span> for All Your Laser Hair Removal Treatment!
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                If you are trying to make certain that you can undergo the laser hair removal treatment, it can be intimidating, all things considered. This is especially true if you have never even considered the possibility of undergoing laser hair treatment. With the help of Puri Skin Clinic, you can make certain that you are able to undergo the treatment procedure in a thorough and effective manner. Easily enhance the possibility and likelihood of making sure that you can undergo the laser hair removal treatment with the help of experts without any worries today!
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Assessment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
         

      </div>
      {/* SECTION 6: FAQS */}
      <FAQAccordion faqs={LASER_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── LASER SPECIFIC FAQS ───
const LASER_FAQS = [
  {
    question: "Does laser hair removal provide permanent results or not?",
    answer: "Generally, the results of laser hair removal include reduced hair growth on your body for a long period of time. Therefore, you can get rid of your body hair for more than months or years in an effective manner."
  },
  {
    question: "Is undergoing laser hair removal a safe choice for all skin types?",
    answer: "Yes, generally, it is considered the safe option for all skin types; however, make sure to get thorough guidance regarding this from the professionals before opting for laser hair removal in Ludhiana."
  },
  {
    question: "How much time does it take for the procedure of laser hair removal?",
    answer: "Usually, the duration of the laser hair removal procedure widely depends on the size of the specific area of your body. For the smaller areas, such as the upper lip, our professionals do not take much time and remove the hair within a few minutes. However, the larger areas, such as legs and arms, might require more time."
  },
  {
    question: "Are there different rates of laser hair removal for men and women?",
    answer: "Yes, laser hair removal costs in Ludhiana significantly differ for men and women in terms of their hair density. Men usually have denser hair than women, due to which the cost of laser hair removal for them is higher than for women."
  },
  {
    question: "Should I be more careful about my skin after laser hair removal?",
    answer: "Yes, you should be extra careful of your skin after laser hair removal in terms of preventing burns and skin irritation.  You can protect your skin after laser hair removal from the sun in terms of preventing sunburns. Also, use mild cleansers for proper protection of your skin in an essential manner."
  },
  {
    question: "Are there any side effects?",
    answer: "You may experience slight redness or a mild sunburn sensation for a few hours, which typically resolves quickly. Our clinical team provides full post-care guidance."
  },
  {
    question: "Can facial hair be treated safely?",
    answer: "Absolutely. We use precise clinical parameters specifically for delicate facial skin to safely remove unwanted upper lip, chin, or jawline hair."
  },
  {
    question: "How should I prepare for my first session?",
    answer: "You should shave the area to be treated 24 hours before your session. Avoid waxing or plucking for at least 4 weeks prior."
  }
];
