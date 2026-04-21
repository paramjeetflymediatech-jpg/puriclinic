import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import AboutUsClient from './AboutUsClient';

export async function generateMetadata() {
  return getPageSeo('about-us');
}

export default async function AboutUs() {
  const seoData = await getPageSeo('about-us');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <AboutUsClient />
    </>
  );
}
