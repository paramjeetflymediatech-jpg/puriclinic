import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { Service } from '@/lib/models';
import { FAQ_DATA } from '@/constants/constantdata';

export const metadata = {
  title: 'Skin & Hair Care Services in Ludhiana, Punjab | Puri Skin Clinic',
  description: 'Explore the comprehensive range of skin, hair, and aesthetic treatments offered at Puri Skin Clinic.',
};

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  let services = [];
  try {
    const rawServices = await Service.findAll({ order: [['createdAt', 'DESC']] });
    services = rawServices.map(s => s.get({ plain: true }));
  } catch (err) {
    console.error("Failed fetching services:", err);
  }

  const hairServices = services.filter(s => s.category === 'hair');
  const skinServices = services.filter(s => s.category === 'skin');

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <div 
        className="relative w-full h-[400px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://puriskinclinic.com/wp-content/uploads/2023/06/page-header-bg.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white font-bold mb-6 drop-shadow-lg">
          Services
        </h1>
        <div className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest text-sm">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <FaChevronRight size={10} className="text-white/50" />
          <span className="text-white font-bold">Services</span>
        </div>
      </div>

      {/* Main Services Sections */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 space-y-32">
        
        {/* Hair Related Services */}
        <section id="hair">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading text-[#222222] font-bold">
              Hair Related Services
            </h2>
            <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full"></div>
            <p className="text-gray-500 text-xl font-medium max-w-4xl mx-auto italic border-l-4 border-[#EA6490] pl-6 py-2 bg-pink-50/30">
              "Why are Hair Treatment Services Required?"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {hairServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          {hairServices.length === 0 && (
            <div className="text-center p-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 mb-20">
               <p className="text-gray-400 font-bold italic uppercase tracking-widest">Registering clinical hair treatments...</p>
            </div>
          )}
          
          {/* Hair Specific FAQ */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <FAQAccordion 
                faqs={FAQ_DATA.hair} 
                title="Hair Treatment FAQs" 
            />
          </div>
        </section>

        {/* Skin Related Services */}
        <section id="skin">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading text-[#222222] font-bold">
              Skin Related Services
            </h2>
            <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full"></div>
            <p className="text-gray-500 text-xl font-medium max-w-4xl mx-auto italic border-l-4 border-[#4CA6AE] pl-6 py-2 bg-teal-50/30">
              "Advanced Dermatological Solutions for Glowing Skin"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {skinServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          {skinServices.length === 0 && (
            <div className="text-center p-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 mb-20">
               <p className="text-gray-400 font-bold italic uppercase tracking-widest">Preparing aesthetic skin treatments...</p>
            </div>
          )}

          {/* Skin Specific FAQ */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <FAQAccordion 
                faqs={FAQ_DATA.general} 
                title="Skin Treatment FAQs" 
            />
          </div>
        </section>

      </div>
    </div>
  );
}
