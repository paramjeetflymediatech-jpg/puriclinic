'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaUserMd } from 'react-icons/fa';

const DoctorBios = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/admin/doctors');
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
    <div className="py-24 bg-[#519C92] text-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-white/20 rounded-full"></div>
        <div className="h-4 w-48 bg-white/20 rounded"></div>
      </div>
    </div>
  );

  if (doctors.length === 0) return null;

  return (
    <section className="py-24 bg-[#519C92] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 space-y-32 relative z-10">
        {doctors.map((doctor, index) => {
          const isFounder = index === 0;
          const title = isFounder
            ? `Meet the Founder of Puri Skin Clinic, ${doctor.name}, ${doctor.degree || ''}, ${doctor.designation || ''} under Puri Skin Clinic`
            : `Know the Story of ${doctor.name}, ${doctor.degree || ''}, ${doctor.designation || ''}`;

          return (
            <div key={doctor.id} className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-white max-w-4xl mx-auto text-center leading-relaxed">
                {title}
              </h2>

              <div className={`bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-2xl flex flex-col items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                {/* Image Section */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative w-full rounded-[2rem] overflow-hidden shadow-md bg-gray-50 flex items-center justify-center">
                    {doctor.image_url ? (
                      <Image
                        src={doctor.image_url}
                        alt={doctor.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        className="rounded-[2rem]"
                      />
                    ) : (
                      <div className="w-full aspect-[4/5] flex items-center justify-center text-gray-200">
                        <FaUserMd size={64} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="prose prose-slate prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed break-all">
                    <p className="font-medium whitespace-pre-line">
                      {doctor.bio}
                    </p>
                  </div>

                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="inline-flex items-center gap-2 bg-[#EA6490] hover:bg-[#d4547a] text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 group"
                  >
                    <FaCheckCircle className="text-white/90 group-hover:scale-110 transition-transform" />
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DoctorBios;


