import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkedAlt } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm/ContactForm';
import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('contact-us');
}

export default function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Section - Fixed with Background Image */}
      <div 
        className="relative w-full h-[400px] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://puriskinclinic.com/wp-content/uploads/2023/06/page-header-bg.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white font-bold mb-6 drop-shadow-lg">
          Contact Us
        </h1>
        <div className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest text-sm">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
             <span className="opacity-70">Home</span>
          </Link>
          <FaChevronRight size={10} className="text-white/50" />
          <span className="text-white">Contact Us</span>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-[#EA6490] font-heading text-sm font-bold uppercase tracking-[0.4em] mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-4xl md:text-[2.75rem] font-heading text-[#222222] font-bold leading-tight max-w-4xl mx-auto">
            Contact Us For Further Information !
          </p>
        </div>

        {/* Info Cards Grid - 4 Column Layout with refined padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          <ContactInfoCard 
            icon={<FaMapMarkerAlt />} 
            title="Location" 
            content={<>77, Vishal Nagar Ext, Vishal Nagar, Shaheed Bhagat Singh Nagar, Ludhiana, Punjab - 141013</>} 
          />
          <ContactInfoCard 
            icon={<FaClock />} 
            title="Working Hours" 
            content="Mon - Sun: 9:00 AM - 9:00 PM" 
          />
          <ContactInfoCard 
            icon={<FaEnvelope />} 
            title="Email" 
            content={<a href="mailto:puriskinclinic@gmail.com" className="hover:text-[#EA6490]">puriskinclinic@gmail.com</a>} 
          />
          <ContactInfoCard 
            icon={<FaPhoneAlt />} 
            title="Call Us" 
            content={
              <div className="flex flex-col">
                <a href="tel:+919876170054" className="hover:text-[#EA6490]">+91-9876170054</a>
                <a href="tel:+919815673163" className="hover:text-[#EA6490]">+91-9815673163</a>
              </div>
            } 
          />
        </div>

        {/* Social Section - Refined Follow us on text */}
        <div className="text-center mb-24 border-b border-gray-100 pb-20">
          <h3 className="text-[2.5rem] font-heading text-[#222222] font-semibold mb-10 italic">Follow us on</h3>
          <div className="flex justify-center gap-6">
            <SocialIcon icon={<FaFacebookF />} href="#" />
            <SocialIcon icon={<FaInstagram />} href="#" />
            <SocialIcon icon={<FaYoutube />} href="#" />
            <SocialIcon icon={<FaMapMarkedAlt />} href="#" />
          </div>
        </div>

        {/* Map & Form Section - Replicating the 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] bg-white">
          {/* Map Column */}
          <div className="h-[500px] lg:h-auto min-h-[600px] grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13697.8080035035!2d75.8361546!3d30.873215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825e0e7aeb65%3A0xe96c4ccfb238da27!2sPuri%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Puri Skin Clinic Location"
            />
          </div>

          {/* Form Column - Matching the Solid Pink Theme from the screenshot */}
          <div className="bg-[#e06686] p-12 md:p-20 text-white">
            <h3 className="text-4xl font-heading font-bold mb-12 text-center tracking-tight">
               Contact Us
            </h3>
            <ContactForm theme="pink" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({ icon, title, content }) {
  return (
    <div className="bg-white p-12 rounded-[2.5rem] text-center flex flex-col items-center group hover:bg-[#FAFAFA] hover:shadow-2xl hover:shadow-[#EA6490]/5 transition-all duration-700 border border-transparent hover:border-[#EA6490]/10">
      <div className="w-20 h-20 rounded-full bg-white text-[#EA6490] flex items-center justify-center text-3xl mb-8 shadow-[0_15px_35px_rgba(234,100,144,0.15)] group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-700">
        {icon}
      </div>
      <h4 className="text-2xl font-heading text-[#222222] font-bold mb-5 tracking-tight uppercase">{title}</h4>
      <div className="text-gray-500 font-medium leading-relaxed px-4">
        {content}
      </div>
    </div>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href} 
      className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EA6490] hover:border-[#EA6490] transition-all duration-500 text-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transform"
    >
      {icon}
    </a>
  );
}
