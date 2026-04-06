import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import { TESTIMONIALS } from '@/data/seed';

export const metadata = {
  title: 'Success Stories & Reviews | Puri Skin Clinic',
  description: 'Read the success stories and real Google reviews from our patients who have experienced life-changing skin and hair treatments at Puri Skin Clinic.',
};

export default function SuccessStories() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>Success Stories</span>
          </div>
          <h1 className="section-title">Patient <span>Success Stories</span></h1>
          <p className="section-subtitle mx-auto">
            Real experiences from people who trusted us with their skin health and hair restoration journeys.
          </p>
        </div>
      </div>

      <section className="section bg-card">
        <div className="container">
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Your Turn</span>
              <h2 className="section-title">Ready To Start Your <span>Journey?</span></h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                Every transformation begins with a consultation. Let our expert doctors evaluate your concerns and design a personalized treatment plan for you.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', color: 'var(--color-white)' }}>
                <li>✓ Transparent assessments</li>
                <li>✓ Safe, FDA-approved technologies</li>
                <li>✓ Decades of clinical expertise</li>
                <li>✓ Patient-first approach</li>
              </ul>
              <Link href="/book-appointment" className="btn btn-primary">
                Book a Consultation
              </Link>
            </div>
            
            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', marginBottom: '1rem', lineHeight: '1' }}>
                4.9/5
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Average Google Rating</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Based on hundreds of authentic reviews from patients across India who have visited Puri Skin Clinic.
              </p>
              <a href="https://g.page/puriskinclinic/review" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
