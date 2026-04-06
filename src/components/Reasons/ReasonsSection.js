'use client';

import React from 'react';

const REASONS = [
  {
    title: 'Access Expert Care',
    content: 'With the help of Puri Skin Clinic, you can explore the option to access expert and experienced care. Resolve all your concerns without any worries in an extensive manner.',
  },
  {
    title: 'Undergo Bridal Treatment',
    content: 'If you are gearing up for your wedding, you can access several bridal treatments from the experts of Puri Skin Clinic in order to achieve a radiant glow and spot-free skin. Look beautiful on your wedding day with us!',
  },
  {
    title: 'Access Exosome Therapy',
    content: 'At Puri Skin Clinic, we also offer exosome therapy! Under this treatment, we ensure to use umbilical cord cells to enhance the natural hair growth. This allows for a seamless stimulation of hair follicles.',
  },
  {
    title: 'Grooming Services',
    content: 'Puri Skin Clinic also offers the possibility of achieving a confident smile and glowing skin with our grooming services for men. Explore personalised options and enhance the appearance of your skin with our treatment!',
  },
  {
    title: 'Address Acne Troubles',
    content: 'If you are suffering from any acne trouble, you can thoroughly and actively ensure the possibility of accessing acne treatment from our facilities. Our highly patient-specific approach ensures that we address the core of your specific issue.',
  },
  {
    title: 'Explore Customised Skin Care',
    content: 'We also offer the possibility of providing a customised approach to skin care. Address your hyperpigmentation as well as acne with the help of the best dermatologist in Punjab!',
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1140px] mx-auto px-[15px]">
        
        {/* Section Heading */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[32px] md:text-[38px] leading-tight">
            <span 
              className="text-black"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Reasons Why Puri Skin Clinic is a{' '}
            </span>
            <span 
              className="text-[#EA6490]"
              style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}
            >
              Premium Option
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px]">
          {REASONS.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Floating Teal Header */}
              <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                <div className="bg-[#4CA6AE] text-white px-[30px] py-[10px] rounded-[15px] text-[18px] font-semibold shadow-md">
                  {item.title}
                </div>
              </div>

              {/* Card Body */}
              <div 
                className="relative overflow-hidden bg-[#F8F8F8] border-[1px] border-[#EA6490] rounded-[16px] pt-[80px] pb-[40px] px-[20px] min-h-[260px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: '0 12px 15px -15px rgba(0, 0, 0, 0.15)',
                }}
              >
                
                {/* Official Wavy background pattern — Enhanced visibility */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.7] z-0"
                  style={{
                    backgroundImage: "url('/design.png')",
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                {/* Content */}
                <p 
                  className="relative z-10 text-[#414141] text-[16px] leading-[1.8]"
                  style={{ 
                    fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif",
                    fontWeight: 400
                  }}
                >
                  {item.content}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
