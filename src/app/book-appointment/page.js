import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/constantdata';
import { getPageSeo } from '@/lib/seo';

const contact_detail = CONTACT_INFO.contact_info;
export async function generateMetadata() {
  return getPageSeo('book-appointment');
}

export default function BookAppointment() {
  return (
    <>
      <div className="relative pt-20 pb-20 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden flex flex-col items-start justify-center text-white px-10 md:px-16">

            <Image
              src="/bgimg.jpg"
              alt="Background"
              fill
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Book Appointment</h1>

            <div className="flex items-center gap-2 text-sm font-medium opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span>Book Appointment</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contact_detail.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all group">
                <div className="w-16 h-16 rounded-full bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] mb-6 group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-[#EA6490] mb-2">{item.label}</h4>
                {Array.isArray(item.value) ? item.value.map((item, i) => (
                  <p key={i} className="font-bold  text-gray-900">{item}</p>
                )) : <p className="font-bold text-gray-900">{item.label == "Location" ? <a href={item.link} target="_blank">{item.value}</a> : item.value}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
            {/* Form Section */}
            <div className="bg-[#EA6490] p-10 md:p-16">
              <div className="mb-10 text-white">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Book An Appointment</h2>

                <p className="opacity-80">Our medical experts will get back to you shortly.</p>
              </div>
              <AppointmentForm theme="pink" />
            </div>

            {/* Image Section */}
            <div className="relative min-h-[400px]">
              <Image
                src="/book-ap.jpg"
                alt="Treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#EA6490]/10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

