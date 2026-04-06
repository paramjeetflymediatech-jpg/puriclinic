import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import DoctorCard from '@/components/DoctorCard/DoctorCard';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { SERVICES, TESTIMONIALS } from '@/data/seed';
import styles from './page.module.css';

export default function Home() {
  const featuredServices = SERVICES.slice(0, 8); // Display first 8 services on homepage
  
  const faqs = [
    {
      question: "Is laser hair removal safe for Indian skin?",
      answer: "Yes, laser hair removal is absolutely safe for Indian skin provided that a professional dermatologist performs the procedure using the right tools by the correct method. Our experts use skilled Nd:YAG techniques to offer the best laser hair removal treatment without risking pigmentation changes."
    },
    {
      question: "How many sessions are required for laser hair removal?",
      answer: "For effective hair removal, generally 6 to 8 sessions are required. These sessions are scheduled according to the cycle of the hair growth, which is usually every 4 to 6 weeks."
    },
    {
      question: "What is PRP and how does it help hair loss?",
      answer: "Hair PRP (Platelet-Rich Plasma) therapy is a non-surgical treatment which is effective for promoting regrowth of hair. It improves the density of hair by stimulating hair follicles using your body's own growth factors derived from a small blood sample."
    },
    {
      question: "Is melasma curable?",
      answer: "There is no permanent 'cure' for melasma as it is largely hormonally driven, but it can be managed very effectively. The treatments provided by our experts include Microneedling, Chemical peels, Light therapy, and tailored skincare to significantly reduce and manage pigmentation."
    },
    {
      question: "Are anti-aging treatments like Botox safe?",
      answer: "Yes, anti-aging treatments like Botox and dermal fillers are generally safe when administered by an expert dermatologist. The treatments may have a few minor, temporary side effects like mild swelling or bruising, but they offer excellent, natural-looking results."
    }
  ];

  const doctors = [
    {
      name: "Dr. Gurinderjit Singh Puri",
      qualifications: "MD, Dermatologist",
      experience: "Pioneer in Hair Transplant • 40+ Years Exp",
      link: "/dr-gurinderjit-singh",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800" // We'll use a placeholder
    },
    {
      name: "Dr. Ashwajit Singh",
      qualifications: "MD, Dermatologist",
      experience: "Aesthetic Fellowship • 5+ Years Exp",
      link: "/dr-ashwajit-singh",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800" // Placeholder
    }
  ];

  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className="section" style={{ padding: '3rem 0' }}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>40+</div>
                <div className={styles.statLabel}>Years of Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10k+</div>
                <div className={styles.statLabel}>Happy Patients</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Advanced Treatments</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>4.9</div>
                <div className={styles.statLabel}>Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Treatments</span>
            <h2 className="section-title">Comprehensive <span>Skin & Hair Care</span></h2>
            <p className="section-subtitle mx-auto">
              We offer advanced dermatological solutions customized to your specific needs, ensuring the best possible results.
            </p>
          </div>
          
          <div className="grid-4">
            {featuredServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Doctors */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Expertise You Can Trust</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Meet The <span>Dermatologists</span></h2>
              <p style={{ marginBottom: '1.5rem' }}>
                With the help of Puri Skin Clinic, you can explore the option to access expert and experienced care. Resolve all your concerns without any worries with our extensive treatments.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                Whether you're struggling to find the right acne treatment, looking to restore your hairline, or seeking advanced facial rejuvenation, our specialists provide tailored treatments grounded in decades of medical expertise.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', color: 'var(--color-white)' }}>
                <li>✓ Pioneer of hair transplantation in North India</li>
                <li>✓ Advanced aesthetic treatments and fellowships</li>
                <li>✓ Patient-centric, transparent consultations</li>
                <li>✓ State-of-the-art clinic infrastructure</li>
              </ul>
              <Link href="/about-us" className="btn btn-primary">
                Read Our Story
              </Link>
            </div>
            
            <div className="grid-2">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.name} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "linear-gradient(to bottom, var(--color-bg), var(--color-surface))" }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">What Our <span>Patients Say</span></h2>
            <p className="section-subtitle mx-auto">
              Real results and experiences from people who trusted Puri Skin Clinic with their skin and hair goals.
            </p>
          </div>
          
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Got Questions?</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', textAlign: 'center', background: 'var(--color-card)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Ready to transform your skin and hair?</h2>
          <p style={{ marginBottom: '2rem' }}>
            Book a consultation with our expert dermatologists today and take the first step towards renewed confidence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-appointment" className="btn btn-primary">
              Book Appointment
            </Link>
            <a href="tel:+919815673163" className="btn btn-outline">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
