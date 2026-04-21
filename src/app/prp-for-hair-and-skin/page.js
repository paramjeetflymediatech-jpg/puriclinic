'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaFlask, FaMagic
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function PRPPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-clip" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── BESPOKE HERO: PRP ── */}
      <section className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/hair copy/prp/PRP.jpg"
          fill
          className="object-cover object-center"
          alt="PRP Treatment Banner"
          priority
        />
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 space-y-20 md:space-y-28">

        {/* ── INTRODUCTION SECTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Slider Col */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[5/4]">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
              >
                {[
                  "/hair copy/prp/prpt.jpg",
                  "/hair copy/prp/prpt.jpg",
                  "/hair copy/prp/ssf.jpg"
                ].map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={src}
                      fill
                      className="object-cover"
                      alt={`PRP Treatment ${idx + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Text Col */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Revitalise Your Hair and Skin with <br/><span className="text-[#EA6490]">PRP Treatment!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mb-8 rounded-full"></div>
            <p className=" text-black font-medium leading-[1.8] mb-10">
              Having bright skin and luscious hair is often considered a sign of a healthy body and mind. However, with age and constant interaction with the elements of pollution, one’s skin and hair are often impacted. One needs to make sure that you are able to thoroughly and effectively address and resolve the issues you are suffering from. PRP treatment offers the possibility to make sure that you are able to address the problems, including wrinkles, skin texture, and one’s hair growth. With Puri Skin Clinic, you can make certain that you are able to thoroughly and effectively ensure that you are able to seek personalised treatment options. Even if you are worried about PRP treatment costs in Ludhiana, you need not be! At Puri Skin Clinic, you can make certain that you are able to thoroughly and effectively undergo PRP treatment without spending too much money.
            </p>
          </div>
        </section>

        {/* ── 2. OVERVIEW SECTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-10 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What is <span className="text-[#EA6490]">PRP Treatment?</span>
            </h2>
            <div className="text-[#333333] leading-[1.8] text-[15px] md:text-base font-medium whitespace-pre-wrap max-w-none">
              PRP therapy thoroughly offers ways to enhance the possibility of skin texture and hair growth in an extensive manner. The treatment procedure thoroughly implies the possibility of harnessing our body’s natural healing ability to enhance a person’s skin as well as their hair growth in an extensive and essential manner. If you have opted to undergo this procedure to improve your skin, you can make certain that you are able to reduce the number of wrinkles on your skin as well as improve the texture. If you have opted to undergo the procedure for your hair, you can make certain that you are able to stimulate hair follicles and enhance the scope of hair growth and density on your body, preferably the scalp.
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/hair copy/prp/haieedd.jpg"
              fill
              className="object-cover"
              alt="PRP Treatment Overview"
            />
          </div>
        </section>

        {/* ── 3. THE PROCEDURE STEPS ── */}
        <section className="py-8 md:py-10 border-t border-slate-100">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              How Does <span className="text-[#EA6490]">PRP Treatment Work?</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto mt-6 rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Drawing of Blood", description: "The first step is to make sure that you are able to provide blood for the treatment. PRP refers to the platelet-rich plasma present in the blood." },
              { title: "Centrifugation Process", description: "The collected blood sample is placed in a centrifuge machine that spins at high speed to separate plasma from the rest of the components." },
              { title: "Injection", description: "Your practitioners will inject the plasma into the location of your concern, either the scalp to promote hair growth or skin to address wrinkles." },
              { title: "Recovery", description: "The last step is to ensure that one can thoroughly and actively make sure that you are able to recover from the treatment to see the difference." }
            ].map((tr, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 text-[#EA6490] flex items-center justify-center shrink-0 shadow-lg mb-6 text-2xl">
                  <FaFlask />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">{tr.title}</h4>
                  <p className="text-base text-black leading-relaxed font-medium">{tr.description}</p>
            </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 4. BENEFITS SECTION ── */}
        <section className="pt-16 border-t border-slate-100">
          {/* Section Heading & Intro */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What are the Benefits of PRP Treatment?
                </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              If you have never considered the prospect of undergoing PRP treatment, you may find yourself a bit hesitant to undergo the procedure. In this section, we aim to detail the benefits one can strive to achieve by undergoing PRP treatment. The following are some of the most important benefits you can gain by undergoing PRP treatment with the experts of Puri Skin Clinic:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4] sticky top-32">
                <Image
                  src="/hair copy/prp/da_0005_IMG_9170.jpg"
                  fill
                  className="object-cover"
                  alt="Benefits of PRP Treatment"
                />
                </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-col space-y-6">
                {[
                  { title: "Stimulate Hair Growth", desc: "With the help of the PRP treatment procedure, you can make certain that you are able to stimulate hair growth in an extensive manner." },
                  { title: "Avoid Hair Thinning", desc: "One can also avoid facing the issue of hair thinning with this procedure." },
                  { title: "Natural", desc: "The treatment option is thoroughly and extensively natural as it employs the body’s natural healing process." },
                  { title: "Safe", desc: "This option is also extensively safe, all things considered." },
                  { title: "Improves Hair Quality", desc: "PRP treatment can also lead to an improvement in hair quality." },
                  { title: "No Need for Surgery", desc: "One might also want to undergo this procedure in order to skip the possibility of undergoing a surgical procedure." },
                  { title: "Minimally Invasive Procedure", desc: "PRP treatment is also a minimally invasive procedure, all things considered." },
                  { title: "Wrinkles and Fine Lines", desc: "If you have wrinkles or fine lines, you can undergo this procedure in order to ensure that you can address them in an essential manner." },
                  { title: "Skin Texture", desc: "One can also extensively improve their skin texture by undergoing this treatment." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#EA6490]/30 hover:shadow-xl transition-all"
                    >
                    <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 text-[#EA6490] flex items-center justify-center shrink-0 shadow-sm text-2xl">
                            <FaCheckCircle />
                        </div>
                        <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US SECTION ── */}
        <section className="pt-16 border-t border-slate-100">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Why Choose <span className="text-[#EA6490]">PRP Treatment</span> at Puri Skin Clinic?
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto rounded-full mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Dermatologist", icon: <FaStar /> },
              { title: "Advanced Techniques", icon: <FaFlask /> },
              { title: "Personalized Care", icon: <FaShieldAlt /> },
              { title: "Minimally Invasive", icon: <FaMagic /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-white text-[#EA6490] flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 5. RESULTS SLIDER ── */}
        <section className="pt-16 border-t border-slate-100">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Remarkable Results That <span className="text-[#EA6490]">Speak Volumes</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Witness the transformative power of PRP therapy. Take a look at some of the incredible improvements our patients have achieved through their personalized treatment plans at Puri Skin Clinic.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="w-full pb-16"
            >
              {[
                "/hair copy/prp/da_0003_HAIR-PRP.jpg",
                "/hair copy/prp/da_0004_IMG_9169.jpg",
                "/hair copy/prp/PRfP.jpg",
                "/hair copy/prp/erds.jpg",
              ].map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100">
                        <Image
                            src={src}
                            fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      alt={`PRP Treatment Result ${idx + 1}`}
                        />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>

        {/* ── TESTIMONIALS SECTION ── */}
        <section className="pt-16 border-t border-slate-100">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What Our <span className="text-[#EA6490]">Patients Say</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto rounded-full mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Simranpreet Kaur",
                location: "Chandigarh",
                review: "“I went for PRP therapy to rejuvenate my skin and I’m thrilled with the results. My skin looks brighter and more youthful. The team at Puri Skin Clinic took great care of me. I’m very happy with the experience!”"
              },
              {
                name: "Gurpreet Kaur",
                location: "Jagraon, Punjab",
                review: "“I had PRP therapy for hair loss at Puri Skin Clinic and the results are fantastic. My hair feels thicker, and the procedure was much less uncomfortable than I expected. Dr. Puri and his team provided excellent care throughout.”"
              },
              {
                name: "Sandeep Malhotra",
                location: "Ludhiana",
                review: "“The PRP treatment I received at Puri Skin Clinic really made a difference. My hair has seen noticeable improvement, and the process was smooth and effective. Great service and professional staff!”"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                <div className="flex text-[#EA6490] text-lg mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic mb-8 flex-grow">
                  {item.review}
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.location}</p>
            </div>
            </div>
            ))}
          </div>
        </section>

      </div>

       {/* ── 6. FOOTER CTA ── */}
       <section className="bg-white py-24 mt-10 px-6 border-t-[8px] border-[#EA6490]">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 mb-6 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
               Choose Puri Skin Clinic for PRP Treatment Possibilities!
             </h2>
             <div className="w-16 h-1 bg-[#EA6490] rounded-full mb-8"></div>
             <p className="text-lg text-slate-600 font-medium leading-[1.8]">
               If you want to ensure that you can thoroughly and extensively address any skin and hair concerns, you can do so with the help of PRP treatment possibilities. You can make sure that you are able to do so at Puri Skin Clinic. Book an appointment with our clinic, you can make sure that you can ask for a consultation, access personalised treatment options, and undergo the recommended procedure with our experts. If you are concerned about PRP treatment cost in Punjab, you do not need to worry about it at all! Undergo PRP treatment and address any and all concerns of skin and hair with the experts of Puri Skin Clinic, and ensure that you can thoroughly and effectively resolve the issues of hair growth, wrinkles, as well as skin texture.
             </p>
           </div>
           <div className="flex justify-center lg:justify-end">
             <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center shadow-2xl max-w-sm w-full">
               <div className="w-20 h-20 bg-[#EA6490] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                 <FaStethoscope />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-slate-900">Start Your Journey</h3>
               <p className="text-slate-600 mb-8 font-medium">Book a consultation with our experts to discuss your personalized PRP treatment plan.</p>
               <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-[#EA6490] transition-all shadow-xl active:scale-95 w-full justify-center">
                 Book Appointment <FaArrowRight />
               </Link>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
}
