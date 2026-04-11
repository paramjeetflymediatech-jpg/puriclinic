import SuccessStoryCard from './SuccessStoryCard';
import { SuccessStory } from '@/lib/models';
export const dynamic = 'force-dynamic';

export default async function SuccessStoriesPage() {
  const stories = await SuccessStory.findAll({
    where: { is_active: true },
    order: [['createdAt', 'DESC']]
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Section */}
      <div className="relative w-full h-[400px] bg-[#C38EAB] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-heading text-white font-bold mb-6 drop-shadow-lg">
          Patient Success Stories
        </h1>
        <div className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest text-sm">
          <span>Home</span>
          <span className="w-1 h-1 bg-white/50 rounded-full"></span>
          <span className="text-white">Success Stories</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-16  mx-auto">
          <h2 className="text-[#EA6490] font-heading text-xl font-bold uppercase tracking-[0.2em] mb-6">
            Transformations
          </h2>
          <div className="space-y-6">
            <p className="">
              Scroll down to explore inspiring success stories and real before-and-after results of our valued patients. Witness the skill and precision of <span className='font-bold text-black border-b-2 border-[#EA6490]/30 pb-0.5'>Ludhiana&apos;s leading dermatologists</span> through their remarkable work in skin and hair rejuvenation.
            
              All images and videos have been shared with full patient consent. These visuals are intended solely for reference and must not be copied or reproduced without explicit permission.
            </p>
          </div>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story) => (
            <SuccessStoryCard key={story.id} story={JSON.parse(JSON.stringify(story))} />
          ))}
          
          {stories.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-400 font-bold uppercase tracking-widest text-sm italic">
              Our patient transformations are being updated...
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-[#EA6490] to-[#C38EAB] text-center text-white relative overflow-hidden shadow-[0_30px_100px_rgba(234,100,144,0.3)]">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
          
          <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight max-w-4xl mx-auto">
                Ready to Start Your Own Success Story?
              </h3>
              <p className="text-white/80 mb-12 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
                Our expert dermatologists are here to help you achieve the skin and hair you've always dreamed of. Let's write your transformation together.
              </p>
              <a 
                href="/book-appointment" 
                className="inline-block bg-white text-[#EA6490] px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              >
                Book Your Consultation
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
