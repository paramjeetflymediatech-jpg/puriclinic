'use client';

import React from 'react';
import { FAQ_DATA } from '@/constants/constantdata';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaStar, FaShieldAlt, FaSyringe, FaRegLightbulb, FaSyncAlt, FaFlask,
  FaMedal, FaMicroscope, FaStethoscope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

export default function MesotherapyClient() {


  const reasons = [
    { title: "Targeted Treatment", desc: "With the help of mesotherapy, you can make certain that you are able to directly focus on the core of the issue. Since this issue ensures the possibility of directly injecting into the skin, most dermatologists ensure that they are able to apply the treatment mixture directly to the point of concern.", icon: <FaSyringe /> },
    { title: "Stimulate Cell Activity", desc: "If done right, mesotherapy ensures that you can thoroughly and extensively ensure that you are able to stimulate cell activity in an essential manner. The injected concoction triggers your skin’s healing response. This provides the possibility of stimulating cells and causing the production of proteins such as collagen and elastin, which thoroughly promote a youthful appearance.", icon: <FaFlask /> },
    { title: "Numerous Applications", desc: "With mesotherapy treatment, you can make certain that you are able to access several applications using the same treatment. Mesotherapy can be used to access skin rejuvenation, hair loss, as well as fat reduction possibilities.", icon: <FaSyncAlt /> },
    { title: "Customised Solution", desc: "Mesotherapy also explores the possibility of providing a customised solution in an extensive and exclusive manner. The concocted solutions can be customised to ensure that one is able to address specific issues of skin, fat, or hair in an extensive manner.", icon: <FaShieldAlt /> },
    { title: "Minimally Invasive", desc: "The procedure also thoroughly offers the possibility of undergoing a minimally invasive procedure in an essential and effective manner. With the help of experts, you can make certain that there are next to no issues when it comes to undergoing mesotherapy in an essential and effective manner.", icon: <FaRegLightbulb /> },

  ];

  const testimonials = [
    {
      name: "Ravi Singh",
      location: "Ludhiana",
      quote: "I was struggling with hair thinning for years. After starting Hair Mesotherapy, I’ve noticed a significant improvement. My hair feels fuller and stronger. The process was straightforward, and the results speak for themselves!"
    },
    {
      name: "Sneha Shetty",
      location: "Ludhiana",
      quote: "Hair Mesotherapy was a game-changer for me. I had severe hair loss and tried various treatments with little success. This therapy has really helped reduce my hair fall and gave me the confidence boost I needed."
    },
    {
      name: "Jasod Gupta",
      location: "Chandigarh",
      quote: "The PRP treatment I received at Puri Skin Clinic really made a difference. My hair has seen noticeable improvement, and the process was smooth and effective. Great service and professional staff!"
    }
  ];

  const benefits = [
    {
      title: "Skin Rejuvenation ",
      subtitle: "",
      desc: "One of the key benefits of undergoing mesotherapy is that it allows you to access the possibility of skin rejuvenation in an extensive manner. With this procedure, you can be sure to add radiance back to your skin and achieve a glowing look.",
      icon: <FaStar />
    },
    {
      title: "Regrowing Hair ",
      subtitle: "",
      desc: "Mesotherapy can also thoroughly and effectively ensure the possibility of finding a solution for your extensive hair loss. Mesotherapy can extensively make sure that you are able to enhance the potential of revitalising your hair follicles in a comprehensive and thorough manner.",
      icon: <FaSyringe />
    },

  ];
  const benefits_2 = [
    {
      title: "Explore Cellulite Reduction",
      subtitle: "",
      desc: "With mesotherapy, you can also make sure that you are able to thoroughly and extensively address the issue of cellulite on your body. Ensure cellulite reduction with the help of mesotherapy today.",
      icon: <FaStar />
    },
    {
      title: "Minimal Downtime ",
      subtitle: "",
      desc: "Mesotherapy also ensures that one does not have to spend too much time recovering in an essential and effective manner. Easily enhance the possibility of getting back on your feet quickly after the procedure with mesotherapy. ",
      icon: <FaSyringe />
    },

  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full    flex items-center justify-center overflow-hidden">
        <Image
          src="/mesotherapy/4-1.jpg"
          width={2000}
          height={2000}
          className="object-cover object-center"
          alt="Mesotherapy Treatment Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: WHAT IS MESOTHERAPY? */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/mesotherapy/rff-768x614.avif"
              fill
              className="object-cover"
              alt="Mesotherapy Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Revamp Your Skin and Hair with <span className="text-[#EA6490]">Mesotherapy Treatment!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Time can leave its mark on the brightest of skin and shiniest of hair. Both these parts of your body can thoroughly and effectively find themselves to be dulled as a result of the intense interaction with sunlight and everyday pollution. The result is a poorly maintained skin and hair appearance. With the help of experts at Puri Skin Clinic, you can make certain that you are able to address such issues in an extensive and essential manner. Easily figure out what the problem is with your skin and hair, figure out a treatment plan, and undergo the said procedure without any worries. s via micro-injections, it rejuvenates the skin from within.
              </p>
              <p>
                If you are looking for a clinic to undergo mesotherapy, you can easily opt for Puri Skin Clinic. Not only do we offer the possibility of accessing expert care, but you can also make sure that you are able to access an affordable mesotherapy cost in Ludhiana. Therefore, you do not have to worry about spending an exorbitant amount of money in order to ensure that you can undergo this treatment opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TARGET AREAS */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is <span className="text-[#EA6490]">Mesotherapy Treatment!</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Mesotherapy essentially is a cosmetic procedure wherein the care provider injects a cocktail of medications into the middle layer of our skin, namely the mesoderm. The injection typically includes a customised combination of adequate vitamins, enzymes, and hormones. This process is generally used to address several issues of skin and hair. The mesotherapy thoroughly ensures that you are able to receive extensive skin rejuvenation, reduce fat, and resolve the issue of hair loss. This process strives to make sure that one is able to address these issues by targeting the root of the problem and bringing the solution to the root cause.
                </p>

              </div>
            </div>

            <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/mesotherapy/derm-1-768x614.avif"
                fill
                className="object-cover"
                alt="Mesotherapy Target Areas"
              />
            </div>
          </div>
        </section>



        {/* SECTION 3: WHY CHOOSE MESOTHERAPY? */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-16">
            <div className="max-w-4xl mx-auto space-y-12 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How Does  <span className="text-[#EA6490]">Mesotherapy Treatment Work?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>

              <p className="text-black font-medium text-lg leading-[1.8]">
                If you have been recommended to undergo a mesotherapy procedure by your dermatologist, it can thoroughly prove to be a daunting prospect. In this section, we offer extensive details regarding the mesotherapy treatment procedure. By being aware of the treatment procedure, you can make certain that you are able to thoroughly and actively prepare yourself for the procedure. The following explains how the mesotherapy treatment procedure works:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-auto">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col h-full group hover:bg-white hover:shadow-2xl transition-all"
                >
                  <div className="w-14 mx-auto h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                    {reason.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-4 text-center" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{reason.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFITS ROW */}
        <section className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the <span className="text-[#EA6490]"> Benefits of Mesotherapy?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  If you are hesitant to opt for a mesotherapy treatment procedure, you can be assured that you will attain several benefits. The following are some of the benefits you can achieve when you decide to undergo the treatment procedure in an extensive manner.
                </p>
                <div className="grid grid-cols-1 gap-6 pt-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/2] md:aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image
                src="/mesotherapy/s-768x614.avif"
                fill
                className="object-cover"
                alt="Mesotherapy Benefits"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </section>
        <section className="py-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/2] md:aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-2 lg:order-1">
              <Image
                src="/mesotherapy/derm-768x614.avif"
                fill
                className="object-cover"
                alt="Targeted Fat Reduction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Undergoing Targeted Fat<span className="text-[#EA6490]"> Reduction Treatment </span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Mesotherapy can also offer the possibility of making certain that you are able to target specific fat collected in your body and offer you the chance of targeted fat reduction. You can easily make sure that you are able to lose stubborn fat as well.
                </p>
                <div className="grid grid-cols-1 gap-6 pt-4">
                  {benefits_2.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-8">
                    <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#EA6490] transition-all shadow-xl active:scale-95 group">
                      Ready to start? Book Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 border-t border-slate-100 bg-white">
          <div className="max-w-[1300px] mx-auto px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Why Choose <span className="text-[#EA6490]">Mesotherapy at Puri Skin Clinic?</span>
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

        {/* SECTION 6: TESTIMONIALS */}
        <section className="py-20 border-t border-slate-100 bg-slate-50/50 rounded-[3rem]">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our  <span className="text-[#EA6490]">Happy Customers</span>
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

        {/* SECTION 7: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose Puri Skin Clinic for All Your  <br /><span className="text-[#EA6490]">Mesotherapy Needs!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Deciding to undergo mesotherapy can prove to be an intimidating task, especially if you have never considered the prospect of undergoing a cosmetic procedure before. However, with the help of mesotherapy, you can make certain that you are able to thoroughly and actively rejuvenate your hair and skin. At Puri Skin Clinic, you can easily ensure that you are able to consult the experts in the field, diagnose the issue, and undergo the proper treatment. If you are looking to undergo mesotherapy, you can opt for us! Our team also ensures that one is able to access an affordable mesotherapy cost in Punjab, so most, if not all, patients can thoroughly access the treatment without any worries.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Appointment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      <FAQAccordion faqs={FAQ_DATA.mesotherapy} title="Frequently Asked Questions" />

    </div>
  );
}
