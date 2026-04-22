import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import DoctorsClient from './DoctorsClient';

export async function generateMetadata() {
  return getPageSeo('doctors');
}

export default async function DoctorsPage() {
  const seoData = await getPageSeo('doctors');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <DoctorsClient />
    </>
  );
}
