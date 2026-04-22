import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaChevronRight} from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  const dateStr = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'February 10, 2026';

  return (
    <article className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/${blog.slug}/`} className="relative aspect-[16/10] overflow-hidden block">
        <Image 
          src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
          
      </Link>
      
      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#EA6490]/30"></span>
          <span className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest">Medical Insights</span>
        </div>

        <Link href={`/${blog.slug}/`}>
          <h2 className="font-heading text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#EA6490] transition-colors duration-300">
            {blog.title}
          </h2>
        </Link>
        
        <div 
          className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium"
          dangerouslySetInnerHTML={{ __html: blog.excerpt }}
        />
        
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <Link href={`/${blog.slug}/`} className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 group/link">
            Read Article
            <span className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-[#EA6490] group-hover/link:text-white transition-all duration-300">
              <FaChevronRight size={8} />
            </span>
          </Link>
          <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">
            {Math.ceil((blog.content?.length || 1000) / 1000)} min read
          </span>
        </div>
      </div>
    </article>

  );
};

export default BlogCard;
