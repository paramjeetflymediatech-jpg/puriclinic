'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaFlask, FaMagic,
  FaVials, FaMicroscope, FaSyncAlt, FaSyringe
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function GFCPage() {
  const sliderImages = [
    "/hair copy/gfc-treat/Untitled-1.avif",
    "/hair copy/gfc-treat/gro.jpg",
    "/hair copy/gfc-treat/med.avif"
  ];
  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── BESPOKE HERO: GFC ── */}
      <section className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hair copy/gfc-treat/PRP-for-Hair-and-Skin-28.jpg"
          fill
          className="object-cover object-center"
          alt="GFC Therapy Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-16 space-y-12">

        {/* SECTION 1: INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-[4/3]" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h1 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Revitalise Your Skin and Hair with <span className="text-[#EA6490]">Growth Factor Concentrate</span> Therapy Possibilities!
            </h1>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Having dull and thinning hair and skin can thoroughly impact the scope of a person’s life essentially. One needs to make certain that they are able to thoroughly and effectively ensure some sort of treatment that can resolve any and all types of issues that affect your skin.
              </p>
              <p>
                With the help of Puri Skin Clinic, you can easily opt for the Growth Factor Concentrate therapy possibility. With this procedure, not only can you make certain to address the issues of your skin but also your thinning hair and hairline.
              </p>
              <p>
                Our team of experts make certain that you are able to understand the procedure of Growth Factor Concentrate effectively and ensure that you are able to find a solution to your cosmetic problems essentially. GFC treatment cost in Ludhiana is also extremely affordable.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS GFC */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What is <span className="text-[#EA6490]">Growth Factor Concentrate</span> Therapy?
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Growth Factor Concentrate, or GFC, therapy is essentially a non-surgical, non-invasive procedure that allows you to function properly and significantly when it comes to the issues of skin and hair.
              </p>
              <p>
                This procedure thoroughly involves ensuring to use growth factors from platelets from the patient’s blood to thoroughly stimulate the hair growth and the rejuvenation of the patient’s skin essentially.
              </p>
              <p>
                This therapy essentially is associated with regeneration. GFC is generally considered to be an advanced and more potent version of PRP or Platelet-Rich Plasama therapy.
              </p>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
            <Image
              src="/hair copy/gfc-treat/haier.avif"
              fill
              className="object-cover"
              alt="GFC Therapy Treatment"
            />
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS */}
        <section className="border-t border-slate-100 pt-16">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              How Does the <span className="text-[#EA6490]">Growth Factor Concentrate</span> Therapy Work?
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Undergoing any procedure without knowing the inner workings of the treatment can prove to be a thoroughly intimidating possibility. One can find themselves to be nervous, all things considered.
              </p>
              <p>
                In this section, we extensively detail the possibility of explaining the entire therapy procedure. With our experts at Puri Skin Clinic, you can make certain that you are able to thoroughly and actively undergo the growth factor concentrate therapy procedure without any worries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Blood Collection", desc: "A small amount of your blood is collected using a specialized GFC kit.", icon: <FaVials /> },
              { title: "Activation", desc: "Platelets are activated to release specific growth factors required for rejuvenation.", icon: <FaMicroscope /> },
              { title: "Centrifugation", desc: "The sample is processed in a centrifuge to separate the pure Growth Factor Concentrate.", icon: <FaSyncAlt /> },
              { title: "Application", desc: "The concentrated growth factors are precisely applied or injected into the target areas.", icon: <FaSyringe /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#EA6490]/20 transition-all group h-full"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 text-[#EA6490] flex items-center justify-center mb-6 text-3xl group-hover:bg-[#EA6490] group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                            <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-4">{item.title}</h4>
                  <p className="text-black text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
                    ))}
            </div>
        </section>

        {/* ── UNIFIED BENEFITS SECTION ── */}
        <section className="border-t border-slate-100 pt-20">
          <div className="text-center mb-20 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What are the <span className="text-[#EA6490]">Benefits</span> of Undergoing <br />Growth Factor Concentrate Therapy?
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-black font-medium text-lg max-w-2xl mx-auto">
              There are several benefits you can attain by undergoing Growth Factor Concentrate therapy. Some of these benefits are as listed below:
            </p>
          </div>

          {/* SUB-SECTION: HAIR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-12">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
              <Image
                src="/hair copy/gfc-treat/agd.avif"
                fill
                className="object-cover"
                alt="Benefits for Hair"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Benefits for <span className="text-[#EA6490]">Hair</span>
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "Stimulates Hair Follicles", desc: "With the help of a session of GFC therapy, you can easily make certain that you are able to stimulate hair follicles to enhance hair growth effectively." },
                  { title: "Reduces Hair Loss", desc: "Furthermore, it is imperative to make certain that you are able to address the issue of hair loss with the help of this therapy." },
                  { title: "Improves Hair Density and Thickness", desc: "GFC therapy also ensures the possibility of improving hair density and thickness effectively." },
                  { title: "Suitable for Early Hair Loss", desc: "If you are a victim of early hair loss, you can also undergo this procedure in order to enhance the possibility of stopping the problem in the early stages." },
                  { title: "Minimally Invasive Procedure", desc: "If you are scared of large procedures, you can make sure to undergo this procedure as it offers the possibility of a minimally invasive procedure." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-black text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SUB-SECTION: SKIN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-12 border-t border-slate-50">
            <div className="space-y-8 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Benefits for <span className="text-[#EA6490]">Skin</span>
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "Reduces Fine Lines and Wrinkles", desc: "With the help of GFC therapy, you can also make certain that you are able to address the issues of fine lines and wrinkles effectively. This process ensures that you can reduce the amount of fine lines on your face and skin in general." },
                  { title: "Improves Skin Hydration", desc: "By opting to undergo the process of GFC therapy, you can make certain that you are able to add skin hydration effectively." },
                  { title: "Improves Skin Texture", desc: "With the help of this procedure, you can also make certain that you are able to gather the possibility of improving your skin texture effectively." },
                  { title: "Improves Skin Tone", desc: "Furthermore, you can also make certain to enhance the possibility of your skin tone essentially." },
                  { title: "Reduces Acne Scars", desc: "If you have acne scars, you can also make certain to reduce their intensity and in certain cases, eradicate them completely." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-black text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/hair copy/gfc-treat/skin.avif"
                fill
                className="object-cover"
                alt="Benefits for Skin"
              />
            </div>
          </div>
          {/* CLOSING REASSURANCE */}
          <div className="  mx-auto text-center py-12 bg-slate-50 rounded-[3rem] border border-slate-100 mb-20 px-8">
            <p className="text-black font-medium text-lg leading-[1.8] italic">
              When you opt to undergo this procedure or you are recommended the procedure by professionals, it can be a daunting reality to undertake. However, with the guidance and careful consideration offered by the experts of Puri Skin Clinic, you can ensure that you are able to seek as many advantages from the therapy as possible.
            </p>
          </div>


          {/* SECTION: TESTIMONIALS */}
          <section className="py-20 border-t border-slate-100">
            <div className="text-left mb-16 space-y-4">
              <h2 className="text-3xl md:text-[40px] font-bold text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Our <span className="text-[#EA6490]">Happy Customers</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajeev Arora",
                  location: "Ludhiana",
                  review: "The GFC treatment at Puri Skin Clinic has been fantastic for my hair. I’ve noticed significant regrowth & increased thickness. Highly recommend it for anyone dealing with hair loss!"
                },
                {
                  name: "Neha Bhatia",
                  location: "Chandigarh",
                  review: "I opted for GFC for my skin rejuvenation, and the results have been wonderful. My skin looks more radiant. The treatment didn’t take much time. Puri Skin Clinic provided excellent care and made the whole experience pleasant."
                },
                {
                  name: "Priya Sethi",
                  location: "Ludhiana",
                  review: "I’ve struggled with thinning hair for years, but the GFC treatment has given me real results. My hair is looking fuller and healthier. The team at Puri Skin Clinic made sure I was comfortable throughout the whole process. Truly satisfied!"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="flex text-[#EA6490] text-sm mb-6 gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="ml-2 text-slate-400 font-bold uppercase tracking-widest text-[10px]">5/5 Rating</span>
                  </div>
                  <p className="text-black font-medium leading-relaxed italic mb-8 flex-grow">
                    “{item.review}”
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-200/60">
                    <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                    <p className="text-sm text-[#EA6490] font-bold">{item.location}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>

          {/* SECTION 5: WHY CHOOSE GFC */}
          <section className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden mb-20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#EA6490]/5 rounded-bl-full"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Why Choose <span className="text-[#EA6490]">GFC Therapy?</span>
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Pure Concentration", desc: "A highly concentrated form of growth factors extracted from your own blood for maximum efficacy." },
                  { title: "Advanced Bio-Therapy", desc: "Completely acellular and stable formula, minimizing inflammatory responses." },
                  { title: "Versatile Results", desc: "Effective for both male and female hair thinning, as well as skin rejuvenation." },
                  { title: "Minimal Downtime", desc: "A minimally invasive procedure that allows you to return to your daily routine immediately." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-black text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6: REMARKABLE RESULTS */}
          <section className="py-20 border-t border-slate-100 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Remarkable <span className="text-[#EA6490]">Results</span> <br />That Speak Volumes
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
                <p className="text-black font-medium text-lg leading-[1.8]">
                  Witness the transformative journey of our patients who have reclaimed their confidence through our advanced GFC therapy. At Puri Skin Clinic, we combine medical precision with aesthetic excellence to deliver results that truly matter.
              </p>
                <p className="text-black font-medium text-lg leading-[1.8]">
                  Take a look at these real patient transformations and see how Growth Factor Concentrate therapy can revitalize your look.
                </p>
              </div>

              <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <ImageSlider
                  images={[
                    "/hair copy/hair-transplant/ss_0001_Sucess-Stories-Image-2.avif",
                    "/hair copy/hair-transplant/ss_0002_Image-36.avif",
                    "/hair copy/hair-transplant/haui.avif",
                    "/hair copy/hair-transplant/sada.avif"
                  ]}
                  aspect="aspect-[3/2]"
                />
              </div>
            </div>
          </section>

          {/* SECTION 8: FAQS (ABOUT US STYLE) */}
          <section className="py-24 border-t border-slate-100 bg-slate-50/30">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-[#EA6490]/10 text-[#EA6490] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Common Queries
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Frequently Asked <span className="text-[#EA6490]">Questions</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-7xl mx-auto">
                <div className="space-y-4">
                  {GFC_FAQS.slice(0, 4).map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
                <div className="space-y-4">
                  {GFC_FAQS.slice(4).map((faq, index) => (
                    <FAQItem key={index + 4} faq={faq} index={index + 4} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>

      {/* ── FOOTER TRUST ── */}
      <section className="bg-slate-50 py-24 border-t border-slate-100 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#EA6490]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
          The Science of <span className="text-[#EA6490]">Thicker Hair</span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
          Experience the next generation of regenerative bio-therapy at Ludhiana's premier skin clinic.
        </p>
        <Link href="/book-appointment" className="inline-flex items-center gap-4 bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95 relative z-10">
          Get Started Now <FaChevronRight />
        </Link>
      </section>
    </div>
  );
}
// ─── FAQ ITEM COMPONENT (ABOUT US STYLE) ───
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#EA6490] font-black text-sm opacity-50">{(index + 1).toString().padStart(2, '0')}.</span>
          <span className="font-bold text-slate-800 text-[16px] leading-tight">{faq.question}</span>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <FaChevronRight className={`text-[#EA6490] ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-slate-600 font-light leading-relaxed border-t border-slate-50 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ─── GFC SPECIFIC FAQS ───
const GFC_FAQS = [
  {
    question: "What is the main difference between GFC and PRP?",
    answer: "GFC is an advanced, acellular version of PRP. While PRP involves injecting concentrated platelets that release growth factors later, GFC extracts and concentrates the growth factors directly from the platelets beforehand, making it more potent and stable."
  },
  {
    question: "Is GFC therapy painful?",
    answer: "GFC is a minimally invasive procedure. While it involves injections, most patients experience minimal discomfort. We can also use topical numbing agents if you have sensitive skin to ensure a comfortable experience."
  },
  {
    question: "How long does a GFC session take?",
    answer: "A typical session, including blood collection, processing, and application, takes about 45 to 60 minutes. It's a convenient 'lunchtime' procedure with no downtime."
  },
  {
    question: "How many GFC sessions are needed for hair growth?",
    answer: "For optimal results in hair restoration, we usually recommend 3 to 4 sessions spaced one month apart. However, the exact number depends on the severity of hair thinning."
  },
  {
    question: "Are the results of GFC therapy permanent?",
    answer: "GFC provides long-lasting improvements, but since natural aging and genetic hair loss continue, maintenance sessions every 6 to 12 months are often recommended to sustain the results."
  },
  {
    question: "Is GFC safe for skin rejuvenation?",
    answer: "Yes, GFC is highly effective for the face. It stimulates natural collagen and elastin, helping to reduce fine lines, improve texture, and restore a youthful glow using your own body's natural factors."
  },
  {
    question: "Can GFC help with acne scars?",
    answer: "Yes, GFC promotes tissue repair and skin regeneration, which can significantly reduce the appearance and intensity of acne scars over multiple sessions."
  },
  {
    question: "Is GFC treatment expensive in Ludhiana?",
    answer: "At Puri Skin Clinic, we ensure that GFC treatment is affordable and accessible. While it is a premium bio-therapy, our pricing in Punjab is highly competitive compared to major metropolitan centers."
  }
];
