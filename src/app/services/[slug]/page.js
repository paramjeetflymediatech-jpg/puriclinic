import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { SERVICES } from '@/data/seed';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';

// Dynamic params function for statically generating routes at build time (Next.js 14 feature)
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES.find(s => s.slug === resolvedParams.slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: `${service.name} Treatment`,
    description: service.description.substring(0, 160) + '...',
  };
}

export default async function SingleService({ params }) {
  const resolvedParams = await params;
  const service = SERVICES.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> 
            <Link href="/services">Services</Link> <FaChevronRight size={10} /> 
            <span>{service.name}</span>
          </div>
          <h1 className="section-title">{service.name}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Service Details */}
            <div>
              <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '2.5rem' }}>
                <Image 
                  src={service.image_url} 
                  alt={service.name} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>About The Treatment</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {service.description}
              </p>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Key Benefits</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <FaCheckCircle style={{ color: 'var(--color-primary)' }} /> 
                  Highly effective, customized approach
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <FaCheckCircle style={{ color: 'var(--color-primary)' }} /> 
                  Performed by expert dermatologists
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <FaCheckCircle style={{ color: 'var(--color-primary)' }} /> 
                  Use of state-of-the-art FDA-approved technology
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <FaCheckCircle style={{ color: 'var(--color-primary)' }} /> 
                  Safe procedures with minimal downtime
                </li>
              </ul>
            </div>

            {/* Sticky Sidebar Form */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '1rem', textAlign: 'center' }}>
                  Book This Treatment
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.95rem' }}>
                  Schedule a consultation to discuss if {service.name} is right for you.
                </p>
                
                <AppointmentForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
