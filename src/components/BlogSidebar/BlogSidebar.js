'use client';

import React, { useState } from 'react';
import Swal from '@/lib/swal';

const BlogSidebar = ({ props }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your message has been sent successfully.',
      confirmButtonColor: '#EA6490'
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-28 z-20">
      <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-6 lg:p-7 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all">
        <div className="mb-5">
          <span className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest mb-1.5 block">
            Get In Touch
          </span>
          <h3 className="text-slate-900 text-xl sm:text-2xl font-heading font-black leading-snug">
            Consult our <span className="text-[#EA6490]">Experts</span>
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-medium leading-relaxed">
            Have questions? Our clinical specialists are here to guide you toward your skin goals.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="sidebar-name" className="text-slate-400 text-[10px] font-bold uppercase tracking-wider ml-3">
              Full Name
            </label>
            <input
              id="sidebar-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-xl px-4 py-2.5 sm:px-4 sm:py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100 text-xs sm:text-sm"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="sidebar-phone" className="text-slate-400 text-[10px] font-bold uppercase tracking-wider ml-3">
              Phone Number
            </label>
            <input
              id="sidebar-phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-xl px-4 py-2.5 sm:px-4 sm:py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100 text-xs sm:text-sm"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="sidebar-email" className="text-slate-400 text-[10px] font-bold uppercase tracking-wider ml-3">
              Email Address
            </label>
            <input
              id="sidebar-email"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-xl px-4 py-2.5 sm:px-4 sm:py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100 text-xs sm:text-sm"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="sidebar-message" className="text-slate-400 text-[10px] font-bold uppercase tracking-wider ml-3">
              Your Message
            </label>
            <textarea
              id="sidebar-message"
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full bg-slate-50 rounded-xl px-4 py-2.5 sm:px-4 sm:py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium resize-none border border-slate-100 text-xs sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-black uppercase tracking-wider text-[11px] rounded-xl py-3 hover:bg-[#EA6490] transition-all duration-300 shadow-lg shadow-slate-900/10 active:scale-[0.99] mt-2 cursor-pointer"
          >
            Send Message Now
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
