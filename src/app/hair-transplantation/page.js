import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import HairTransplantClient from './HairTransplantClient';

export async function generateMetadata() {
  return getPageSeo('hair-transplantation');
}

export default async function HairTransplantPage() {
  const seoData = await getPageSeo('hair-transplantation');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <HairTransplantClient />
    </>
  );
}
