import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard/BlogCard';
import { BLOGS } from '@/data/seed';

export const metadata = {
  title: 'Skin & Hair Care Blogs | Puri Skin Clinic',
  description: 'Read the latest tips, updates, and educational articles on skin care, hair restoration, and dermatology from our expert doctors.',
};

export default function BlogsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <FaChevronRight size={10} /> <span>Blogs</span>
          </div>
          <h1 className="section-title">Skin & Hair <span>Journal</span></h1>
          <p className="section-subtitle mx-auto">
            Educational articles and tips from our experienced dermatologists.
          </p>
        </div>
      </div>

      <section className="section bg-card">
        <div className="container">
          <div className="grid-3">
            {BLOGS.map(blog => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
