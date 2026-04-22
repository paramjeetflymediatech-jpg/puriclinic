import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import LaserHairRemovalClient from './LaserHairRemovalClient';

export async function generateMetadata() {
  return getPageSeo('laser-hair-removal');
}

export default async function LaserHairRemovalPage() {
  const seoData = await getPageSeo('laser-hair-removal');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <LaserHairRemovalClient />
    </>
  );
}
