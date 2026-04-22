'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const DoctorBios = () => {
  return (
    <section className="py-20 md:py-32 bg-[#519C92] overflow-hidden">
     <div className="max-w-[1200px] mx-auto px-6 space-y-24 md:space-y-32">
        {/* --- DR. GURINDERJIT SINGH PURI (FOUNDER) --- */}
        <div className="space-y-12">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center max-w-4xl mx-auto leading-tight">
            Meet the Founder of Puri Skin Clinic, Dr. Gurinderjit Singh Puri, MD, Dermatologist under Puri Skin Clinic
          </h2>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-2">
            {/* Image Card */}
            <div className="w-full md:w-[35%] flex-shrink-0">
              <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-2xl h-full flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[350px] overflow-hidden rounded-[2rem] shadow-md">
                  <Image
                    src="/doctors/dr-gurinderjit-singh/de3.avif"
                    alt="Dr. Gurinderjit Singh Puri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content Card */}
            <div className="w-full md:w-[65%]">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <div className="prose prose-slate prose-lg max-w-none text-gray-700 leading-relaxed font-medium mb-8">
                  <div 
                    className="text-gray-600 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: `Dr. Gurinderjit Singh Puri has pioneered the way for hair transplantation in North India in 1988. He also established the Department of Dermato-Venereology and Hair Transplantation at Mohandai Oswal Hospital, Ludhiana. Under Dr Puri's guidance, the clinic has completed treatments for innumerable patients. Dr Puri has ensured the possibility of addressing any hair or skin-related concern for all his patients! Trying to Google, "best skin doctor near me"? Puri Skin Clinic can address your concerns!` }}
                  />
                </div>

                <Link
                  href="/dr-gurinderjit-singh/"
                  className="inline-flex items-center gap-3 bg-[#EA6490] hover:bg-[#d4547a] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95 group"
                >
                  <FaCheckCircle className="text-[1.2rem] transition-transform group-hover:scale-110" />
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- DR. ASHWAJIT SINGH --- */}
        <div className="space-y-12">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center max-w-4xl mx-auto leading-tight">
            Know the Story of Dr. Ashwajit Singh, MD, Dermatologist
          </h2>

          {/* Cards Container (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-2 md:gap-2">
            {/* Image Card */}
            <div className="w-full md:w-[35%] flex-shrink-0">
              <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-2xl h-full flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[350px] overflow-hidden rounded-[2rem] shadow-md">
                  <Image
                    src="/doctors/dr-ashwajit/de4.avif"
                    alt="Dr. Ashwajit Singh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content Card */}
            <div className="w-full md:w-[65%]">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <div className="prose prose-slate prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                  <div 
                    className="text-gray-600 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: `Dr. Ashwajit Singh offers expert and passionate dermatological care to all his patients, with over five years of experience in the field, He is a renowned alumni of Dayanand Medical College and Hospital (DMCH), Ludhiana, where he served as a dermatologist for two years, expertly dealing with any and all cases of skin, hair and nail troubles. Dr Ashwajit Singh has also completed a fellowship under the Admire Advanced Aesthetic Fellowship program, which has allowed him to offer insight into any dermatological problem with advanced and innovative solutions. He has presented his papers at over fifty national and international conferences. He is regularly invited to speak at national conferences, where Dr Singh offers his regular insights into clinical and aesthetic advancements made in the field.<br/><br/>Currently, Dr Ashwajit Singh is practising through Puri Skin Clinic, one of the best skin clinics in Ludhiana.` }}
                  />
                </div>
                <div className="mt-8">
                  <Link
                    href="/dr-ashwajit-singh/"
                    className="inline-flex items-center gap-3 bg-[#EA6490] hover:bg-[#d4547a] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95 group"
                  >
                    <FaCheckCircle className="text-[1.2rem] transition-transform group-hover:scale-110" />
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorBios;

