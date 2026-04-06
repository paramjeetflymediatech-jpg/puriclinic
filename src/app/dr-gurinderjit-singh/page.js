import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaAward, FaUserMd } from 'react-icons/fa';

export const metadata = {
  title: 'Dr. Gurinderjit Singh Puri | Best Dermatologist in Ludhiana',
  description: 'Dr. Gurinderjit Singh Puri is a pioneer in Hair Transplantation with over 40 years of experience in dermatology and dermatosurgery.',
};

export default function DoctorGurinderjit() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> 
            <Link href="/about-us">About Us</Link> <FaChevronRight size={10} /> 
            <span>Dr. Gurinderjit Singh Puri</span>
          </div>
          <h1 className="section-title">Dr. Gurinderjit Singh Puri</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <div style={{ position: 'relative', height: '600px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800" 
                  alt="Dr. Gurinderjit Singh Puri" 
                  fill 
                  style={{ objectFit: 'cover', objectPosition: 'top' }} 
                />
              </div>
            </div>
            
            <div>
              <span className="section-label">MD Dermatology</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Pioneer in <span>Hair Transplantation</span></h2>
              <p style={{ color: 'var(--color-gold)', fontWeight: '600', fontSize: '1.2rem', marginBottom: '2rem' }}>
                40+ Years of Excellence in Dermatology
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <p>
                  Dr. Gurinderjit Singh Puri is one of the most respected and experienced dermatologists in North India. With over four decades of clinical practice, he has played an instrumental role in advancing dermatological care in the region.
                </p>
                <p>
                  He holds the distinct honor of being the pioneer of Hair Transplantation in North India, having introduced the technique to the region in 1988. Over the decades, he has successfully performed thousands of hair restorative procedures, changing the lives and restoring the confidence of his patients.
                </p>
                <p>
                  Beyond hair transplantation, Dr Puri is highly sought after for his expertise in clinical dermatology, tackling complex skin conditions that have not responded to standard treatments. His vast experience mixed with his compassionate patient care makes him a leading figure in the medical community.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FaUserMd style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-white)' }}>Specialization</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Hair Transplantation, Dermatosurgery, Clinical Dermatology.</p>
                  </div>
                </div>
                <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FaAward style={{ fontSize: '2rem', color: 'var(--color-primary)' }} />
                  <div>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-white)' }}>Experience</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>40+ Years of active clinical and surgical practice.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/book-appointment" className="btn btn-primary">
                  Book Consultation
                </Link>
                <Link href="/services/hair-transplantation" className="btn btn-outline">
                  View Hair Transplant Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
