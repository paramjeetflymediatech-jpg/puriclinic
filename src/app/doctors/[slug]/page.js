'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaAward, FaMedal, FaUserMd, FaGraduationCap, FaCalendarCheck, FaClinicMedical } from 'react-icons/fa';

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
    <div className="min-h-screen bg-white flex items-center justify-center">
       <div className="w-12 h-12 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!doctor) return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-800">
       <h1 className="text-4xl font-bold font-heading mb-4">Doctor Not Found</h1>
       <Link href="/" className="btn btn-outline">Return Home</Link>
    </div>
  );

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-gray-50/50 border-b border-gray-100 pt-32 pb-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link> 
            <FaChevronRight size={8} /> 
            <Link href="/doctors" className="hover:text-[#EA6490] transition-colors">Doctors</Link> 
            <FaChevronRight size={8} /> 
            <span className="text-[#EA6490]">{doctor.name}</span>
          </div>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Image Placeholder/Profile */}
            <div className="lg:col-span-5 relative">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative">
                 {doctor.image_url ? (
                   <Image src={doctor.image_url} alt={doctor.name} fill className="object-cover" priority />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-gray-200">
                     <FaUserMd size={100} />
                   </div>
                 )}
               </div>
               {doctor.experience && (
                  <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hidden md:block">
                     <div className="text-[#EA6490] text-3xl font-black">{doctor.experience}</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Experience</div>
                  </div>
               )}
            </div>
            
            {/* Meta Info */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[500px]">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-[#EA6490]/5 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#EA6490]/10">
                  {doctor.designation}
                </span>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  {doctor.name}
                </h1>
                <p className="text-lg text-gray-500 font-medium max-w-xl">
                  {doctor.degree}
                </p>
                <div className="h-1 w-20 bg-[#EA6490]/20 rounded-full"></div>
                
                {/* Introductory Bio (Part 1) */}
                {doctor.bio && (
                  <div className="pt-2">
                    <div 
                      className="text-gray-600 leading-relaxed font-medium prose prose-sm max-w-2xl break-words"
                      dangerouslySetInnerHTML={{ __html: doctor.bio }} 
                    />
                  </div>
                )}

                <div className="pt-6">
                  <Link href="/book-appointment" className="btn btn-primary px-12 py-5 text-xs tracking-widest">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Bio & Professional Details */}
            <div className="lg:col-span-7 space-y-12">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-gray-100">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#EA6490] mb-8">
                  Biography
                </h3>
                <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-medium break-words">
                   <div dangerouslySetInnerHTML={{ __html: doctor.bio_part2 }} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
                   <h4 className="text-gray-900 font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-3">
                     <FaMedal className="text-[#EA6490]" /> Key Expertise
                   </h4>
                   <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]/30"></div> Advanced Skin Care
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]/30"></div> Surgical Dermatology
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EA6490]/30"></div> Laser Treatments
                      </li>
                   </ul>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
                   <h4 className="text-gray-900 font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-3">
                     <FaClinicMedical className="text-[#EA6490]" /> Philosophy
                   </h4>
                   <p className="text-sm font-medium text-gray-400 leading-relaxed italic">
                     "Delivering personalized clinical excellence through a combination of cutting-edge technology and compassionate patient care."
                   </p>
                </div>
              </div>

              {/* Recognition Gallery */}
              {doctor.achievement_images && doctor.achievement_images.length > 0 && (
                <div className="pt-8">
                   <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-100 pb-4">
                     Recognition & Certifications
                   </h3>
                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                      {doctor.achievement_images.map((img, idx) => (
                        <div key={idx} className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white group shadow-sm">
                           <Image 
                            src={img} 
                            alt={`Recognition ${idx + 1}`} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700 p-4" 
                           />
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Achievements Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-lg relative overflow-hidden">
                   <div className="absolute -top-10 -right-10 text-[#EA6490]/5">
                      <FaAward size={200} />
                   </div>
                   <h3 className="text-2xl font-bold font-heading text-gray-900 mb-8 relative z-10">Professional <br />Achievements</h3>
                   <div className="relative z-10 break-words">
                      <div dangerouslySetInnerHTML={{ __html: doctor.achievements }} className="achievements-html" />
                   </div>
                </div>

                <div className="bg-[#EA6490] p-10 rounded-[3rem] text-center shadow-xl shadow-[#EA6490]/20">
                   <h2 className="text-xl font-bold text-white mb-6">Start Your Journey to Better Skin</h2>
                   <Link href="/book-appointment" className="inline-flex items-center gap-3 bg-white text-[#EA6490] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:bg-gray-900 hover:text-white">
                      <FaCalendarCheck /> Book Appointment
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
          padding-left: 28px;
          margin-bottom: 24px;
          font-weight: 600;
          color: #4B5563;
          font-size: 14px;
          line-height: 1.6;
        }
        .achievements-html li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          background: #EA6490;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
