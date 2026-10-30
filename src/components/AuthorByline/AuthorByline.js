import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaCheckCircle, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { DOCTOR_AUTHORS } from '@/constants/authors';

export default function AuthorByline({ author, variant = 'top', className = '' }) {
  const doc1 = DOCTOR_AUTHORS['dr-gurinderjit-singh'];
  const doc2 = DOCTOR_AUTHORS['dr-ashwajit-singh'];
  const currentAuthor = author || doc1;

  if (variant === 'top') {
    return (
      <aside
        aria-label="Article Author Byline"
        className={`my-8 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-50/70 via-white to-slate-50/80 border border-pink-100/80 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Author Identity */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-slate-100">
              <Image
                src={currentAuthor.image || doc1.image}
                alt={currentAuthor.name || doc1.name}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EA6490] bg-[#EA6490]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#EA6490]/15">
                  <FaCheckCircle className="text-[9px]" /> Medical Author
                </span>
                <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">
                  Verified Dermatologist
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">
                Author: <span className="text-slate-900 font-extrabold">{currentAuthor.bylineName}</span>
              </p>
            </div>
          </div>

          {/* Links for Doctor 1 & Doctor 2 */}
          {/* <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-white/95 px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-2xl border border-pink-100 shadow-2xs w-full lg:w-auto">
            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
              <span className="text-slate-500 font-semibold text-[11px] sm:text-xs uppercase tracking-wider">• Link 1:</span>
              <Link
                href={doc1.path}
                className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/40 hover:decoration-[#EA6490] transition-colors inline-flex items-center gap-1 break-words"
              >
                <span>{doc1.linkText}</span>
                <FaExternalLinkAlt className="text-[9px] opacity-70 shrink-0" />
              </Link>
            </div>

            <span className="hidden sm:inline text-slate-300">|</span>

            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
              <span className="text-slate-500 font-semibold text-[11px] sm:text-xs uppercase tracking-wider">• Link 2:</span>
              <Link
                href={doc2.path}
                className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/40 hover:decoration-[#EA6490] transition-colors inline-flex items-center gap-1 break-words"
              >
                <span>{doc2.linkText}</span>
                <FaExternalLinkAlt className="text-[9px] opacity-70 shrink-0" />
              </Link>
            </div>
          </div> */}
        </div>
      </aside>
    );
  }

  // Bottom variant (Redesigned, 100% Responsive Bio Card with Doctor 1 & 2 link section)
  return (
    <section
      aria-label="About the Authors"
      className={`mt-12 sm:mt-16 pt-8 border-t border-slate-100 ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-slate-50/90 via-white to-pink-50/40 border border-slate-100 p-5 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(234,100,144,0.06)] transition-all duration-300">
        {/* Subtle decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA6490] via-[#4CA6AE] to-[#EA6490]/40" />

        <div className="flex flex-col lg:flex-col items-start gap-6 sm:gap-8 lg:gap-10">
          {/* Doctor Avatar */}
          <div className="relative group shrink-0 mx-auto sm:mx-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-md bg-slate-100">
              <Image
                src={currentAuthor.image || doc1.image}
                alt={currentAuthor.name || doc1.name}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white text-[#EA6490] p-1.5 sm:p-2 rounded-xl shadow-md border border-pink-100">
              <FaAward className="text-xs sm:text-sm" />
            </div>
          </div>

          {/* Doctor Content & Links */}
          <div className="flex-grow space-y-4 w-full min-w-0">
            {/* Badges & Role */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-[#EA6490]/15 flex items-center gap-1.5">
                <FaUserMd className="text-xs" /> Verified Medical Author
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500">
                {currentAuthor.role} • {currentAuthor.experience}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-slate-900 leading-tight">
                Author: {currentAuthor.bylineName}
              </h3>
            </div>

            {/* Author Bio */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {currentAuthor.bio}
            </p>

            {/* Both Doctor Links Section */}
            <div className="mt-5 pt-5 border-t border-slate-100/90 space-y-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA6490]"></span>
                Medical Authors & Clinic Profiles:
              </p>

              {/* 1. Doctor 1 Link */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-2xs transition-all hover:border-pink-200 hover:shadow-xs space-y-1">
                <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                  <span className="text-[#EA6490] font-black mr-1">1.</span>
                  Author: <span className="text-slate-800">{doc1.bylineName}</span>
                </p>
                <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm pl-4 sm:pl-5">
                  <span className="font-bold text-slate-500 shrink-0">• Link:</span>
                  <Link
                    href={doc1.path}
                    className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/40 hover:decoration-[#EA6490] transition-colors break-words inline-flex items-center gap-1.5 min-w-0"
                  >
                    <span>{doc1.linkText}</span>
                    <FaExternalLinkAlt className="text-[10px] shrink-0 opacity-70" />
                  </Link>
                </div>
              </div>

              {/* 2. Doctor 2 Link (Second doctor URL added directly after) */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-2xs transition-all hover:border-pink-200 hover:shadow-xs space-y-1">
                <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                  <span className="text-[#EA6490] font-black mr-1">2.</span>
                  Author: <span className="text-slate-800">{doc2.bylineName}</span>
                </p>
                <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm pl-4 sm:pl-5">
                  <span className="font-bold text-slate-500 shrink-0">• Link:</span>
                  <Link
                    href={doc2.path}
                    className="text-[#EA6490] hover:text-[#d4547a] font-bold underline decoration-[#EA6490]/40 hover:decoration-[#EA6490] transition-colors break-words inline-flex items-center gap-1.5 min-w-0"
                  >
                    <span>{doc2.linkText}</span>
                    <FaExternalLinkAlt className="text-[10px] shrink-0 opacity-70" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Doctor Profile CTA */}
          <div className="shrink-0 w-full sm:w-auto self-stretch lg:self-center pt-2 lg:pt-0">
            <Link
              href={currentAuthor.path || doc1.path}
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-[#EA6490] text-white rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg text-center"
            >
              Doctor Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
