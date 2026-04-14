import SuccessStoriesClient from './SuccessStoriesClient';
import { SuccessStory } from '@/lib/models';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default async function SuccessStoriesPage() {
  const storiesRaw = await SuccessStory.findAll({
    where: { is_active: true },
    order: [['createdAt', 'DESC']]
  });

  const stories = JSON.parse(JSON.stringify(storiesRaw));

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] bg-slate-900 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,100,144,0.15),transparent_70%)]"></div>
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center gap-3 text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-8">
            <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
            <FaChevronRight size={8} />
            <span className="text-[#EA6490]">Transformations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white font-bold mb-6 leading-tight">
            Patient <span className="text-[#EA6490]">Success</span> Stories
          </h1>
          
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Witness the art of clinical excellence through our curated collection of real patient transformations.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Our Legacy of Results
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
            Exceptional <span className="text-[#EA6490]">Transformations</span> by Ludhiana's Expert Dermatologists
          </h2>
          <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
            <p>
              Explore inspiring success stories and real before-and-after results achieved through state-of-the-art dermatological care. From advanced hair restoration to precision skin rejuvenation, each story reflects our commitment to clinical perfection.
            </p>
            <p className="text-sm italic opacity-60">
              *All shared with patient consent. Images are for reference only and protected by copyright.
            </p>
          </div>
        </div>

        {/* Success Stories Grid Wrapper */}
        <SuccessStoriesClient stories={stories} />

        {/* CTA Section */}
        <div className="mt-32 md:mt-48 p-12 md:p-24 rounded-[3rem] lg:rounded-[5rem] bg-slate-900 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EA6490]/5 skew-x-12 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#EA6490]/5 -skew-x-12 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                Ready to Start Your Own <span className="text-[#EA6490]">Transformation</span>?
              </h3>
              <p className="text-white/50 mb-12 text-lg md:text-xl leading-relaxed">
                Consult with Dr. G.S. Puri & Dr. Ashwajit Puri to develop your personalized treatment plan today.
              </p>
              <Link 
                href="/book-appointment" 
                className="inline-flex items-center justify-center bg-[#EA6490] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#EA6490] transition-all duration-300 shadow-xl shadow-[#EA6490]/20"
              >
                Schedule Consultation
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
