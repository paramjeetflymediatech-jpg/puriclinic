'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronRight, FaBullseye, FaFlag, FaHeart, FaHome, FaCheckCircle } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ─── ENHANCED HERO SECTION (Matching image style) ─── */}
      <div className="container py-10">
        <div className="relative w-full h-[180px] md:h-[250px] rounded-[2.5rem] overflow-hidden flex items-center justify-center">
          <Image 
            src="/bg-about-image.jpg" 
            alt="Puri Skin Clinic Hero" 
            fill 
            priority
            className="object-cover"
          />
          {/* Greyish/Blurred Overlay Card */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 bg-slate-900/60 backdrop-blur-md px-12 py-8 rounded-[2rem] text-center text-white border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <Link href="/" className="hover:text-[#EA6490] transition-colors flex items-center gap-2">
                <FaHome className="text-[#EA6490]" /> Home
              </Link>
              <FaChevronRight className="text-white/40 text-[10px]" />
              <span className="text-white/80">About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SLIDER + CONTENT SECTION ─── */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: 3-Image Slider */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] lg:aspect-auto lg:h-[550px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="about-usage-slider h-full"
              >
                {[
                  "WhatsApp-Image-2025-07-22-at-1.27.35-PM-1-scaled-1 copy.avif",
                  "WhatsApp-Image-2025-07-22-at-1.27.43-PM-1-scaled-1 copy.avif",
                  "WhatsApp-Image-2025-07-22-at-1.27.52-PM-1-scaled-1 copy.avif"
                ].map((fileName, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <Image 
                        src={`/${fileName}`} 
                        alt={`Clinic Interior ${idx + 1}`} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <style jsx global>{`
                .about-usage-slider .swiper-button-next,
                .about-usage-slider .swiper-button-prev {
                  color: white !important;
                  background: rgba(0, 0, 0, 0.3);
                  width: 44px !important;
                  height: 44px !important;
                  border-radius: 12px;
                  backdrop-filter: blur(4px);
                  transition: all 0.3s ease;
                }
                .about-usage-slider .swiper-button-next:hover,
                .about-usage-slider .swiper-button-prev:hover {
                  background: #EA6490;
                }
                .about-usage-slider .swiper-button-next:after,
                .about-usage-slider .swiper-button-prev:after {
                  font-size: 18px !important;
                  font-weight: 900;
                }
                .about-usage-slider .swiper-pagination-bullet {
                  background: white;
                  opacity: 0.5;
                }
                .about-usage-slider .swiper-pagination-bullet-active {
                  background: #EA6490 !important;
                  opacity: 1;
                  width: 24px;
                  border-radius: 4px;
                }
              `}</style>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 leading-[1.2]">
                  Puri Skin Clinic –  
                  <span className="text-[#EA6490]"> Attain Advanced Dermatological Care!</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-600 text-[15px] leading-[1.8] font-light">
                <p>
                  <strong className="text-slate-900">Puri Skin Clinic</strong> offers an ideal amalgamation of services for all those seeking hair transplant and skin problem solutions. With the help of the best skin clinic in your area, you can make certain that you are able to thoroughly address any and all concerns affecting your physical appearance. From face rejuvenation to hair transplant techniques, you can easily enhance the possibility of undergoing advanced dermatological care.
                </p>
                <p>
                  Our team of experts ensures that you can access personalised solutions, specifically catered to your needs. Access advanced technology and medical expertise to ensure that you can easily find safe, effective, and long-lasting results. 
                </p>
                <p>
                  <strong className="text-slate-900">At Puri Skin Clinic</strong>, we aim to ensure that your care is in capable hands. We strive to not only restore and rejuvenate your appearance but also your confidence in an essential manner!
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 pt-6 border-t border-slate-100">
                {[
                  "Expert Care", 
                  "Advanced Technology", 
                  "Hair Solutions", 
                  "Skin Rejuvenation", 
                  "Vitiligo Treatment", 
                  "Patient Satisfaction"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EA6490]/10 flex items-center justify-center text-[#EA6490] group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-300">
                      <FaCheckCircle size={16} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MISSION, VISION, VALUES ─── */}
      <section className="section py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaFlag />, 
                title: "Our Mission", 
                desc: "Equipping our clinic with world-class equipment and providing premium treatments that cater to individual patient needs." 
              },
              { 
                icon: <FaBullseye />, 
                title: "Our Vision", 
                desc: "Consistently refining our processes to maintain highest standards of clinical excellence as a world-class center." 
              },
              { 
                icon: <FaHeart />, 
                title: "Our Values", 
                desc: "Integrity, innovation, and unwavering focus on patient safety. We treat every patient with the personalized care they deserve." 
              }
            ].map((card, i) => (
              <div key={i} className="group p-12 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] text-3xl mb-8 group-hover:bg-[#EA6490] group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ─── FAQ SECTION ─── */}
      <section className="py-24 bg-slate-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#4CA6AE]/10 text-[#4CA6AE] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Common Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">
              Frequently Asked <span className="text-[#EA6490]">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="space-y-4">
              {FAQS.slice(0, 7).map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
            <div className="space-y-4">
              {FAQS.slice(7).map((faq, index) => (
                <FAQItem key={index + 7} faq={faq} index={index + 7} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ─── CALL TO ACTION ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA6490]/20 blur-[100px] -mr-32 -mt-32"></div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
                  Ready to Restore Your <span className="text-[#EA6490]">Confidence?</span>
                </h2>
                <Link href="/book-appointment" className="inline-block bg-[#EA6490] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#EA6490] transition-all duration-500 shadow-xl shadow-[#EA6490]/20">
                  Book Your Consultation
                </Link>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── FAQ DATA ───
const FAQS = [
  {
    question: "How can I find the best skin doctor in Ludhiana for my persistent acne?",
    answer: "If you have been struggling with persistent acne, then make sure to find the best skin doctor on Google for the most effective results. You can simply search 'best skin doctor near me', and you'll get the list of best skin doctors near you, providing effective skin treatment for your persistent acne."
  },
  {
    question: "When should I expect results of Botox surgery for my face?",
    answer: "You will start noticing noticeable changes in your face within three to five days after the completion of your Botox surgery. Such results might remain for a few months, thus providing you with satisfactory results."
  },
  {
    question: "Does a healthy diet help in managing my acne?",
    answer: "Yes, a healthy diet holds great importance in managing your acne by effectively managing the blood sugar level in your body, which can be the major reason for the formation of acne. However, if your condition is worse, then make sure to engage with the professionals of Puri Skin Clinic, who will provide thorough guidance on this."
  },
  {
    question: "What are the healthy lifestyle practices for managing my acne?",
    answer: "To manage your acne, make sure to follow a healthy diet, which does not include any high-sugar-enriched food items. Along with this, clean your face in a gentle manner without using any harsh or chemical products, with the aim of managing acne."
  },
  {
    question: "I am currently dealing with vitiligo, so is it concerning if I didn't follow sun protection?",
    answer: "Yes, it is concerning if you didn’t follow any sun protection method to protect your skin during vitiligo, as UV rays can directly affect your skin condition. As a result of this, your condition might worsen. Therefore, make sure to use sunglasses or a hat to protect your skin from the sun in an essential manner."
  },
  {
    question: ".What is done in vitiligo treatment?",
    answer: "Vitiligo treatment includes both medications and different treatments that can effectively help in restoring the natural skin colour. The skin specialist of Puri Skin Clinic makes sure to provide you with the best vitiligo treatment in India, including medication or any surgical procedure that is usually recommended for complex cases, in an essential manner."
  },
  {
    question: "How can I hide my vitiligo skin?",
    answer: "There are some waterproof cosmetics that can efficiently help in hiding your vitiligo skin in an essential manner. Also, there are many sun-tanning lotions that can help in hiding your vitiligo skin, thus preventing you from embarrassment and shame. However, before using such products, make sure to have a word with your skin doctor regarding this."
  },
  {
    question: "When is professional help necessary for managing my acne?",
    answer: "If you are unable to get rid of acne through over-the-counter medicines and constantly notice the painful cysts on your face, then make sure to consult the best acne doctor in Punjab. Through such professional help, you’ll be able to get healthy skin."
  },
  {
    question: "Which skin treatment would be best for an aging and wrinkled face?",
    answer: "You can opt for Botox or laser resurfacing treatment for your ageing and wrinkled face, as such skin treatments hold great significance in removing the fine lines and wrinkles from your face. For the more precise results, make sure to engage with Puri Skin Clinic, which is proficient in providing you with the best skin care treatment in India with accurate results."
  },
  {
    question: "Is undergoing skin treatment safe for sensitive skin?",
    answer: "In order to be sure regarding the safety of skin treatment for your sensitive skin, make sure to have a word with your dermatologist regarding this, as they will guide you in a better way. Usually, the skin treatments are safe when they are performed by experienced and skilled professionals."
  },
  {
    question: "Is there any age limit for undergoing hair transplant surgery in India?",
    answer: "Generally, there’s no age limit to undergo hair transplant surgery in India; however, you can make sure to have a thorough conversation regarding this surgery with your professionals for appropriate results."
  },
  {
    question: "Are skin treatments effective or not?",
    answer: "Generally, the effectiveness of skin treatments such as lasers, peels and fillers depends on the expertise of the skin doctor in an essential manner. For effective results of skin treatments, you can engage with Puri Skin Clinic, which is proficient in providing you with the best skin treatment in India."
  },
  {
    question: "What factors determine the cost of skin treatment?",
    answer: "There are various factors that significantly determine the cost of skin treatment, including the specific technique, along with the complexity of the particular issue. Overall, the general cost range of non-invasive skin treatment is around Rs. 6,000, whereas complex procedures include a cost range of around Rs. 20,000."
  }
];

// ─── FAQ ITEM COMPONENT ───
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#4CA6AE] font-black text-sm opacity-50">{(index + 1).toString().padStart(2, '0')}.</span>
          <span className="font-bold text-slate-800 text-[16px] leading-tight">{faq.question}</span>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <FaChevronRight className={`text-[#EA6490] ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-slate-600 font-light leading-relaxed border-t border-slate-50 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
