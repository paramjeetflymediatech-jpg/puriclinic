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
      <div className="bg-[#EA6490] rounded-[2.5rem] overflow-hidden p-10 md:p-12 sticky top-28 shadow-2xl shadow-[#EA6490]/20">
        <h3 className="text-white text-3xl md:text-4xl font-heading font-bold mb-10 leading-tight">
          Contact Us
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white/80 text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-white/80 text-[10px] font-black uppercase tracking-widest ml-4">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-white/80 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-white/80 text-[10px] font-black uppercase tracking-widest ml-4">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white rounded-[1.5rem] px-8 py-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border-2 border-white text-white font-black uppercase tracking-[0.2em] text-xs rounded-full py-5 hover:bg-white hover:text-[#EA6490] transition-all duration-300 shadow-xl"
          >
            Submit Message
          </button>
        </form>
      </div>
    </aside>

  );
};

export default BlogSidebar;
