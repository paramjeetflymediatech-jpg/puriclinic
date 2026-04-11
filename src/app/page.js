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

export default async function Home() {
  const testimonials = await Testimonial.findAll({ 
    order: [['createdAt', 'DESC']],
    limit: 10
  });

  console.log('HOMEPAGE TESTIMONIALS RAW COUNT:', testimonials.length);
  if (testimonials.length > 0) {
     console.log('Sample Testimonial:', testimonials[0].author, testimonials[0].is_active);
  }

  return (
    <>
      <Hero />
      <StatsStrip />
      <Services/>
      <AboutSection/>
      <ReasonsSection />
      <DoctorBios />
      <SuccessStoriesCarousel title="Patient Transformations" />
      <section className="py-24 px-4 bg-white overflow-hidden">
        <TestimonialSlider testimonials={JSON.parse(JSON.stringify(testimonials))} />
      </section>
      <FAQAccordion faqs={FAQ_DATA.general} />
    </>
  );
}
