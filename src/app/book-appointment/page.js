import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';

export const metadata = {
  title: 'Book Appointment | Puri Skin Clinic',
  description: 'Schedule a consultation with Dr. Gurinderjit Singh Puri or Dr. Ashwajit Singh at Puri Skin Clinic Ludhiana.',
};

export default function BookAppointment() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>Book Appointment</span>
          </div>
          <h1 className="section-title">Book a <span>Consultation</span></h1>
          <p className="section-subtitle mx-auto">
            Take the first step towards healthier skin and hair. Provide your details below and we will confirm your appointment.
          </p>
        </div>
      </div>

      <section className="section bg-card" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '-8rem auto 0', position: 'relative', zIndex: 10, padding: '3rem', boxShadow: 'var(--shadow-card)' }}>
            <h2 className="section-title text-center" style={{ marginBottom: '2.5rem', fontSize: '2rem' }}>Appointment Request</h2>
            <AppointmentForm />
          </div>
          
          <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              Alternatively, you can call our reception desk directly:
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+919815673163" className="btn btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                +91 98156 73163
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
