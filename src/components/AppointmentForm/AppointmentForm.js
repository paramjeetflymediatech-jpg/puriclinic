'use client';

import React, { useState } from 'react';
import { FaUser, FaPhone, FaCommentDots, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function AppointmentForm({ theme = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isClinical = theme === 'clinical';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', message: 'Request submitted! Our team will contact you soon.' });
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-12 py-4 rounded-2xl outline-none transition-all font-medium text-slate-800 border ${
    isClinical 
      ? 'bg-slate-50 border-slate-100 focus:bg-white focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490]'
      : 'bg-white border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
  }`;

  const labelClasses = `block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-2 ${
    isClinical ? 'text-slate-400' : 'text-gray-700'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#3]">
      
      {status.message && (
        <div className={`p-4 rounded-2xl text-sm font-bold flex items-center gap-3 border ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-100 text-green-700'
            : 'bg-red-50 border-red-100 text-red-700'
        }`}>
          {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
          {status.message}
        </div>
      )}

      <div className="space-y-1 relative group">
        <label htmlFor="name" className={labelClasses}>Full Name</label>
        <div className="relative">
          <FaUser className={`absolute left-4 top-1/2 -translate-y-1/2 ${isClinical ? 'text-[#EA6490]/40' : 'text-gray-400'} group-focus-within:text-[#EA6490] transition-colors`} />
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={inputClasses}
            placeholder="Your name"
            required 
          />
        </div>
      </div>
      
      <div className="space-y-1 relative group">
        <label htmlFor="phone" className={labelClasses}>Phone Number</label>
        <div className="relative">
          <FaPhone className={`absolute left-4 top-1/2 -translate-y-1/2 ${isClinical ? 'text-[#EA6490]/40' : 'text-gray-400'} group-focus-within:text-[#EA6490] transition-colors`} />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className={inputClasses}
            placeholder="Contact number"
            required 
          />
        </div>
      </div>

      <div className="space-y-1 relative group">
        <label htmlFor="message" className={labelClasses}>Your Concern</label>
        <div className="relative">
          <FaCommentDots className={`absolute left-4 top-6 ${isClinical ? 'text-[#EA6490]/40' : 'text-gray-400'} group-focus-within:text-[#EA6490] transition-colors`} />
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className={`${inputClasses} !rounded-3xl min-h-[120px] resize-none pt-4`}
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-lg ${
          isClinical 
            ? 'bg-[#EA6490] text-white hover:bg-[#C38EAB]'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending Request...' : 'Book Consultation'}
      </button>
    </form>
  );
}
