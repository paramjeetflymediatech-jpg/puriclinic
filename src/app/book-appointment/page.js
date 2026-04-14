import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaClock, FaPhoneAlt, FaRegCheckCircle, FaStar, FaShieldAlt } from 'react-icons/fa';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';

export const metadata = {
  title: 'Book Appointment | Puri Skin Clinic',
  description: 'Schedule a consultation with Dr. Gurinderjit Singh Puri or Dr. Ashwajit Singh at Puri Skin Clinic Ludhiana.',
};

export default function BookAppointment() {
  return (
    <>
      <div className="page-hero !bg-white border-b border-slate-50 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#EA6490 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container relative z-10">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={8} /> <span>Book Appointment</span>
          </div>
          <h1 className="section-title !mb-4">Schedule Your <span>Consultation</span></h1>
          <p className="section-subtitle mx-auto text-slate-500">
            Expert dermatological care tailored to your unique skin and hair needs.
          </p>
        </div>
      </div>

      <section className="section bg-slate-50/50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EA6490]/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* ─── LEFT COLUMN: INFO & TRUST ─── */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest">
                  Why Choose Puri Clinic
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
                  Advanced Care for <br /><span className="text-[#EA6490]">Your Skin Health</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Join over 10,000 satisfied patients who have trusted our legacy of dermatological excellence since 1988.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: <FaStar />, title: "Expert Doctors", desc: "Consult with Dr. G.S. Puri & Dr. Ashwajit Puri." },
                  { icon: <FaShieldAlt />, title: "Safe Procedures", desc: "FDA-approved technology and clinical protocols." },
                  { icon: <FaRegCheckCircle />, title: "Personalized Plans", desc: "Treatments tailored to your specific hair & skin type." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/5 flex items-center justify-center text-[#EA6490] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <FaClock className="text-[#EA6490]" /> Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm pb-2 border-b border-white/10">
                    <span className="text-white/60">Mon - Sat</span>
                    <span className="font-bold">10:00 AM - 07:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Sunday</span>
                    <span className="text-[#EA6490] font-bold underline underline-offset-4">By Appointment Only</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-white/40 mb-3 uppercase tracking-widest font-bold">Quick Contact</p>
                  <a href="tel:+919815673163" className="flex items-center gap-3 text-xl font-heading font-semibold hover:text-[#EA6490] transition-colors">
                    <FaPhoneAlt className="text-sm" /> +91 98156 73163
                  </a>
                </div>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: FORM ─── */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="card !p-0 overflow-hidden border-none shadow-[0_30px_100px_rgba(0,0,0,0.08)] bg-white relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#EA6490]"></div>
                <div className="p-8 md:p-12">
                  <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-2">Request an Appointment</h2>
                    <p className="text-slate-500 text-sm">Fill in your details and our team will get back to you shortly.</p>
                  </div>
                  <AppointmentForm theme="clinical" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
