'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
    <section className="bg-[#528d81] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-white font-bold text-center mb-20 drop-shadow-sm">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-0 items-start">
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
    <div className="w-full mb-4">
      <button 
        onClick={onClick}
        className="w-full bg-[#f4f4f4] hover:bg-white transition-all duration-300 rounded-[10px] p-6 flex items-center justify-between group shadow-sm"
      >
        <span className="flex items-center gap-4 text-left">
          <span className="font-bold text-[#222222] min-w-[30px]">{displayIndex}</span>
          <span className="font-bold text-[#222222] text-lg lg:text-xl font-heading tracking-tight group-hover:text-[#ea6490] transition-colors">
            {faq.question}
          </span>
        </span>
        <span className={`shrink-0 ml-4 transition-transform duration-500 text-slate-400 ${isOpen ? 'rotate-180 text-[#ea6490]' : ''}`}>
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#f4f4f4] rounded-[10px] p-8 pt-2 text-gray-600 leading-relaxed font-medium text-lg border-t border-gray-100">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
