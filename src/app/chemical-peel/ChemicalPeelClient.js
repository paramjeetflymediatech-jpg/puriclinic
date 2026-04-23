'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaArrowRight,
  FaStar, FaShieldAlt, FaFlask, FaChevronLeft, FaUserMd, FaCalendarAlt, FaSyncAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FAQ_DATA } from '@/constants/constantdata';

export default function ChemicalPeelClient() {
  const sliderImages = [
    "/skin-related/chemical-peels/imgd.avif",
    "/skin-related/chemical-peels/skin1.avif",
    "/skin-related/chemical-peels/v-1.avif"
  ];

  const types = [
    { title: "Superficial Peels", desc: "Target the epidermis to improve mild skin texture issues and fine lines." },
    { title: "Medium Peels", desc: "Reach the middle layer of the skin for addressing deeper wrinkles and uneven tone." },
    { title: "Deep Peels", desc: "Intense treatment for severe skin damage, scarring, and deep-set pigment concerns." }
  ];

  const reasons = [
    { title: "Expert Application", desc: "Our dermatologists ensure precise application of medical-grade solutions.", icon: <FaUserMd /> },
    { title: "Personalised Consultation", desc: "Starting each journey by identifying your specific skin type and needs.", icon: <FaCalendarAlt /> },
    { title: "Safe & Effective", desc: "Strict protocols to ensure maximum safety and clinical effectiveness.", icon: <FaShieldAlt /> },
    { title: "Skin Rejuvenation", desc: "Promoting natural healing and collagen production for lasting results.", icon: <FaSyncAlt /> },
    { title: "Medical Excellence", desc: "Using the highest quality clinical products for all our peeling treatments.", icon: <FaFlask /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full    flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/chemical-peels/5-1.jpg"
         width={2000}
          height={2000}
          className="object-cover object-center"
          alt="Chemical Peel Banner"
          priority
        /> 
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-8 md:py-12 space-y-16">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="">
            <ImageSlider images={sliderImages} aspect="aspect-[6/5]" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Chemical <span className="text-[#EA6490]">Peeling</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
               Are you looking for ways to revitalise your skin? Having youthful and radiant skin can be hard to achieve when you do not know which ways or solutions to look for. However, chemical peeling therapy can be the right solution for you. This highly loved cosmetic procedure has helped many people with various skin concerns, be it uneven skin, fine lines, acne marks, and much more. 
              </p>

              <div className="pt-4 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Understanding <span className="text-[#EA6490]">chemical peeling</span>
                </h3>
                <p>
                 Chemical peeling therapy is a cosmetic procedure that is beneficial in enhancing the skin’s appearance. The treatment is done by applying a chemical solution to the skin. It later helps in exfoliating the skin, and after some time, it peels off. The chemical solution leaves the skin feeling fresher and young-looking from within. 
                </p>
                <p>
               The entire process is effective in getting rid of the dead skin cells and producing new skin cells as well as collagen. This can be beneficial in enhancing the texture of the skin, skin tone, and its overall appearance. Chemical peels can have different strengths. If you are going for a mild peeling option then the downtime is going to be less. Otherwise, high intensity or deep peels will require some weeks to heal. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPES OF PEELS (SIDE-BY-SIDE) */}
        <section className="py-8 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the <span className="text-[#EA6490]">types of chemical peels?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Before gathering all the information related to low-cost chemical peeling in Punjab, there is so much more to know about chemical peels, such as its types: 
                </p>

                <div className="space-y-8">
                  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                    <h4 className="font-bold text-slate-900 text-xl mb-3">Superficial peels</h4>
                    <p className="text-base leading-relaxed">
                    These are considered light peels as they use mild acids, such as AHAs. They are helpful in exfoliating the skin’s outer layer by treating minor issues like uneven skin tone, fine lines, etc. Also, superficial peels are going to require little or sometimes no downtime, and patients can get back to their normal routines within a short span. People having sensitive skin or have never undergone any chemical peel treatment, can opt for superficial peels. 
                    </p>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                    <h4 className="font-bold text-slate-900 text-xl mb-3">Medium peels</h4>
                    <p className="text-base leading-relaxed">
                      Medium peels are known to penetrate deep into the skin, which mainly targets the middle layers. This procedure can help target the major skin issues and involves TCA. It can be helpful in treating pigmentation issues, acne scars, etc. However, the recovery time of the medium peels is considered to be longer as compared to superficial peels. The results of this chemical peel type are highly noticeable and are meant for people who are looking for great skin improvements.
                    </p>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                    <h4 className="font-bold text-slate-900 text-xl mb-3">Deep peels</h4>
                    <p className="text-base leading-relaxed">
                     Deep peels are known as intensive treatment as they get deeper skin layers. There is involvement of strong acids in deep peels, which can be beneficial in treating severe wrinkles, major sun damage, etc. Due to its high intensity peels, long recovery periods are needed and are carried out by professional dermatologists. This procedure is best suited for people who have major skin concerns and are in search of profound and great results. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/6] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
                <Image 
                    src="/skin-related/chemical-peels/skin1.avif" 
                    fill 
                    className="object-cover" 
                    alt="Types of Chemical Peels" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                    <p className="font-bold text-2xl italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>"The right depth for every skin."</p>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BENEFITS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start border-t border-slate-100 pt-8">
          <div className="lg:col-span-1 space-y-10 sticky top-32">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                How can chemical peel treatment <span className="text-[#EA6490]">benefit you?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <p className="text-black font-medium text-lg leading-relaxed">
                There are ample benefits of chemical peel treatment, such as:
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                “My skin texture improved dramatically after just two sessions. The pigmentation from old acne marks is almost gone.”
              </p>
              <p className="font-bold text-[#EA6490] uppercase tracking-widest text-xs">— Priya M., Ludhiana</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-bold mb-6 text-slate-900 text-center" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Book a Consultation</h4>
                <AppointmentForm theme="clinical" />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              {
                title: "Helps in improving the skin texture",
                desc: "Chemical peels are effective in exfoliating the skin. It is beneficial in getting rid of the dead cells and enhances the growth of new and healthy skin. This way, a person can experience smooth and refined skin texture while minimising the roughness and flakiness."
              },
              {
                title: "Effective in reducing fine lines and wrinkles",
                desc: "By enhancing collagen production, chemical peels can be beneficial in minimising fine lines as well as wrinkles. This is the best option for people who wish for a youthful appearance."
              },
              {
                title: "Helps in diminishing acne scars",
                desc: "Chemical peels are also helpful in getting rid of intense acne scars, as there is skin renewal. The damaged skin layers are removed, and new and fresh skin is promoted, which is unblemished."
              },
              {
                title: "Even the skin tone",
                desc: "Chemical peel treatment is beneficial for hyperpigmented skin. It is effective in minimising discoloration, managing uneven skin tone, and dark spots due to acne. With this procedure, a uniform complexion can be achieved."
              },
              {
                title: "Effective in clearing clogged pores",
                desc: "There are different chemical peels that involve ingredients that are helpful in unclogging the pores so that breakouts can be managed. This is effective for people with oil or acne-prone skin."
              },
              {
                title: "Reverses intense sun damage",
                desc: "The sun exposure can cause severe skin damage, leading to pigmentation changes and uneven skin texture. But chemical peels can be helpful in getting rid of damaged skin cells and enhancing healthy skin."
              },
              {
                title: "Enhances the skin’s appearance",
                desc: "Being consistent with chemical peel treatment can allow you to experience healthy and glowing skin. This treatment is not only effective in enhancing the skin’s surface but also works on its overall radiance and rejuvenates the skin."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex gap-6 items-start group hover:border-[#EA6490] hover:bg-white transition-all shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all shrink-0">
                  <FaCheckCircle />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl leading-tight mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PROCEDURE (SIDE-BY-SIDE) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What is the procedure for <span className="text-[#EA6490]">chemical peel treatment?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
                <p className="text-black font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                There are certain steps that are involved in the chemical peel treatment. Understanding these steps can be helpful in getting through the treatment with ease.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                {[
                  {
                    title: "Cleansing the skin",
                    desc: "Before initiating the process, the skin is going to be thoroughly cleansed so that there is no dirt or makeup on it. This is done so that the solution can penetrate properly into the skin."
                  },
                  {
                    title: "Application of a chemical solution",
                    desc: "The next step is to apply the chemical solution with the help of a brush, gauze, or any other object. While completing this step only a few minutes are required."
                  },
                  {
                    title: "Checking the skin response",
                    desc: "After the application of the solution, a dermatologist is going to keep an eye on the skin so that the response to the treatment can be observed. There can be a tingling sensation due to the exfoliation happening on the skin."
                  },
                  {
                    title: "Neutralizing the skin",
                    desc: "Depending on the chemical peels involved in medium or deep peels, there can be a need to neutralise the chemical peel solution. This is done to halt the process so that over-exfoliation does not happen. The neutralising agent is applied to the areas of the treatment."
                  },
                  {
                    title: "Application of soothing products",
                    desc: "After the completion of the peel, soothing products are applied, such as a post-peel solution, etc. They can be beneficial in calming the skin and minimising the discomfort. These products can be helpful with the healing process and offer relief from any kind of irritation."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-[#EA6490] flex items-center justify-center font-bold text-xl shrink-0 group-hover:bg-[#EA6490] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
                <Image 
                  src="/skin-related/chemical-peels/wda.avif" 
                  fill 
                  className="object-cover" 
                  alt="Chemical Peel Procedure" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: REMARKABLE RESULTS */}
        <section className="py-12 border-t border-slate-100 text-center">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Remarkable Results <span className="text-[#EA6490]">That Speak Volumes</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            </div>

            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: '.res-prev',
                  nextEl: '.res-next',
                }}
                pagination={{ clickable: true, el: '.res-pagination' }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!pb-16"
              >
                {[
                  "/skin-related/chemical-peels/skin1.avif",
                  "/skin-related/chemical-peels/v-1.avif",
                  "/skin-related/chemical-peels/wda.avif",
                  "/skin-related/chemical-peels/imgd.avif",
                  "/skin-related/chemical-peels/5-1.jpg"
                ].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group/card"
                    >
                      <Image 
                        src={img} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
                        alt={`Chemical Peel Result ${idx + 1}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <p className="text-white font-bold text-lg italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Clinical Result {idx + 1}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <button className="res-prev w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#EA6490] hover:text-[#EA6490] hover:scale-110 transition-all shadow-sm bg-white cursor-pointer">
                  <FaChevronLeft size={20} />
                </button>
                <div className="res-pagination flex items-center gap-3 min-w-[80px] justify-center"></div>
                <button className="res-next w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#EA6490] hover:text-[#EA6490] hover:scale-110 transition-all shadow-sm bg-white cursor-pointer">
                  <FaChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HAPPY CUSTOMERS */}
        <section className="pt-12 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our <span className="text-[#EA6490]">Happy Customers</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HAPPY_CUSTOMERS.map((item, idx) => (
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
                <p className="text-black text-lg italic font-medium leading-relaxed mb-8">“{item.review}”</p>
                <div>
                    <h4 className="font-bold text-slate-900 text-xl">{item.author}</h4>
                    <p className="text-[#EA6490] font-bold text-sm uppercase tracking-widest mt-1">Ludhiana</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE PURI SKIN CLINIC */}
        <section className="pt-12 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The Puri Skin Clinic <span className="text-[#EA6490]">Advantage</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              Combining medical science with aesthetic artistry for remarkable clinical results.
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

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Start Your Skin <span className="text-[#EA6490]">Rejuvenation Journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Experience the best chemical peel treatment in Ludhiana with personalized medical care. Our team ensures that your procedure is safe, effective, and results-oriented.
              </p>
              <p>
                From gentle refreshing peels to deep resurfacing, we have the expertise to help you achieve your desired skin goals.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Schedule Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 7: FAQS */}
      <FAQAccordion faqs={FAQ_DATA.chemicalPeel} title="Frequently Asked Questions" />

      <style jsx global>{`
        .res-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #EA6490;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .res-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>

    </div>
  );
}


// ─── PEEL SPECIFIC TESTIMONIALS ───
const HAPPY_CUSTOMERS = [
  {
    author: "Rita M",
    review: "The chemical peel treatment at Puri Skin Clinic is simply the best! My skin looks smoother and more radiant. The best dermatologist in Ludhiana made me feel comfortable and informed throughout the process. Highly recommended!",
    rating: 5,
    source: "Google Review",
    createdAt: "2024-03-10"
  },
  {
    author: "Anita Chopra",
    review: "I had an amazing experience with the chemical peel service at Puri Skin Clinic. The results are fantastic, and I noticed a significant improvement in my skin’s texture and tone. They offer the best skin care service in Ludhiana. I’m definitely coming back!",
    rating: 5,
    source: "Google Review",
    createdAt: "2024-02-15"
  },
  {
    author: "Rajesh Rajput",
    review: "Puri Skin Clinic’s chemical peel treatment transformed my skin. The staff was professional and knowledgeable, ensuring a seamless experience. This is hands down the best skincare treatment in Ludhiana. My skin has never looked better!",
    rating: 5,
    source: "Google Review",
    createdAt: "2024-01-20"
  }
];
