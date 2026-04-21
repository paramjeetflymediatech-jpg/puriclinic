import SuccessStoriesClient from './SuccessStoriesClient';
import { SuccessStory } from '@/lib/models';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText/TypewriterText';

import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata() {
  return getPageSeo('success-stories');
}

export const dynamic = 'force-dynamic';

export default async function SuccessStoriesPage() {
  const seoData = await getPageSeo('success-stories');
  const storiesRaw = await SuccessStory.findAll({
    where: { is_active: true },
    order: [['createdAt', 'DESC']]
  });

  const stories = JSON.parse(JSON.stringify(storiesRaw));

  return (
    <div className="bg-white min-h-screen">
      <JsonLd schema={seoData.schema} />
      <div className="relative pt-10 pb-10 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden flex flex-col items-start justify-center text-white px-10 md:px-16">
            <Image
              src="/bgimg.jpg"
              alt="Success Stories Hero"
              fill
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <div className="flex items-center gap-2 text-sm font-medium opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span>Success Stories</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="font-heading text-xl md:text-xl lg:text-2xl font-bold text-slate-900 mb-10 leading-tight">
            Experience the Transformation at <TypewriterText words={["Puri", "Puri Skin Clinic"]} />
          </h2>

          <p className="text-black-600 text-sm md:text-lg leading-relaxed mb-6">
            Scroll down to explore inspiring success stories and real before-and-after results of our valued patients. Witness the skill and precision of <strong>Ludhiana's leading dermatologists</strong> through their remarkable work in skin and hair rejuvenation.
          </p>
          <p className="text-black-400 text-sm md:text-md italic leading-relaxed max-w-4xl mx-auto">
            All visuals have been shared with full patient consent. These visuals are intended solely for reference and must not be copied or reproduced without explicit permission.
          </p>
        </div>
        {/* Success Stories Grid Wrapper */}
        <SuccessStoriesClient stories={stories} />
      </div>
    </div>
  );
}
