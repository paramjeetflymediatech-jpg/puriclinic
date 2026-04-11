'use client';

import React, { useState } from 'react';

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
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <aside className={`w-full shrink-0 lg:${props?.width}`}>
      <div className="bg-[#EA6490] rounded-2xl overflow-hidden p-8 sticky top-28">
        <h3 className="text-white text-2xl font-heading mb-6 leading-tight">
          Personalized <br /> Consultation
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className='text-white'>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-white/30 rounded-full px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className='text-white'>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-white/30 rounded-full px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className='text-white'>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-white/30 rounded-full px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className='text-white'>Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white border border-white/30 rounded-2xl px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full border border-white text-white font-bold rounded-full py-3 hover:bg-opacity-90 transition-all shadow-lg"
          >
            Send Messages
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;
