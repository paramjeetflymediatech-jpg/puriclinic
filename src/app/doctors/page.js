'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaChevronRight, FaPlus, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

export default function DoctorsListPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/admin/doctors');
        const data = await res.json();
        setDoctors(data.doctors || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
       <div className="w-12 h-12 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pb-22">
      {/* ─── HERO SECTION ─── */}
      <div className="relative pt-32 pb-16 md:pt-10 md:pb-10 overflow-hidden bg-slate-50  /50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EA6490]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4CA6AE]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-5 py-2 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-6 border border-[#EA6490]/10">
            Expert Medical Team
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.95] mb-8 text-slate-900 tracking-tight">
            Meet Our <span className="text-[#EA6490]"> Specialists</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Puri Skin Clinic is home to world-class dermatologists and aesthetic specialists dedicated to delivering science-backed results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {doctors.map((doctor) => (
            <Link 
              key={doctor.id} 
              href={`/doctors/${doctor.slug}/`}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/80 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-slate-50">
                {doctor.image_url ? (
                  <Image 
                    src={doctor.image_url} 
                    alt={doctor.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-200">
                    <FaUserMd size={64} />
                  </div>
                )}
                
                {/* Designation Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-slate-100">
                    <span className="text-[#4CA6AE] text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                      {doctor.designation}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                 <div className="mb-6 flex-1">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 group-hover:text-[#EA6490] transition-colors">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                       <FaPlus size={10} className="text-[#4CA6AE]" />
                       <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                         {doctor.degree}
                       </p>
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-2 font-medium leading-relaxed opacity-80">
                      {doctor.bio ? doctor.bio.substring(0, 100) + '...' : 'Specialist in advanced dermatological care and aesthetic treatments.'}
                    </p>
                 </div>

                 <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#EA6490] group-hover:gap-4 transition-all duration-300">
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">View Profile</span>
                       <FaChevronRight size={10} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#EA6490] group-hover:text-white transition-all duration-500">
                       <FaPlus size={12} />
                    </div>
                 </div>
              </div>
            </Link>
          ))}

          {/* ─── BOOK APPOINTMENT CARD ─── */}
          <div className="relative group overflow-hidden bg-slate-900 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500 border border-slate-800">
             <div className="absolute inset-0 bg-gradient-to-br from-[#EA6490]/20 to-transparent"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4CA6AE]/10 blur-[100px] -mr-32 -mb-32"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center text-[#EA6490] mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                   <FaCalendarCheck size={32} />
                </div>
                <h2 className="text-3xl font-heading font-black text-white mb-4 leading-tight">Start Your <br />Skin Journey</h2>
                <p className="text-white/60 text-sm font-medium mb-10 max-w-[200px]">Schedule a personal consultation with our experts.</p>
                <Link 
                  href="/book-appointment/" 
                  className="bg-[#EA6490] text-white px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#EA6490] transition-all shadow-xl shadow-[#EA6490]/20"
                >
                   Book Now
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
