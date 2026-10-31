import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Services from '@/components/Services/Services';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';

export async function generateMetadata() {
  return getPageSeo('services');
}

const displayServices = [
  {
    name: 'Hair Services',
    description: 'Advanced solutions for hair fall, thinning, baldness, including PRP, GFC, FUE hair transplant, Exosomes.',
    image_url: '/services/Hair-related-services-28.avif',
    slug: 'hair-related-services',
  },
  {
    name: 'Skin Services',
    description: 'Comprehensive care for acne, pigmentation, aging, and dull skin using chemical peels, microneedling, Botox, fillers, and laser treatments.',
    image_url: '/services/Skin-related-services-28.avif',
    slug: 'skin-related-services',
  },
  {
    name: 'Vitiligo Treatment',
    description: 'Targeted vitiligo care using topical therapy and melanocyte grafting for long-term pigment restoration and skin balance.',
    image_url: '/services/Vitiligo-cure-28.avif',
    slug: 'vitiligo-treatment',
  },
  {
    name: 'Acne Treatment',
    description: 'Clear acne with chemical peels, topical medications, and customized advanced dermatological care for lasting results',
    image_url: '/services/Acne-Treatment-30.avif',
    slug: 'acne-treatment',
  },
  {
    name: 'Melasma Treatment',
    description: 'Melasma treatment includes oral medications, exosome therapy, chemical peels, and microneedling to reduce facial pigmentation.',
    image_url: '/services/Melasma-Treatment-30.avif',
    slug: 'melasma-treatment',
  },
  {
    name: 'Facial Rejuvenation',
    description: 'Facial rejuvenation combines threads, HIFU, microneedling, and skin boosters to lift, tighten, and hydrate skin.',
    image_url: '/services/Facial-Rejuvenation-30.avif',
    slug: 'facial-rejuvenation',
  }
];

const serviceDetails = [
  {
    title: 'Hair services',
    slug: 'hair-related-services',
    image_url: '/services/Hair-related-services-28.avif',
    points: [
      'There are machines that are responsible for scanning and assessing your head and identifying the real cause of the problem, which helps the doctors give the treatment that overcomes the problem.',
      'After they have identified the underlying cause, they make a treatment plan and have a session with you to ask for some information that helps them make the final decision.',
      'They have to choose the treatment plan that aligns with the problem you have to ensure you get the perfect results at the end.'
    ]
  },
  {
    title: 'Skin',
    slug: 'skin-related-services',
    image_url: '/services/Skin-related-services-28.avif',
    points: [
      'Every treatment at our clinic is performed by an experienced dermatologist to ensure safety and give the best possible results.',
      'Before you buy or receive a prescription, there should be a consultation that helps them determine the underlying cause with a few questions.',
      'Your skin will go through a cleaning process to remove and kill bacteria inside that cause acne.'
    ]
  },
  {
    title: 'Skin color restoration',
    slug: 'vitiligo-treatment',
    image_url: '/services/Vitiligo-cure-28.avif',
    points: [
      'This treatment stops the emerging white spots from spreading and uses some medical pills that help your immune system bring back the original color.',
      'The white patches in your body are treated with medical light aiming to wake up the natural skin color cells.',
      'When patients have old, large patches that are refusing to change, the doctors will transplant healthy color cells from another part of your body to restore natural skin color.'
    ]
  },
  {
    title: 'Acne',
    slug: 'acne-treatment',
    image_url: '/services/Acne-Treatment-30.avif',
    points: [
      'You are given some creams, face washes and some tablets that can help clear out the oil, kill bacteria and stop skin breakouts.',
      'Also uses medical peels that clear and remove the dead skin cells, close large pores and calm down the angry, swollen, and painful parts of your acne.',
      'After your face clears up, the next step is the needle treatment that helps flatten the scars and fades away the dark marks.'
    ]
  },
  {
    title: 'Melasma',
    slug: 'melasma-treatment',
    image_url: '/services/Melasma-Treatment-30.avif',
    points: [
      'During this treatment, a patient will be given some lightening creams and sun protection to block the cells that are responsible for making dark brown patches.',
      'Chemical peels are applied to remove the stained top layers of skin and make it look even.',
      'There are special cool lasers that target hidden dark spots and break them down, ensuring that the skin clears up naturally.'
    ]
  },
  {
    title: 'Facial rejuvenation',
    slug: 'facial-rejuvenation',
    image_url: '/services/Facial-Rejuvenation-30.avif',
    points: [
      "We make your skin look so refreshing by using gentle medical peels and skin polishing to remove the dead cells, clearing the dullness and bringing back your skin's natural glow and making it feel completely soft to the touch.",
      'Use of safe injections to smooth out the deep wrinkles and change your face from looking sunken and tired to looking refreshed, youthful, and naturally full.'
    ]
  }
];

