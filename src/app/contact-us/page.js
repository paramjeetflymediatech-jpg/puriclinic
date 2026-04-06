import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm/ContactForm';

export const metadata = {
  title: 'Contact Us | Puri Skin Clinic Ludhiana',
  description: 'Get in touch with Puri Skin Clinic in Ludhiana. Open Monday to Saturday for expert skin and hair consultations.',
};

export default function ContactUs() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>Contact Us</span>
          </div>
          <h1 className="section-title">Get In <span>Touch</span></h1>
          <p className="section-subtitle mx-auto">
            We are here to help you achieve your skin and hair goals. Reach out to us for appointments or queries.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            
            {/* Contact Info */}
            <div>
              <span className="section-label">Contact Information</span>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Visit Our <span>Clinic</span></h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(201, 149, 108, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: '0' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Clinic Address</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                      77, Vishal Nagar Ext, Vishal Nagar, <br />
                      Shaheed Bhagat Singh Nagar, <br />
                      Ludhiana, Punjab 141013, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(201, 149, 108, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: '0' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Phone Numbers</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                      <a href="tel:+919815673163" style={{ display: 'block', marginBottom: '0.25rem' }}>+91-9815673163</a>
                      <a href="tel:+919876170054">+91-9876170054</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(201, 149, 108, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: '0' }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Email Address</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                      <a href="mailto:puriskinclinic@gmail.com">puriskinclinic@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(201, 149, 108, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: '0' }}>
                    <FaClock />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>Opening Hours</h4>
                    <p style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column' }}>
                      <span>Monday – Saturday:</span>
                      <span style={{ color: 'var(--color-white)', fontWeight: '500' }}>10:30 AM – 2:00 PM</span>
                      <span style={{ color: 'var(--color-white)', fontWeight: '500', marginBottom: '0.5rem' }}>4:30 PM – 7:30 PM</span>
                      <span>Sunday: <span style={{ color: 'var(--color-accent)' }}>Closed</span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '1rem' }}>Send Us A Message</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', width: '100%', borderTop: '1px solid var(--color-border)' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13697.8080035035!2d75.8361546!3d30.873215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825e0e7aeb65%3A0xe96c4ccfb238da27!2sPuri%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Puri Skin Clinic Location"
        />
      </section>
    </>
  );
}
