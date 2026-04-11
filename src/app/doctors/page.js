'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaChevronRight, FaPlus, FaCalendarCheck } from 'react-icons/fa';

export default function DoctorsListPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/admin/doctors'); // Reusing admin API for simplicity
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
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
       <div className="w-12 h-12 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pb-32">
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EA6490]/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-6 py-2 bg-[#EA6490]/20 text-[#EA6490] rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 border border-[#EA6490]/30">
            Expert Medical Team
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-black leading-none mb-6 tracking-tighter">
            Meet Our <br /> <span className="text-[#EA6490]">Specialists</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/60 text-lg font-medium leading-relaxed">
            Puri Skin Clinic is home to world-class dermatologists and aesthetic specialists dedicated to delivering science-backed results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <Link 
              key={doctor.id} 
              href={`/doctors/${doctor.slug}`}
              className="group relative bg-[#111] rounded-[3.5rem] overflow-hidden border border-white/5 hover:border-[#EA6490]/30 transition-all duration-500 shadow-2xl"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                {doctor.image_url ? (
                  <Image src={doctor.image_url} alt={doctor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10 bg-slate-900">
                    <FaUserMd size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                   <span className="inline-block px-4 py-1 bg-[#EA6490] text-white rounded-full text-[9px] font-black uppercase tracking-widest mb-3">
                     {doctor.designation}
                   </span>
                   <h3 className="text-2xl font-bold font-heading mb-1">{doctor.name}</h3>
                   <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{doctor.degree}</p>
                </div>
              </div>
              
              <div className="p-8 flex justify-between items-center bg-white/5 group-hover:bg-[#EA6490]/10 transition-colors">
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#EA6490]">View Profile</span>
                    <FaChevronRight size={10} className="text-[#EA6490]" />
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-[#EA6490] group-hover:text-[#EA6490] transition-all">
                    <FaPlus size={14} />
                 </div>
              </div>
            </Link>
          ))}

          {/* Book Appointment Card */}
          <div className="bg-gradient-to-br from-[#EA6490] to-[#C83E6A] rounded-[3.5rem] p-12 flex flex-col items-center justify-center text-center shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer">
             <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white mb-8">
                <FaCalendarCheck size={32} />
             </div>
             <h2 className="text-3xl font-black text-white mb-4">Start Your Skin Journey</h2>
             <p className="text-white/80 text-sm font-medium mb-8">Schedule a personal consultation with our expert team today.</p>
             <Link href="/book-appointment" className="bg-white text-[#EA6490] px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-xl">
                Book Now
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
