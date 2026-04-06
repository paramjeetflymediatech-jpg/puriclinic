import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
import { BLOGS } from '@/data/seed';

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = BLOGS.find(b => b.slug === resolvedParams.slug);
  
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
  const blog = BLOGS.find(b => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="page-hero" style={{ paddingBottom: '8rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> 
            <Link href="/blogs">Blogs</Link> <FaChevronRight size={10} /> 
            <span style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {blog.title}
            </span>
          </div>
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', color: 'var(--color-accent)', alignItems: 'center', fontSize: '0.9rem' }}>
             <span className="badge badge-skin">{blog.language === 'en' ? 'English' : 'Hindi'}</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <FaCalendarAlt /> Published by Puri Skin Clinic
             </span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{blog.title}</h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginTop: '-4rem', marginBottom: '3rem', zIndex: 10, boxShadow: 'var(--shadow-card)' }}>
            <Image 
              src={blog.image_url} 
              alt={blog.title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>

          <div 
            className="blog-content"
            style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
          
          {/* Inject basic article styling for the HTML content */}
          <style dangerouslySetInnerHTML={{__html: `
            .blog-content h2 { font-family: var(--font-heading); font-size: 1.75rem; color: var(--color-white); margin: 2rem 0 1rem; }
            .blog-content p { margin-bottom: 1.5rem; color: var(--color-text-muted); }
            .blog-content ul { list-style: disc; padding-left: 2rem; margin-bottom: 1.5rem; color: var(--color-text-muted); }
            .blog-content li { margin-bottom: 0.5rem; }
            .blog-content strong { color: var(--color-white); }
          `}} />

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Share this article</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-outline" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                Copy Link
              </button>
              <Link href="/book-appointment" className="btn btn-primary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
