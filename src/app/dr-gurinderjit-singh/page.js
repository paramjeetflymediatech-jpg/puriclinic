import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaPlayCircle } from 'react-icons/fa';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata() {
  return getPageSeo('dr-gurinderjit-singh');
}

export default async function DrGurinderjitSingh() {
    const seoData = await getPageSeo('dr-gurinderjit-singh');

    return (
        <div className="bg-white min-h-screen">
            <JsonLd schema={seoData.schema} />

            {/* ─── HERO BANNER SECTION ─── */}
            <div className="container py-10">
                <div className="relative w-full h-[180px] md:h-[250px] rounded-[2.5rem] overflow-hidden flex items-center justify-start p-6 md:p-12 lg:p-20">
                    <Image
                        src="/dermatology-3.jpg"
                        alt="Dr Gurinderjit Singh Puri"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 "></div>
                    <div className="relative z-10 backdrop-blur-md px-12 py-8 text-left text-white">
                        <h3 className="text-3xl md:text-4xl font-heading mb-4">Dr Gurinderjit Singh Puri</h3>
                        <div className="flex items-center justify-start gap-2 text-sm font-medium">
                            <Link href="/" className="hover:text-[#EA6490] transition-colors flex items-center gap-2">
                                Home
                            </Link>
                            <FaChevronRight className="text-white/40 text-[16px]" />
                            <span className="text-white/80">Dr Gurinderjit Singh Puri</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── MAIN CONTENT SECTION ─── */}
            <section className="py-12 md:py-20">
                <div className="container px-6 max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Left Column: Bio Text */}
                        <div className="lg:w-[65%] space-y-8">
                            <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-[1.1]">
                                Dr Gurinderjit Singh Puri
                            </h1>

                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-light space-y-8">
                                <p>
                                    Dr Gurinderjit Singh Puri stands as a pillar of innovation in the field of dermatology and hair transplantation in the entirety of North India. His career spans over 35 years of experience, during which he brought forth the first instance of hair transplantation methodology to North India in 1988. He also marked a significant milestone in his career by establishing the Department of Dermato-Venereology and Hair Transplantation at Mohandai Oswal Hospital, Ludhiana. Dr Puri’s earlier contribution to the world of hair transplant laid down the foundation of numerous hair transplant practices that are still practiced in the country to this day. Dr Puri has also contributed significantly to the academia of dermatology by presenting innumerable research papers at various national and international conferences throughout the years.
                                </p>
                                <p>
                                    With a career that spans several decades, Dr Puri has been a pioneer for change and advancement since day one. He was one of the first few surgeons to adopt the FUE hair transplant technique, which offers a much more natural look as far as hair transplant results are concerned.
                                </p>
                                <p>
                                    The FUE hair transplant technique was also introduced by him in 1998 as the follicular unit extraction. This technique ensures that you are able to achieve natural-looking results with a discreet approach. Dr Puri’s ability to conduct hair transplant procedures with extreme detail and precision has earned him a place among the greats of the field.
                                </p>
                                <p>
                                    Dr Gurinderjit Singh Puri’s contributions to the dermatology field extend beyond the practical or theoretical approach. He is often invited to conferences to offer his professional and highly academic insight to the field. Dr Puri has been invited to give guest lectures at many highly acclaimed conferences, including the National Conference of Cutaneous Surgeons at PGI Chandigarh, the Annual Conference of the Cosmetological Society of India in Mumbai, and the Regional Conference of Rajasthan in Kota. His talks have been met with widespread acclaim and have served as a source of inspiration for many up-and-coming surgeons in the field. Dr Puri’s professional prowess expands to include a Punjabi book, Naroi Chamdi, which details the issues of dermatology in a way accessible to the general public.
                                </p>
                                <p>
                                    Dr Gurinderjit Singh Puri is also associated with several esteemed organisations in the field of dermatology. He is a lifetime member of the Indian Association of Dermatologists, Venereologists, and Leprologists (IADVL No. LM/P/1627), while also being a founding member of the Association of Cutaneous Surgeons of India. Dr Puri is also a part of the Cosmetic Dermatological Society of India. Overseas, Dr Puri is a registered member of the American Society for Dermatologic Surgery. Equipped with his Medical Council Registration No. EP 23344, Dr Gurinderjit Singh Puri aims to ensure that each patient is provided with quality care and precise treatment, no matter their illness or issue.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Integrated Profile Card */}
                        <div className="lg:w-[35%] w-full order-first lg:order-last lg:sticky lg:top-32 mb-12 lg:mb-0">
                            {/* Mobile Integrated Card (Visible on mobile only) */}
                            <div className="lg:hidden bg-white rounded-[2rem] p-6 shadow-xl border border-slate-50 flex items-center gap-6">
                                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-2 border-white">
                                    <Image
                                        src="/doctors/dr-gurinderjit-singh/de3.avif"
                                        alt="Dr. Gurinderjit Singh Puri"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-[#EA6490] text-[10px] font-black uppercase tracking-widest mb-1">Founder & Chief</p>
                                    <h2 className="text-xl font-heading font-black text-slate-900 leading-tight">Dr Gurinderjit Singh</h2>
                                    <p className="text-slate-500 text-xs mt-1 font-medium italic">MD (Dermatology)</p>
                                    <div className="mt-3 flex gap-3">
                                        <span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] rounded-md border border-slate-100 font-bold">35+ Yrs Exp</span>
                                        <span className="px-2 py-1 bg-[#EA6490]/5 text-[#EA6490] text-[10px] rounded-md border border-[#EA6490]/10 font-bold">Hair Transplant</span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout (Hidden on mobile) */}
                            <div className="hidden lg:block space-y-8">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] h-[450px]">
                                    <Image
                                        src="/doctors/dr-gurinderjit-singh/de3.avif"
                                        alt="Dr. Gurinderjit Singh Puri"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>

                                <div className="bg-[#EA6490] text-white p-8 rounded-[2rem] shadow-xl">
                                    <p className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-80">Founder & Chief Dermatologist</p>
                                    <p className="text-xl font-heading font-black leading-tight">MD (Dermatology)</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="opacity-70 font-medium">Experience:</span>
                                            <span className="font-bold">35+ Years</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="opacity-70 font-medium">Speciality:</span>
                                            <span className="font-bold">Hair Transplant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── ACHIEVEMENTS GALLERY SECTION (Local Images) ─── */}
            <section className="py-20 bg-slate-50">
                <div className="container px-6 max-w-[1200px] mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest">
                            Success Stories & Awards
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900">
                            Achievements <span className="text-[#EA6490]">Gallery</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {/* Gallery Item 1 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-1.jpeg"
                                alt="Achievement 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Award Ceremony for Clinical Excellence</p>
                            </div>
                        </div>

                        {/* Gallery Item 2 - Video Placeholder */}
                        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-slate-900">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-2.jpeg"
                                alt="Achievement 2"
                                fill
                                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                <p className="text-white font-bold text-sm">FUE Hair Transplant Workshop</p>
                            </div>
                        </div>

                        {/* Gallery Item 3 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-3.jpeg"
                                alt="Achievement 3"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">International Dermatology Seminar</p>
                            </div>
                        </div>

                        {/* Gallery Item 4 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-4.jpeg"
                                alt="Achievement 4"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Pioneering Work in Hair Restoration</p>
                            </div>
                        </div>

                        {/* Gallery Item 5 - Video Placeholder */}
                        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-slate-900">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-5.jpeg"
                                alt="Achievement 5"
                                fill
                                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                <p className="text-white font-bold text-sm">Guest Lecture at PGI Chandigarh</p>
                            </div>
                        </div>

                        {/* Gallery Item 6 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-6.jpeg"
                                alt="Achievement 6"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Community Health Recognition</p>
                            </div>
                        </div>
                        {/* Gallery Item 6 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-7.jpeg"
                                alt="Achievement 6"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Community Health Recognition</p>
                            </div>
                        </div>
                        {/* Gallery Item 6 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-8.jpeg"
                                alt="Achievement 6"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Community Health Recognition</p>
                            </div>
                        </div>
                        {/* Gallery Item 6 */}
                        <div className="group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-white">
                            <Image
                                src="/doctors/dr-gurinderjit-singh/Image-9.jpeg"
                                alt="Achievement 6"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-sm">Community Health Recognition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CALL TO ACTION ─── */}
            {/* <section className="py-20 bg-white">
                <div className="container px-6 max-w-[1000px] mx-auto text-center">
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA6490]/20 blur-[100px] -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
                                Consult with the <span className="text-[#EA6490]">Pioneer</span> Himself
                            </h2>
                            <Link href="/book-appointment/" className="inline-block bg-[#EA6490] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#EA6490] transition-all duration-500 shadow-xl shadow-[#EA6490]/20">
                                Book Your Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
}
