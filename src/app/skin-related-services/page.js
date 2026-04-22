import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import SkinServicesClient from './SkinServicesClient';

export async function generateMetadata() {
  return getPageSeo('skin-related-services');
}

export default async function SkinServicesPage() {
  const seoData = await getPageSeo('skin-related-services');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <SkinServicesClient />
    </>
  );
}
