import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaAward, FaUserMd } from 'react-icons/fa';

export const metadata = {
  title: 'Dr. Ashwajit Singh | Advanced Aesthetic Dermatologist',
  description: 'Dr. Ashwajit Singh is an MD Dermatologist specializing in advanced facial aesthetics, lasers, and vitiligo treatments at Puri Skin Clinic.',
};

export default function DoctorAshwajit() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> 
            <Link href="/about-us">About Us</Link> <FaChevronRight size={10} /> 
            <span>Dr. Ashwajit Singh</span>
          </div>
          <h1 className="section-title">Dr. Ashwajit Singh</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <div style={{ position: 'relative', height: '600px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800" 
                  alt="Dr. Ashwajit Singh" 
                  fill 
                  style={{ objectFit: 'cover', objectPosition: 'top' }} 
                />
              </div>
            </div>
            
            <div>
              <span className="section-label">MD Dermatology</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Advanced Aesthetic <span>Specialist</span></h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', marginTop: '2rem' }}>
                <p>
                  Dr. Ashwajit Singh combines a strong foundation in medical dermatology with a specialized fellowship in advanced aesthetics. He brings a modern, evidence-based approach to cosmetic dermatology at Puri Skin Clinic.
                </p>
                <p>
                  With a keen aesthetic eye and mastery over injectables like Botox and Dermal Fillers, Dr. Ashwajit specializes in non-surgical facial rejuvenation, anti-aging therapies, and scar management. His approach focuses on enhancing natural beauty while maintaining facial harmony.
                </p>
                <p>
                  He also boasts significant expertise in managing complex pigmentation disorders, notably Melasma and Vitiligo. Utilizing the latest in laser technology and medical therapies, he has helped countless patients achieve clear, radiant skin.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FaUserMd style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-white)' }}>Specialization</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Facial Aesthetics, Lasers, Vitiligo, Melasma, Anti-Aging.</p>
                  </div>
                </div>
                <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FaAward style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-white)' }}>Qualifications</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>MD Dermatology, Fellowship in Advanced Aesthetics.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/book-appointment" className="btn btn-primary">
                  Book Consultation
                </Link>
                <Link href="/services#skin" className="btn btn-outline">
                  View Aesthetic Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
