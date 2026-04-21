import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkedAlt } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm/ContactForm';
import Image from 'next/image';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants/constantdata';
import { getPageSeo } from '@/lib/seo';

import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata() {
  return getPageSeo('contact-us');
}
export default async function ContactUs() {
  const seoData = await getPageSeo('contact-us');
  const contact_detail = CONTACT_INFO.contact_info;
  const social_links = SOCIAL_LINKS.social_links;
  return (
    <div className="bg-white min-h-screen">
      <JsonLd schema={seoData.schema} />
      <div className="relative pt-10 pb-10 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden flex flex-col items-start justify-center text-white px-10 md:px-16">
            <Image 
              src="/dermatology-3.jpg" 
              alt="Contact Hero" 
              fill 
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="flex items-center gap-2 text-sm font-medium opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#EA6490] font-black uppercase tracking-[0.3em] text-[16px] block mb-4">Get In Touch</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Contact Us For Further Information !</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contact_detail.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all group">
                <div className="w-16 h-16 rounded-full bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] mb-6 group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-[#EA6490] mb-2">{item.label}</h4>
                {Array.isArray(item.value) ? item.value.map((val, idx) => (
                  <p key={idx} className="font-bold text-gray-900">{val}</p>
                )) : (
                  <p className="font-bold text-gray-900">
                    {item.label === "Location" ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#EA6490]">{item.value}</a>
                    ) : item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center  border-b   pb-20">
            <h3 className="text-3xl font-heading  font-semibold mb-10 ">Follow us on</h3>
            <div className="flex justify-center gap-6">
              {social_links.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center  hover:text-white  transition-all duration-500 text-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transform" style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-slate-50/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.08)] bg-white">
            {/* Map Section */}
            <div className="h-[500px] lg:h-auto min-h-[500px] grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13697.8080035035!2d75.8361546!3d30.873215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825e0e7aeb65%3A0xe96c4ccfb238da27!2sPuri%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Maps Location"
              />
            </div>

            {/* Form Section */}
            <div className="bg-[#EA6490] p-10 md:p-16 text-white">
              <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                <p className="opacity-80">We'd love to hear from you. Send us a message!</p>
              </div>
              <ContactForm theme="pink" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

