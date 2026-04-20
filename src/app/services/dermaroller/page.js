'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

export default function DermarollerTreatmentPage() {

  const benefits = [
    { title: "Acne Scarring", desc: "One can thoroughly get rid of any and all acne scarring through precision dermaroller therapy.", icon: <FaShieldAlt /> },
    { title: "Fine Lines", desc: "One can address their concerns regarding fine lines effectively in an essential manner.", icon: <FaStar /> },
    { title: "Wrinkle Reduction", desc: "One can easily ensure that they are able to remove any and all wrinkles on their skin.", icon: <FaMagic /> },
    { title: "Skin Vibrancy", desc: "If you have lost the vibrancy of your skin over the years, you can add it back to your face.", icon: <FaSyncAlt /> },
    { title: "Skin Texture", desc: "You can significantly improve the texture of your skin with the help of our clinical experts.", icon: <FaCheckCircle /> }
  ];

  const testimonials = [
    {
      name: "Sandeep Singh",
      location: "Moga",
      quote: "After trying Dermaroller, my acne scars have visibly diminished. The treatment was quick and the results are just what I hoped for."
    },
    {
      name: "Ravi Sharma",
      location: "Ludhiana",
      quote: "The Dermaroller treatment was excellent for my acne scars. I noticed a big improvement in my skin’s texture, and the procedure was straightforward."
    },
    {
      name: "Neha Kapoor",
      location: "Jagraon",
      quote: "Very pleased with my Dermaroller sessions. My acne scars have lightened significantly, and my skin feels rejuvenated. Definitely worth it!"
    }
  ];
  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/dermaroller/6-1.jpg"
          fill
          className="object-cover object-center"
          alt="Dermaroller Treatment Banner"
          priority
        />
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (IMAGE ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/dermaroller/derma.avif"
              fill
              className="object-cover"
              alt="Dermaroller Treatment Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Choose Dermaroller for a <br /><span className="text-[#EA6490]">Better Skin</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>
            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                If you have dulled skin and have lost your radiance over the years of being exposed to the elements of pollution, it can thoroughly prove to be a confidence-altering reality in an essential and effective manner. One can find oneself shunning away from social commitments because of it.
              </p>
              <p>
                However, it is necessary to note that help and advice are available through <strong>Puri Skin Clinic</strong>. Go in for a consultation and figure out the best treatment plan with the help of our experts.
              </p>
              <p>
                We also offer an <strong>affordable dermaroller treatment in Ludhiana</strong>; therefore, you do not have to worry about the expenses at all! Consult the treatment thoroughly provided by the experts of Puri Skin Clinic today!
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS DERMAROLLER? (IMAGE ON RIGHT) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is <span className="text-[#EA6490]">Dermaroller?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  In order to ensure that you can have a rejuvenated appearance of the skin, <strong>dermaroller</strong> is employed. It is essentially a microneedling device that offers the possibility of improving the scope of a person’s skin.
                </p>
                <p>
                  This technology thoroughly works by making sure to create several punctures in your skin. This will stimulate the body’s <strong>natural healing and collagen production</strong> activities. The process can lead to a reduction in fine lines, wrinkles, acne scars, and other skin imperfections in an essential manner.
                </p>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-900 font-bold italic">
                    "Dermaroller is the gold standard for clinical microneedling, offering precision and safety that traditional treatments cannot match."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/dermaroller/de.avif"
                fill
                className="object-cover"
                alt="How Dermaroller Works"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS (FULL WIDTH GRID) */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-16">
            {/* FULL WIDTH INTRO */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How Does the <br /><span className="text-[#EA6490]">Treatment Work?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8] max-w-6xl mx-auto">
                <p>
                  Once you have decided to undergo the <strong>dermaroller treatment</strong>, you might find yourself curious about the treatment procedure. In this section, we thoroughly detail the dermaroller procedure in an effective manner.
                </p>
                <p>
                  The following section details the way <strong>dermaroller treatment</strong> essentially works to restore your skin's natural beauty and resilience:
                </p>
              </div>
            </div>

            {/* GRID OF STEPS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Micro-Needling", icon: <FaStethoscope />, text: "The first step in the process of dermaroller treatment is the ability to create micro-punctures or injuries on the surface of the skin. For this, most experts use a handheld device known as a dermaroller." },
                { title: "Wound Healing Response", icon: <FaMagic />, text: "Once the micro injuries are thoroughly created, the body responds by triggering, or rather, stimulating its natural healing process. This includes the production of specific proteins that will aid the process of healing." },
                { title: "Elastin and Collagen Production", icon: <FaStar />, text: "Namely, elastin and collagen are produced as a result of microinjuries. These proteins aid in the reconstruction of the skin thoroughly. One can easily and effectively ensure that they are able to address acne scarring, fine lines, and wrinkles in an essential manner." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group flex flex-col h-full shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h4 className="font-bold text-slate-900 text-xl flex items-center gap-3">
                      <span className="text-sm bg-[#EA6490]/10 text-[#EA6490] w-6 h-6 rounded-full flex items-center justify-center font-black">{idx + 1}</span>
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
              {[
                { title: "Revamped Skin", icon: <FaSyncAlt />, text: "By undergoing this procedure, you can address several of your skin concerns in a thorough and effective manner. You can easily make sure that you are able to receive a revamped skin quality as a result of the dermaroller treatment procedure." },
                { title: "Glowing Results", icon: <FaRegLightbulb />, text: "With the help of dermaroller treatment, you can make certain that you are able to thoroughly and actively attain glowing results." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group flex flex-col h-full shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h4 className="font-bold text-slate-900 text-xl flex items-center gap-3">
                      <span className="text-sm bg-[#EA6490]/10 text-[#EA6490] w-6 h-6 rounded-full flex items-center justify-center font-black">{idx + 4}</span>
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFITS FOR HAIR */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-10">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Benefits of Opting for <span className="text-[#EA6490]">Dermaroller Treatment</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-4xl mx-auto leading-relaxed text-center">
                There are also several benefits one can attain from undergoing the <strong>dermaroller treatment</strong> in an essential and effective manner. The following are some of the benefits you can achieve by opting for dermaroller treatment from <strong>Puri Skin Clinic</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white lg:sticky lg:top-32">
                <Image
                  src="/dermaroller/sys.avif"
                  fill
                  className="object-cover"
                  alt="Clinical Dermaroller Benefits"
                />
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-[35px] font-bold text-slate-800 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Benefits for <span className="text-[#EA6490]">Hair</span>
                    </h2>
                  </div>
                  <p className="text-black font-medium text-lg leading-[1.8]">
                    There are several transformative benefits one can attain from undergoing the <strong>dermaroller treatment</strong> in an essential and effective manner. The following results can be achieved at Puri Skin Clinic:
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    "One can thoroughly get rid of any and all acne scarring",
                    "One can address their concerns regarding fine lines.",
                    "One can easily ensure that they are able to remove any and all wrinkles on their skin.",
                    "If you have lost the vibrancy of your skin over the years, you can add it back to your face.",
                    "You can significantly improve the texture of your skin."
                  ].map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EA6490] text-white flex items-center justify-center text-xs shadow-lg group-hover:scale-110 transition-transform">
                        <FaCheckCircle />
                      </div>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors pt-0.5">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PREPARATION */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How to Prepare Yourself for the <br /><span className="text-[#EA6490]">Dermaroller Treatment</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-4xl mx-auto leading-relaxed text-center">
                Suppose you have opted to undergo the dermaroller treatment procedure with the help of experts at <strong>Puri Skin Clinic</strong>. You might find yourself wondering what you can do in order to prepare yourself for your first session in an effective manner. The following are some of the ways you can prepare yourself and your skin for the dermaroller treatment procedure without any questions or worries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm border border-slate-100">
                      <FaSyncAlt />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Dermaroller Preparation
                    </h3>
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-[1.8]">
                    The dermaroller is thoroughly and significantly prepared by soaking it in a <strong>70% isopropyl alcohol solution</strong> for at least 10-15 minutes to completely sanitise it. This will ensure the killing of any and all germs that can significantly impact you or your immune system. Once the process of soaking is complete, you can rinse the dermaroller with warm water to ensure that you can take out any and all the alcohol residue in a thorough and effective manner.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm border border-slate-100">
                      <FaUserMd />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Skin Preparation
                    </h3>
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-[1.8]">
                    The first step is to ensure that you can cleanse the surface of your skin significantly. Ensure to use a <strong>pH-balanced cleanser</strong> to make sure that you can remove substantially all the makeup, dirt, and oil in an effective way. The next step is to exfoliate your skin in an essential manner. If you have an extremely low pain tolerance, we also recommend using a skin numbing cream in a thorough and effective manner. However, it is essential to ensure that you can remove any and all residue from the cream before you start the dermaroller session.
                  </p>
                </div>
              </div>

              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white lg:sticky lg:top-32 order-1 lg:order-2">
                <Image
                  src="/dermaroller/dem-768x614.jpg"
                  fill
                  className="object-cover"
                  alt="Dermaroller Preparation at Puri Skin Clinic"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TESTIMONIALS */}
        <section className="py-10 border-t border-slate-100 bg-slate-50/50">
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
        <section className="max-w-[1300px] mx-auto ">
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
              <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Go with Puri Skin Clinic for Your <br /><span className="text-[#EA6490]">Dermaroller Skin Treatment!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
                <p>
                  There are several clinics in the area that can offer you the best and most affordable <strong>dermaroller treatment in Punjab</strong>. However, none do it better than the experts of <strong>Puri Skin Clinic</strong>. With our team, you can rest assured that your care is in the right hands.
                </p>
                <p>
                  Our trained and experienced dermatologists ensure that every patient receives thorough, accurate, personalised, and passionate care. Consult <strong>Puri Skin Clinic</strong> and get to the bottom of your issues and resolve any and all skin problems you might face. From acne scarring to pigmentation – everything can be thoroughly addressed with the help of Puri Skin Clinic!
                </p>
              </div>
              <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Session <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 8: FAQS */}
      <FAQAccordion faqs={DERMAROLLER_FAQS} title="Frequently Asked Questions" />
    </div>
  );
}

