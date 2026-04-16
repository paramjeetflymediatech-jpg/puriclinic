import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard/BlogCard';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import { Blog } from '@/lib/models';
import Image from 'next/image';
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
    <div className="bg-white min-h-screen">
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

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 order-1">
            <BlogSidebar />
          </div>

          <div className="w-full lg:w-2/3 order-2">

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
