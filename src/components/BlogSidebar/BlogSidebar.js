'use client';

import React, { useState } from 'react';
import Swal from '@/lib/swal';

const BlogSidebar = ({props}) => {
  console.log(props,'=d')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
    <aside className="w-full shrink-0">
      <div className="bg-white rounded-[2.5rem] overflow-hidden p-10 md:p-12 sticky top-28 shadow-2xl shadow-slate-200/50 border border-slate-50">
        <div className="mb-10">
          <span className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h3 className="text-slate-900 text-3xl md:text-4xl font-heading font-black leading-tight">
            Consult our <span className="text-[#EA6490]">Experts</span>
          </h3>
          <p className="text-slate-500 text-sm mt-4 font-medium leading-relaxed">
            Have questions? Our clinical specialists are here to guide you toward your skin goals.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium border border-slate-100"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-slate-50 rounded-[1.5rem] px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA6490]/20 transition-all font-medium resize-none border border-slate-100"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full py-5 hover:bg-[#EA6490] transition-all duration-500 shadow-xl shadow-slate-900/10"
          >
            Send Message Now
          </button>
        </form>
      </div>
    </aside>

  );
};

export default BlogSidebar;
