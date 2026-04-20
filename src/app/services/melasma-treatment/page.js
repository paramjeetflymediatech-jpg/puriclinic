'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaFlask
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function MelasmaTreatmentPage() {
  const sliderImages = [
    "/melasma/e.avif",
    "/melasma/ma.avif",
    "/melasma/mass.avif"
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/melasma/Melasma-Treatment..jpg"
          fill
          className="object-cover object-center"
          alt="Melasma Treatment Banner"
          priority
        />
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (SIDE-BY-SIDE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-[3/2]" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Understanding <br /><span className="text-[#EA6490]">Melasma</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                This is a <strong>common skin pigmentation irregularity</strong>, which also means skin discoloration that happens mainly on the face. This skin issue can be experienced by people irrespective of their gender or race. However, it is very common in people who have a <strong>dark skin tone</strong> and are mainly between the ages of 20 and 40 years.
              </p>
              <p>
                Melasma pigmentation involves patches on the skin which looks very irregular. This issue mainly affects the areas that are <strong>completely exposed to harmful UV rays or the sun</strong>. However, this skin condition is <strong>not contagious</strong>, and neither is it connected to any kind of allergies, but it can severely affect how one looks and even hamper their overall confidence and appearance.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: MELASMA VS HYPERPIGMENTATION ── */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Melasma vs. <br /><span className="text-[#EA6490]">Hyperpigmentation</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  The skin cells of a person make a substance which is known as <strong>melanin</strong>, and it offers color. If you have dark skin, then there is a possibility that you can easily tan and have more melanin. However, if the skin cells are unhealthy, then <strong>too much melanin</strong> can be produced.
                </p>
                <p>
                  Thus, certain skin areas can appear to be darker than others. This entire condition or process is <strong>hyperpigmentation</strong>. However, dark patches that appear specifically on your face and neck are often clinically identified as <strong>melasma</strong>.
                </p>
                
                <div className="pt-4 space-y-4">
                    <h4 className="font-bold text-slate-900">Common Causes of Hyperpigmentation:</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "Sun Exposure", icon: <FaRegLightbulb className="text-xs" /> },
                            { name: "Rashes", icon: <FaCheckCircle className="text-xs" /> },
                            { name: "Hormonal Changes", icon: <FaSyncAlt className="text-xs" /> },
                            { name: "Blue Light", icon: <FaShieldAlt className="text-xs" /> },
                            { name: "Genetics", icon: <FaUserMd className="text-xs" /> },
                            { name: "Lack of Vitamin D", icon: <FaFlask className="text-xs" /> }
                        ].map((cause, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/20 transition-all">
                                <span className="text-[#EA6490]">{cause.icon}</span>
                                <span className="text-sm font-bold text-slate-700">{cause.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 lg:order-2">
              <Image
                src="/melasma/e.avif"
                fill
                className="object-cover"
                alt="Melasma Clinical Diagnosis"
              />
            </div>
          </div>
        </section>

        {/* ── SECTION 3: What Causes Melasma? ── */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What Causes <span className="text-[#EA6490]">Melasma?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed text-center">
                There are mainly <strong>three primary causes</strong> of melasma that clinicians identify during diagnosis. Understanding these triggers is essential for effective long-term management:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { 
                  title: "Sun Exposure", 
                  desc: "Prolonged or direct exposure to the UV rays can create more melanin production. This can further cause melasma.",
                  icon: <FaRegLightbulb />
                },
                { 
                  title: "Hormonal Disturbances", 
                  desc: "Hormonal changes and melasma can be experienced by a pregnant woman. According to dermatologists, these dark patches are considered chloasma. Also, people who are on hormone replacement therapy or are taking hormone-based medications can even experience melasma. However, this skin condition can be caused by high cortisol levels when you are highly stressed.",
                  icon: <FaSyncAlt />
                },
                { 
                  title: "Heredity", 
                  desc: "There are some people who are bound to experience melasma because of their dark skin tone, or it is the same condition that their relatives have.",
                  icon: <FaUserMd />
                }
              ].map((cause, idx) => (
                <motion.div 
                    key={idx} 
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#EA6490]/30 hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-6 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 text-[#EA6490] flex items-center justify-center text-3xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {cause.icon}
                  </div>
                  <div className="space-y-4 h-full flex flex-col">
                    <h4 className="font-bold text-slate-900 text-2xl">{cause.title}</h4>
                    <p className="text-slate-600 leading-[1.8] font-medium text-base">
                      {cause.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: TYPES OF MELASMA ── */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the <span className="text-[#EA6490]">Types of Melasma?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed">
                Melasma can occur in one or more ways. The type of it mainly depends on the color, border shape, and how it responds to the treatment. Here are points defining the melasma types:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="relative aspect-[4/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 lg:order-1 order-2">
                <Image
                  src="/melasma/s-1.avif"
                  fill
                  className="object-cover"
                  alt="Melasma Clinical Types Visualization"
                />
              </div>

              <div className="space-y-6 lg:order-2 order-1">
                {[
                  { 
                    title: "Epidermal Melasma", 
                    desc: "This is a type where melasma mainly affects the skin’s top layer, which is called the epidermis. You can witness these patches on your face and they are generally of dark brown color. Also, the shape of the patches is considered to be uniform.",
                    icon: <FaCheckCircle />
                  },
                  { 
                    title: "Dermal Melasma", 
                    desc: "This melasma type is known to attract the deep skin layers known as dermis. They appear to be bluish-gray and sometimes grayish brown with blurry borders. This melasma gets to the deep layers of the skin, resulting in dermatologists offering treatments like microneedling, etc.",
                    icon: <FaSyncAlt />
                  },
                  { 
                    title: "Mixed Melasma", 
                    desc: "This is a very common melasma type and is an amalgamation of epidermal as well as dermal melasma. The patches are a combination of brown, bluish grey, etc., colors. To get over this melasma type, a dermatologist is going to involve treatments like topical creams, chemical peels, and much more.",
                    icon: <FaMagic />
                  }
                ].map((type, idx) => (
                  <div 
                      key={idx} 
                      className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group flex gap-6 items-start shadow-sm"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                      {type.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-slate-900 text-xl">{type.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── SECTION 5: MELASMA DIAGNOSIS ── */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How is Melasma <br /><span className="text-[#EA6490]">Diagnosed?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>

              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  A general doctor can suggest that you see a <strong>dermatologist</strong> for the proper diagnosis of melasma. Later, with the involvement of <strong>black light</strong>, the doctor will be able to examine the skin and get to know the skin color depth. To understand whether you have melasma or not, a <strong>biopsy</strong> can be conducted. In this process, a tiny piece of your skin is removed so that it can be properly examined. The procedure is <strong>completely safe</strong> and is carried out to diagnose various other skin conditions.
                </p>
                <p>
                  In case there are melasma predictions, then a biopsy can provide the apt results. Also, there can be involvement of the <strong>Melasma Area Severity Index (MASI)</strong> to understand the severity of the condition and how to carry out the treatment further. The dermatologist will conduct a proper examination of your skin and will ask you various questions related to the situation. This will allow you to understand everything and get the best treatment for managing this skin condition.
                </p>
                
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-900 font-bold italic">
                    "Our diagnostic protocols ensure that every patient receives a scientifically backed assessment, paving the way for targeted and effective pigmentation management."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32 order-1 lg:order-2">
              <Image
                src="/melasma/s-2-768x614.jpg"
                fill
                className="object-cover"
                alt="Clinical Melasma Diagnosis"
              />
            </div>
          </div>
        </section>

        {/* ── SECTION 6: MELASMA PROCEDURES ── */}
        <section className="py-10 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  What are the different <span className="text-[#EA6490]">Melasma Procedures?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed text-center">
                In case topical treatments are not worth the shot, then certain <strong>clinical melasma procedures</strong> can be performed to achieve a clearer complexion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { 
                  title: "Light Therapy", 
                  desc: "This is an intense light therapy. While overexposure to sun causes melasma, certain medical-grade lights can be highly beneficial in reducing or erasing stubborn skin discoloration.",
                  icon: <FaRegLightbulb />
                },
                { 
                  title: "Chemical Peel", 
                  desc: "A dermatologist can suggest a professional chemical peel to remove damaged surface skin, revealing a new, smooth, and properly toned complexion beneath.",
                  icon: <FaFlask />
                },
                { 
                  title: "Microneedling", 
                  desc: "This process involves making tiny, controlled tears in the skin. As your skin naturally heals and regenerates, it offers a significantly more even and radiant skin tone.",
                  icon: <FaStethoscope />
                },
                { 
                  title: "Platelet-Rich Plasma (PRP)", 
                  desc: "A small amount of blood is processed to concentrate platelets and then injected back into the skin. This versatile therapy also addresses hair loss and sports injuries.",
                  icon: <FaShieldAlt />
                }
              ].map((proc, idx) => (
                <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#EA6490]/30 hover:shadow-2xl transition-all group flex gap-8 items-center shadow-sm"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-slate-50 text-[#EA6490] flex items-center justify-center text-3xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {proc.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 text-2xl">{proc.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-base">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: MELASMA PREVENTION ── */}
        <section className="py-20 border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  How to <span className="text-[#EA6490]">Prevent Melasma?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
              </div>
              <p className="text-black font-medium text-lg max-w-6xl mx-auto leading-relaxed text-center">
                There are various ways and tricks to prevent melasma in the long run, and maintaining consistency with these habits is key to clear skin:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { 
                  title: "Sun Protection & Sunblock", 
                  desc: "Wearing sunscreen every day (SPF 30 or above) is essential to protect your skin. It is also imperative to wear sun-protective clothing when planning to spend time outside.",
                  icon: <FaShieldAlt />
                },
                { 
                  title: "Manage Your Hormones", 
                  desc: "Consulting with a doctor for oral contraceptives or hormone therapy is vital. Getting in touch with an endocrinologist can be the right decision for hormonal issues.",
                  icon: <FaSyncAlt />
                },
                { 
                  title: "Opt for a Healthy Lifestyle", 
                  desc: "Try to have nutritious meals every day. It is imperative to keep your body hydrated and remain stress-free to support overall skin health.",
                  icon: <FaMagic />
                },
                { 
                  title: "Targeted Skincare", 
                  desc: "Incorporate skin-lightening products that feature Vitamin C, Kojic Acid, and other active ingredients specifically formulated to target pigmentation.",
                  icon: <FaFlask />
                }
              ].map((tip, idx) => (
                <motion.div 
                    key={idx} 
                    whileHover={{ y: -8 }}
                    className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group flex gap-8 items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white text-[#EA6490] flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                    {tip.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 text-xl">{tip.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {tip.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* ── SECTION 8: FINAL CTA ── */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl mt-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA6490]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Puri Skin Clinic: The <span className="text-[#EA6490]">Right Place</span> for Your Melasma Treatment
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                It is highly essential to <strong>treat melasma at the right time</strong>. It mainly depends on the skin’s condition and its severity. The treatment can involve <strong>anti-melasma peels</strong>, topical creams, lasers, and various other clinical interventions.
              </p>
              <p>
                Choosing <strong>Puri Skin Clinic</strong> to treat your melasma can be helpful in many ways. We have skilled and professional dermatologists who offer <strong>tailored treatments</strong> depending on an individual’s skin so that the best outcomes can be experienced.
              </p>
              <p>
                Also, we provide complete details about the treatment involving the <strong>melasma treatment cost in Ludhiana, Punjab</strong>. With our help, you can achieve healthy, clear, smooth, and glowing skin. Consult our experts today!
              </p>
            </div>
            <div className="pt-6">
                <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Assessment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION 6: FAQS */}
      <FAQAccordion faqs={MELASMA_FAQS} title="Frequently Asked Questions" />
    </div>
  );
}

// ─── MELASMA SPECIFIC FAQS ───
const MELASMA_FAQS = [
  {
    question: "What exactly is melasma?",
    answer: "Melasma is a pigmentary disorder that causes dark, discolored patches on the skin. It is most common on the face and is often triggered by hormonal changes or sun exposure."
  },
  {
    question: "Is melasma treatment permanent?",
    answer: "While we can significantly fade melasma, it can be persistent and may recur if triggers like sun exposure aren't managed. We provide long-term maintenance plans to prevent recurrence."
  },
  {
    question: "How long does it take to see results?",
    answer: "Fading melasma is a gradual process. Most patients see noticeable improvement after 4 to 8 weeks of consistent clinical treatment and home care."
  },
  {
    question: "Is sun protection important during treatment?",
    answer: "Yes, strict sun protection is the single most important factor in managing melasma. Even a few minutes of unprotected exposure can trigger pigmentation."
  },
  {
    question: "Can melasma be treated during pregnancy?",
    answer: "We typically wait until after pregnancy and breastfeeding to start intensive treatments, as melasma (often called 'the mask of pregnancy') can resolve naturally after childbirth."
  },
  {
    question: "Are chemical peels safe for melasma?",
    answer: "Yes, professional superficial peels can be highly effective for epidermal melasma when combined with the right topical and oral treatments."
  },
  {
    question: "Does microneedling help melasma?",
    answer: "Yes, microneedling helps break up pigment and allows for deeper penetration of depigmenting agents, especially for dermal melasma."
  },
  {
    question: "Is melasma treatment expensive?",
    answer: "Puri Skin Clinic offers competitive pricing for melasma treatments, ensuring that advanced clinical care for pigmentation is accessible."
  }
];
