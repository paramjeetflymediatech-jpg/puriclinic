import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaAward,
  FaUserMd,
  FaGraduationCap,
  FaCertificate,
  FaPhoneAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaBookOpen,
  FaHospital,
  FaMicroscope,
  FaVideo,
} from 'react-icons/fa';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';

export async function generateMetadata() {
  return getPageSeo('dr-ashwajit-singh');
}

export default async function DrAshwajitSingh() {
  const seoData = await getPageSeo('dr-ashwajit-singh');

  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Ashwajit Singh',
    jobTitle: 'Consultant Dermatologist & Aesthetic Specialist',
    image: 'https://puriskinclinic.com/doctors/dr-ashwajit/de4.avif',
    description:
      'Experienced dermatologist in Ludhiana specializing in clinical dermatology, aesthetic procedures, vitiligo, melasma, and advanced laser and skin treatments at Puri Skin Clinic.',
    medicalSpecialty: [
      'Dermatology',
      'Cosmetic Dermatology',
      'Aesthetic Dermatology',
      'Trichology',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Dayanand Medical College & Hospital (DMCH), Ludhiana',
    },
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Puri Skin Clinic',
      url: 'https://puriskinclinic.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '77, Vishal Nagar Ext, Pakhowal Road',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141013',
      addressCountry: 'IN',
    },
    telephone: '+91-9876170054',
    priceRange: '₹500 - ₹50000',
  };

  return (
    <div className="bg-white min-h-screen text-slate-800" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>
      {seoData.schema ? <JsonLd schema={seoData.schema} /> : <JsonLd schema={doctorSchema} />}
      <FAQSchema faqs={FAQ_DATA.drAshwajit} />

      {/* ─── HERO BANNER SECTION ─── */}
      <div className="container py-10">
        <div className="relative w-full h-[180px] md:h-[240px] rounded-[2.5rem] overflow-hidden flex items-center justify-start p-6 md:p-12 lg:p-16">
          <Image
            src="/dermatology-3.jpg"
            alt="Dr Ashwajit Singh - Dermatologist & Aesthetic Specialist"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="relative z-10 text-left text-white space-y-3">
            <span className="inline-block px-4 py-1 rounded-full bg-[#EA6490] text-white text-[11px] font-black uppercase tracking-widest">
              Consultant Dermatologist & Aesthetic Specialist
            </span>
            <p className="text-2xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Dr. Ashwajit Singh
            </p>
            <div className="flex items-center justify-start gap-2 text-sm font-medium text-white/90">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">
                Home
              </Link>
              <FaChevronRight className="text-white/40 text-xs" />
              <Link href="/doctors/" className="hover:text-[#EA6490] transition-colors">
                Doctors
              </Link>
              <FaChevronRight className="text-white/40 text-xs" />
              <span className="text-[#EA6490] font-bold">Dr. Ashwajit Singh</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT SECTION ─── */}
      <section className="py-8 md:py-16">
        <div className="container px-6 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column: Bio & Journey */}
            <div className="lg:w-[65%] w-full space-y-12 order-2 lg:order-1">

              {/* H1 SECTION */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-3.5 py-1 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-xs font-black uppercase tracking-widest">
                    Expert Clinical & Aesthetic Dermatology
                  </span>
                  <h1
                    className="text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Dr. Ashwajit Singh –{' '}
                    <span className="text-[#EA6490]">
                      Experienced Dermatologist For Addressing Your Cosmetic Concerns
                    </span>
                  </h1>
                  <div className="w-20 h-1.5 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    <strong>Dr. Ashwajit Singh</strong> is an experienced doctor in the field of dermatology, treating a large number of patients with cutting-edge solutions for multiple hair- and skin-related problems. He is an alumnus of <strong>Dayanand Medical College & Hospital (DMCH), Ludhiana</strong>.
                  </p>
                  <p>
                    He handled the various skin, hair and nail-related issues in an effective manner. He is a member of the <strong>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</strong> for life and also completed the <strong>Admire Advanced Fellowship Program</strong>, where he understood the scope of the latest techniques offered under advanced cosmetological techniques.
                  </p>
                  <p>
                    As an <strong>MBBS, MD dermatologist</strong>, he offers his guidance, passionate approach and expert care.
                  </p>
                </div>
              </div>

              {/* H2 SECTION: CREDENTIALS & EXPERTISE */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <h2
                    className="text-2xl md:text-3xl lg:text-[36px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Medical Registration and <span className="text-[#EA6490]">Verified Expertise</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    Dr. Ashwajit Singh Puri has authored <strong>6 publications</strong> and also participated in <strong>more than 50 national and international conferences</strong>. At the conference, he is invited to share his insights and thoughts on the advancements made in the field of dermatology in a productive way.
                  </p>
                  <p>
                    As an <strong>invited speaker</strong>, he attends national and international conferences and offers insights into advancements in the aesthetic and clinical fields.
                  </p>
                </div>

                {/* Credentials Quick Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">Qualifications</p>
                      <p className="text-sm text-slate-600 mt-1">MBBS, MD (Dermatology)</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaBookOpen />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">Academic Research</p>
                      <p className="text-sm text-slate-600 mt-1">6 PubMed Publications & 50+ Conferences</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaHospital />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">Institutional Pedigree</p>
                      <p className="text-sm text-slate-600 mt-1">Alumnus & Ex-Resident, DMCH Ludhiana</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaAward />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-base">Advanced Fellowship</p>
                      <p className="text-sm text-slate-600 mt-1">Admire Advanced Aesthetic Fellowship</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* H3 SECTION: EXPERIENCE & CLINICAL FOCUS */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl lg:text-[34px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Defined by Excellence, <span className="text-[#EA6490]">Driven by Experience</span>
                  </h3>
                  <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    He has served the <strong>DMC Hospital for 2 years as its resident dermatologist</strong>. At present, he is gaining a reputation as the best skin doctor in Ludhiana, with <strong>more than 5 years</strong> in the field of dermatology.
                  </p>
                  <p>
                    He has treated multiple problems related to skin and hair of multiple patients by providing <strong>customised solutions according to the specific condition and its severity</strong>. All the treatments are provided in such a way that patients feel comfortable while undergoing treatment, and they are free to ask any queries related to skin or hair problems during the treatment.
                  </p>
                  <p>
                    At <strong>Puri Skin Clinic</strong>, you can increase the possibility of undergoing advanced dermatological care, from face rejuvenation to hair transplant.
                  </p>
                </div>

                {/* Clinical Focus Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center mx-auto text-lg">
                      <FaMicroscope />
                    </div>
                    <p className="font-bold text-slate-900 text-sm">Evidence-Based</p>
                    <p className="text-xs text-slate-600">Scientifically verified diagnostic and treatment protocols.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center mx-auto text-lg">
                      <FaUserMd />
                    </div>
                    <p className="font-bold text-slate-900 text-sm">Patient-Centric</p>
                    <p className="text-xs text-slate-600">Gentle management and clear, transparent communication.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center mx-auto text-lg">
                      <FaVideo />
                    </div>
                    <p className="font-bold text-slate-900 text-sm">Telemedicine</p>
                    <p className="text-xs text-slate-600">Virtual consultation options for patients worldwide.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Integrated Profile Card (Desktop Sticky & Mobile) */}
            <div className="lg:w-[35%] w-full order-1 lg:order-2 lg:sticky lg:top-32 space-y-6">
              
              {/* Profile Card */}
              <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-100 space-y-6">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-inner border border-slate-100">
                  <Image
                    src="/doctors/dr-ashwajit/de4.avif"
                    alt="Dr. Ashwajit Singh"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-[#EA6490] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    5+ Yrs Exp
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[#EA6490] text-xs font-black uppercase tracking-widest">
                      Consultant Dermatologist
                    </span>
                    <p className="text-2xl font-bold text-slate-900 mt-1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Dr. Ashwajit Singh
                    </p>
                    <p className="text-slate-600 text-sm font-semibold mt-1">
                      MBBS, MD (Dermatology)
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Education:</span>
                      <span className="text-slate-900 font-bold">DMCH Ludhiana Alumnus</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Specialty:</span>
                      <span className="text-slate-900 font-bold">Skin & Aesthetic Dermatology</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Initial Consultation:</span>
                      <span className="text-[#EA6490] font-bold">Starts at ₹500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Telemedicine:</span>
                      <span className="text-emerald-600 font-bold">Virtual Available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Location:</span>
                      <span className="text-slate-900 font-bold">Pakhowal Road, Ludhiana</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Link
                      href="/book-appointment/"
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#EA6490] text-white py-4 px-6 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-slate-900 transition-all shadow-lg active:scale-95"
                    >
                      <FaCalendarCheck /> Book Consultation
                    </Link>
                    <a
                      href="tel:+919876170054"
                      className="w-full inline-flex items-center justify-center gap-3 bg-slate-100 text-slate-800 py-3.5 px-6 rounded-full font-bold text-xs hover:bg-slate-200 transition-all"
                    >
                      <FaPhoneAlt className="text-[#EA6490]" /> Call +91-9876170054
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION BANNER ─── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 max-w-[1200px] mx-auto">
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EA6490]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA6490] text-white text-[11px] font-black uppercase tracking-widest">
                Advanced Dermatological Care
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Schedule Your Assessment With <br />
                <span className="text-[#EA6490]">Dr. Ashwajit Singh</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Receive expert guidance for acne, melasma, scar revision, facial rejuvenation, or hair treatments. Each treatment plan is tailored to your unique skin type, medical history, and aesthetic goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-3 bg-[#EA6490] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95"
                >
                  <FaCalendarCheck /> Book In-Person / Virtual Visit
                </Link>
                <a
                  href="tel:+919876170054"
                  className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-slate-900 transition-all active:scale-95 border border-white/20"
                >
                  <FaPhoneAlt /> Call Clinic Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <FAQAccordion faqs={FAQ_DATA.drAshwajit} title="Frequently Asked Questions" />
    </div>
  );
}
