import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import FacialRejuvenationClient from './FacialRejuvenationClient';

export async function generateMetadata() {
  return getPageSeo('facial-rejuvenation');
}

export default async function FacialRejuvenationPage() {
  const seoData = await getPageSeo('facial-rejuvenation');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.facialRejuvenation} />
      <FacialRejuvenationClient />
    </>
  );
}
