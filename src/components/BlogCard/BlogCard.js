import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  const dateStr = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'February 10, 2026';

  return (
    <article className="bg-white overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] group mb-12 border border-gray-100">
      <Link href={`/blogs/${blog.slug}`} className="relative w-full pt-[56.25%] overflow-hidden block">
        <Image 
          src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          priority
        />
      </Link>
      
      <div className="p-10 md:p-12 flex flex-col">
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="font-heading text-2xl md:text-3xl text-black mb-6 leading-[1.3] font-bold transition-colors duration-300 group-hover:text-[#EA6490]">
            {blog.title}
          </h2>
        </Link>
        
        <p className="text-[#6a6a6a] text-lg leading-[1.8] mb-8 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="mb-8">
          <Link href={`/blogs/${blog.slug}`} className="text-sm font-bold text-black uppercase tracking-widest inline-flex items-center group/link hover:text-[#EA6490] transition-colors">
            READ MORE »
          </Link>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex items-center justify-between text-[#7A7A7A] text-sm font-medium">
          <span>{dateStr}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
