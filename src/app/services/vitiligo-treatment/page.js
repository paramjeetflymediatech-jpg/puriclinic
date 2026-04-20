'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaArrowRight,
  FaStar, FaShieldAlt, FaChevronLeft, FaUserMd, FaCalendarAlt, FaSyncAlt, FaBolt, FaStethoscope, FaMagic, FaRegLightbulb,
  FaBullseye, FaSlash, FaSmile, FaWaveSquare
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VitiligoTreatmentPage() {
  const sliderImages = [
    "/vitiligo/da_0000_HAIR-3-1.avif",
    "/vitiligo/da_0000_HAIR-3_0000_VITILIGO-2.avif",
    "/vitiligo/da_0000_HAIR-3_0001_VITILIGO-3.avif",
    "/vitiligo/da_0000_HAIR-3_0002_VITILIGO-5.avif",
    "/vitiligo/da_0000_HAIR-3_0003_VITILIGO-6.avif"
  ];

  const classifications = [
    { title: "Non-segmental vitiligo", desc: "This is a very common form that appears on both sides of the body and in a symmetrical pattern.", icon: <FaWaveSquare /> },
    { title: "Segmental vitiligo", desc: "This can happen at an early age and it can be on the body’s one side.", icon: <FaSlash /> },
    { title: "Focal vitiligo", desc: "Focal vitiligo is limited to one or more areas. This type does not spread over the years.", icon: <FaBullseye /> },
    { title: "Lip and mucosal vitiligo", desc: "This vitiligo type can appear on the lips, the inner parts of the mouth, or can also happen inside the parts of the nose.", icon: <FaSmile /> }
  ];

  const pathways = [
    { title: "Topical medications", desc: "Corticosteroid creams and other inhibitors can be helpful in minimising inflammation and lead to repigmentation. This can happen during the early stages or when there are small patches.", icon: <FaRegLightbulb /> },
    { title: "Light therapy", desc: "Opting for narrowband UVB therapy can be highly effective. It exposes the skin to ultraviolet light, which is controlled and helps with melanin production.", icon: <FaBolt /> },
    { title: "Excimer laser", desc: "This treatment is meant for targeted areas in localised vitiligo. The focused beam of UVB light can be beneficial in enhancing pigmentation.", icon: <FaStethoscope /> },
    { title: "Surgical treatments", desc: "If there is vitiligo that has not changed for more than a year, opting for a skin grafting can be the best option. This treatment is suggested when no other treatment is working.", icon: <FaMagic /> },
    { title: "Lip vitiligo treatment", desc: "It can be difficult to treat lip vitiligo. Treatments involving topical medications or laser therapy can be helpful to show the results. However, it can be time-consuming, but the results can vary from one person to another.", icon: <FaSmile /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/vitiligo/13.jpg"
          fill
          className="object-cover object-center"
          alt="Vitiligo Treatment Banner"
          priority
        /> 
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-8 md:py-12 space-y-16">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <Image 
              src="/vitiligo/dfs.avif" 
              fill 
              className="object-cover" 
              alt="Vitiligo Treatment Overview" 
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Know everything about <span className="text-[#EA6490]">vitiligo and its treatment</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Vitiligo is considered to be a skin condition. In this condition, the skin loses its colour and turns white. The situation occurs when the cells producing melanin do not work or are destroyed. However, this is not a harmful or contagious skin condition, but its overall appearance can affect the confidence and emotional health of a person. People are not fully aware of this skin condition and its treatment. With proper care and support, informed treatment can be opted for.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONDITION DESCRIPTION (SIDE-BY-SIDE) */}
        <section className="py-8 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Understanding the <span className="text-[#EA6490]">vitiligo skin condition</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p>
                  This is a long-term skin condition. In this condition there are skin patches and the natural color of the skin can be lost. It mainly happens when melanocytes, which are known to be cells held responsible for melanin production, suddenly stop functioning or get destroyed. Melanin is highly responsible for offering the colour to the skin, hair, and eyes. When these cells are not present, then the patches of white or pale colour can appear on the skin.
                </p>
                <p>
                  This skin condition can appear on any body part, such as the face, hands, lips, legs, etc. There are some cases where vitiligo can affect the scalp, which can cause hair to be grey. This condition can remain stable for some time, but can also spread with passing time.
                </p>
              </div>
            </div>

            <div className="relative aspect-[2/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
                <Image 
                    src="/vitiligo/a-1.avif" 
                    fill 
                    className="object-cover" 
                    alt="Vitiligo Condition" 
                />
                
            </div>
          </div>
        </section>

        {/* SECTION 3: VITILIGO TYPES (FULL-WIDTH) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Know about the <span className="text-[#EA6490]">types of vitiligo</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p className="text-center">
                  There are different vitiligo types, such as:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {classifications.map((item, idx) => (
                    <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full group">
                      <div className="w-14 h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center mb-6 text-2xl shadow-sm transition-transform group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-black font-medium text-lg leading-[1.8] max-w-3xl mx-auto pt-4">
                  No wonder the pattern or pigment loss in one person can be different from the other person. But it is essential to know its nature so that you can start working on its proper care and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CAUSES AND RISK FACTORS (FULL-WIDTH) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the causes and <span className="text-[#EA6490]">risk factors involved with vitiligo?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p className="text-center">
                  The causes of vitiligo are not completely known, but it is believed that the condition is linked with the amalgamation of factors like genetic, autoimmune, and environmental factors. During this condition, the immune system of the body might attack or destroy melanin-producing cells, which further leads to skin pigment loss.
                </p>

                <div className="space-y-8 pt-4">
                  <p className="font-bold text-xl text-slate-900 text-center">Here are some factors that can lead to vitiligo development:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Autoimmune conditions", desc: "People facing autoimmune diseases like thyroid issues, type 1 diabetes, etc., are at higher risk of developing vitiligo." },
                      { title: "Genetics", desc: "If there is a family history of vitiligo or any kind of autoimmune disease, then it can enhance the risk. However, it is not essential that people with genetic links are going to develop or face vitiligo." },
                      { title: "Skin trauma", desc: "Any kind of cuts, sunburns, or chemical exposure can lead to vitiligo in many individuals." },
                      { title: "Emotional stress", desc: "This is not a direct cause, but facing prolonged stress can make the existing vitiligo worse. Also, it can contribute to its onset in people who are at risk." },
                      { title: "Oxidative stress", desc: "Any kind of imbalance in the ability of the body to handle free radicals can also lead to the destruction of the melanocytes." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all flex flex-col group h-full">
                        <div className="w-2 h-2 rounded-full bg-[#EA6490] mb-4 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                          <p className="text-base text-slate-600 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-8 border-t border-slate-100 text-center max-w-3xl mx-auto">
                  It is essential to note that vitiligo does not happen because of poor health or any kind of infection. Also, it is not going to spread via physical contact. It can be faced by people who have different skin tones and can be more visible in people having dark skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SIGNS AND SYMPTOMS (SIDE-BY-SIDE) */}
        <section className="py-12 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-2 lg:order-1">
                <Image 
                    src="/vitiligo/da_0000_HAIR-3_0002_VITILIGO-5.avif" 
                    fill 
                    className="object-cover" 
                    alt="Vitiligo Clinical Symptoms" 
                />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the signs and <span className="text-[#EA6490]">symptoms of vitiligo?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Vitiligo can start to appear with small or pale spots and become lighter and turn white. The patches are going to be of uneven shape and can also have different sizes. With passing time, the vitiligo can remain stable, or there is also a possibility that it is going to spread to other body parts.
                </p>

                <div className="space-y-6 pt-4">
                  <p className="font-bold text-xl text-slate-900">The common signs of vitiligo are:</p>
                  {[
                    "White and depigmented skin patches, which are mainly sun-exposed, like arms, face, etc.",
                    "Vitiligo can be seen around the lips, mouth, fingertips, etc.",
                    "Early grey scalp hair, beard, eyebrows, etc.",
                    "Mucous membranes can even face colour loss, which can be inside the mouth and nose."
                  ].map((symptom, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                        <FaCheckCircle className="text-lg" />
                      </div>
                      <p className="text-base text-slate-600 leading-relaxed font-medium pt-1">
                        {symptom}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="pt-6 border-t border-slate-100 italic text-slate-500">
                  The vitiligo is painless and does not cause itching, but it can appear to be distressing. Its progression can stop with time, but in others, it may spread with time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TREATMENT OPTIONS (FULL-WIDTH) */}
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What treatments can be <span className="text-[#EA6490]">opted for vitiligo?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p className="text-center max-w-4xl mx-auto">
                  The treatment of vitiligo can be opted for depending on the extent of pigment loss, affected skin areas, and the progression of it. It is not possible to reverse vitiligo completely, but opting for the right treatment can help restore the skin colour and manage it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pathways.map((path, idx) => (
                    <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all flex flex-col group h-full">
                      <div className="w-14 h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center mb-6 text-2xl shadow-sm transition-transform group-hover:rotate-6 group-hover:bg-[#EA6490] group-hover:text-white">
                        {path.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 text-xl mb-3">{path.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {path.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHEN TO CONSULT (SIDE-BY-SIDE) */}
        <section className="py-12 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
                <Image 
                    src="/vitiligo/dfs.avif" 
                    fill 
                    className="object-cover" 
                    alt="Consulting a Vitiligo Doctor" 
                />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  When is the right time to <span className="text-[#EA6490]">consult a doctor?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
                <p>
                  Vitiligo is not considered a life-threatening condition, but medical attention is needed when the patches are spreading. Proper and early diagnosis can help in getting the best outcome.
                </p>

                <div className="space-y-6 pt-4">
                  <p className="font-bold text-xl text-slate-900">Here are some points defining the right time to consult a vitiligo doctor:</p>
                  {[
                    "The white patches are enhanced in size or number.",
                    "Vitiligo can be seen on visible areas like the face, hands, etc., which can lead to complete discomfort and emotional stress.",
                    "The colour loss can be seen in the eyes, mucous membranes, etc.",
                    "Daily activities or self-esteem are highly affected.",
                    "Children or people show signs of pigment loss."
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                        <FaCheckCircle className="text-lg" />
                      </div>
                      <p className="text-base text-slate-600 leading-relaxed font-medium pt-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

   

        {/* SECTION 8: REMARKABLE RESULTS (CAROUSEL) */}
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
                {sliderImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group/card"
                    >
                      <Image 
                        src={img} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
                        alt={`Vitiligo Result ${idx + 1}`} 
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

       

        {/* SECTION 9: FINAL CALL TO ACTION */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Puri Skin Clinic: <span className="text-[#EA6490]">Offering you the best vitiligo treatment</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                Choosing the best skin clinic when it comes to vitiligo treatment holds importance. Puri Skin Clinic offers the best vitiligo treatment and surgical processes, which can be effective in enhancing your appearance and boosting your self-confidence. We have skilled dermatologists who will thoroughly guide you and discuss the possible treatments depending on your condition, along with the vitiligo treatment cost in Ludhiana. Visiting us can be a life-changing experience.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/contact-us" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Schedule Your Consultation <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
 {/* SECTION 10: PATIENT TESTIMONIALS (CARDS) */}
        <section className="pt-12 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our <span className="text-[#EA6490]">Happy Patients</span>
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
      </div>
        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion faqs={VITILIGO_FAQS} title="Frequently Asked Questions" />

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

// ─── VITILIGO SPECIFIC FAQS ───
const VITILIGO_FAQS = [
  {
    question: "Is vitiligo a contagious disease?",
    answer: "No, vitiligo is absolutely not contagious. It is not an infection and cannot be spread from person to person through contact."
  },
  {
    question: "Can vitiligo be cured completely?",
    answer: "While 'cure' is a complex word in autoimmune conditions, we can achieve significant and often total repigmentation in stable cases using advanced therapies."
  },
  {
    question: "Is surgical grafting safe for vitiligo?",
    answer: "Yes, surgical grafting is a very safe and effective procedure for stable vitiligo where the patches haven't spread for at least a year."
  },
  {
    question: "How long does NB-UVB therapy take to show results?",
    answer: "NB-UVB therapy typically requires 2 to 3 sessions per week. Visible repigmentation usually begins to appear after 8 to 12 weeks of consistent treatment."
  },
  {
    question: "What triggers vitiligo to spread?",
    answer: "Triggers can include severe emotional stress, physical trauma to the skin (like a cut or burn), and sometimes hormonal changes."
  },
  {
    question: "Can diet help in managing vitiligo?",
    answer: "While there is no specific 'vitiligo diet,' maintaining a healthy immune system through balanced nutrition is generally beneficial. We provide guidance on this during consultation."
  },
  {
    question: "Does vitiligo affect internal organs?",
    answer: "No, vitiligo only affects the skin's pigment-producing cells and does not impact any internal organs or overall physical health."
  },
  {
    question: "Is treatment more effective if started early?",
    answer: "Yes, early clinical intervention often leads to better and faster repigmentation results, especially for smaller, localized patches."
  }
];

// ─── VITILIGO SPECIFIC TESTIMONIALS ───
const HAPPY_CUSTOMERS = [
  {
    author: "Riya Sharma",
    review: "Puri Skin Clinic did wonders for my son Aarav’s vitiligo. Their expert care and personalized approach led to great results. We’re grateful for their professionalism and support throughout the treatment.",
    rating: 5,
  },
  {
    author: "Neha Patel",
    review: "After struggling with vitiligo, I found success at Puri Skin Clinic. Their advanced treatments and supportive staff helped restore my skin and confidence. Highly recommended!",
    rating: 5,
  },
  {
    author: "Ravi Gupta",
    review: "Thanks to Puri Skin Clinic, my vitiligo treatment was a success. Their cutting-edge methods and compassionate care made a significant difference. I’m very pleased with the results.",
    rating: 5,
  }
];
