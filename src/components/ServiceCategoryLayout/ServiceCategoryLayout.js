'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaArrowRight, FaCheckCircle, FaStethoscope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function ServiceCategoryLayout({
  title,
  subtitle,
  heroImage,
  introTitle,
  introText,
  introImage,
  introImages = [],
  benefitsTitle = "Why Choose Our Treatments",
  benefitsText,
  benefits = [],
  services = [],
  ctaText,
  ctaImage = "/bgimg.jpg",
  faqs = [],
  faqTitle = "Frequently Asked Questions",
  bottomSectionTitle,
  bottomSectionText,
  showBottomAppointmentForm = false
}) {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a]" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── REFERENCE STYLE CATEGORY HERO ── */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900 px-6 text-center">
        <Image
          src={heroImage || "/dermatology-3.jpg"}
          fill
          className="object-cover opacity-50"
          alt={title}
          priority
        />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-[60px] font-bold text-white mb-6 leading-tight tracking-tight uppercase" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {title}
            </h1>

            {/* Centered Breadcrumbs inside Hero */}
            <div className="flex items-center justify-center gap-3 text-white/80 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={8} className="opacity-50" />
              <Link href="/services/" className="hover:text-[#EA6490] transition-colors">Services</Link>
              <FaChevronRight size={8} className="opacity-50" />
              <span className="text-white">{title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRODUCTION SECTION ── */}
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {introTitle}
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mb-8 rounded-full"></div>
            <p className="text-xl text-black font-medium leading-[1.8] mb-10">
              {introText}
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
              {introImages && introImages.length > 0 ? (
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full"
                >
                  {introImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={img}
                        fill
                        className="object-cover"
                        alt={`${title} - Slide ${index + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Image
                  src={introImage || "https://puriskinclinic.com/wp-content/uploads/2023/06/about-v-3-1.jpg"}
                  fill
                  className="object-cover"
                  alt={title}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS / STATS SECTION ── */}
      {benefits && benefits.length > 0 && (
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[40px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                {benefitsTitle}
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] mx-auto mt-6 rounded-full mb-6"></div>
              {benefitsText && (
                <p className="text-lg text-black font-medium leading-[1.8]">
                  {benefitsText}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-[#EA6490] flex items-center justify-center shrink-0 shadow-lg mb-6 text-2xl">
                    {benefit.icon || <FaCheckCircle />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-3">{benefit.title}</h4>
                    <p className="text-base text-black leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ── TREATMENTS GRID ── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
              <h6 className="text-3xl md:text-[50px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
             Types of Hair Treatment Services Available at Puri Skin Clinic
            </h6>
            <p className='py-12 text-xl font-medium leading-[1.8] text-black'>When anything goes wrong with one’s hair, the first instinct is to panic. However, it is imperative to realise that one can find and explore solutions to these issues. In fact, the solutions are widely available. With the help of Puri Skin Clinic, you can thoroughly and effectively ensure the possibility of undergoing any of the following treatment and transplant services to address the issue of hair loss, hair thinning, or complete baldness in an effective and essential manner. </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col sm:flex-row h-full"
              >
                <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto sm:min-h-full overflow-hidden">
                  <Image
                    src={service.image}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={service.title}
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col justify-center gap-6">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">{service.title}</h3>
                  <p className="text-black font-medium leading-relaxed text-base">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-3 text-white bg-[#E1708E] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all self-start shadow-md"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      {ctaText && (
        <section className="relative py-24 bg-slate-900 flex items-center justify-center text-center px-6">
          <Image
            src={ctaImage}
            fill
            className="object-cover opacity-30"
            alt="Call to action background"
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-medium leading-[1.8] mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {ctaText}
            </p>
            <Link
              href="/contact-us/"
              className="inline-block bg-[#EA6490] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#EA6490] transition-colors shadow-lg"
            >
              Consult Our Experts
            </Link>
          </div>
        </section>
      )}

      {/* ── FAQ SECTION ── */}
      <FAQAccordion faqs={faqs} title={faqTitle} />

      {/* ── BOTTOM SECTION & APPOINTMENT FORM ── */}
      {(bottomSectionTitle || bottomSectionText || showBottomAppointmentForm) && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`grid grid-cols-1 ${showBottomAppointmentForm ? 'lg:grid-cols-2' : ''} gap-16 items-center`}>
              <div>
                {bottomSectionTitle && (
                  <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    {bottomSectionTitle}
                  </h2>
                )}
                {bottomSectionTitle && <div className="w-16 h-1 bg-[#EA6490] mb-8 rounded-full"></div>}
                {bottomSectionText && (
                  <p className="text-xl text-black font-medium leading-[1.8]">
                    {bottomSectionText}
                  </p>
                )}
              </div>
              
              {showBottomAppointmentForm && (
                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EA6490] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Schedule Now
                  </div>
                  <h3 className="text-3xl font-bold mb-8 text-center text-slate-900 mt-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Book Consultation
                  </h3>
                  <AppointmentForm theme="clinical" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
