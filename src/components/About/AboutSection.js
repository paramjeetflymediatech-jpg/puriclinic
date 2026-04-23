'use client';

import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#414141' }}
    >
      {/* Background Image with subtle overlay — Desaturated to remove "red" tones */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale brightness-[0.6]"
        style={{ backgroundImage: "url('/bg-about-image.jpg')" }}
      />

      {/* Top Cyan Glow (matching reference vignette) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[150px] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(76, 166, 174, 0.4) 0%, transparent 100%)' }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-[1425px] mx-auto flex items-end">

        {/* Left Doctor */}
        <div className="hidden lg:flex w-[320px] flex-shrink-0 items-end self-end">
          <img
            src="/doctors/dr-gurinderjit-singh/dr1.avif"
            alt="Dr Gurinderjit Singh Puri"
            className="w-full h-auto object-contain transform translate-y-[2px]"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 py-[100px] px-[20px] text-center text-white">
          {/* Heading — 46px Playfair Display, white */}
          <h2
            className="text-white text-[32px] md:text-[46px] leading-[1.2] mb-[30px]"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Puri Skin Clinic – Your Ideal Choice
          </h2>

          {/* Description — 18px Nunito Sans, white */}
          <p
            className="text-white text-[16px] md:text-[18px] leading-[1.9] mb-[40px] max-w-[750px] mx-auto opacity-95"
            style={{
              fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif",
            }}
            spellCheck={false}
          >
            If you are struggling to make sense of your appearance, it can prove to be
            an overwhelming reality. Our appearance defines so much of our
            confidence that with any issues, it starts to impact one&apos;s self-esteem. With
            the help of experts at Puri Skin Clinic, you do not have to incessantly
            explore the internet to find the &quot;best dermatologist near me&quot; – the perfect
            solution is right here. You can make certain that you are able to address
            most of the issues plaguing your skin or hair situation. No matter whether
            you have acne or a receding hairline, you can easily address these issues
            without any concern.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px]">
            <Link
              href="/book-appointment/"
              className="bg-transparent text-white px-[40px] py-[15px] rounded-[50px] text-[16px] font-semibold border-[1px] border-white/80 hover:bg-[#EA6490] hover:border-[#EA6490] transition-all duration-300"
              style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
            >
              Book Appointment
            </Link>
            <Link
              href="/about-us/"
              className="bg-transparent text-white px-[40px] py-[15px] rounded-[50px] text-[16px] font-semibold border-[1px] border-white/80 hover:bg-[#EA6490] hover:border-[#EA6490] transition-all duration-300"
              style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Right Doctor */}
        <div className="hidden lg:flex w-[320px] flex-shrink-0 items-end self-end">
          <img
            src="/doctors/dr-ashwajit/drsa.png"
            alt="Dr Ashwajit Singh"
            className="w-full h-auto object-cover transform translate-y-[2px]"
          />
        </div>

      </div>

      {/* Mobile Doctor Images */}
      <div className="flex lg:hidden justify-center gap-[10px] px-[15px] relative z-10">
        <img
          src="/doctors/dr-gurinderjit-singh/dr1.avif"
          className="w-[45%] h-auto object-contain"
          alt="Dr Gurinderjit Singh Puri"
        />
        <img
          src="/doctors/dr-ashwajit/drsa.png"
          className="w-[45%] h-auto object-cover"
          alt="Dr Ashwajit Singh"
        />
      </div>
    </section>
  );
};

export default AboutSection;
