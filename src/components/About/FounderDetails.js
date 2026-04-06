'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const FounderDetails = () => {
  return (
    <section className="py-[80px] bg-white relative overflow-hidden">
      {/* Background Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-[#f8f8f8]">
          <path d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"></path>
        </svg>
      </div>

      <div className="max-w-[1140px] mx-auto px-[15px] pt-[120px]">
        {/* CEO / Founder - Dr Gurinderjit Singh Puri */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[#414141] font-heading text-[32px] font-bold mb-[30px] leading-tight">
            Meet the Founder of Puri Skin Clinic, Dr. Gurinderjit Singh Puri, MD, Dermatologist
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-[50px] bg-[#f8f8f8] p-[30px] lg:p-[50px] rounded-2xl shadow-sm">
            <div className="lg:w-1/2">
              <img 
                src="https://puriskinclinic.com/wp-content/uploads/2025/10/a-2.jpg" 
                alt="Dr Gurinderjit Singh Puri" 
                className="w-full h-auto rounded-xl shadow-lg hover:grayscale transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
                <strong>Dr. Gurinderjit Singh Puri</strong> has pioneered the way for hair transplantation in North India in 1988. 
                He also established the Department of Dermato-Venereology and Hair Transplantation at Mohandai Oswal Hospital, Ludhiana. 
                Under Dr Puri's guidance, the clinic has completed treatments for innumerable patients.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-8">
                Dr Puri has ensured the possibility of addressing any hair or skin-related concern for all his patients! 
                Puri Skin Clinic can address your concerns!
              </p>
              <Link 
                href="/about-us" 
                className="inline-flex items-center gap-3 bg-[#EA6490] text-white px-[30px] py-[14px] rounded-full text-[15px] font-bold hover:bg-[#4CA6AE] transition-all"
              >
                <FaCheckCircle className="text-[18px]" />
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Dr Ashwajit Singh Section */}
        <div className="text-center">
          <h2 className="text-[#414141] font-heading text-[32px] font-bold mt-[100px] mb-[30px] leading-tight">
            Know the Story of Dr. Ashwajit Singh, MD, Dermatologist
          </h2>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-[50px] bg-[#f8f8f8] p-[30px] lg:p-[50px] rounded-2xl shadow-sm">
            <div className="lg:w-1/2">
              <img 
                src="https://puriskinclinic.com/wp-content/uploads/2025/10/ss.jpg" 
                alt="Dr Ashwajit Singh" 
                className="w-full h-auto rounded-xl shadow-lg hover:grayscale transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
                <strong>Dr. Ashwajit Singh</strong> offers expert and passionate dermatological care to all his patients, 
                with over five years of experience in the field. He is a renowned alumni of Dayanand Medical College and Hospital (DMCH), 
                Ludhiana, where he served as a dermatologist for two years.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-8">
                Dr Ashwajit Singh has also completed a fellowship under the Admire Advanced Aesthetic Fellowship program. 
                He is regularly invited to speak at national conferences, offering insights into clinical and aesthetic advancements.
              </p>
              <Link 
                href="/about-us" 
                className="inline-flex items-center gap-3 bg-[#EA6490] text-white px-[30px] py-[14px] rounded-full text-[15px] font-bold hover:bg-[#4CA6AE] transition-all"
              >
                <FaCheckCircle className="text-[18px]" />
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDetails;
