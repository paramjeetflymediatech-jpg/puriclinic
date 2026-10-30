import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function AuthorByline({ author, variant = 'top', className = '' }) {
  if (!author) return null;

  if (variant === 'top') {
    return (
      <div className={`my-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-50/70 via-white to-slate-50 border border-pink-100/80 shadow-sm transition-all hover:shadow-md ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-slate-100">
              <Image
                src={author.image}
                alt={author.name}
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EA6490] bg-[#EA6490]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <FaCheckCircle className="text-[9px]" /> Medical Author
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden xs:inline">
                  Verified Dermatologist
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                Author: <span className="text-slate-900 font-extrabold">{author.bylineName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-pink-100 shadow-2xs self-start sm:self-auto">
            <span className="text-slate-500 font-semibold">• Link:</span>
            <Link
              href={author.path}
              className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/40 hover:decoration-[#EA6490] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{author.linkText}</span>
              <FaExternalLinkAlt className="text-[10px] opacity-70" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Bottom variant (Comprehensive Author Bio Card)
  return (
    <div className={`mt-14 pt-8 border-t border-slate-100 ${className}`}>
      <div className="bg-gradient-to-br from-slate-50 via-white to-pink-50/40 rounded-[2rem] p-6 sm:p-8 md:p-10 border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg flex-shrink-0 bg-slate-100">
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="112px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex-grow space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#EA6490]/15 flex items-center gap-1.5">
                <FaUserMd className="text-xs" /> Verified Author
              </span>
              <span className="text-xs font-bold text-slate-400">
                {author.role} • {author.experience}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-tight">
              Author: {author.bylineName}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              {author.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="font-bold text-slate-700">• Link:</span>
              <Link
                href={author.path}
                className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/50 hover:decoration-[#EA6490] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{author.linkText}</span>
                <FaExternalLinkAlt className="text-[10px] opacity-70" />
              </Link>
            </div>
          </div>

          <div className="shrink-0 self-stretch sm:self-center">
            <Link
              href={author.path}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-[#EA6490] text-white rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg"
            >
              Doctor Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

