import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Puri Skin Clinic, established by Dr. Gurinderjit Singh Puri to offer world-class dermatology and aesthetic treatments in Ludhiana.',
};

export default function AboutUs() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>About Us</span>
          </div>
          <h1 className="section-title">About <span>Puri Skin Clinic</span></h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="section-label">Our Legacy</span>
              <h2 className="section-title">A Legacy of Excellence in <span>Dermatology</span></h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Puri Skin Clinic was established to ensure that looking and feeling beautiful isn't just an aspiration, but an achievable reality. Founded by Dr. Gurinderjit Singh Puri, a pioneer in the field, we have been delivering state-of-the-art dermatological care for decades.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We combine years of medical expertise with advanced technology to offer treatments that are both safe and highly effective. Our team stays at the forefront of medical advancements, continually updating our protocols to provide standard-of-care treatments for skin health, hair restoration, and aesthetic perfection.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                We believe that true beauty stems from healthy skin. Therefore, our treatments are designed not just for cosmetic temporary fixes, but for long-term health and rejuvenation.
              </p>
              <Link href="/book-appointment" className="btn btn-primary">
                Book a Consultation
              </Link>
            </div>
            <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <Image 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000" 
                alt="Clinic Interior" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why <span>Choose Us?</span></h2>
            <p className="max-w-2xl mx-auto">We strive to maintain the highest standards of clinical excellence.</p>
          </div>
          
          <div className="grid-3">
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Experienced Care</h3>
              <p>Led by doctors with over 40 years of combined experience in complex dermatological and aesthetic cases.</p>
            </div>
            
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Advanced Technology</h3>
              <p>Equipped with FDA-approved lasers and state-of-the-art diagnostic and treatment devices for safe and effective results.</p>
            </div>

            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Personalized Approach</h3>
              <p>We do not believe in one-size-fits-all. Every treatment plan is meticulously tailored to your unique skin profile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Medical Experts</span>
            <h2 className="section-title">Meet Our <span>Doctors</span></h2>
          </div>
          
          <div className="grid-2">
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
               <div style={{ position: 'relative', height: '350px'}}>
                  <Image src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800" alt="Dr Gurinderjit" fill style={{ objectFit: 'cover', objectPosition: 'top'}} />
               </div>
               <div style={{ padding: '2rem', textAlign: 'center' }}>
                 <h3>Dr. Gurinderjit Singh Puri</h3>
                 <p style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>MD Dermatology • 40+ Years Experience</p>
                 <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>Pioneer of hair transplant in North India (1988), bringing decades of unmatched expertise in clinical dermatology and dermatosurgery.</p>
                 <Link href="/dr-gurinderjit-singh" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Read Full Profile</Link>
               </div>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
               <div style={{ position: 'relative', height: '350px'}}>
                  <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800" alt="Dr Ashwajit" fill style={{ objectFit: 'cover', objectPosition: 'top'}} />
               </div>
               <div style={{ padding: '2rem', textAlign: 'center' }}>
                 <h3>Dr. Ashwajit Singh</h3>
                 <p style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>MD Dermatology • Advanced Aesthetic Fellow</p>
                 <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>Specializes in facial aesthetics, lasers, and modern vitiligo treatments. Blends cutting-edge medical science with an artistic aesthetic eye.</p>
                 <Link href="/dr-ashwajit-singh" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Read Full Profile</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
