import React from 'react';

const StatsStrip = () => {
  const stats = [
    { label: 'Combined Years Of Experience', value: '40+' },
    { label: 'Successful Hair transplant', value: '3,000+' },
    { label: 'MD, Dermologist of Same Centre', value: '2' },
    { label: 'Satisfied Patients', value: '100,000+' },
  ];

  return (
    <div className="bg-[#EA6490] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center px-8 ${
                index !== stats.length - 1 ? 'md:border-r border-white/20' : ''
              }`}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-heading text-white font-black mb-2">
                {stat.value}
              </span>
              <span className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[200px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
