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
  FaStar,
  FaMapMarkerAlt,
  FaBookOpen,
} from 'react-icons/fa';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';

export async function generateMetadata() {
  return getPageSeo('dr-gurinderjit-singh');
}

export default async function DrGurinderjitSingh() {
  const seoData = await getPageSeo('dr-gurinderjit-singh');

  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Gurinderjit Singh Puri',
    jobTitle: 'Founder & Chief Dermatologist',
    image: 'https://puriskinclinic.com/doctors/dr-gurinderjit-singh/de3.avif',
    description:
      'Foremost expert in dermatology and hair transplantation with over 38 years of experience. Founder and Chief Dermatologist at Puri Skin Clinic, Ludhiana.',
    medicalSpecialty: [
      'Dermatology',
      'Hair Transplantation',
      'Cosmetic Dermatology',
      'Venereology',
    ],
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
    priceRange: '₹600 - ₹150000',
  };

  return (
    <div className="bg-white min-h-screen text-slate-800" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>
      {seoData.schema ? <JsonLd schema={seoData.schema} /> : <JsonLd schema={doctorSchema} />}
      <FAQSchema faqs={FAQ_DATA.drGurinderjit} />

      {/* ─── HERO BANNER SECTION ─── */}
      <div className="container py-10">
        <div className="relative w-full h-[180px] md:h-[240px] rounded-[2.5rem] overflow-hidden flex items-center justify-start p-6 md:p-12 lg:p-16">
          <Image
            src="/dermatology-3.jpg"
            alt="Dr Gurinderjit Singh Puri - Dermatology & Hair Transplantation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="relative z-10 text-left text-white space-y-3">
            <span className="inline-block px-4 py-1 rounded-full bg-[#EA6490] text-white text-[11px] font-black uppercase tracking-widest">
              Chief Dermatologist & Founder
            </span>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Dr. Gurinderjit Singh Puri
            </h2>
            <div className="flex items-center justify-start gap-2 text-sm font-medium text-white/90">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">
                Home
              </Link>
              <FaChevronRight className="text-white/40 text-xs" />
              <Link href="/doctors/" className="hover:text-[#EA6490] transition-colors">
                Doctors
              </Link>
              <FaChevronRight className="text-white/40 text-xs" />
              <span className="text-[#EA6490] font-bold">Dr. Gurinderjit Singh Puri</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT SECTION ─── */}
      <section className="py-8 md:py-16">
        <div className="container px-6 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column: Comprehensive Bio & Journey */}
            <div className="lg:w-[65%] w-full space-y-12 order-2 lg:order-1">

              {/* H1 SECTION */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-3.5 py-1 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-xs font-black uppercase tracking-widest">
                    38+ Years of Clinical Excellence
                  </span>
                  <h1
                    className="text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Dr. Gurinderjit Singh Puri –{' '}
                    <span className="text-[#EA6490]">
                      Your Go-To Expert For Dermatology & Hair Transplantation
                    </span>
                  </h1>
                  <div className="w-20 h-1.5 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    As the foremost expert in the field of dermatology and hair transplantation, <strong>Dr. Gurinderjit Singh Puri</strong> is the pinnacle of the same industry. Due to his consistent effort in providing skin treatment solutions and hair transplantation services to thousands of patients, he has been renowned as the <strong>Chief Dermatologist and founder of Puri Skin Clinic, Ludhiana</strong>.
                  </p>
                  <p>
                    With <strong>over 35 years of experience</strong>, he has developed the skill of analyzing skin conditions, whether they are acute or chronic, thus providing the right treatment solutions. The same goes for hair transplantation techniques in terms of providing appropriate guidance to the candidates who are planning to undergo it, with the actual facts in terms of successful outcomes so that they can choose what is right for themselves.
                  </p>
                  <p>
                    One of the key attributes of Dr. Gurinderjit Singh Puri is his diverse and effective contributions in the field of dermatology and hair transplantation, and his balanced approach towards practical and theoretical knowledge about skin conditions and hair transplantation.
                  </p>
                </div>
              </div>

              {/* H2 SECTION: CREDENTIALS */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <h2
                    className="text-2xl md:text-3xl lg:text-[36px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Let’s Get Into The <span className="text-[#EA6490]">Depth Of His Credentials</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    Being proficient in the field of dermatology and hair transplantation requires profound knowledge and higher qualifications in the same field. Dr. Gurinderjit Singh Puri’s qualifications include <strong>MBBS, MD in Dermatology, Venereology and Leprosy</strong>. His qualifications establish a significant record of his capability in completing simple to complex skin treatments and hands-on experience in performing hair transplantation surgery.
                  </p>
                  <p>
                    Under the <strong>Medical Registration of 23344</strong>, he has been serving for <strong>more than 38 years</strong> in helping thousands of patients achieve a radiant glow along with a more natural look through hair transplantation.
                  </p>
                </div>

                {/* Credentials Quick Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Higher Qualifications</h4>
                      <p className="text-sm text-slate-600 mt-1">MBBS, MD (Dermatology, Venereology & Leprosy)</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaCertificate />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Medical Registration</h4>
                      <p className="text-sm text-slate-600 mt-1">PMC / MCI Registration No. 23344</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaAward />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">38+ Years of Service</h4>
                      <p className="text-sm text-slate-600 mt-1">Pioneered clinical skin and hair restoration since 1988</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EA6490]/10 text-[#EA6490] flex items-center justify-center text-xl flex-shrink-0">
                      <FaUserMd />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Founder & Chief</h4>
                      <p className="text-sm text-slate-600 mt-1">Leading Puri Skin Clinic with patient-first ethics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* H3 SECTION: PROFESSIONAL JOURNEY */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl lg:text-[34px] font-bold text-slate-900 leading-[1.2]"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    Get Along Through <span className="text-[#EA6490]">His Professional Journey</span>
                  </h3>
                  <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                </div>

                <div className="text-black font-medium text-lg leading-[1.8] space-y-6">
                  <p>
                    Being highly intellectual in understanding the diversity of skin problems and hair transplantation is his real tour de force. When the topic is about his great achievement, then his great contribution in <strong>bringing the first instance of hair transplantation methodology in 1988</strong> remains at the top. Due to his immense contribution to hair transplant techniques, his guidance and strategies are still followed by many with the aim of better outcomes.
                  </p>
                  <p>
                    Most significantly, at <strong>Mohandai Oswal Hospital in Ludhiana</strong>, he has even developed his department of Dermato-Venereology and Hair Transplantation, reflecting a sharp turning point in his career and giving him huge recognition and appreciation.
                  </p>
                  <p>
                    His tremendous contribution in the hair transplantation field includes his <strong>introduction of Follicular Unit Extraction (FUE)</strong>, showcasing his precision and resulting in a natural-looking hair appearance for thousands of individuals.
                  </p>
                  <p>
                    The <strong>National Conference for Cutaneous Surgeons at PGI, Chandigarh</strong>, the <strong>Regional Conference of Rajasthan in Kota</strong>, and the <strong>Annual Conference of the Cosmetological Society of India, Mumbai</strong>, have warmly invited him to share his valuable insights and knowledge. Being the <strong>founding member of the Association of Cutaneous Surgeons of India (ACSI)</strong>, he has achieved strong and remarkable success.
                  </p>
                  <p>
                    Being actively and smartly involved in gaining enough knowledge about rising skin conditions showcases his sincere approach towards addressing your cosmetic issues. This is the reason for becoming a <strong>lifetime member of the Indian Association of Dermatologists, Leprologists and Venereologists (IADVL No. LM/P/1627)</strong>, as well as an esteemed member of the <strong>Cosmetic Dermatological Society of India</strong> and the <strong>American Society for Dermatologic Surgery</strong>.
                  </p>
                  <p>
                    Dr. Puri’s intellectual prowess also expands to include his published Punjabi book, <em><strong>Naroi Chamdi</strong></em>, which details the complexities of dermatology and preventive skin care in a manner accessible to the general public.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Integrated Profile Card (Desktop Sticky & Mobile) */}
            <div className="lg:w-[35%] w-full order-1 lg:order-2 lg:sticky lg:top-32 space-y-6">
              
              {/* Desktop Sticky Card */}
              <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-100 space-y-6">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-inner border border-slate-100">
                  <Image
                    src="/doctors/dr-gurinderjit-singh/de3.avif"
                    alt="Dr. Gurinderjit Singh Puri"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-[#EA6490] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    38+ Yrs Exp
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[#EA6490] text-xs font-black uppercase tracking-widest">
                      Founder & Chief Dermatologist
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      Dr. Gurinderjit Singh Puri
                    </h3>
                    <p className="text-slate-600 text-sm font-semibold mt-1">
                      MBBS, MD (Dermatology, Venereology & Leprosy)
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Medical Reg:</span>
                      <span className="text-slate-900 font-bold">PMC No. 23344</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Specialty:</span>
                      <span className="text-slate-900 font-bold">Dermatology & Hair Transplant</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">First Consultation:</span>
                      <span className="text-[#EA6490] font-bold">Starts at ₹600</span>
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

      {/* ─── ACHIEVEMENTS GALLERY SECTION ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container px-6 max-w-[1300px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest">
              Success Stories & Honors
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Achievements <span className="text-[#EA6490]">Gallery</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              A glimpse into Dr. Gurinderjit Singh Puri’s decades of contributions, clinical workshops, national guest lectures, and healthcare recognitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "/doctors/dr-gurinderjit-singh/Image-1.jpeg", caption: "Award Ceremony for Clinical Excellence" },
              { src: "/doctors/dr-gurinderjit-singh/Image-2.jpeg", caption: "FUE Hair Transplant Workshop & Demonstration" },
              { src: "/doctors/dr-gurinderjit-singh/Image-3.jpeg", caption: "International Dermatology Seminar" },
              { src: "/doctors/dr-gurinderjit-singh/Image-4.jpeg", caption: "Pioneering Work in Hair Restoration Since 1988" },
              { src: "/doctors/dr-gurinderjit-singh/Image-5.jpeg", caption: "Guest Lecture at PGI Chandigarh" },
              { src: "/doctors/dr-gurinderjit-singh/Image-6.jpeg", caption: "Annual Conference of ACSI & IADVL" },
              { src: "/doctors/dr-gurinderjit-singh/Image-7.jpeg", caption: "Community Health & Clinical Recognition" },
              { src: "/doctors/dr-gurinderjit-singh/Image-8.jpeg", caption: "Cutaneous Surgery Insights & Scientific Sessions" },
              { src: "/doctors/dr-gurinderjit-singh/Image-9.jpeg", caption: "Dedicated Patient Care & Transformative Results" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-[2rem] overflow-hidden shadow-lg aspect-square bg-slate-900 border border-slate-100"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-sm leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION BANNER ─── */}
      <section className="py-16 bg-white">
        <div className="container px-6 max-w-[1200px] mx-auto">
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EA6490]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#EA6490] text-white text-[11px] font-black uppercase tracking-widest">
                Personalized Skin & Hair Solutions
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Consult With The Pioneer, <br />
                <span className="text-[#EA6490]">Dr. Gurinderjit Singh Puri</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether you are dealing with chronic skin concerns, melasma, acne, or seeking natural-looking hair transplantation results, experience trusted dermatological care backed by over 38 years of proven expertise.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-3 bg-[#EA6490] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95"
                >
                  <FaCalendarCheck /> Book Your Consultation
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
      <FAQAccordion faqs={FAQ_DATA.drGurinderjit} title="Frequently Asked Questions" />
    </div>
  );
}
