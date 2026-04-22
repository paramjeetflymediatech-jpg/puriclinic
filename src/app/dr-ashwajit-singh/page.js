import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaPlayCircle } from 'react-icons/fa';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata() {
  return getPageSeo('dr-ashwajit-singh');
}

export default async function DrAshwajitSingh() {
    const seoData = await getPageSeo('dr-ashwajit-singh');

    return (
        <div className="bg-white min-h-screen">
            <JsonLd schema={seoData.schema} />

            {/* ─── HERO BANNER SECTION ─── */}
            <div className="container py-10">
                <div className="relative w-full h-[180px] md:h-[250px] rounded-[2.5rem] overflow-hidden flex items-center justify-start p-6 md:p-12 lg:p-20">
                    <Image
                        src="/dermatology-3.jpg"
                        alt="Dr Ashwajit Singh"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 "></div>
                    <div className="relative z-10 backdrop-blur-md px-12 py-8 text-left text-white">
                        <h3 className="text-3xl md:text-4xl font-heading mb-4">Dr Ashwajit Singh</h3>
                        <div className="flex items-center justify-start gap-2 text-sm font-medium">
                            <Link href="/" className="hover:text-[#EA6490] transition-colors flex items-center gap-2">
                                Home
                            </Link>
                            <FaChevronRight className="text-white/40 text-[16px]" />
                            <span className="text-white/80">Dr Ashwajit Singh</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── MAIN CONTENT SECTION ─── */}
            <section className="py-12 md:py-20">
                <div className="container px-6 max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Right Column: Integrated Profile Card */}
                        <div className="lg:w-[35%] w-full order-first lg:order-last lg:sticky lg:top-32 mb-12 lg:mb-0">
                            {/* Mobile Integrated Card (Visible on mobile only) */}
                            <div className="lg:hidden bg-white rounded-[2rem] p-6 shadow-xl border border-slate-50 flex items-center gap-6">
                                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white">
                                    <Image
                                        src="/doctors/dr-ashwajit/de4.avif"
                                        alt="Dr. Ashwajit Singh"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest mb-1">Resident Dermatologist</p>
                                    <h2 className="text-xl font-heading font-black text-slate-900 leading-tight">Dr Ashwajit Singh</h2>
                                    <p className="text-slate-500 text-xs mt-1 font-medium italic">MD (Dermatology)</p>
                                    <div className="mt-3 flex gap-3">
                                        <span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] rounded-md border border-slate-100 font-bold">5+ Yrs Exp</span>
                                        <span className="px-2 py-1 bg-[#EA6490]/5 text-[#EA6490] text-[10px] rounded-md border border-[#EA6490]/10 font-bold">Aesthetics</span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout (Hidden on mobile) */}
                            <div className="hidden lg:block space-y-8">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] h-[450px]">
                                    <Image
                                        src="/doctors/dr-ashwajit/de4.avif"
                                        alt="Dr. Ashwajit Singh"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>

                                <div className="bg-[#EA6490] text-white p-8 rounded-[2rem] shadow-xl">
                                    <p className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-80">Resident Dermatologist</p>
                                    <p className="text-xl font-heading font-black leading-tight">MD (Dermatology)</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="opacity-70 font-medium">Experience:</span>
                                            <span className="font-bold">5+ Years</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="opacity-70 font-medium">Speciality:</span>
                                            <span className="font-bold">Dermatologist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Column: Bio Text - Order second on mobile */}
                        <div className="lg:w-[65%] w-full space-y-8 order-last lg:order-first">
                            <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-[1.1]">
                                Dr Ashwajit Singh
                            </h1>

                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-light space-y-8">
                                <p>
                                    With over five years of experience in the dermatological field, Dr Ashwajit Singh offers his expert care and guidance through the best skin clinic in the area, Puri Skin Clinic. An MBBS, MD (Dermatology), Dr Ashwajit Singh offers his guidance with expert care and a passionate approach. Dr Singh’s expertise spans medical, aesthetic, and procedural dermatology. An alumnus of Dayanand Medical College and Hospital (DMCH) in Ludhiana, he served the hospital for two years as its resident dermatologist. He exquisitely handled any and all instances of hair, skin, or nail-related issues in an effective manner. Dr Ashwajit Singh has authored six PubMed-indexed publications while also participating in over 50 national and international conferences.
                                </p>
                                <p>
                                    A lifetime member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), Dr Ashwajit has also completed the Admire Advanced Aesthetic Fellowship program, wherein he understood the scope of and mastered several of the latest techniques offered under the latest cosmetological techniques. Dr Ashwajit Singh is also regularly invited to several national conferences to share his insights into the advancements made in the dermatological field in an effective manner. He regularly attends several national conferences as an invited speaker, offering his comprehension of several advancements made in the clinical and aesthetic fields.
                                </p>
                                <p>
                                    Dr Ashwajit Singh currently offers his medical expertise through the Puri Skin Clinic, providing cutting-edge solutions to any and all issues of hair and skin.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
