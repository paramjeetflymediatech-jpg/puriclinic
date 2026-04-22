'use client';

import React from 'react';
import { FAQ_DATA } from '@/constants/constantdata';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';

export default function FacialRejuvenationClient() {

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/facial-rejuvenation/Facial-Rejuvenation.jpg"
          fill
          className="object-cover object-center"
          alt="Facial Rejuvenation Banner"
          priority
        />
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">
        {/* SECTION 1: INTRODUCTION (IMAGE SLIDER ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/facial-rejuvenation/s.avif"
              fill
              className='object-cover'
              alt="Facial Rejuvenation Clinical Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Enhance Your Skin with <br /><span className="text-[#EA6490]">Facial Rejuvenation Surgery!</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Having a <strong>dull face</strong> can lead to a lot of issues with self-confidence and self-esteem. One might find themselves shying away from social gatherings and get-togethers. This is particularly true when our society judges us on the basis of our appearance. Not having the right <strong>glow of one’s skin</strong> can thoroughly harm a person’s social standing effectively.
              </p>
              <p>
                With the help of experts at <strong>Puri Skin Clinic</strong>, you can make certain that you are able to undergo a consultation and figure out the way you can enhance or address your specific skin-related issues. By undergoing a <strong>facial rejuvenation surgery in Ludhiana</strong>, you can make certain that you are able to address any and all concerns of your skin, including but not limited to <strong>acne scarring, hyperpigmentation, fine lines, and wrinkles</strong>.
              </p>
              <p>
                One can also <strong>enhance their skin texture</strong> as a result of this procedure. With Puri Skin Clinic, you can make certain that you are able to address any and all skin problems without any worries.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2:What is Facial Rejuvenation Surgery?) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is <span className="text-[#EA6490]">Facial Rejuvenation Surgery?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Facial rejuvenation surgery encompasses a number of surgical and non-surgical procedures in their entirety. One can thoroughly and effectively ensure the possibility of undergoing these procedures to address several concerns of a tired, dull, and aging skin.
                </p>
                <p>
                  From acne scarring to pigmentation, you can easily and effectively enhance the possibility of resolving any and all skin concerns. This range of procedures aims to ensure that one can thoroughly and effectively address problems such as fine lines, wrinkles, skin sagging, and volume loss without any complications.
                </p>
                <p>
                  These procedures are designed to ensure that you can thoroughly receive a restored and youthful appearance for your face. At Puri Skin Clinic, we focus on delivering natural-looking results that enhance your unique features.
                </p>
                <div className="p-8 rounded-3xl bg-[#EA6490]/5 border border-[#EA6490]/20">
                  <p className="text-slate-900 font-bold italic">
                    "Rediscover your youthful radiance with our personalized facial rejuvenation programs at Puri Skin Clinic, designed to bring back your skin's natural glow."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 lg:order-2">
              <Image
                src="/facial-rejuvenation/Untitled-1-1.avif"
                fill
                className="object-cover"
                alt="Professional Facial Rejuvenation"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW SURGERY WORKS (CENTERED GRID) */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How Does <span className="text-[#EA6490]">Facial Rejuvenation Surgery Work?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed">
                Once one has been recommended to undergo a facial rejuvenation surgery procedure, it can be a daunting experience for several reasons. Perhaps one of the reasons why a person might hesitate is being unaware of the process itself. It is important to note that this procedure involves several other methods, including <strong>surgical as well as non-surgical treatment options</strong>.
              </p>
            </div>

            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Surgical Treatment</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Face Lift", desc: "With this procedure, you can make sure that you are able to get a face lift.", icon: <FaUserMd /> },
                  { title: "Brow Lift", desc: "This procedure ensures that you can get your desired brow lift effectively.", icon: <FaStar /> },
                  { title: "Eyelid Surgery", desc: "If there are any issues pertaining to your eyelids, this procedure will help you resolve them.", icon: <FaMagic /> },
                  { title: "Neck Lift", desc: "If you have skin sagging in the area of your neck, you can make sure to undergo this treatment possibility.", icon: <FaShieldAlt /> },
                  { title: "Fat Grafting", desc: "If you have too much fat in and around your face, you can also easily address it using this procedure.", icon: <FaRegLightbulb /> },
                  { title: "Nose Surgery", desc: "Furthermore, if you do not like the shape of your nose or you have trouble breathing, you can undergo this procedure to address the issue.", icon: <FaStethoscope /> }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Facial Rejuvenation Surgery Work */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Non-Surgical <span className="text-[#EA6490]">Rejuvenation Options</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed">
                The treatment procedure also includes several <strong>non-surgical treatment options</strong> that are often undertaken by the patients; some of these include treatments that offer minimal downtime while delivering exceptional anti-aging results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Chemical Peels",
                  desc: "With this procedure, you can make sure that you are able to exfoliate the skin, remove any and all instances of dullness, and reduce the impact of pigmentation on your skin.",
                  icon: <FaHandSparkles />
                },
                {
                  title: "Laser Resurfacing",
                  desc: "With the help of this procedure, you can make sure that you are able to thoroughly and effectively remove layers of damaged skin and trigger collagen production.",
                  icon: <FaSyncAlt />
                },
                {
                  title: "Fillers",
                  desc: "With fillers, you can ensure to add volume in your skin and make sure that you are able to smooth out any and all instances of wrinkles or folds.",
                  icon: <FaMagic />
                },
                {
                  title: "Botox",
                  desc: "You can address dynamic wrinkles such as frown lines and crow’s feet with the help of Botox.",
                  icon: <FaShieldAlt />
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#EA6490]/30 hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 text-[#EA6490] flex items-center justify-center text-3xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 text-2xl">{item.title}</h4>
                    <p className="text-slate-600 leading-[1.8] font-medium text-lg italic">
                      "{item.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Non-Surgical Rejuvenation Options) */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the <span className="text-[#EA6490]">Benefits of Facial Rejuvenation?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed">
                If you have never thought of undergoing a facial rejuvenation surgery procedure before, it can seem intimidating in all regards. One might want to know and understand the different benefits one can gain from undergoing facial rejuvenation surgery in a thorough and effective manner. The following are some of the benefits you can attain by undergoing a facial rejuvenation surgery procedure:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                { title: "Reduce Fine Lines & Wrinkles", desc: "With the help of this procedure, you can make certain that you are able to reduce the number of fine lines and wrinkles on your skin.", icon: <FaCheckCircle /> },
                { title: "Lift Sagging Skin", desc: "You can also easily ensure that you are able to lift up your sagging skin in a thorough manner.", icon: <FaSyncAlt /> },
                { title: "Enhance Facial Contours", desc: "A facial rejuvenation procedure can also thoroughly enhance a person’s facial contours.", icon: <FaMagic /> },
                { title: "Address Multiple Areas", desc: "One can also thoroughly address several areas of aging in a single go without any worries.", icon: <FaUserMd /> },
                { title: "Build Self-Confidence", desc: "The procedure also helps in making certain that one’s self-confidence is thoroughly built and achieved in an effective manner.", icon: <FaStar /> },
                { title: "Social Interaction Comfort", desc: "It can also help in making sure that you remain comfortable during social interactions.", icon: <FaShieldAlt /> },
                { title: "Total Rejuvenated Appearance", desc: "The procedure thoroughly allows a person to have and receive an all-around rejuvenated appearance.", icon: <FaRegLightbulb /> },
                { title: "Long-Lasting Results", desc: "One can attain results that last a long time in a thorough and effective manner.", icon: <FaHandSparkles /> },
                { title: "Efficient Transformation", desc: "By opting for this procedure, you can make certain that you are able to get the desired results with the minimum amount of procedures.", icon: <FaStethoscope /> },
                { title: "Reduced Recovery Time", desc: "By effectively combining procedures, you can also make sure that you are able to have a reduced recovery time.", icon: <FaCalendarAlt /> },
                { title: "Boost Collagen & Elastin", desc: "One can also thoroughly and significantly make sure that you are able to boost collagen and elastin production in your body.", icon: <FaSyncAlt /> }
              ].map((benefit, idx) => (
                <div key={idx} className="group p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-[#EA6490]/20 transition-all flex gap-5 items-start shadow-sm hover:shadow-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 text-[#EA6490] flex items-center justify-center text-lg group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Benefits of Facial Rejuvenation */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Start Your Facial <br /><span className="text-[#EA6490]">Rejuvenation Journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Experience the best clinical facial rejuvenation program in Ludhiana. Our expert team is dedicated to providing symmetrical enhancement and natural-looking results.
              </p>
              <p>
                Every face is unique, and our clinical protocols are designed to respect that individuality while delivering effective anti-aging results.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Assessment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
    {/* SECTION 7: OPT PURI SKIN CLINIC ── */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Opt <span className="text-[#EA6490]">Puri Skin Clinic</span> for Your Facial Rejuvenation Surgery!
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Deciding to undergo a facial rejuvenation surgery is not an easy decision. One cannot allow anyone and everyone to operate on their face. There is a lot of skill and experience required to satisfy one’s anxieties. With the help of experts at <strong>Puri Skin Clinic</strong>, you can make certain that you are able to undergo a <strong>facial rejuvenation surgery in Ludhiana</strong> without any worries or significant concerns.
              </p>
              <p>
                <strong>Dr Gurinderjit Singh Puri</strong> carries decades worth of experience under his belt. Therefore, any patient who undergoes this surgery procedure should not worry – your care is in capable hands. Our clinic also excels at providing personalised recommendations for each case. Consult our experts today and undergo a facial rejuvenation surgery without any worries!
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
      {/* SECTION 8: FAQS */}
      <FAQAccordion faqs={FAQ_DATA.facialRejuvenation} title="Frequently Asked Questions" />

    </div>
  );
}

