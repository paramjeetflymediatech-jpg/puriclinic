import React from 'react';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import AboutSection from '@/components/About/AboutSection';
import ReasonsSection from '@/components/Reasons/ReasonsSection';


export default function Home() {
  return (
    <>
      <Hero />
      <Services/>
      <AboutSection/>
      <ReasonsSection />
    </>
  );
}
