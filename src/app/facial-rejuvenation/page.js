import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FacialRejuvenationClient from './FacialRejuvenationClient';

export async function generateMetadata() {
  return getPageSeo('facial-rejuvenation');
}

export default async function FacialRejuvenationPage() {
  const seoData = await getPageSeo('facial-rejuvenation');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FacialRejuvenationClient />
    </>
  );
}
