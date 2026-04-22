import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import RadioFrequencyClient from './RadioFrequencyClient';

export async function generateMetadata() {
  return getPageSeo('radio-frequency');
}

export default async function RadioFrequencyPage() {
  const seoData = await getPageSeo('radio-frequency');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.radioFrequency} />
      <RadioFrequencyClient />
    </>
  );
}
