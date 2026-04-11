import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCheckCircle, FaStethoscope, FaClock, FaShieldAlt } from 'react-icons/fa';
import { Service } from '@/lib/models';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';
import ContactForm from '@/components/ContactForm/ContactForm';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = await Service.findOne({ where: { slug: resolvedParams.slug } });
  
  if (!service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: `${service.name} Treatment | Puri Skin Clinic`,
    description: service.description?.substring(0, 160) + '...',
  };
}

export default async function SingleService({ params }) {
  const resolvedParams = await params;
  const rawService = await Service.findOne({ where: { slug: resolvedParams.slug } });

  if (!rawService) {
    notFound();
  }
  
  const service = rawService.get({ plain: true });

  // Dynamically select FAQ data based on category
  const faqs = service.category === 'hair' ? FAQ_DATA.hair : FAQ_DATA.general;
  const faqTitle = service.category === 'hair' ? 'Hair Treatment FAQs' : 'Skin Treatment FAQs';

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Section */}
      <div 
        className="relative w-full h-[450px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://puriskinclinic.com/wp-content/uploads/2023/06/page-header-bg.jpg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-heading text-white font-bold mb-8 drop-shadow-2xl">
            {service.name}
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
            <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
            <FaChevronRight size={10} className="text-white/30" />
            <Link href="/services" className="hover:text-[#EA6490] transition-colors">Services</Link>
            <FaChevronRight size={10} className="text-white/30" />
            <span className="text-[#EA6490] font-black">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Feature Image */}
            <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 group">
              <Image 
                src={service.image_url || 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200'} 
                alt={service.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/20">
                <span className="text-[#EA6490] font-black uppercase text-[10px] tracking-widest flex items-center gap-2">
                   <FaStethoscope /> Specialized Treatment
                </span>
              </div>
            </div>

            {/* Description Area */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-heading text-[#222222] font-bold mb-8 flex items-center gap-4">
                <span className="w-2 h-10 bg-[#EA6490] rounded-full"></span>
                About the Treatment
              </h2>
              <div className="text-gray-600 leading-[2] text-xl font-medium whitespace-pre-wrap">
                {service.description}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="bg-[#FAFAFA] rounded-[3rem] p-12 border border-gray-100 mb-12">
              <h3 className="text-3xl font-heading text-[#222222] font-bold mb-10">Why Choose This Treatment?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BenefitItem 
                  icon={<FaCheckCircle />} 
                  title="Expert Precision" 
                  text="Performed by Ludhiana's leading dermatologists with decades of experience."
                />
                <BenefitItem 
                  icon={<FaShieldAlt />} 
                  title="FDA Approved" 
                  text="We use only the safest, clinically proven, and FDA-approved technologies."
                />
                <BenefitItem 
                  icon={<FaClock />} 
                  title="Minimal Downtime" 
                  text="Optimized procedures designed for quick recovery and lasting results."
                />
                <BenefitItem 
                  icon={<FaStethoscope />} 
                  title="Customized Care" 
                  text="Every treatment plan is tailored specifically to your skin and hair type."
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
         
        </div>

        {/* Dynamic FAQ Section */}
        <div className="mt-24 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 mb-12">
          <FAQAccordion 
            faqs={faqs} 
            title={faqTitle} 
          />
        </div>
        <div className="flex">
          <div className='w-5/12'>
            <h2 className='text-3xl font-bold mb-4'>Choose Puri Skin Clinic for Any Hair Treatment Needed!</h2>
            <p>Suffering through any issues of hair, hair loss, and permanent balding can be thoroughly difficult to accept in an essential manner. It can start to affect a person’s confidence and cause issues with regard to their self-esteem. Therefore, it is imperative to make sure that one can seek hair treatment and transplant services in Punjab effectively. With the experts of Puri Skin Clinic, you can make certain that you are able to thoroughly and actively address any hair-related issue in a thorough and effective manner. Say hi to rejuvenated hair and goodbye to baldness with the help of our rigorous hair treatment and transplant options today!</p>
          </div>
          <div className='px-16 py-4 bg-pink'>
            <BlogSidebar  theme='clinical' props={{width:'w-full'}}  />
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon, title, text }) {
  return (
    <div className="flex gap-5">
      <div className="text-[#EA6490] text-2xl shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-[#222222] font-bold text-lg mb-2">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed font-medium">{text}</p>
      </div>
    </div>
  );
}
