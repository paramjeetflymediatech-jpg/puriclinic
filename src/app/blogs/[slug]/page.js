import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Blog } from '@/lib/models';
import { getPageSeo } from '@/lib/seo';
import ShareButtons from '@/components/ShareButtons/ShareButtons';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = await Blog.findOne({ where: { slug } });

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  // Check for custom SEO settings in DB
  const customSeo = await getPageSeo(`blog:${slug}`);

  // Fallback to blog content if no custom settings
  const title = customSeo.title !== 'Puri Skin Clinic' ? customSeo.title : `${blog.title} | Puri Skin Clinic Blog`;
  const description = customSeo.description || blog.excerpt || '';

  return {
    ...customSeo,
    title,
    description,
    openGraph: {
      ...customSeo.openGraph,
      title: customSeo.openGraph?.title || title,
      description: customSeo.openGraph?.description || description,
      images: customSeo.openGraph?.images || (blog.image_url ? [{ url: blog.image_url }] : []),
    },
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
    <div className="bg-white min-h-screen">
      <div className="relative pt-10 pb-10 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[150px] md:h-[250px] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-white px-10 md:px-16 text-center">
            <Image 
              src="/bgimg.jpg" 
              alt="Blog Hero" 
              fill 
              className="object-cover -z-10 brightness-[0.4]"
              priority
            />
            <span className="text-white/80 text-[20px] font-black uppercase tracking-[0.5em] mb-4">Blog</span>
            <h1 className="font-heading text-xl md:text-3xl lg:text-3xl mb-8 max-w-4xl leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={8} />
              <Link href="/blogs/" className="hover:text-[#EA6490] transition-colors">Blogs</Link>
              <FaChevronRight size={8} />
              <span className="line-clamp-1 max-w-[200px]">{blog.title}</span>
            </div>
          </div>
        </div>
      </div>



      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sidebar (Left) */}
          <div className="w-full lg:w-1/3 order-1">
            <BlogSidebar />
          </div>


          {/* Article Content (Right) */}
          <div className="w-full lg:w-2/3 order-2 bg-white p-4 md:p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-50 rounded-[2.5rem]">

          <article className="prose prose-lg ">
            {/* Main Content */}
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mb-10">
              <Image
                src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
                alt={blog.title}
                fill
                className="object-fit"
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
                <Link href="/book-appointment/" className="bg-[#EA6490] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d4547a] transition-all transform hover:scale-105 shadow-lg">
                  Book Appointment
                </Link>
              </div>
            </div>
          </article>
        </div>
        </div>
      </div>
    </div>
  );
}
