import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard/BlogCard';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import { Blog } from '@/lib/models';
import Image from 'next/image';
import { getPageSeo } from '@/lib/seo';

import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata() {
  return getPageSeo('blogs');
}

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  const seoData = await getPageSeo('blogs');
  let blogs = [];
  try {
    const rawData = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    blogs = rawData.map(b => b.get({ plain: true }));
  } catch (err) {
    console.error("Failed fetching blogs:", err);
  }

  return (
 
    <div className="bg-slate-50/50 min-h-screen pb-32">
      <JsonLd schema={seoData.schema} />
      
      {/* ─── ORIGINAL HERO SECTION ─── */}
      <div className="relative pt-10 pb-10 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden flex flex-col items-start justify-center text-white px-10 md:px-16">
            <Image 
              src="/dermatology-3.jpg" 
              alt="Blogs Hero" 
              fill 
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Blogs</h1>
            <div className="flex items-center gap-2 text-sm font-medium opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={10} />
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 space-y-20">
            
            {/* Featured Post */}
            {blogs.length > 0 && (
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#EA6490]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-50 flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden bg-slate-50">
                    <Image 
                      src={blogs[0].image_url || '/dermatology-3.jpg'} 
                      alt={blogs[0].title} 
                      fill 
                      className="object-contain transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                    <span className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest mb-6">Featured Article</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6 leading-tight group-hover:text-[#EA6490] transition-colors">
                      {blogs[0].title}
                    </h2>
                    <div className="text-slate-500 text-sm leading-relaxed mb-10 line-clamp-4 font-medium" dangerouslySetInnerHTML={{ __html: blogs[0].excerpt }} />
                    <Link href={`/${blogs[0].slug}/`} className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#EA6490] transition-all duration-500 shadow-xl shadow-slate-900/10">
                      Read Featured Story
                      <FaChevronRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Grid for Remaining Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogs.slice(1).map(blog => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>

            {blogs.length === 0 && (
              <div className="bg-white p-24 text-center rounded-[3rem] shadow-xl border border-slate-50">
                <p className="text-2xl text-slate-400 font-medium">Coming soon: Scientific skincare insights.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-12">
              <BlogSidebar />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
