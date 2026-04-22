'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaMagic,
  FaVials, FaMicroscope, FaSyncAlt, FaSyringe, FaUsers, FaDna,
  FaFlask, FaSun
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import { FAQ_DATA } from '@/constants/constantdata';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function SkinServicesClient() {
  const sliderImages = [
    "/skin-related/skin-1.avif",
    "/skin-related/skina.avif",
    "/skin-related/dd.avif"
  ];

  const skinServices = [
    {
      title: 'Chemical Peel',
      link: '/chemical-peel',
      image: '/skin-related/Chemical-Peel-28.avif',
      description: 'This is a cosmetic procedure where the face of the person undergoing the procedure is applied with chemical solution. This results in making certain that the damaged layers of the skin are removed. The skin that’s left behind is extensively rejuvenated. The regenerated skin is smoother, healthier, and has fewer wrinkles. One can address several signs of aging with this procedure.'
    },
    {
      title: 'Exosomes',
      link: '/exosome',
      image: '/skin-related/Exosome-30-1.avif',
      description: 'Exosomes are essentially responsible for communication between cells. This aspect of their function allows them to help repair skin cells. They can help in rejuvenating and repairing one’s skin in an essential manner. Exosomes are filled with proteins, lipids, and nucleic acids. They can be derived from a variety of cell types, including but not limited to stem cells. Address several cosmetic concerns, such as wrinkles, pigmentation, and scarring, without any issues.'
    },
    {
      title: 'Growth Factor Concentrate',
      link: '/growth-factor-concentrate',
      image: '/skin-related/Growth-Factor-Concentrate-28-1.avif',
      description: 'This is a regenerative therapy that employs cells from the person’s blood in an essential manner. One needs to make sure that you are able to thoroughly separate growth factors from one’s blood and use them to enhance a person’s appearance by injecting them into a person’s skin, particularly over the space where they want to address a specific concern.'
    },
    {
      title: 'Dermaroller',
      link: '/dermaroller',
      image: '/skin-related/Dermaroller-28.avif',
      description: 'This handheld device makes sure to make small punctures on a person’s skin in an essential manner. Once these minor injuries are made, they trigger your skin’s natural healing abilities. This, then, causes the production of proteins such as collagen and elastin, which promote skin’s firmness and youthful appearance.'
    },
 
    {
      title: 'PRP for Hair and Skin',
      link: '/prp-for-hair-and-skin',
      image: '/skin-related/PRP-for-Hair-and-Skin-28-1.avif',
      description: 'In this procedure, you can take advantage of the possibility of using plasma-rich platelets to enhance and improve your skin’s texture and appearance. This process is also often used for one’s hair follicles to rejuvenate and promote hair growth and density. Use your own body’s healing response to have a revitalised presence and appearance.'
    },
     
    {
      title: 'Dermapen',
      link: '/dermapen',
      image: '/skin-related/Dermapen-28.avif',
      description: 'Much like the dermaroller procedure, dermapen also employs our natural healing process to ensure that we can get smooth and rejuvenated skin. This procedure also creates minor injuries on the skin’s surface to enhance the production of collagen and elastin, to enhance the skin’s appearance.'
    },
    {
      title: 'Fillers',
      link: '/fillers',
      image: '/skin-related/Fillers-28.avif',
      description: 'Dermal fillers extensively make sure that you are able to restore facial volume and offer the possibility of contouring features. One can also thoroughly smooth any deep lines with these fillers. Employing the use of hyaluronic acid, they deliver immediate results and fuller cheeks.'
    },
    {
      title: 'Botox',
      link: '/botox',
      image: '/skin-related/Botox-28.avif',
      description: 'With the help of Botox, you can thoroughly and extensively make sure that you are able to soften any expression lines as well as find a solution to dynamic issues such as crow’s feet on the side of your eyes. Attain a natural and youthful appearance with the help of Botox.'
    },
 
    {
      title: 'Non-Surgical Facelift',
      link: '/non-surgical-facelift',
      image: '/skin-related/Non-Surgical-Facelift-28.avif',
      description: 'This procedure can thoroughly and extensively combine several procedures to ensure a minimally invasive procedure. One can expect relief from sagging skin, enhance their face contours, and improve their overall appearance. Defy the signs of aging without undergoing surgery, scarring, or any extensive recovery.'
    },
    {
      title: 'Mesotherapy',
      link: '/mesotherapy',
      image: '/mesotherapy/derm-1-768x614.avif',
      description: 'Rejuvenate your skin and scalp with a custom cocktail of vitamins, minerals, and growth factors. Mesotherapy targets the middle layer of the skin to provide deep hydration, promote hair growth, and achieve a radiant clinical glow.'
    },
    {
      title: 'Radio-Frequency',
      link: '/radio-frequency',
      image: '/radio-frequency/ds-768x614.avif',
      description: 'Firm and tighten sagging skin with advanced Radio-Frequency technology. This non-invasive treatment stimulates natural collagen production to lift your facial profile and smooth out fine lines and wrinkles.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/skin-1.avif"
          fill
          className="object-cover object-center"
          alt="Skin Services Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Skin Related <span className="text-[#EA6490]">Services</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-square" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Improve Your Skin’s <br/><span className="text-[#EA6490]">Natural Appearance! with Puri Skin Clinic!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
               Suffering from any type of skin trouble can prove to be a life-changing experience. One loses all their confidence and self-esteem. One becomes conscious of one’s appearance and avoids social gatherings altogether.
              </p>
              <p>
               This can thoroughly prove to be a disruption in one’s life. However, it is essential to make sure that you are able to access dermatological consultations to understand what’s wrong. With the advanced skin care treatments in Ludhiana, you can make certain that you are able to get to the bottom of your issues, get a personalised consultation, and undergo treatment in an effective manner. Access Puri Skin Clinic and ensure that you are able to undergo skin treatment in a thorough and extensive manner. 
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY REQUIRED */}
        <section className="pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Why are Skin Treatment <br/><span className="text-[#EA6490]">Services Required?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
              When one gets extremely conscious about their skin and how they appear, it can start to impact other aspects of a person’s life. If this is the case with you, one needs to make sure that you are able to seek skin treatment services in an essential manner. 
                </p>
                <p>
                  There are several reasons why a person might consider undergoing skin treatment services. The following are some of the reasons why people undergo skin treatment services. 
                </p>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] lg:sticky lg:top-32">
                <Image 
                    src="/skin-related/dd.avif"
                    fill
                    className="object-cover"
                    alt="Skin Health Importance"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                    <p className="font-bold text-xl italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>"Restoring your natural glow."</p>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Address Acne & Blemishes", desc: "You can easily address acne and blemishes.", icon: <FaStethoscope /> },
              { title: "Address Aging Signs", desc: "If you are bothered by aging signs, you can undergo treatment to address them.", icon: <FaMagic /> },
              { title: "Resolve Pigmentation", desc: "If you have pigmentation, you can also use skin treatments to resolve this issue.", icon: <FaStar /> },
              { title: "Improve Sun Damage", desc: "Skin treatment services can also help improve any damage sustained from the sun.", icon: <FaShieldAlt /> },
              { title: "Relief from Eczema", desc: "One can also find relief from troubles such as eczema. ", icon: <FaFlask /> },
              { title: "Maintain Radiance", desc: "One can maintain their skin radiance", icon: <FaSun /> },
              { title: "Hydrate & Repair", desc: "You can also hydrate your skin and repair any damage ", icon: <FaSyringe /> },
              { title: "Enhanced Product Application", desc: "One can also thoroughly and extensively ensure that the product application gets better", icon: <FaSyncAlt /> },
              { title: "Thorough Confidence", desc: "With the right skin treatment services, you can make certain that you are able to thoroughly gain confidence.", icon: <FaUsers /> }
            ].map((item, idx) => (
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
            <p className="text-black font-medium text-lg mt-10"> If you are trying to find a clinic to undergo any skin treatment, you can seek a consultation appointment from Puri Skin Clinic. </p>
        </section>

        {/* SECTION 3: TREATMENT CATEGORIES */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Types of Skin Treatments Available <br/><span className="text-[#EA6490]">from Puri Skin Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="max-w-6xl mx-auto space-y-6 text-black font-medium text-lg">
              <p>
                When anything goes wrong with one’s skin, one often finds oneself panicking and overwhelmed at this prospect. One needs to make sure that they can calm down and seek a consultation from the experts at Puri Skin Clinic.
              </p>
              <p>
               You can make sure that you are able to understand the trouble, get a diagnosis, and undergo a treatment procedure to address your issues. With the right team around you, you can make certain that you are able to undergo the proper treatment procedures in a thorough and extensive manner and resolve the issue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skinServices.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group flex flex-col h-full"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image 
                    src={service.image} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{service.title}</h3>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex flex-col flex-grow">
                  <p className="text-black font-medium text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-[#EA6490] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>



        {/* SECTION 5: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose <span className="text-[#EA6490]">Puri Skin Clinic</span> for All Your Skin Requirements!
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-slate-300 font-medium text-lg leading-[1.8]">
                If you have never even considered the possibility of undergoing skin treatment, it can prove to be a daunting reality. Our team ensures that you can access advanced skin treatment in Punjab without any hassle.
            </p>
            <div className="pt-6">
                <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Appointment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>
        <FAQAccordion faqs={FAQ_DATA.skinServices} title="Frequently Asked Questions" />
      </div>
    </div>
  );
}
