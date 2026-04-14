'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { FaChevronRight, FaCheckCircle, FaStethoscope, FaClock, FaShieldAlt, FaImages, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function SingleService() {
  const params = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/admin/services`);
        const data = await res.json();
        const found = data.services.find(s => s.slug === params.slug);
        if (found) {
          // Parse all JSON fields if they are strings
          ['gallery_images', 'treatment_types', 'symptoms', 'treatments', 'custom_faq'].forEach(field => {
            if (typeof found[field] === 'string') {
              try {
                found[field] = JSON.parse(found[field]);
              } catch (e) {
                found[field] = [];
              }
            }
          });
          setService(found);
        }
      } catch (err) {
        console.error("Failed fetching service:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    notFound();
  }

  const faqs = service.custom_faq && service.custom_faq.length > 0 ? service.custom_faq : (service.category === 'hair' ? FAQ_DATA.hair : FAQ_DATA.general);
  const faqTitle = service.custom_faq && service.custom_faq.length > 0 ? 'Frequently Asked Questions' : (service.category === 'hair' ? 'Hair Treatment Insights' : 'Skin Science FAQ');

  return (
    <div className="bg-white min-h-screen">
      {/* ── CINEMATIC HERO SECTION ── */}
      <div 
        className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center text-center px-6 overflow-hidden bg-slate-900"
      >
        <div className="absolute inset-0 z-0">
           <img 
            src={service.hero_image || service.image_url || 'https://puriskinclinic.com/wp-content/uploads/2023/06/page-header-bg.jpg'} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto mt-20">
          <div className="inline-flex items-center gap-4 text-[#EA6490] font-black uppercase tracking-[0.4em] text-[10px] mb-8 bg-white/10 backdrop-blur-xl px-8 py-3 rounded-full border border-white/20">
            <FaStethoscope className="animate-pulse" /> Precision Dermatology
          </div>
          <h1 className="text-5xl md:text-[7rem] font-black text-white mb-6 drop-shadow-2xl leading-[1] tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            {service.name}
          </h1>
          {service.tagline && (
            <p className="text-xl md:text-3xl font-medium text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg italic">
              "{service.tagline}"
            </p>
          )}
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] bg-white/80 backdrop-blur-md px-10 py-5 rounded-3xl border border-slate-100 shadow-2xl">
            <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
            <FaChevronRight size={8} className="text-slate-300" />
            <Link href="/services" className="hover:text-[#EA6490] transition-colors">Specialized Services</Link>
            <FaChevronRight size={8} className="text-slate-300" />
            <span className="text-[#EA6490]">{service.name}</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="max-w-[1440px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT COLUMN: PRIMARY CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* GALLERY / PRIMARY MEDIA */}
            <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl border border-slate-100">
              {service.gallery_images && service.gallery_images.length > 0 ? (
                <Swiper
                  modules={[Autoplay, Pagination, Navigation, EffectFade]}
                  effect="fade"
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="aspect-[16/10]"
                >
                  {service.gallery_images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={img} className="w-full h-full object-cover" alt={`${service.name} gallery ${idx}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="relative aspect-[16/10]">
                   <img 
                    src={service.image_url || 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200'} 
                    alt={service.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              
              <div className="absolute top-10 left-10 z-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/20">
                <span className="text-[#EA6490] font-black uppercase text-[10px] tracking-widest flex items-center gap-3">
                   <FaStethoscope className="animate-pulse" /> Precision Dermatology
                </span>
              </div>
            </div>

            {/* CLINICAL ABOUT SECTION */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-1.5 h-24 bg-[#EA6490] rounded-full hidden md:block"></div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Understanding <span className="text-[#EA6490]">The Condition</span>
              </h2>
              <div className="text-slate-600 leading-[2.2] text-xl font-medium whitespace-pre-wrap max-w-none bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100">
                {service.about_markdown || service.description}
              </div>
            </div>

            {/* TREATMENT TYPES GRID */}
            {service.treatment_types && service.treatment_types.length > 0 && (
              <div className="space-y-12">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Classification <span className="text-[#4CA6AE]">& Variants</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.treatment_types.map((type, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-[#4CA6AE]/10 transition-colors"></div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-10">{type.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SIGNS & SYMPTOMS */}
            {service.symptoms && service.symptoms.length > 0 && (
              <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA6490]/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4CA6AE]/10 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black mb-12" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    Signs & <span className="text-[#EA6490]">Observations</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {service.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-6 group">
                        <div className="w-10 h-10 rounded-xl bg-[#EA6490]/20 flex items-center justify-center shrink-0 border border-[#EA6490]/20 text-[#EA6490] group-hover:scale-110 transition-transform">
                          <FaCheckCircle />
                        </div>
                        <p className="text-xl font-bold text-slate-100 leading-snug">{symptom}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TREATMENT PATHWAYS */}
            {service.treatments && service.treatments.length > 0 && (
              <div className="space-y-12">
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Advanced <span className="text-[#EA6490]">Treatment Paths</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.treatments.map((tr, idx) => (
                    <div key={idx} className="p-10 rounded-[3rem] border border-slate-100 bg-white hover:border-[#EA6490]/20 hover:shadow-2xl transition-all group">
                       <div className="w-16 h-16 rounded-2xl bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] text-2xl mb-8 group-hover:scale-110 transition-transform">
                          <FaStethoscope />
                       </div>
                       <h4 className="text-xl font-bold text-slate-900 mb-4">{tr.title}</h4>
                       <p className="text-slate-500 font-medium leading-[1.8]">{tr.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DYNAMIC FAQ */}
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border border-slate-50 bg-slate-50/10">
              <FAQAccordion 
                faqs={faqs} 
                title={faqTitle} 
              />
            </div>

            {/* CLINIC CTA SEPARATOR */}
            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Consult with North India's Pioneer</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Over 40 years of dermatological excellence. Book your assessment today for a medical-grade transformation.
                  </p>
               </div>
               <Link href="/book-appointment" className="bg-[#EA6490] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-[#EA6490]/20 whitespace-nowrap">
                  Book Virtual Slot
               </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR (4 cols) */}
          <aside className="lg:col-span-4 sticky top-32 space-y-12">
            
            {/* CTA CARD */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#EA6490]/10 blur-3xl rounded-full"></div>
               <FaStethoscope className="text-[#EA6490] text-4xl mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Immediate Assistance</h3>
               <p className="text-slate-400 text-sm font-medium mb-8">
                  Get in touch with our patient care team for pricing and availability.
               </p>
               <a href="tel:+919876170054" className="block w-full py-5 border-2 border-white/10 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-[10px] mb-4 hover:border-[#EA6490] hover:bg-[#EA6490] transition-all">
                  Call: +91 98761 70054
               </a>
            </div>

            {/* RECENT INSIGHTS */}
            <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-8 overflow-hidden">
              <h3 className="text-xl font-bold text-slate-900 mb-8 px-4 flex items-center gap-3">
                 <span className="w-1.5 h-6 bg-[#4CA6AE] rounded-full"></span> Recent Insights
              </h3>
              <BlogSidebar theme="clinical" props={{ width: 'w-full' }} />
            </div>

            {/* CLINIC BADGE */}
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center gap-6">
               <FaCheckCircle className="text-[#4CA6AE] text-3xl" />
               <div className="text-left font-bold text-slate-900 leading-tight">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Clinic Status</p>
                  VERIFIED CLINICAL<br/>CENTER
               </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, text, color }) {
  const isPink = color === 'pink';
  return (
    <div className={`p-10 rounded-[3rem] border transition-all hover:shadow-xl group ${isPink ? 'bg-[#EA6490]/5 border-[#EA6490]/10 hover:border-[#EA6490]/30' : 'bg-[#4CA6AE]/5 border-[#4CA6AE]/10 hover:border-[#4CA6AE]/30'}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-6 shadow-sm transition-transform group-hover:scale-110 ${isPink ? 'bg-white text-[#EA6490]' : 'bg-white text-[#4CA6AE]'}`}>
         {icon}
      </div>
      <h4 className="text-slate-900 font-bold text-lg mb-3">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">{text}</p>
      <div className={`w-0 h-1 rounded-full mt-6 transition-all group-hover:w-12 ${isPink ? 'bg-[#EA6490]' : 'bg-[#4CA6AE]'}`}></div>
    </div>
  );
}
