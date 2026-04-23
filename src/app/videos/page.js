import { SuccessStory } from '@/lib/models';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText/TypewriterText';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import SuccessStoriesClient from '../success-stories/SuccessStoriesClient';

export async function generateMetadata() {
  return getPageSeo('videos');
}

export const dynamic = 'force-dynamic';

export default async function VideosPage() {
  const seoData = await getPageSeo('videos');
  const storiesRaw = await SuccessStory.findAll({
    where: { 
      is_active: true,
      media_type: 'video'
    },
    order: [['createdAt', 'DESC']]
  });

  const stories = JSON.parse(JSON.stringify(storiesRaw));

  return (
    <div className="bg-white min-h-screen">
      <JsonLd schema={seoData.schema} />
      <div className="relative pt-10 pb-10 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative  rounded-[2rem] overflow-hidden flex flex-col items-start justify-center text-white px-10 md:px-16">
            <Image
              src="/bgimg.jpg"
              alt="Videos Hero"
            width={2000}
          height={2000}
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Video Transformations</h1>
            <div className="flex items-center gap-2 text-sm font-medium opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span>Videos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="font-heading text-xl md:text-xl lg:text-2xl font-bold text-slate-900 mb-10 leading-tight">
            Watch the Journey at <TypewriterText words={["Puri", "Puri Skin Clinic"]} />
          </h2>
        </div>
        
        <SuccessStoriesClient stories={stories} />
      </div>
    </div>
  );
}
