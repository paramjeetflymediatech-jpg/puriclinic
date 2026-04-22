'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaFlask, FaMagic,
  FaVials, FaMicroscope, FaSyncAlt, FaSyringe, FaUsers, FaDna
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function ExosomeClient() {
  const sliderImages = [
    "/hair copy/exosome/yet.avif",
    "/hair copy/exosome/tred.avif",
    "/hair copy/exosome/asq.avif"
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── BESPOKE HERO: EXOSOME ── */}
      <section className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hair copy/exosome/Exosome-Breadcrumb.jpg"
          fill
          className="object-cover object-center"
          alt="Exosome Therapy Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-16 space-y-20">

        {/* SECTION 1: INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-[4/3]" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h1 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Exosome therapy: <br/><span className="text-[#EA6490]">An advanced skin and hair treatment</span>
            </h1>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Exosome therapy is creating buzz in cosmetic aesthetic treatments. It is considered a breakthrough anti-aging solution that can be used for skin and hair. This is a regenerative treatment that is meant to repair, restore, and rejuvenate the health of the skin and hair.
              </p>
              <p>
                If you are looking for smooth and youthful skin along with healthier hair, then exosome therapy for skin and hair in Ludhiana, Punjab, can be the best solution for you. Plus, this is a non-invasive youth rejuvenation treatment that will show you remarkable results.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: UNDERSTANDING EXOSOME THERAPY */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <span className="text-[#EA6490]">exosome therapy</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Exosome therapy is known to use exosomes, which are small and naturally occurring vesicles. They are communicating hubs between the cells or messengers that deliver important signals to the cells of skin and hair. Also, they are mandatory to carry protein, genetic material, and much more that helps with repair and regeneration.
              </p>
              <p>
                However, when exosomes are involved in aesthetic treatments, then they can be helpful in repairing the damaged skin cells, enhancing collagen production, and working on the hair follicles. In comparison to traditional anti-aging methods, this therapy is known to get to the root cause of hair loss and skin aging issues while offering an effective solution.
              </p>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
            <Image
              src="/hair copy/exosome/cd.avif"
              fill
              className="object-cover"
              alt="Exosome Therapy Understanding"
            />
          </div>
        </section>

        {/* SECTION 3: THE WORKING */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-slate-100 pt-20">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] order-2 lg:order-1">
            <Image
              src="/hair copy/exosome/asq.avif"
              fill
              className="object-cover"
              alt="The working of exosome therapy"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              The working of <br/><span className="text-[#EA6490]">exosome therapy</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Exosome therapy involves a concentrated exosome solution. This solution is taken with the help of mesenchymal stem cells. They are considered to be rich in various regenerative materials, which can be beneficial in repairing and revitalizing cells.
              </p>
              <p>
                When it comes to skin treatments, this solution can be applied or injected into certain areas of the skin. Further, it can be helpful in rejuvenating or repairing the damaged skin. However, when it comes to hair restoration, exosomes get injected into the scalp so that inactive follicles can be stimulated and the health of the hair can be encouraged.
              </p>
              <p>
                The exosome therapy gets done in no time and is minimally invasive. With passing time, exosomes work silently and beneath the surface, which further helps in healing and skin rejuvenation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: IDEAL CANDIDATES */}
        <section className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#EA6490]/5 rounded-bl-full"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Who should opt for <span className="text-[#EA6490]">exosome therapy?</span>
                </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto mb-10"></div>
            
            <p className="text-black font-medium text-lg leading-[1.8] mb-12">
              The best candidate to opt for exosome therapy can be anyone who is facing early signs of aging, such as wrinkles, poor skin elasticity, and much more. This treatment is also beneficial for people who are experiencing hair thinning, hair loss, and various other scalp issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Early signs of aging (wrinkles, fine lines)",
                "Poor skin elasticity or sagging skin",
                "Hair thinning or early-stage hair loss",
                "Sensitive skin or chronic skin redness",
                "Autoimmune-related skin issues",
                "Seeking non-invasive rejuvenation with zero downtime"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <FaCheckCircle className="text-[#EA6490] shrink-0" />
                  <span className="text-black font-bold text-sm">{item}</span>
                </div>
              ))}
                        </div>
            </div>
        </section>

        {/* SECTION 5: BENEFITS SKIN */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Benefits of Exosome Therapy for <span className="text-[#EA6490]">Skin Health</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              To enhance skin health using exosome health, it can be beneficial in many ways:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Lifted Aging Skin", desc: "Exosomes enhance natural collagen and elastin production, reducing fine lines and sagging for a lifted, plump look.", icon: <FaMagic /> },
              { title: "Improved Texture & Tone", desc: "Accelerates skin cell turnover and repairs damaged tissues for a noticeably smoother skin surface.", icon: <FaStar /> },
              { title: "Minimizes Pores", desc: "Enhances skin elasticity and cellular repair, leading to visible pore tightening and a more refined appearance.", icon: <FaMicroscope /> },
              { title: "Better Hydration", desc: "Revives dry, dull skin by supporting the natural moisture barrier and retaining essential hydration.", icon: <FaSyringe /> },
              { title: "Repairs Sun Damage", desc: "Effective for skin cell regeneration, fading dark spots, and reducing pigmentation caused by sun exposure.", icon: <FaShieldAlt /> },
              { title: "Radiant Vitality", desc: "Achieves radiant and glowy skin while enhancing overall skin health and vitality.", icon: <FaFlask /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-all h-full group"
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

        {/* SECTION 6: BENEFITS HAIR */}
        <section className="pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Benefits for <br/><span className="text-[#EA6490]">Hair Health</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <p className="text-black font-medium text-lg leading-[1.8]">
                If you are struggling with hair thinning and hair loss, exosome therapy can be the best solution. It stimulates dormant hair follicles and helps in enhancing new hair growth while boosting volume and quality.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Stimulated Dormant Follicles", desc: "Enhances new hair growth in areas where thinning is occurring." },
                  { title: "Thickening Hair", desc: "Increases hair volume and density for a noticeably fuller head of hair." },
                  { title: "Minimizes Inflammation", desc: "Creates a healthy scalp environment for sustained and healthy hair growth." },
                  { title: "Non-Surgical Solution", desc: "Provides a powerful alternative to invasive hair transplant surgeries." },
                  { title: "Long-term Improvements", desc: "Offers gradual yet lasting results that improve steadily over time." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-black text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[3/4] sticky top-32">
              <Image
                src="/hair copy/exosome/cd.avif"
                fill
                className="object-cover"
                alt="Hair Health with Exosomes"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-bold text-xl italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>"The next generation of hair restoration."</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: IS IT APT FOR YOU? */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Is <span className="text-[#EA6490]">exosome therapy</span> apt for you?
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-slate-300 font-medium text-lg leading-[1.8]">
              This therapy is considered a versatile option for people who are looking for non-invasive treatment when it comes to antiaging and hair loss. However, here are some factors to ponder upon:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Your Goal", desc: "Ideal for getting rid of wrinkles, enhancing skin texture, or managing hair health.", icon: <FaStar /> },
                { title: "Concern Severity", desc: "Best suited for mild to moderate concerns about hair and skin aging.", icon: <FaShieldAlt /> },
                { title: "Investment", desc: "A premium investment for high-impact, long-term biological rejuvenation.", icon: <FaMagic /> }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#EA6490] flex items-center justify-center mx-auto mb-6 text-xl">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white text-lg mb-4">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <section className="py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choosing <span className="text-[#EA6490]">Puri Skin Clinic</span> for Exosome Therapy
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            
            <div className="space-y-8 text-black font-medium text-lg leading-[1.8]">
              <p>
                Puri Skin Clinic is a premier destination for advanced dermatological care, offering expert solutions in skin treatments, hair restoration, and vitiligo cure. Our exosome protocols represent the absolute peak of modern regenerative medicine.
              </p>
            <div className="pt-6">
                <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-[#EA6490] transition-all shadow-2xl active:scale-95 group">
                  Book Your Appointment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FAQAccordion faqs={FAQ_DATA.exosome} title="Frequently Asked Questions" />

      {/* ── FOOTER TRUST ── */}
      <section className="bg-slate-50 py-24 border-t border-slate-100 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#EA6490]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
          The Next <span className="text-[#EA6490]">Generation</span> of Care
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
          Join the future of clinical aesthetics with Ludhiana's most advanced exosome specialists.
        </p>
        <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95 relative z-10">
          Get Started Now <FaChevronRight />
        </Link>
      </section>
    </div>
  );
}
