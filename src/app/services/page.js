'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaStethoscope, FaFlask, FaUserMd } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/admin/services');
        const data = await res.json();
        setServices(data.services || []);
      } catch (err) {
        console.error("Failed fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const hairServices = services.filter(s => s.category === 'hair');
  const skinServices = services.filter(s => s.category === 'skin');

  return (
    <div className="bg-white min-h-screen">
      {/* ── CLINICAL HERO SECTION ── */}
      <div 
        className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center text-center px-6 overflow-hidden bg-slate-900"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://puriskinclinic.com/wp-content/uploads/2023/06/page-header-bg.jpg" 
            className="w-full h-full object-cover opacity-50 contrast-125"
            alt="Clinic Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/20 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#EA6490]/20 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-sm border border-[#EA6490]/20">
            Center of Excellence
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Our Medical <span className="text-[#EA6490]">Services</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/70 font-bold uppercase tracking-[0.2em] text-[10px]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={8} className="text-white/30" />
            <span className="text-white/90">Services</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 space-y-32">
        
        {/* 1. HAIR RELATED SERVICES */}
        <section id="hair" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#EA6490] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <FaUserMd size={14} /> Trichology Division
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Hair Related Services
              </h2>
              <div className="w-24 h-1.5 bg-[#EA6490] rounded-full mb-8"></div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium italic border-l-4 border-[#EA6490] pl-6 py-2 bg-[#EA6490]/5">
                "Specialized hair restoration and transplant services using globally recognized FUE and PRP techniques."
              </p>
            </div>
            <Link href="/book-appointment" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#EA6490] transition-all shadow-xl shadow-slate-900/10 active:scale-95 whitespace-nowrap">
              Consult a Specialist
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              [1, 2, 3].map(i => <div key={i} className="h-[400px] bg-slate-50 animate-pulse rounded-[3rem]"></div>)
            ) : hairServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          
          <div className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <FAQAccordion 
                faqs={FAQ_DATA.hair} 
                title="Hair Treatment Insights" 
            />
          </div>
        </section>

        {/* 2. SKIN RELATED SERVICES */}
        <section id="skin" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-right">
             <div className="md:order-2 max-w-2xl text-left md:text-right">
              <div className="flex items-center md:justify-end gap-3 text-[#4CA6AE] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <FaFlask size={14} /> Dermatological Science
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Skin Related Services
              </h2>
              <div className="w-24 h-1.5 bg-[#4CA6AE] rounded-full mb-8 ml-0 md:ml-auto"></div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium italic border-r-0 md:border-r-4 border-l-4 md:border-l-0 border-[#4CA6AE] pl-6 md:pl-0 pr-0 md:pr-6 py-2 bg-[#4CA6AE]/5">
                "Advanced aesthetic solutions for rejuvenation, pigmentation, and chronic skin conditions."
              </p>
            </div>
            <Link href="/book-appointment" className="md:order-1 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#4CA6AE] transition-all shadow-xl shadow-slate-900/10 active:scale-95 whitespace-nowrap">
              Check Availability
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              [1, 2, 3].map(i => <div key={i} className="h-[400px] bg-slate-50 animate-pulse rounded-[3rem]"></div>)
            ) : skinServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <FAQAccordion 
                faqs={FAQ_DATA.general} 
                title="Dermatology FAQ" 
            />
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA6490]/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4CA6AE]/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <FaStethoscope className="text-[#EA6490] text-5xl mx-auto mb-8 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Ready for a Professional Transformation?
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              Book a detailed consultation with Ludhiana's most trusted skin and hair specialists.
            </p>
            <Link 
              href="/book-appointment" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#EA6490] hover:text-white transition-all shadow-2xl active:scale-95"
            >
              Secure Your Slot <FaChevronRight size={12} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
