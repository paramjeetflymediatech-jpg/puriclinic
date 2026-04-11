'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaAward, FaCalendarCheck, FaUserMd } from 'react-icons/fa';

const DoctorBios = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/admin/doctors'); // Using the same API for public display for now
        const data = await res.json();
        if (data.doctors) {
          setDoctors(data.doctors);
        }
      } catch (err) {
        console.error('Failed to fetch doctors:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return (
     <div className="py-24 bg-[#0a0a0a] text-center">
       <div className="animate-pulse flex flex-col items-center gap-4">
         <div className="w-16 h-16 bg-white/10 rounded-full"></div>
         <div className="h-4 w-48 bg-white/10 rounded"></div>
       </div>
     </div>
  );

  if (doctors.length === 0) return null;

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EA6490]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4CA6AE]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 space-y-32 relative z-10">
        {doctors.map((doctor, index) => (
          <div 
            key={doctor.id} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className={`absolute -inset-4 rounded-[4rem] transition-transform duration-700 group-hover:rotate-0 ${
                index % 2 === 0 ? 'bg-white/5 rotate-3' : 'bg-[#EA6490]/10 -rotate-3'
              }`}></div>
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-2 border-white/5 bg-slate-900">
                {doctor.image_url ? (
                  <Image 
                    src={doctor.image_url} 
                    alt={doctor.name} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10">
                    <FaUserMd size={80} />
                  </div>
                )}
              </div>
              
              {doctor.experience && (
                <div className="absolute bottom-12 -right-8 bg-[#EA6490] text-white p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center border-4 border-white/10">
                   <span className="text-3xl font-black">{doctor.experience}</span>
                   <span className="text-[9px] font-black uppercase tracking-widest text-white/80 whitespace-nowrap">Experience</span>
                </div>
              )}
            </div>

            <div className={`text-white space-y-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className={`inline-block px-6 py-2 backdrop-blur-md rounded-full border border-white/10 ${
                index % 2 === 0 ? 'bg-white/5' : 'bg-[#EA6490]/10 border-[#EA6490]/20'
              }`}>
                 <span className="text-white font-black uppercase text-[10px] tracking-[0.2em]">{doctor.designation}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight text-white">
                {doctor.name.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i === 1 ? <br /> : ''}
                  </React.Fragment>
                ))}
              </h2>
              
              <div className="prose prose-lg prose-invert max-w-none text-white/70 leading-relaxed font-medium">
                <p>{doctor.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                 <BioDetailItem icon={<FaGraduationCap />} text={doctor.degree} />
                 <BioDetailItem icon={<FaAward />} text="Board Certified Specialist" />
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/book-appointment" 
                  className={`inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl ${
                    index % 2 === 0 ? 'bg-white text-black' : 'bg-[#EA6490] text-white'
                  }`}
                >
                  <FaCalendarCheck /> Book Consultation
                </Link>
                <Link 
                  href={`/doctors/${doctor.slug}`} 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                >
                  View Full Bio
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BioDetailItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
    <span className="text-[#EA6490] text-xl group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-white/90 font-bold uppercase text-[10px] tracking-widest">
      {text}
    </span>
  </div>
);

export default DoctorBios;

