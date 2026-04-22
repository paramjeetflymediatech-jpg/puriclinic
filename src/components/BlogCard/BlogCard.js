import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  const dateStr = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'February 10, 2026';

  return (
    <article className="bg-white overflow-hidden transition-all duration-700 shadow-[0_10px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] group mb-12 rounded-[2rem] border border-slate-50">
      <Link href={`/${blog.slug}/`} className="relative w-full aspect-[16/9] overflow-hidden block">
        <Image 
          src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
          className="object-cover  "
          priority
        />
      </Link>
      
      <div className="p-12 md:p-14 flex flex-col">
        <Link href={`/${blog.slug}/`}>
          <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.3] font-bold transition-colors duration-500 group-hover:text-[#EA6490]">
            {blog.title}
          </h2>
        </Link>
        
        <div 
          className="text-slate-500 text-lg md:text-xl leading-[1.8] mb-10 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: blog.excerpt }}
        />
        
        <div className="mb-10">
          <Link href={`/${blog.slug}/`} className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] inline-flex items-center group/link hover:text-[#EA6490] transition-colors gap-2">
            READ MORE 
            <span className="group-hover/link:translate-x-2 transition-transform duration-300">»</span>
          </Link>
        </div>
        
        <div className="pt-10 border-t border-slate-50 flex items-center justify-between text-slate-400 text-sm font-bold uppercase tracking-widest">
          <span>{dateStr}</span>
        </div>
      </div>
    </article>

  );
};

export default BlogCard;
