import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Blog } from '@/lib/models';
import { getPageSeo } from '@/lib/seo';
import ShareButtons from '@/components/ShareButtons/ShareButtons';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import AuthorByline from '@/components/AuthorByline/AuthorByline';
import { getAuthor, generateAuthorSchema } from '@/constants/authors';

import JsonLd from '@/components/Seo/JsonLd';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const blog = await Blog.findOne({ where: { slug, is_published: true } });

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  const customSeo = await getPageSeo(`blog:${slug}`);

  const title = blog.meta_title || (customSeo.title !== 'Puri Skin Clinic' ? customSeo.title : `${blog.title} | Puri Skin Clinic Blog`);
  const description = blog.meta_description || customSeo.description || blog.excerpt || '';
  const keywords = blog.meta_keywords || customSeo.keywords || '';

  return {
    ...customSeo,
    title,
    description,
    keywords,
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
  const slug = decodeURIComponent(resolvedParams.slug);
  const [rawBlog, customSeo] = await Promise.all([
    Blog.findOne({ where: { slug, is_published: true } }),
    getPageSeo(`blog:${slug}`)
  ]);

  if (!rawBlog) {
    notFound();
  }

  const blog = rawBlog.get({ plain: true });

  const author = getAuthor(blog.author_slug);
  const authorSchema = generateAuthorSchema(author, blog);

  const dateStr = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'February 10, 2026';

  return (
    <div className="bg-white min-h-screen">
      <JsonLd schema={customSeo.schema} />

      {/* Structured Schema Markup (BlogPosting + Author Person Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {/* ─── EDITORIAL HERO ─── */}
      <div className="relative pt-10 pb-12 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="relative h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-white px-6 md:px-20 text-center">
            {/* Background Image - Dynamic based on post */}
            <Image
              src={"/dermatology-3.jpg"}
              alt={blog.title}
              fill
              className="object-cover -z-10 brightness-[0.45]"
              priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10"></div>

            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-8 bg-[#EA6490]"></span>
                <span className="text-[#EA6490] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                  {blog.category || "Medical Insights"}
                </span>
                <span className="h-[1px] w-8 bg-[#EA6490]"></span>
              </div>

              <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></span>
                  {dateStr}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></span>
                  By {author.name}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></span>
                  {Math.ceil((blog.content?.length || 1000) / 1000)} Min Read
                </span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="absolute bottom-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
              <Link href="/" className="hover:text-[#EA6490]">Home</Link>
              <FaChevronRight size={8} />
              <Link href="/blogs/" className="hover:text-[#EA6490]">Blogs</Link>
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
            {/* Top Author Byline */}
            <AuthorByline author={author} variant="top" />

            <article className="prose prose-lg max-w-none">
              {/* Main Content Image */}
              <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mb-10 rounded-2xl">
                <Image
                  src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Main Blog HTML Content */}
              <div
                className="blog-content leading-[1.9] text-[#444] text-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Bottom Author Byline / Bio Box */}
              <AuthorByline author={author} variant="bottom" />

              {/* Custom Post Content Styles */}
              <style dangerouslySetInnerHTML={{
                __html: `
                .blog-content h2 { font-family: var(--font-heading); font-size: 2.25rem; color: #000; margin: 3rem 0 1.5rem; font-weight: 700; border-left: 4px solid #EA6490; padding-left: 1rem; }
                .blog-content h3 { font-family: var(--font-heading); font-size: 1.75rem; color: #000; margin: 2.5rem 0 1.25rem; font-weight: 600; }
                .blog-content h4 { font-family: var(--font-heading); font-size: 1.35rem; color: #1e293b; margin: 2rem 0 1rem; font-weight: 600; }
                .blog-content p { margin-bottom: 2rem; }
                .blog-content ul, .blog-content ol { padding-left: 1.5rem; margin-bottom: 2rem; list-style-type: square; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content strong { color: #000; font-weight: 800; }
                .blog-content a { color: #EA6490; text-decoration: underline; font-weight: 600; text-underline-offset: 3px; }
                .blog-content a:hover { color: #d4547a; }
                .blog-content blockquote { font-style: italic; border-left: 4px solid #EA6490; padding-left: 1.5rem; color: #666; margin: 2rem 0; font-size: 1.25rem; background: #fafafa; padding: 1.5rem; border-radius: 0 1rem 1rem 0; }
                .blog-content figure.table { margin: 2.5rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; }
                .blog-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; }
                .blog-content th { background-color: #f8fafc; color: #0f172a; font-weight: 700; padding: 1rem; text-align: left; border: 1px solid #e2e8f0; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
                .blog-content td { padding: 0.85rem 1rem; border: 1px solid #e2e8f0; color: #334155; }
                .blog-content tr:nth-child(even) td { background-color: #fafbfd; }
                .blog-content figure.image { margin: 2.5rem auto; text-align: center; }
                .blog-content img { border-radius: 1rem; margin: 2rem auto; box-shadow: 0 10px 40px rgba(0,0,0,0.08); max-width: 100%; height: auto; display: block; }
                .blog-content figcaption { text-align: center; font-size: 0.875rem; color: #64748b; font-style: italic; margin-top: 0.75rem; }
                .blog-content span[style*="background-color"],
                .blog-content mark {
                  padding: 0.15em 0.45em;
                  border-radius: 0.35rem;
                  box-decoration-break: clone;
                  -webkit-box-decoration-break: clone;
                }
                .blog-content div[style*="background-color"] {
                  border-radius: 1rem;
                  box-sizing: border-box;
                }
              `}} />

              {/* Share and Appointment Section */}
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-2">Did you find this helpful?</h2>
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

        {/* Custom JSON-LD Schema if specified on the blog */}
        {blog.meta_schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: blog.meta_schema }}
          />
        )}
      </div>
    </div>
  );
}
