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
      <div className="max-w-[1200px] mx-auto px-[15px]">
        
        {/* Section Heading */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[34px] md:text-[42px] leading-tight">
            <span 
              className="text-[#1a1a1a] font-semibold"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Reasons Why Puri Skin Clinic is a{' '}
            </span>
            <span 
              className="text-[#EA6490] font-bold"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Premium Option
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[50px]">
          {REASONS.map((item, idx) => (
            <div key={idx} className="relative group flex flex-col items-center">
              
              {/* Floating Teal Header */}
              <div className="absolute -top-[22px] z-20">
                <div className="bg-[#4CA6AE] text-white px-[32px] py-[12px] rounded-[10px] text-[17px] font-bold shadow-lg tracking-wide whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              {/* Card Body */}
              <div 
                className="relative w-full overflow-hidden bg-white border-[1px] border-[#fbdae3] rounded-[10px] pt-[85px] pb-[45px] px-[35px] min-h-[300px] flex flex-col justify-start items-center text-center transition-all duration-500 hover:shadow-2xl hover:border-[#EA6490]/30"
                style={{
                  boxShadow: '0 15px 35px -15px rgba(0, 0, 0, 0.05)',
                }}
              >
                
                {/* Official Wavy background pattern — Enhanced fidelity */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.3] group-hover:opacity-[0.45] transition-opacity duration-700"
                  style={{
                    backgroundImage: "url('/design.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                {/* Content */}
                <p 
                  className="relative z-10 text-[#4a4a4a] text-[15px] leading-[1.8] tracking-normal"
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
