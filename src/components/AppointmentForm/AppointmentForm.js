'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/seed';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setStatus({ type: 'success', message: 'Appointment request submitted successfully! We will contact you soon.' });
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

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      
      {status.message && (
        <div style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          borderRadius: '8px',
          background: status.type === 'success' ? 'rgba(37, 211, 102, 0.1)' : 'rgba(235, 87, 87, 0.1)',
          color: status.type === 'success' ? '#25D366' : '#EB5757',
          border: `1px solid ${status.type === 'success' ? 'rgba(37, 211, 102, 0.3)' : 'rgba(235, 87, 87, 0.3)'}`
        }}>
          {status.message}
        </div>
      )}

      <div className="grid-2">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="John Doe"
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="+91 98765 43210"
            required 
          />
        </div>
      </div>
      
      <div className="form-group" style={{ marginTop: '1.5rem' }}>
        <label htmlFor="email" className="form-label">Email Address (Optional)</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="form-input" 
          placeholder="johndoe@example.com"
        />
      </div>
      
      <div className="form-group" style={{ marginTop: '1.5rem' }}>
        <label htmlFor="service" className="form-label">Select Service</label>
        <select 
          id="service" 
          name="service" 
          value={formData.service} 
          onChange={handleChange} 
          className="form-select"
        >
          <option value="">-- General Consultation --</option>
          {SERVICES.map(s => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group" style={{ marginTop: '1.5rem' }}>
        <label htmlFor="message" className="form-label">Message / Details</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="form-textarea" 
          rows={4}
          placeholder="Briefly describe your concern..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ width: '100%', marginTop: '2rem', justifyContent: 'center' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Book Appointment'}
      </button>
    </form>
  );
}
