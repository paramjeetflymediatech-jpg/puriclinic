import React from 'react';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import AboutSection from '@/components/About/AboutSection';
import ReasonsSection from '@/components/Reasons/ReasonsSection';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel/SuccessStoriesCarousel';
import StatsStrip from '@/components/Stats/StatsStrip';
import DoctorBios from '@/components/Doctors/DoctorBios';
import TestimonialSlider from '@/components/TestimonialSlider/TestimonialSlider';
import { Testimonial } from '@/lib/models';
import { getPageSeo } from '@/lib/seo';
import AppointmentCTA from '@/components/AppointmentCTA/AppointmentCTA';

export async function generateMetadata() {
  return getPageSeo('home');
}

export default async function Home() {
  const testimonials = await Testimonial.findAll({
    where: { is_active: true },
    order: [['createdAt', 'DESC']],
    limit: 20,
  });

  return (
    <>
      <Hero />
      <Services/>
      <AboutSection/>
      <ReasonsSection />
      <DoctorBios />
      <SuccessStoriesCarousel title="Patient Transformations" />
      <AppointmentCTA />
      <StatsStrip />
      <FAQAccordion faqs={FAQ_DATA.general} />
      <TestimonialSlider testimonials={JSON.parse(JSON.stringify(testimonials))} />
    </>
  );
}
