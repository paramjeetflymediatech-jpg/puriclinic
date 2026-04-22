import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import DermarollerClient from './DermarollerClient';

export async function generateMetadata() {
  return getPageSeo('dermaroller');
}

export default async function DermarollerPage() {
  const seoData = await getPageSeo('dermaroller');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <DermarollerClient />
    </>
  );
}
