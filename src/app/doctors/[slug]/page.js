'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaAward,FaMedal, FaUserMd, FaGraduationCap, FaCalendarCheck, FaClinicMedical } from 'react-icons/fa';

export default function DoctorBioPage({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const p = await paramsPromise;
      setParams(p);
    }
    init();
  }, [paramsPromise]);

  useEffect(() => {
    if (!params?.slug) return;
    
    async function fetchDoctor() {
      try {
        const res = await fetch(`/api/doctors/${params.slug}`);
        const data = await res.json();
        if (data.doctor) setDoctor(data.doctor);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDoctor();
  }, [params]);

  if (loading) return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
       <div className="w-12 h-12 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!doctor) return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
       <h1 className="text-4xl font-black mb-4">Doctor Not Found</h1>
       <Link href="/" className="text-[#EA6490] hover:underline uppercase font-bold tracking-widest text-xs">Return Home</Link>
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EA6490]/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <FaChevronRight size={8} /> 
            <span className="text-white/60">Our Staff</span> 
            <FaChevronRight size={8} /> 
            <span className="text-[#EA6490]">{doctor.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-white/5 rounded-[4rem] rotate-3 transition-transform duration-700"></div>
               <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-white/5 shadow-2xl">
                 {doctor.image_url ? (
                   <Image src={doctor.image_url} alt={doctor.name} fill className="object-cover" priority />
                 ) : (
                   <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white/10">
                     <FaUserMd size={100} />
                   </div>
                 )}
               </div>
            </div>
            
            <div className="lg:col-span-7 pb-8">
              <span className="inline-block px-4 py-1.5 bg-[#EA6490]/20 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-[#EA6490]/30 outline-none">
                {doctor.designation}
              </span>
              <h1 className="text-6xl md:text-8xl font-heading font-black leading-none mb-8 tracking-tighter">
                {doctor.name}
              </h1>
              <div className="flex flex-wrap gap-6 mb-10">
                 <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                    <FaGraduationCap className="text-[#EA6490] text-xl" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{doctor.degree}</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                    <FaAward className="text-[#EA6490] text-xl" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{doctor.experience} Clinical Excellence</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Bio & Details */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#EA6490] mb-8 flex items-center gap-4">
                  Professional Journey <div className="h-px flex-1 bg-white/10"></div>
                </h3>
                <div className="prose prose-2xl prose-invert max-w-none text-white/70 leading-relaxed font-medium">
                   <div dangerouslySetInnerHTML={{ __html: doctor.bio }} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                   <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                     <FaMedal className="text-[#EA6490]" /> Core Specialties
                   </h4>
                   <ul className="space-y-4 text-sm font-medium text-white/60">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></div> Advanced Skin Diagnostics
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></div> Dermatological Surgery
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></div> Aesthetic Rejuvenation
                      </li>
                   </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#EA6490]/5 to-transparent border border-[#EA6490]/10">
                   <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                     <FaClinicMedical className="text-[#EA6490]" /> Practice Philosophy
                   </h4>
                   <p className="text-sm font-medium text-white/60 leading-relaxed italic">
                     "My mission is to marry the science of clinical dermatology with the art of aesthetic medicine to deliver results that are both transformative and naturally beautiful."
                   </p>
                </div>
              </div>

              {/* Achievement Images Gallery */}
              {doctor.achievement_images && doctor.achievement_images.length > 0 && (
                <div className="pt-12">
                   <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#EA6490] mb-8 flex items-center gap-4">
                     Credentials & Recognition <div className="h-px flex-1 bg-white/10"></div>
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {doctor.achievement_images.map((img, idx) => (
                        <div key={idx} className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 group bg-white/5">
                           <Image 
                            src={img} 
                            alt={`Achievement ${idx + 1}`} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Achievements Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                <div className="bg-[#111] p-10 rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl">
                   <div className="absolute top-0 right-0 p-10 text-white/5 -translate-y-4 translate-x-4">
                      <FaAward size={120} />
                   </div>
                   <h3 className="text-xl font-bold font-heading mb-8 relative z-10">Key Achievements <br /> & Recognition</h3>
                   <div className="space-y-6 relative z-10">
                      <div dangerouslySetInnerHTML={{ __html: doctor.achievements }} className="achievements-html" />
                   </div>
                </div>

                <div className="bg-[#EA6490] p-10 rounded-[3.5rem] text-center shadow-xl hover:scale-[1.02] transition-transform group cursor-pointer overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <h2 className="text-2xl font-black mb-6 relative z-10">Ready for Consultation?</h2>
                   <Link href="/book-appointment" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] relative z-10 transition-colors hover:bg-black hover:text-white">
                      <FaCalendarCheck /> Book With {doctor.name.split(' ').slice(0, 2).join(' ')}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .achievements-html ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .achievements-html li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.6;
        }
        .achievements-html li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          background: #EA6490;
          border-radius: 2px;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
}