// ─── DERMAROLLER SPECIFIC FAQS ───
const DERMAROLLER_FAQS = [
  {
    question: "How does the Dermaroller actually help my skin?",
    answer: "It creates microscopic punctures that trigger the body's natural wound-healing response, producing new collagen and elastin to repair scars and wrinkles."
  },
  {
    question: "Is the procedure painful?",
    answer: "We use a high-quality topical numbing cream before the procedure to ensure you feel minimal discomfort during the session."
  },
  {
    question: "How long does it take to see results from Dermaroller?",
    answer: "While some glow is visible soon after, significant improvements in scars and texture usually appear after 2 to 3 sessions as new tissue forms."
  },
  {
    question: "Is Dermaroller safe for all skin types?",
    answer: "Yes, it is generally safe for all skin types. However, we avoid active acne areas to prevent the spread of bacteria."
  },
  {
    question: "What is the downtime after a Dermaroller session?",
    answer: "You may experience mild redness and swelling for 24 to 48 hours. Most patients return to their normal routine by the third day."
  },
  {
    question: "How often should I undergo Dermaroller treatment?",
    answer: "Sessions are typically spaced 4 to 6 weeks apart to allow the skin's natural regeneration process to complete."
  },
  {
    question: "Can I do Dermaroller at home?",
    answer: "Home rollers are much shallower and carry a high risk of infection. Professional clinical treatments use medical-grade needles for deeper, safer, and more effective results."
  },
  {
    question: "What should I avoid after the treatment?",
    answer: "Avoid direct sun exposure, strenuous exercise, and harsh skincare products for at least 48 hours post-treatment."
  }
];
