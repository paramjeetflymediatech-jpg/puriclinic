'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaUserMd, FaMagic
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import { FAQ_DATA } from '@/constants/constantdata';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function HairTransplantClient() {
  const sliderImages = [

    "/hair copy/hair-transplant/ss_0001_Sucess-Stories-Image-2.avif",
    "/hair copy/hair-transplant/ss_0002_Image-36.avif",
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      <section className="relative w-full   flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#D5E8E4' }}>
        <Image src="/hair copy/hair-transplant/Hair-Transplant.jpg" width={2000}
          height={2000} className="object-cover object-center" alt="Hair Transplant Banner" priority />
      </section>

      {/* ── OVERVIEW SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 mb-8   leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What is a <span className="text-[#EA6490]">hair transplant?</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mb-10" style={{ margin: "0 auto" }}></div>

            <div className="space-y-6 text-lg md:text-xl text-black font-medium leading-[1.8]">
              <p>
                Hair transplant surgery is changing the lives of many people. It is a process where hair is taken from one source and later they are involved at the required location. The ultimate goal of the best hair transplant in Ludhiana is to enhance new growth in one or sometimes more areas of the scalp which is facing thinning or baldness.
              </p>
              <p>
                This process is also known as hair restoration and is a surgical process. This procedure is performed by a trained dermatologist or plastic surgeon, depending on the situation involving hair loss type, scalp condition, and various other methods.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-10 md:py-12 space-y-10 md:space-y-10">
        {/* SECTION 1: WORKING OF HAIR TRANSPLANT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ImageSlider images={sliderImages} aspect="aspect-[2/1.5]" />
          <div className="space-y-6">
            <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              What is the <span className="text-[#EA6490]">working</span> of a hair transplant?
            </h3>
            <p className="text-black text-lg leading-[1.8] font-medium">
              The working of the hair transplant procedure is very simple. The skilled dermatologist will take grafts or tiny skin pieces from different parts of the body containing healthy hair. It is considered a donor site. Most of the time, it is the head or the scalp’s back from where the hair is taken. Later, the healthcare provider will use those grafts and use it at the hairless part of the scalp. After the transplantation, when the skin heals, the hair will continue to grow.
            </p>
          </div>
        </section>

        {/* SECTION 3: DIFFERENT TECHNIQUES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-[36px] font-bold text-[#1a1a1a] mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Different <span className="text-[#EA6490]">techniques</span> of hair transplant
            </h2>
              <p className="text-black text-lg leading-[1.8] font-medium">
                There are different techniques of hair transplant which can allow you to achieve the desired results, such as:
              </p>
                    </div>

            <div className="space-y-8">
              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[#EA6490] rounded-full"></span> Follicular Unit Strip Surgery (FUT)
                </h3>
                <p className="text-black leading-[1.7] text-sm font-medium">
                  You can even call this technique follicle unit transplantation. Also, it is considered as a strip method. It involves the surgical removal of the strip from the back of the head or the donor area. It is then dissected into the grafts under complete magnification. Later, the grafts get implanted in the recipient’s required area. There can be use of grafts in huge quantities in one session only. The people who are facing or have already faced extreme hair loss can opt for the FUT method but it will leave a linear scar.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-slate-900 rounded-full"></span> Follicular Unit Extraction (FUE)
                </h3>
                <p className="text-black leading-[1.7] text-sm font-medium">
                  The FUE method involves the individual extraction of hair follicles. This is directly done from the donor area with the help of a tiny punch-like tool. Later, these extracted follicles are implanted. In comparison to the FUT technique, the FUE method shows less scarring as there is no involvement of a linear scar. This can be opted for by younger patients. However, this is a time-consuming technique when it comes to large transplant areas.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[3/2]">
            <Image
              src="/hair copy/hair-transplant/sada.avif"
              fill
              className="object-cover"
              alt="Hair Transplant Techniques"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Puri Skin Clinic</p>
              <h4 className="text-2xl font-bold italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>Expert Hair Restoration</h4>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONDITIONS TREATED */}
        <section className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA6490]/5 rounded-bl-full"></div>
          <h3 className="text-2xl md:text-[32px] font-bold text-[#1a1a1a] mb-8 relative z-10" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            What conditions can be treated with the <span className="text-[#EA6490]">hair restoration process?</span>
          </h3>
          <p className="text-black text-lg leading-[1.8] font-medium mb-8 relative z-10">
            There are different reasons that can lead to a hair loss situation. Sometimes the situation can be temporary, and sometimes permanent. However, hair transplantation can be helpful in a permanent hair loss situation caused by:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {[
              "Alopecia areata (autoimmune disease)",
              "Androgenic alopecia (pattern baldness)",
              "Thyroid disease & hormonal imbalances",
              "Traumatic injuries or burns"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                <span className="text-black font-bold text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>


        {/* SECTION 5: IDEAL CANDIDATES */}
        <section className="py-16 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-12">
              <div className="text-left">
                <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                  Who should go for a <span className="text-[#EA6490]">hair transplant?</span>
                </h2>
                <div className="w-16 h-1 bg-[#EA6490] rounded-full mb-8"></div>
                <p className="text-lg text-black font-medium leading-[1.8]">
                  There are some factors that should be considered for the hair transplant, and that make you an ideal candidate for this procedure:
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "If there is persistent hair loss which further results in baldness. This can happen with men and women.",
                  "If you are willing to restore your hairline or wish to change the way your hairline looks."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <FaCheckCircle className="text-[#EA6490] mt-1 shrink-0 text-xl" />
                    <p className="text-black font-bold text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-xl text-black font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#EA6490] rounded-full"></span>
                  Beyond Scalp Restoration
                </p>
                <p className="text-black font-medium text-lg mb-8">Not many people know, but hair transplant can even be considered for:</p>
                {[
                  "Growing a beard or simply wanting to reconstruct the already existing mustache.",
                  "To have well-shaped eyebrows with good density.",
                  "To have hair coverage after some kind of illness or surgery."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#EA6490]/20 transition-all">
                    <FaCheckCircle className="text-slate-900 mt-1 shrink-0 text-xl" />
                    <p className="text-black font-bold text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sticky Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/hair copy/hair-transplant/haui.avif"
                  fill
                  className="object-cover"
                  alt="Ideal Hair Transplant Candidates"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2 text-[#EA6490]">Puri Skin Clinic</p>
                  <h3 className="text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    Expert Consultation for <br />Optimal Results
                  </h3>
                </div>
                </div>
            </div>
          </div>
        </section>



        {/* SECTION 4: BENEFITS */}
        <section className="space-y-16 py-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Key <span className="text-[#EA6490]">Benefits</span> of Choosing Puri Skin Clinic
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Appearance",
                desc: "Hair transplants can be helpful in restoring the hairline of an individual, which can make them look younger and highly attractive. The modern techniques are effective in proper graft placement and design of the hairline.",
                icon: <FaMagic />
              },
              {
                title: "Long-lasting Results",
                desc: "Hair transplants can lead to great results. The reason behind, the follicles involved in it are resistant to DHT. Thus, it offers long-lasting results.",
                icon: <FaShieldAlt />
              },
              {
                title: "Boosted Confidence",
                desc: "The confidence of a person can be shattered due to hair loss. But this procedure can bring it back and enhance the outlook of a person. Thus, it leads to boosted confidence and self-assurance.",
                icon: <FaStar />
              },
              {
                title: "Mental & Emotional Health",
                desc: "Hair loss can result in anxiety and depression. But with the hair transplant surgery, the psychological impact can be decreased, which can enhance your mental and emotional health.",
                icon: <FaUserMd />
              },
              {
                title: "Low Maintenance",
                desc: "Transplanted hair is not high maintenance in comparison to wigs or other treatments. After the establishment of hair, it can be washed or maintained like natural hair.",
                icon: <FaStethoscope />
              },
              {
                title: "Cost-Effective",
                desc: "No wonder the initial cost of hair transplant can be slightly high, but in the long run, they are considered cost-effective in comparison to ongoing treatments or products. The permanent results ensure that you do not need to buy any other temporary solutions.",
                icon: <FaCheckCircle />
              },
              {
                title: "Highly Safe Procedure",
                desc: "Hair transplants are considered to be safe when done by qualified and highly skilled surgeons. The modern techniques of this procedure involve minimal risk and ensure patient safety.",
                icon: <FaShieldAlt />
              }
            ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all h-full"
                    >
                <div className="w-16 h-16 rounded-full bg-slate-900 text-[#EA6490] flex items-center justify-center shrink-0 shadow-lg mb-6 text-2xl">
                  {item.icon}
                        </div>
                <div className="flex flex-col h-full">
                  <h4 className="font-bold text-slate-900 text-xl mb-4">{item.title}</h4>
                  <p className="text-sm text-black leading-relaxed font-medium flex-grow">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
                </div>


      {/* SECTION 6: COST FACTORS WITH BACKGROUND */}
      <section className="relative w-full rounded-[3rem] overflow-hidden my-20 min-h-[500px] flex items-center">
                    <Image 
                        src="/hair copy/hair-transplant/sada.avif" 
                        fill 
                        className="object-cover" 
          alt="Cost Factors Background"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>

        <div className="relative z-10 w-full px-10 md:px-20 py-16 flex flex-col items-center text-center">
          <div className="text-white space-y-8 max-w-4xl">
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Factors Affecting <br />
              <span className="text-[#EA6490]">Hair Transplant Cost</span> in Punjab
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-lg text-slate-200 font-medium leading-[1.8]">
              When it comes to FUT or FUE hair transplant cost in Punjab, there are several factors that should be considered, such as:
            </p>

            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                "The place you are living in",
                "What kind of procedure are you considering to opt for?",
                "How many grafts are you looking to get",
                "Who will be conducting your surgery?"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-100 font-bold text-left max-w-xs">
                  <FaCheckCircle className="text-[#EA6490] text-xl shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link href="/contact-us/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95">
                Contact Us <FaArrowRight />
                </Link>
            </div>
            </div>
          </div>
        </section>

      {/* ── FAQS SECTION ── */}
      <FAQAccordion faqs={FAQ_DATA.hair} title="Frequently Asked Questions" />

      {/* ── 7. FOOTER CTA ── */}
      <section className="bg-white py-24 mt-20 px-6 border-t-[8px] border-[#EA6490]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 mb-6 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Contact the best hair transplant clinic in Ludhiana.
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mb-8"></div>
            <p className="text-lg text-black font-medium leading-[1.8]">
              Puri Skin holds a prestigious position when choosing a hair transplant clinic. We have experienced doctors or surgeons who offer the best and desired results to every patient and at affordable costs. Choosing us for the hair transplant procedure will keep you in the safe zone. With this procedure you will be able to see seamless results and hairline which looks natural. And every treatment is tailored according to the individual’s facial structure as well as their characteristics. The best thing about us is that you will get in touch with expert dermatologists who will offer you complete details and guidance along with personalized care. Also, we include advanced techniques so that you can enjoy this minimally invasive procedure to the best.
            </p>
      </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center shadow-2xl max-w-sm w-full">
              <div className="w-20 h-20 bg-[#EA6490] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                <FaStethoscope />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Start Your Journey</h3>
              <p className="text-black mb-8 font-medium">Book a consultation with our experts to discuss your personalized hair transplant plan.</p>
              <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-[#EA6490] transition-all shadow-xl active:scale-95 w-full justify-center">
                Book Appointment <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* ── TESTIMONIALS SECTION ── */}
      <section className="pt-16 border-t border-slate-100 mt-10">
        <div className="text-left mb-16 max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            What Our <span className="text-[#EA6490]">Patients Say</span>
          </h2>
          <div className="w-16 h-1 bg-[#EA6490] rounded-full mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-6">
          {[
            {
              name: "Amit Verma",
              location: "Ludhiana",
              review: "“The hair transplant service at Puri Skin Clinic exceeded my expectations. The procedure was smooth, and the results are natural and impressive. Thanks to Dr. Puri and his team!”"
            },
            {
              name: "Karan Singh",
              location: "Rajkot, Punjab",
              review: "“I am thrilled with the outcome of my hair transplant at Puri Skin Clinic. The staff was supportive throughout the process, and the results speak for themselves. Highly recommended!”"
            },
            {
              name: "Priya Malhotra",
              location: "Ludhiana",
              review: "“Dr. Puri and his team at Puri Skin Clinic did an amazing job with my hair transplant. The procedure was very comfortable and painless. I couldn’t be happier with the results. Thank you!”"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
              <div className="flex text-[#EA6490] text-lg mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-black font-medium leading-relaxed italic mb-8 flex-grow">
                {item.review}
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
