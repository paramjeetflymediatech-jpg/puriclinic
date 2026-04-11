import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Blog } from '@/lib/models';
import ShareButtons from '@/components/ShareButtons/ShareButtons';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await Blog.findOne({ where: { slug: resolvedParams.slug } });

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function SingleBlog({ params }) {
  const resolvedParams = await params;
  const rawBlog = await Blog.findOne({ where: { slug: resolvedParams.slug } });

  if (!rawBlog) {
    notFound();
  }

  const blog = rawBlog.get({ plain: true });

  const dateStr = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'February 10, 2026';

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-body">
      {/* Cinematic Hero Header */}
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden flex items-center justify-center text-center">
        {/* Background Image with Cinematic Crop */}
        <div className="absolute inset-0 z-0 ">

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-[#C38EAB] backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-white/80 mb-6 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <FaChevronRight size={8} className="opacity-50" />
            <Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white font-bold leading-[1.2] max-w-[900px] mx-auto drop-shadow-lg">
            {blog.title}
          </h1>
        </div>
      </div>



      <div className="py-12 flex max-w-[1400px] mx-auto flex-col lg:flex-row "> 
        {/* Sidebar (Left) */}
        <div className="w-full">
          <BlogSidebar props={{width:'w-full'}} />
        </div>

        {/* Article Content (Right) */}
        <div className="w-full  bg-white p-6 md:p-12 lg:p-16 shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100 rounded-sm">
          <article className="prose prose-lg ">
            {/* Main Content */}
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mb-10">
              <Image
                src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="blog-content leading-[1.9] text-[#444] text-lg"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />


            {/* Custom Post Content Styles */}
            <style dangerouslySetInnerHTML={{
              __html: `
                .blog-content h2 { font-family: var(--font-heading); font-size: 2.25rem; color: #000; margin: 3rem 0 1.5rem; font-weight: 700; border-left: 4px solid #EA6490; padding-left: 1rem; }
                .blog-content h3 { font-family: var(--font-heading); font-size: 1.75rem; color: #000; margin: 2.5rem 0 1.25rem; font-weight: 600; }
                .blog-content p { margin-bottom: 2rem; }
                .blog-content ul, .blog-content ol { padding-left: 1.5rem; margin-bottom: 2rem; list-style-type: square; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content strong { color: #000; font-weight: 800; }
                .blog-content blockquote { font-style: italic; border-left: 4px solid #EA6490; padding-left: 1.5rem; color: #666; margin: 2rem 0; font-size: 1.25rem; }
                .blog-content img { border-radius: 4px; margin: 3rem auto; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
              `}} />

            {/* Share and Appointment Section */}
            <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="font-heading text-2xl font-bold mb-2">Did you find this helpful?</h4>
                <p className="text-gray-500">Share this article with your community</p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <ShareButtons />
                <Link href="/book-appointment" className="bg-[#EA6490] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d4547a] transition-all transform hover:scale-105 shadow-lg">
                  Book Appointment
                </Link>
              </div>
            </div>
          </article>
        </div>
        </div>
     
    </div>
  );
}