export default async function ServicesPage() {
  const seoData = await getPageSeo('services');
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a]" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.services} />

      {/* ── REFERENCE STYLE HERO ── */}
      <section className="relative h-[40vh] md:h-[48vh] flex items-center justify-center overflow-hidden bg-slate-900 px-6 text-center">
        <Image
          src="/dermatology-3.jpg"
          fill
          className="object-cover opacity-60"
          alt="Clinical Excellence"
          priority
        />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#EA6490] mb-3">
              Puri Skin Clinic Ludhiana
            </div>
            <p className="text-3xl md:text-[50px] font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Skin & Hair Care Services in Ludhiana
            </p>

            {/* Centered Breadcrumbs inside Hero */}
            <div className="flex items-center justify-center gap-3 text-white/80 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Link href="/" className="hover:text-[#EA6490] transition-colors">Home</Link>
              <FaChevronRight size={8} className="opacity-50" />
              <span className="text-white">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: INTRODUCTION (WELCOME TO YOUR PREMIUM SUITE) ── */}
      <section className="max-w-[1300px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-xs font-bold uppercase tracking-widest">
                Skin & Hair Care Services in Ludhiana, skin care services
              </span>
              <h1 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Welcome to your <span className="text-[#EA6490]">premium suite</span>
              </h1>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Elevate your skin with Puri Skin Clinic, where you get natural products that can heal issues that are affecting your skin. We help patients who are looking for hair transplants and skin solutions. If you want skin and hair services in Ludhiana, feel free to contact us; our main aim is to leave our clients with full confidence in their hair and skin.
              </p>
              <p>
                We make sure all the patients who pass through our clinic receive the treatment that satisfies them. We provide skin care services that leave your skin healthy and strong, and we strive to find a solution to problems that are affecting our patients.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <Image
              src="/services/Skin-related-services-28.avif"
              fill
              className="object-cover"
              alt="Skin & Hair Care Services in Ludhiana"
            />
          </div>
        </div>
      </section>

      {/* ── QUICK CARDS OVERVIEW ── */}
      <Services displayServices={displayServices} />

      {/* ── SECTION 2: DETAILED SERVICE BREAKDOWNS ── */}
      <section className="max-w-[1300px] mx-auto px-6 py-16 border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Our Signature <span className="text-[#EA6490]">Skin & Hair Treatments</span>
          </h2>
          <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
          <p className="text-slate-600 font-medium text-lg">
            Discover tailored dermatological and trichological procedures delivered by seasoned specialists with precision technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((service, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-[#EA6490]/30 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-white">
                    <Image
                      src={service.image_url}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={service.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 capitalize" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                      {service.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EA6490]">
                      Specialized Care
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 pt-2">
                  {service.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-4 text-black text-base leading-relaxed font-medium">
                      <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-lg" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <Link
                  href={`/${service.slug}/`}
                  className="inline-flex items-center gap-2 text-[#EA6490] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Learn More About {service.title} <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: FREQUENTLY ASKED QUESTIONS ── */}
      <FAQAccordion faqs={FAQ_DATA.services} title="Frequently Asked Questions" />

      {/* ── SECTION 4: CTA SECTION ── */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div
          className="rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[50px] font-bold mb-8 leading-tight tracking-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Expert Skin & Hair Consultation
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
              Book your consultation at Ludhiana’s top clinic. Over 40+ Combined years of experience in personalized skin and hair solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/book-appointment/"
                className="bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-slate-900 transition-all shadow-lg"
              >
                Schedule Appointment
              </Link>
              <a
                href="tel:+919876170054"
                className="inline-flex items-center gap-3 border border-white/20 px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/5 transition-all text-white"
              >
                Call: +91 98761 70054
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
