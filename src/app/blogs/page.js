import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard/BlogCard';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import { Blog } from '@/lib/models';

export const metadata = {
  title: 'Skin & Hair Care Blogs | Puri Skin Clinic',
  description: 'Read the latest tips, updates, and educational articles on skin care, hair restoration, and dermatology from our expert doctors.',
};

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  let blogs = [];
  try {
    const rawData = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    blogs = rawData.map(b => b.get({ plain: true }));
  } catch (err) {
    console.error("Failed fetching blogs:", err);
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 py-12 mb-12">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm font-medium text-[#EA6490] mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#4CA6AE] transition-colors">Home</Link> 
            <FaChevronRight size={10} className="text-gray-300" /> 
            <span className="text-gray-400">Blogs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading text-black font-bold">Blogs</h1>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 lg:px-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
             {/* Sidebar */}
          <div className="order-1 lg:order-1">
            <BlogSidebar />
          </div>
          {/* Main Content */}
          <div className="flex-1 order-2 lg:order-2">
            <div className="space-y-4">
              {blogs.map(blog => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
              {blogs.length === 0 && (
                <div className="bg-white p-20 text-center rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-xl text-gray-500">No blogs available at the moment. Please check back soon!</p>
                </div>
              )}
            </div>
          </div>

       

        </div>
      </div>
    </div>
  );
}
