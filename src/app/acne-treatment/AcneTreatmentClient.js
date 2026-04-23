'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight,
  FaMagic, FaRegLightbulb, FaUserMd, FaSyncAlt, FaChevronLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FAQ_DATA } from '@/constants/constantdata';

export default function AcneTreatmentClient() {
  const sliderImages = [
    "/acne/ADX.avif",
    "/acne/one.avif",
    "/acne/sef.avif", 
  ];
  const remarkableImages = [
    "/acne/swsw_0000_ACNE-3.avif",
    "/acne/swsw_0001_ACNE-4.avif",
    "/acne/swsw_0012_ACNE-2.avif",
    "/acne/swsw_0005_ACNE-SCARS-3.avif",
    "/acne/swsw_0006_ACNE-SCARS.avif",
    "/acne/swsw_0007_ACNE.avif",
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full    flex items-center justify-center overflow-hidden">
        <Image
          src="/acne/11.jpg"
          width={2000}
          height={2000}
          className="object-cover object-center"
          alt="Acne Treatment Banner"
          priority

        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-8 md:py-12 space-y-16">

        {/* SECTION 1: INTRODUCTION (IMAGE SLIDER ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
             <ImageSlider images={sliderImages} aspect="aspect-[3/2]  " />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                What is <span className="text-[#EA6490]">acne?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                The most common skin concern that people face across the globe is acne. Many people are unable to confront the issue of normal or severe acne. It is considered a skin condition where the follicles get clogged with sebum or the skin produces oil or dead skin cells. Acne mostly leads to blackheads, whiteheads, papules, cysts, and various other forms. It can be found mostly on the face, shoulders, back, etc.
              </p>
              <p>
                Not many people know, but acne vulgaris is the common acne type and can show mild to moderate signs. However, if it is left unchecked, then it can result in deep scars and even hyperpigmentation, which can be hard to deal with. All of it can be hard to deal with and can lower your confidence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CAUSES (SIDE-BY-SIDE) */}
        <section className="py-12 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How can <span className="text-[#EA6490]">acne be caused?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Acne can be caused when the sebaceous glands of the skin produce excessive sebum. The excessive sebum gets mixed up with dead skin cells and skin bacteria, clogging the pores. There are various reasons behind the production of excessive sebum, such as:
                </p>
                
                <div className="space-y-8 pt-4">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-[#EA6490] group-hover:text-white transition-all">1</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">Hormonal changes</h4>
                      <p className="text-slate-600 leading-relaxed">Hormonal fluctuations are common in teenagers. This can result in the sebaceous glands to get very large. Later on it can result in extreme sebum production and people can face serious acne.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-[#EA6490] group-hover:text-white transition-all">2</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">Growth of bacteria</h4>
                      <p className="text-slate-600 leading-relaxed">Propionibacterium acnes is known to be a bacterium that appears due to clogged pores. This bacterium results in inflammation and then acne. When one pimple pops up, the bacteria gets spread to the entire skin, leading to an acne breakout.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-[#EA6490] group-hover:text-white transition-all">3</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">Genetic issues</h4>
                      <p className="text-slate-600 leading-relaxed">Genetics plays a major role in deciding the severity as well as the frequency of the breakouts. If there is a history of acne in the family, then there is a possibility of a predisposed acne issue.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-[#EA6490] group-hover:text-white transition-all">4</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">Diet and lifestyle</h4>
                      <p className="text-slate-600 leading-relaxed">Not many people know, but dietary situations like high glycemic index foods can result in showing acne symptoms. The high rise in insulin can result in oily skin as well as acne.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image 
                src="/acne/skin1.avif" 
                fill 
                className="object-cover" 
                alt="Causes of Acne" 
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: TYPES OF ACNE (FULL-WIDTH GRID) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Understanding <span className="text-[#EA6490]">acne types</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              <p className="text-black font-medium text-lg max-w-5xl mx-auto leading-relaxed text-center">
                Depending on the causes, different kinds of acne can appear on the skin. This can even help in getting the right acne treatment and handling the severity of the acne. Also, it can help you understand the acne scar treatment cost in Ludhiana. The common acne types are listed below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                { 
                  title: "Comedonal Acne", 
                  desc: "This acne type is considered to be non-inflammatory. It occurs when pores get clogged due to excessive oil, bacteria, or dead skin cells failing to shed correctly.", 
                  icon: <FaCheckCircle />,
                  isCategory: true
                },
                { 
                  title: "Whiteheads", 
                  desc: "Closed comedones that happen when pores are deeply clogged. They appear white or skin-colored and should never be popped to avoid permanent scarring.", 
                  icon: <FaSyncAlt /> 
                },
                { 
                  title: "Blackheads", 
                  desc: "Open comedones where the pore remains open to air, causing melanin to oxidize and turn black. These can lead to scarring if not handled professionally.", 
                  icon: <FaSyncAlt /> 
                },
                { 
                  title: "Inflammatory Acne", 
                  desc: "Commonly known as pimples, these are harder to deal with and are characterized by various patterns of breakouts across the face and body.", 
                  icon: <FaStethoscope />,
                  isCategory: true
                },
                { 
                  title: "Papules", 
                  desc: "Tiny red bumps formed when oil, skin cells, and bacteria mix and block a pore, causing the infected contents to spill out into inflamed lesions.", 
                  icon: <FaRegLightbulb /> 
                },
                { 
                  title: "Pustules", 
                  desc: "Papules that involve pus, appearing as bulging bumps with white centers and inflamed red, violet, or brown surrounding skin.", 
                  icon: <FaRegLightbulb /> 
                },
                { 
                  title: "Nodulocystic Acne", 
                  desc: "An extreme form of acne that appears deep in the skin. These breakouts are extremely painful and carry a high risk of permanent scarring.", 
                  icon: <FaMagic />,
                  isCategory: true
                },
                { 
                  title: "Nodules", 
                  desc: "Flesh-colored or red/brown bumps larger than papules. They are deep within the skin, hard to touch, and do not contain pus.", 
                  icon: <FaMagic /> 
                },
                { 
                  title: "Cysts", 
                  desc: "Large, pus-filled bumps deep in the skin that are soft to touch but highly painful and inflamed. Bursting them can spread inflammation.", 
                  icon: <FaMagic /> 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#EA6490] transition-all h-full group flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed font-medium text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CLINICAL SOLUTIONS (ROW THEN GRID) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What is the right way to <span className="text-[#EA6490]">get acne treatment?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg leading-relaxed">
                  The initial step is to get a proper diagnosis. It is essential to consult a dermat to know about your skin’ health. This way, you can understand the severity of the condition and get the right treatment course. Later, depending on the symptoms and causes of acne, the treatment can be tailored, such as:
                </p>
              </div>

              <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image 
                  src="/acne/rff.avif" 
                  fill 
                  className="object-cover" 
                  alt="Professional Acne Treatment Overview" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Topical acne treatments", 
                  desc: "This is the initial acne defense step that you can take. There are different treatments involved in it, such as salicylic acid, glycolic acid, benzoyl peroxide, and even retinoids.", 
                  icon: <FaRegLightbulb /> 
                },
                { 
                  title: "Natural remedies", 
                  desc: "There are various natural skin remedies that can be helpful in treating acne. You can opt for home-made masks, witch hazel, tea tree oil, or green tea extract which can be helpful with acne.", 
                  icon: <FaMagic /> 
                },
                { 
                  title: "Professional acne treatments", 
                  desc: "If you are facing extreme acne, seek professional help to avoid intense flare-ups. A professional dermatologist will use oral medications, chemical peels, and laser therapy.", 
                  icon: <FaUserMd /> 
                }
              ].map((solution, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col items-center text-center space-y-6 group hover:border-[#EA6490] hover:shadow-2xl transition-all shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-3">{solution.title}</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 5: REMARKABLE RESULTS (CAROUSEL) */}
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
                {remarkableImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group/card"
                    >
                      <Image 
                        src={img} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
                        alt={`Acne Result ${idx + 1}`} 
                      />
                    
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

        {/* SECTION 6: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose <span className="text-[#EA6490]">Puri Skin Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                A clinical approach is always required when you are unable to treat your acne on your own. Choosing Puri Skin Clinic, the best acne doctor in Punjab, will allow you to get a professional treatment plan with expert diagnosis as well as complete acne management. We follow advanced therapies and personalized treatment plans for every individual. Our comprehensive guide will allow you to easily deal with active acne as well as post-inflammatory issues. With us, you can restore your skin while enhancing your lost confidence with complete skin clarity.
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
      {/* SECTION 7: FAQS */}
      <FAQAccordion faqs={FAQ_DATA.acne} title="Frequently Asked Questions" />

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #EA6490;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>

    </div>
  );
}

