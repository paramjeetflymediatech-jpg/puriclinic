import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { SERVICES } from '@/data/seed';

export const metadata = {
  title: 'Our Services | Skin & Hair Treatments',
  description: 'Explore the comprehensive range of skin, hair, and aesthetic treatments offered at Puri Skin Clinic.',
};

export default function ServicesPage() {
  const hairServices = SERVICES.filter(s => s.category === 'hair');
  const skinServices = SERVICES.filter(s => s.category === 'skin');

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>Services</span>
          </div>
          <h1 className="section-title">Our <span>Treatments</span></h1>
          <p className="section-subtitle mx-auto">
            Advanced dermatological and aesthetic solutions tailored to your unique needs.
          </p>
        </div>
      </div>

      {/* Hair Services */}
      <section id="hair" className="section bg-card">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label" style={{ color: '#74aaff' }}>Hair Restoration</span>
            <h2 className="section-title">Advanced <span>Hair Treatments</span></h2>
          </div>
          
          <div className="grid-3">
            {hairServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Skin Services */}
      <section id="skin" className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Aesthetics & Medical</span>
            <h2 className="section-title">Comprehensive <span>Skin Care</span></h2>
          </div>
          
          <div className="grid-3">
            {skinServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
