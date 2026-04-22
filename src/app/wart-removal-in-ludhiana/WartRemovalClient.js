'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaArrowRight,
  FaStar, FaShieldAlt, FaMagic, FaRegLightbulb, FaUserMd, FaCalendarAlt, FaSyncAlt, FaHandSparkles,
  FaSyringe, FaWaveSquare
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function WartRemovalClient() {
  const sliderImages = [
    "/skin-related/Wart-Removal-28.avif",
    "/skin-related/skin-1.avif",
    "/skin-related/dd.avif"
  ];

  const methods = [
    {
      title: "Cryotherapy",
      desc: "In the freezing method, to freeze the wart, liquid nitrogen is applied to it. It then forms a blister that helps the wart to lift off the skin. This usually requires multiple sessions.",
      icon: <FaStethoscope />
    },
    {
      title: "Topical Acids",
      desc: "The first-line treatment could be salicylic acid in any form — gel, liquid or pads. It peels away the layers of the wart. The therapy involves soaking the wart in lukewarm water, thereby loosening the dead skin, which helps with the removal of the wart.",
      icon: <FaRegLightbulb />
    },
    {
      title: "Laser Surgery",
      desc: "This method makes use of laser light to heat and burn the cells or blood vessels of the wart, thereby cutting off its supply. It can also cause scarring.",
      icon: <FaHandSparkles />
    },
    {
      title: "Injections",
      desc: "Medicines such as interferon or bleomycin are injected into stubborn warts. Bleomycin stops the growth of the wart, whereas interferon boosts immunity.",
      icon: <FaSyringe />
    },
    {
      title: "Electrosurgery",
      desc: "It involves burning the wart with electrosurgery, which is a type of electric current, or it can be done by scraping the wart off with the help of a special tool called a curettage. Sometimes it is done after the acid treatment.",
      icon: <FaMagic />
    },
    {
      title: "Microwave Therapy",
      desc: "This approach makes use of microwaves for heating up water present in the wart cells, as it triggers the immune system to combat the HPV virus, and it usually requires minimal downtime.",
      icon: <FaWaveSquare />
    }
  ];

  const reasons = [
    { title: "Scar-Free Result", desc: "Our advanced methods ensure permanent removal with minimal marking.", icon: <FaMagic /> },
    { title: "Expert Diagnosis", desc: "Ensuring every growth is correctly identified before clinical removal.", icon: <FaUserMd /> },
    { title: "HPV Prevention", desc: "Addressing the root viral cause to minimize the risk of recurrence.", icon: <FaShieldAlt /> },
    { title: "Quick & Effective", desc: "Most warts can be removed in a single session lasting under 30 minutes.", icon: <FaSyncAlt /> },
    { title: "Sterile Clinical Care", desc: "Maintaining the highest medical standards for your safety and comfort.", icon: <FaCheckCircle /> }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>


      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[200px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/wart-removal-in-ludhiana/13-2-2.png"
          fill
          className="object-cover object-center"
          alt="Wart Removal Banner"
          priority
        />
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION (IMAGE ON LEFT) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[3/2] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
            <Image
              src="/wart-removal-in-ludhiana/2149359548-1024x683.avif"
              fill
              className="object-cover"
              alt="Wart Removal Treatment Overview"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Are you waiting to <br /><span className="text-[#EA6490]">get your wart removed?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                If you are waiting to get your wart or mole removed, you must know about its treatment. Wart removal in Ludhiana aims to destroy the tissue of the wart, usually by burning — electrosurgery or laser or by freezing – cryotherapy. It can be treated using strong acids such as TCA or salicylic acid to peel layers. A few approaches help in stimulating the immune system — microwave therapy or injections, thereby combating the HPV virus.
              </p>
              <p>
                Choices vary from over-the-counter acids like salicylic acid for home use to various professional procedures such as surgery, cryotherapy or microwave treatments, with their success relying on the type, location of the wart, as well as the immunity of the patient.
              </p>
              <p>
                On the other hand, mole removal is a common and safe procedure which needs to be performed by well-qualified dermatologists or plastic surgeons for medical as well as cosmetic reasons. Though it is a minor medical procedure, it requires medical excellence on the part of the surgeon to eliminate the moles, as they can be suspected of skin cancer.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE METHODS (CENTERED) */}
        <section className="py-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Reasons for <br /><span className="text-[#EA6490]">The Removal</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              </div>
              <p className="text-black font-medium text-lg leading-[1.8]">
                While many skin growths are harmless, there are several critical medical and aesthetic reasons why professional removal is the recommended course of action.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Cosmetic Reasons", desc: "If your warts are visible and impacting your confidence, professional removal is crucial to restoring your self-esteem." },
                  { title: "Discomfort and Pain", desc: "Warts on the feet can make walking painful. Clinical removal offers an immediate solution to eliminate this persistent discomfort." },
                  { title: "Stop the Spread", desc: "As warts are caused by the HPV virus, they spread easily through contact. Removal is strongly advised to stop the transmission cycle." },
                  { title: "Faster Resolution", desc: "While warts can take months or even years to resolve on their own, our clinical treatments offer prompt and permanent outcomes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-8 h-8 rounded-full bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center shrink-0 group-hover:bg-[#EA6490] group-hover:text-white transition-all">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 lg:sticky lg:top-32">
              <Image
                src="/wart-removal-in-ludhiana/2149365763-1024x684.avif"
                fill
                className="object-cover"
                alt="Reasons for clinical removal"
              />
            </div>
          </div>
        </section>
  

        {/* SECTION 3: BENEFITS */}
      
  <section className="py-10 border-t border-slate-100 text-center">
          <div className="max-w-[1300px] mx-auto space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Common <span className="text-[#EA6490]">Treatment Approaches</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
              {methods.map((method, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="text-[#EA6490] text-2xl">{method.icon}</div>
                  <h4 className="font-bold text-slate-900 text-xl">{method.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: TESTIMONIALS */}
        <section className="py-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Our Happy <span className="text-[#EA6490]">Customers</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Simran Kaur",
                location: "Ludhiana",
                text: "I was skeptical at first, but the laser hair removal for my facial hair at Puri Skin Clinic has been a game-changer. The staff was professional, and the results are fantastic. Thank you, Dr. Puri!",
                rating: 5
              },
              {
                name: "Rajat Mehta",
                location: "Chandigarh",
                text: "Getting laser hair removal for my underarms at Puri Skin Clinic was the best decision ever. The process was quick and nearly painless. No more waxing for me!",
                rating: 5
              },
              {
                name: "Anjali Sharma",
                location: "Ludhiana",
                text: "Puri Skin Clinic’s laser hair removal service is top-notch. The results are impressive, and the team is incredibly skilled and friendly. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all h-full">
                <div className="space-y-4">
                  <div className="flex text-yellow-400 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} />)}
                    <span className="ml-2 text-slate-400 text-sm font-bold">{testimonial.rating}/5</span>
                  </div>
                  <p className="text-slate-700 font-medium italic leading-relaxed">
                    “{testimonial.text}”
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-[#EA6490] text-sm font-bold uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


   
        {/* SECTION 5: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Why Choose <br /><span className="text-[#EA6490]">Puri Skin Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="space-y-6 text-slate-300 font-medium text-lg leading-[1.8]">
              <p>
                If you are searching for a wart treatment doctor in Punjab or mole removal in Ludhiana, you can contact Puri Skin Clinic and get your warts and moles eliminated. A single mole removal cost in Punjab ranges from a few hundred to a few thousand, depending on the procedures involved.
              </p>
              <p>
                Dr Gurinderjit Singh Puri is treating thousands of patients in his clinic who are finding it a hindrance to have warts on their hands or feet. You can also visit us and get your treatment done and live a wart-free life.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                Book Your Procedure <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      {/* SECTION 6: FAQS */}
      <FAQAccordion faqs={WART_FAQS} title="Frequently Asked Questions" />

    </div>
  );
}

// ─── WART SPECIFIC FAQS ───
const WART_FAQS = [
  {
    question: "IWhat exactly are warts, and why did I get them?",
    answer: "Warts are non-cancerous skin growth caused by a virus named HPV. You can get by by touching a wart on another person or by touching the surface they touched. Warts are actually easily spread through contact with a person who already has them. For instance, from swimming pools, gyms or shared bathrooms."
  },
  {
    question: "Can I remove a wart at home with home remedies?",
    answer: "There are some over-the-counter activities that exist for the removal of warts, such as using a razor to remove them or improper ointments. These home remedies are quick but can lead to certain infections or scars. It is always recommended to look for a dermatologist for wart removal in India for safe and complete removal. By doing it from an expert, there is no chance of any infection, and they also ensure that the virus is destroyed."
  },
  {
    question: "Is the wart removal procedure painful?",
    answer: "No. The dermatologist usually applies a local anaesthetic cream or injection to numb the area before the procedure. This leads to no pain or minimal discomfort during the process of wart removal. "
  },
  {
    question: "How long does a wart removal session take?",
    answer: "A single session usually takes only 15 to 20 minutes. The total time duration for its removal also depends on the size and number of warts."
  },
  {
    question: "Will I need multiple sessions for wart removal?",
    answer: "It completely depends on the size and depth of the wart. If you have small warts, they may be removed in a single session. In case of larger or deeper warts, 2 to 4 sessions, spaced apart by 2 to 3 weeks. "
  },
  {
    question: "What is the cost of wart removal in India?",
    answer: "The cost of wart removal in India varies based on the complexity of the warts. There are various procedures that can be used for wart removal, and the average cost for wart removal can range from one thousand to five thousand rupees per lesion. The cost may be higher, often with discounts for removing multiple warts all at once."
  },
  {
    question: "Will the warts come back?",
    answer: "There are chances of recurring warts because the virus still remains in the surrounding area of the skin. However, getting them treated by a professional wart removal clinic in India significantly reduces the risk as compared to home treatments."
  },
  {
    question: "What are the risks or side effects of wart removal?",
    answer: "The primary side effects are actually very minor and temporary. The side effects which can occur are: redness, swelling and slight pain. But these side effects will get resolved on their own in a few days. In rare cases, especially on dark skin tones, there might be slight discolouration on the area of the wart after removal."
  },
  {
    question: "Are genital warts treated differently?",
    answer: "Yes, genital warts are treated differently and usually require specialised care. Dermatologists use special methods for it as compared to the removal of facial warts. Genital warts are removed with specialised chemical application or by cutting off the wart, as they are sexually transmitted. One thing you should strictly note is that you should never treat genital warts with any of the over-the-counter wart removers."
  },
  {
    question: "What should I do before the appointment?",
    answer: "There are many things that you should keep in mind before your wart removal procedure. The things include:Completely avoid using any irritants on the skin, whether it is any lotion or sunscreen. Tell your doctor if you are on blood thinners.Avoid smoking or excessive caffeine 2 to 3 days prior to the procedure."
  },
  {
    question: "How should I take care of my skin after the procedure?",
    answer: "The things you need to follow for taking the proper care of your skin include keeping the area clean and dry, applying the prescribed cream by the dermatologists, avoiding scratching or picking the crust from the affected area, and another important thing is to use sunscreen on the affected area to prevent dark spots. "
  },
  {
    question: "How can I prevent new warts after treatment?",
    answer: "You have to take lots of precautions to prevent it from recurring. The precautions include:Avoid sharing your towel, razor or clothes.Wear footwear in public showers/pools.Keep your skin healthy and moisturised."
  }
];
