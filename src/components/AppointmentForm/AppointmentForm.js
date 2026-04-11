'use client';

import React, { useState } from 'react';

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

  const inputClasses = `w-full px-6 py-4 rounded-2xl outline-none transition-all font-medium text-slate-800 ${
    isClinical 
      ? 'bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490]'
      : 'bg-white border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500'
  }`;

  const labelClasses = `block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-2 ${
    isClinical ? 'text-slate-400' : 'text-gray-700'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#3]">
      
      {status.message && (
        <div className={`p-4 rounded-2xl text-sm font-bold text-center border ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-100 text-green-700'
            : 'bg-red-50 border-red-100 text-red-700'
        }`}>
          {status.message}
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="name" className={labelClasses}>Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={inputClasses}
          placeholder="Name"
          required 
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="phone" className={labelClasses}>Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className={inputClasses}
          placeholder="Phone"
          required 
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className={labelClasses}>Your Concern</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className={`${inputClasses} !rounded-3xl min-h-[100px] resize-none`}
          placeholder="Describe your query..."
          required
        ></textarea>
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
