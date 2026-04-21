'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight, FaCheckCircle, FaStethoscope, FaPhoneAlt,
  FaArrowRight, FaStar, FaShieldAlt, FaMagic,
  FaVials, FaMicroscope, FaSyncAlt, FaSyringe, FaUsers, FaDna,
  FaFlask, FaSun
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import AppointmentForm from '@/components/AppointmentForm/AppointmentForm';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function SkinRelatedServicesCategory() {
  const sliderImages = [
    "/skin-related/skin-1.avif",
    "/skin-related/skina.avif",
    "/skin-related/dd.avif"
  ];

  const skinServices = [
    {
      title: 'Acne Treatment',
      link: '/acne-treatment',
      image: '/skin-related/skin-1.avif',
      description: 'Comprehensive clinical solutions for active acne and prevention of scarring using advanced topical and light-based therapies.'
    },
    {
      title: 'Chemical Peel',
      link: '/chemical-peel',
      image: '/skin-related/Chemical-Peel-28.avif',
      description: 'Medical-grade exfoliative treatments to address texture, pores, and sun damage. Smoother, healthier skin with fewer wrinkles.'
    },
    {
      title: 'Exosomes',
      link: '/exosome',
      image: '/skin-related/Exosome-30-1.avif',
      description: 'Advanced regenerative therapy using cellular messengers to repair skin cells and address aging signs like wrinkles and scarring.'
    },
    {
      title: 'Growth Factor Concentrate',
      link: '/growth-factor-concentrate',
      image: '/skin-related/Growth-Factor-Concentrate-28-1.avif',
      description: 'Regenerative therapy employing growth factors from your own blood to enhance facial appearance and skin health.'
    },
    {
      title: 'Dermaroller',
      link: '/dermaroller',
      image: '/skin-related/Dermaroller-28.avif',
      description: 'Triggering natural healing and collagen production through micro-punctures for firm, youthful-looking skin.'
    },
    {
      title: 'Melasma Treatment',
      link: '/melasma-treatment',
      image: '/skin-related/skina.avif',
      description: 'Targeted protocols to manage and resolve deep pigmentation and hormonal melasma for an even skin tone.'
    },
    {
      title: 'PRP for Hair and Skin',
      link: '/prp-for-hair-and-skin',
      image: '/skin-related/PRP-for-Hair-and-Skin-28-1.avif',
      description: 'Using plasma-rich platelets to revitalize skin texture and promote hair density through natural biological responses.'
    },
    {
      title: 'Wart Removal',
      link: '/wart-removal-in-ludhiana',
      image: '/skin-related/dd.avif',
      description: 'Clinical removal of warts and skin growths using precise laser or radiofrequency technology for clear skin.'
    },
    {
      title: 'Dermapen',
      link: '/dermapen',
      image: '/skin-related/Dermapen-28.avif',
      description: 'Micro-needling technology that stimulates elastin and collagen production for refined and rejuvenated skin.'
    },
    {
      title: 'Fillers',
      link: '/fillers',
      image: '/skin-related/Fillers-28.avif',
      description: 'Restoring facial volume and contouring features using hyaluronic acid for immediate, fuller results.'
    },
    {
      title: 'Botox',
      link: '/botox',
      image: '/skin-related/Botox-28.avif',
      description: 'Softening expression lines and dynamic wrinkles like crow’s feet for a naturally youthful appearance.'
    },
    {
      title: 'Facial Rejuvenation',
      link: '/facial-rejuvenation',
      image: '/skin-related/skin-1.avif',
      description: 'Tailored aesthetic programs combining multiple modalities to restore vitality and youthfulness to your face.'
    },
    {
      title: 'Non-Surgical Facelift',
      link: '/non-surgical-facelift',
      image: '/skin-related/Non-Surgical-Facelift-28.avif',
      description: 'Defy signs of aging without surgery. Improve contours and lift sagging skin with minimally invasive procedures.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 overflow-x-hidden" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/skin-related/skin-1.avif"
          fill
          className="object-cover object-center"
          alt="Skin Services Banner"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
            Skin Related <span className="text-[#EA6490]">Services</span>
          </h1>
          <div className="w-24 h-1 bg-[#EA6490] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* SECTION 1: INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageSlider images={sliderImages} aspect="aspect-square" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Improve Your Skin’s <br/><span className="text-[#EA6490]">Natural Appearance!</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>

            <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
              <p>
                Suffering from any type of skin trouble can prove to be a life-changing experience. One loses all their confidence and self-esteem. One becomes conscious of one’s appearance and avoids social gatherings altogether.
              </p>
              <p>
                With the advanced skin care treatments in Ludhiana at Puri Skin Clinic, you can make certain that you are able to get to the bottom of your issues, get a personalised consultation, and undergo treatment in an effective manner.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY REQUIRED */}
        <section className="pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Why are Skin Treatment <br/><span className="text-[#EA6490]">Services Required?</span>
              </h2>
              <div className="w-16 h-1 bg-[#EA6490] rounded-full"></div>
              <div className="space-y-6 text-black font-medium text-lg leading-[1.8]">
                <p>
                  When one gets extremely conscious about their skin and how they appear, it can start to impact other aspects of a person’s life. If this is the case with you, one needs to make sure that you are able to seek skin treatment services in an essential manner.
                </p>
                <p>
                  There are several reasons why a person might consider undergoing skin treatment services. The following are some of the reasons why people undergo skin treatment services at Puri Skin Clinic.
                </p>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] lg:sticky lg:top-32">
                <Image 
                    src="/skin-related/dd.avif"
                    fill
                    className="object-cover"
                    alt="Skin Health Importance"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                    <p className="font-bold text-xl italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>"Restoring your natural glow."</p>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Address Acne & Blemishes", desc: "Easily target and resolve persistent acne and skin imperfections for a clearer look.", icon: <FaStethoscope /> },
              { title: "Address Aging Signs", desc: "If you are bothered by aging signs, you can undergo specialized treatments to address them.", icon: <FaMagic /> },
              { title: "Resolve Pigmentation", desc: "Effective solutions to manage and resolve various skin pigmentation issues.", icon: <FaStar /> },
              { title: "Improve Sun Damage", desc: "Advanced therapies to repair and restore skin health sustained from sun exposure.", icon: <FaShieldAlt /> },
              { title: "Relief from Eczema", desc: "Find professional clinical relief from chronic skin troubles such as eczema.", icon: <FaFlask /> },
              { title: "Maintain Radiance", desc: "Regular professional care to preserve and enhance your skin's natural glow.", icon: <FaSun /> },
              { title: "Hydrate & Repair", desc: "Deep hydration treatments to repair cellular damage and restore vitality.", icon: <FaSyringe /> },
              { title: "Enhanced Product Application", desc: "Ensure your daily skincare products penetrate better and work more extensively.", icon: <FaSyncAlt /> },
              { title: "Thorough Confidence", desc: "Gain thorough confidence by achieving your desired skin and hair results.", icon: <FaUsers /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-all h-full group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-[#EA6490] flex items-center justify-center mb-8 text-2xl shadow-lg transition-transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">{item.title}</h4>
                <p className="text-black text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TREATMENT CATEGORIES */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-[45px] font-bold text-slate-900 leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Types of Skin Treatments Available <br/><span className="text-[#EA6490]">from Puri Skin Clinic</span>
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-black font-medium text-lg">
              <p>
                When anything goes wrong with one’s skin, one often finds oneself panicking and overwhelmed at this prospect. One needs to make sure that they can calm down and seek a consultation from the experts at Puri Skin Clinic.
              </p>
              <p>
                You can make sure that you are able to understand the trouble, get a diagnosis, and undergo a treatment procedure to address your issues. With the right team around you, you can make certain that you are able to undergo the proper treatment procedures in a thorough and extensive manner and resolve the issue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skinServices.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group flex flex-col h-full"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image 
                    src={service.image} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold italic" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{service.title}</h3>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex flex-col flex-grow">
                  <p className="text-black font-medium text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-[#EA6490] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: FAQS */}
        <FAQAccordion faqs={SKIN_FAQS} title="Frequently Asked Questions" />

        {/* SECTION 5: FINAL CTA */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-[45px] font-bold leading-[1.2]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
              Choose <span className="text-[#EA6490]">Puri Skin Clinic</span> for All Your Skin Requirements!
            </h2>
            <div className="w-16 h-1 bg-[#EA6490] rounded-full mx-auto"></div>
            <p className="text-slate-300 font-medium text-lg leading-[1.8]">
                If you have never even considered the possibility of undergoing skin treatment, it can prove to be a daunting reality. Our team ensures that you can access advanced skin treatment in Punjab without any hassle.
            </p>
            <div className="pt-6">
                <Link href="/book-appointment/" className="inline-flex items-center gap-4 bg-[#EA6490] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 group">
                  Book Your Appointment <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// ─── SKIN SPECIFIC FAQS ───
const SKIN_FAQS = [
    {
    question: "What is eczema, and is it different from normal dry skin?",
    answer: "Eczema is a chronic as well as non-contagious skin condition that causes inflammation, severe itching, dryness and rashes. This condition is not the same as normal dry skin, as it weakens the skin barrier, making your skin hypersensitive and open to severe flare-ups. "
  },

    {
    question: "Is eczema a condition that is manageable in India?",
    answer: "Yes, eczema is highly manageable in India. The treatment of eczema in India is a proper blend of dermatological care, proper medication and necessary lifestyle changes. It is strongly advised not to use any cream without expert advice, as it can worsen the condition and lead to rebound flares.  "
  },
  {
    question: "Can eczema be cured with medications?",
    answer: "No, there is no permanent solution for curing eczema till now, but still, it can be highly managed and controlled with proper medications and skin care. The key treatment for managing this condition includes the use of certain ointments for controlling inflammation, relieving itching and repairing the skin’s natural barrier. "
  },
  {
    question: "When should I look for a dermatologist when suffering from eczema?",
    answer: "When you have unmanageable flareups, severe itching which disrupts sleep and the need for proper care, finding the best dermatologist in India is crucial. If you see a visible worsening of the rash you should immediately get a medical assessment."
  },
  {
    question: "Why am I getting eczema as an adult?",
    answer: "Eczema usually begins in childhood, but it can also start happening in adults due to certain factors such as stress, pollution or changes in immune response. You can manage this condition by controlling your stress levels and taking proper care of your skin."
  },
  {
    question: "Does the monsoon season make eczema worse?",
    answer: "Monsoon can contribute towards this condition because of the humid weather. The high humidity of the monsoon season leads to excessive sweating, which results in excessive skin irritation, itching and rashes. These rashes get worse with itching, and this is how they give rise to eczema. "
  },
  {
    question: "Do certain foods cause eczema?",
    answer: "Yes, if you are allergic to certain foods, it can also cause eczema. This may not be the cause of eczema all the time, but sometimes food allergies can trigger flare-ups, especially in children. The common triggers of eczema include dairy products, eggs, wheat and nuts. You need to make an appointment with the dermatologist to check whether eczema is triggered by a food allergy or not. "
  },
  {
    question: "Is stress a factor in eczema, and how do I manage it?",
    answer: "Yes, emotional stress is a major trigger for eczema flare-ups. Managing the flare-ups is possible by managing the stress, which is done by indulging in practices like yoga and meditation. You should ensure that you are getting adequate sleep, and following a prescribed treatment plan can help you manage it. "
  },
  {
    question: "Are steroid creams safe and effective in treating eczema, along with long-term use?",
    answer: "Steroid creams are highly effective in treating flares but should only be used under the strict guidelines of a dermatologist. Following a proper application duration is essential to avoid side effects like skin thinning. You can get regular doctor checkups to properly assist your skin if you are using steroid cream for more than two weeks."
  },
  {
    question: "What are the advanced treatment options available for eczema if creams don't work?",
    answer: "In the case where creams are not effective, it indicates that the condition is more severe and requires some advanced treatments. For moderate to severe cases, we offer advanced treatments such as phototherapy, oral immunosuppressants and modern biological injections which target the immune system and relieve this immune response. "
  },
  {
    question: "Is it safe to use soaps, detergents or hair dyes when dealing with eczema?",
    answer: "No, it is completely not safe. Eczema-prone skin is extremely sensitive, and the use of any chemical-based products can worsen the condition. You should strictly avoid deodorant soaps, harsh detergents and scented products. When you are seeking the products that will be best for your skin, go for fragrance-free, hypoallergenic or sensitive skin products. Always take suggestions from your dermatologist before using any product."
  },
  {
    question: "Are there any non-steroidal alternatives for managing eczema?",
    answer: "Yes, we offer several non-steroidal alternatives for managing eczema, ranging from prescription creams to systemic lifestyle adjustments. The other things you should keep in check are regular moisturisation of your skin, use of natural oils and managing triggers. "
  },
  {
    question: "When should I expect results of Botox surgery for my face?",
    answer: "You will start noticing noticeable changes in your face within three to five days after the completion of your Botox surgery. Such results might remain for a few months, thus providing you with satisfactory results."
  },
  {
    question: "Which skin treatment would be best for an aging and wrinkled face?",
    answer: "You can opt for Botox or laser resurfacing treatment for your ageing and wrinkled face, as such skin treatments hold great significance in removing the fine lines and wrinkles from your face. For the more precise results, make sure to engage with Puri Skin Clinic, which is proficient in providing you with the best skin care treatment in India with accurate results."
  },
  {
    question: "Is undergoing skin treatment safe for sensitive skin?",
    answer: "In order to be sure regarding the safety of skin treatment for your sensitive skin, make sure to have a word with your dermatologist regarding this, as they will guide you in a better way. Usually, the skin treatments are safe when they are performed by experienced and skilled professionals. "
  },
  {
    question: "Are skin treatments effective or not?",
    answer: "Generally, the effectiveness of skin treatments such as lasers, peels and fillers depends on the expertise of the skin doctor in an essential manner. For effective results of skin treatments, you can engage with Puri Skin Clinic, which is proficient in providing you with the best skin treatment in India. "
  },
  {
    question: "What factors determine the cost of skin treatment?",
    answer: "There are various factors that significantly determine the cost of skin treatment, including the specific technique, along with the complexity of the particular issue. Overall, the general cost range of non-invasive skin treatment is around Rs. 6,000, whereas complex procedures include a cost range of around Rs. 20,000. "
  },
  {
    question: "How can I restore my ageing skin?",
    answer: "In order to restore your ageing skin, make sure to indulge yourself in the consumption of healthy food items, along with specific skin care practices. Through such a comprehensive approach, you can restore your ageing skin. Also, get engaged with the best skin doctor in Punjab for more effective guidance. "
  },
  {
    question: "Are there any non-surgical skin treatments for achieving healthy skin?",
    answer: "Yes, there are various non-surgical skin treatments that are responsible for enhancing your skin’s glow, along with rejuvenating it. You can opt for chemical peels, laser therapies, and fillers for more effective results in terms of healthy and glowing skin. "
  },
  {
    question: "How do chemical peels work for my skin?",
    answer: "The professionals of Puri Skin Clinic ensure to use a liquid solution during the procedure of chemical peels with the aim of effectively removing the dead skin. This can significantly help in removing the dead skin, along with turning your skin into a healthier and more glowing one. "
  },
  {
    question: "Is there any specific skin treatment for my acne?",
    answer: "Skin treatment for acne includes the use of some essential retinoids that are generally suggested by your dermatologist for effective results. Along with this, they even provide you with thorough guidance regarding applying specific retinoids and managing your routine in a certain manner for more precise results. "
  },
  {
    question: "What is done during Botox surgery for the face?",
    answer: "The procedure of Botox surgery includes the use of Botox injection, which is primarily injected into the targeted area of your face with the aim of reducing wrinkles and fine lines. Our professionals make sure to thoroughly analyse the areas around your face where Botox surgery is required. "
  },
  {
    question: "Is there any specific precaution required after the completion of Botox surgery?",
    answer: "Yes, make sure to avoid the heavy activities in order to relax the muscles of your face in an essential manner. Along with this, make sure to keep your head elevated for four hours after the completion of your Botox surgery."
  },
];
