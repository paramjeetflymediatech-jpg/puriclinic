'use client';

import React, { useState } from 'react';

export default function ContactForm({ theme = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isPinkTheme = theme === 'pink';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you shortly.' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-8 py-5 rounded-full outline-none transition-all font-medium ${
    isPinkTheme 
      ? 'bg-white text-gray-800 placeholder:text-gray-400 focus:ring-4 focus:ring-white/20' 
      : 'bg-slate-50 border border-slate-100 text-gray-800 focus:bg-white focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490]'
  }`;

  const labelClasses = `block text-sm font-bold mb-3 ml-4 ${
    isPinkTheme ? 'text-white' : 'text-gray-700'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {status.message && (
        <div className={`p-5 rounded-2xl font-bold text-center border-2 ${
          status.type === 'success' 
            ? (isPinkTheme ? 'bg-white/10 border-white text-white' : 'bg-green-50 border-green-200 text-green-700')
            : (isPinkTheme ? 'bg-black/10 border-black/20 text-white' : 'bg-red-50 border-red-200 text-red-700')
        }`}>
          {status.message}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className={labelClasses}>Your name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={inputClasses}
          placeholder="Enter your name"
          required 
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className={labelClasses}>Phone</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className={inputClasses}
          placeholder="Enter your phone number"
          required 
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className={labelClasses}>E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={inputClasses}
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses}>Your Messsage</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className={`${inputClasses} !rounded-[2.5rem] min-h-[150px] resize-none`}
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className={`w-full py-6 rounded-full font-black uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-xl ${
          isPinkTheme 
            ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#EA6490]'
            : 'bg-[#EA6490] text-white hover:bg-[#C38EAB]'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Messages'}
      </button>
    </form>
  );
}
