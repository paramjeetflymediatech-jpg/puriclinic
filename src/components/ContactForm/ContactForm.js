'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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

  return (
    <form onSubmit={handleSubmit}>
      
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

      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="name" className="form-label">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="form-input" 
          placeholder="Your Name"
          required 
        />
      </div>
      
      <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Your Phone Number"
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address (Optional)</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-input" 
            placeholder="Your Email"
          />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="message" className="form-label">Your Message *</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="form-textarea" 
          rows={5}
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
