'use client';

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns for desktop
  const midpoint = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, midpoint);
  const rightCol = faqs.slice(midpoint);

  return (
    <section className="py-10 border-t border-slate-100 bg-slate-50/30">
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Common Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-[#EA6490]">{title.split(' ').slice(-1)}</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftCol.map((faq, idx) => (
              <FaqItem 
                key={idx} 
                faq={faq} 
                index={idx + 1} 
                isOpen={openIndex === idx} 
                onClick={() => toggleAccordion(idx)} 
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightCol.map((faq, idx) => {
              const actualIdx = idx + midpoint;
              return (
                <FaqItem 
                  key={actualIdx} 
                  faq={faq} 
                  index={actualIdx + 1} 
                  isOpen={openIndex === actualIdx} 
                  onClick={() => toggleAccordion(actualIdx)} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, index, isOpen, onClick }) {
  const displayIndex = index < 10 ? `0${index}.` : `${index}.`;
  
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#EA6490] font-black text-sm opacity-50">{displayIndex}</span>
          <span className="font-bold text-slate-800 text-[16px] leading-tight group-hover:text-[#ea6490] transition-colors">
            {faq.question}
          </span>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <FaChevronRight className={`text-[#EA6490] ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-black font-small leading-relaxed border-t border-slate-50 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
