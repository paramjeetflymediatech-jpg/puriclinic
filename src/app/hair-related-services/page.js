'use client';

import React from 'react';
import ServiceCategoryLayout from '@/components/ServiceCategoryLayout/ServiceCategoryLayout';
import { FaUserMd, FaArrowRight, FaCheckCircle, FaStar, FaStethoscope, FaCrown, FaShieldAlt } from 'react-icons/fa';

export default function HairRelatedServicesCategory() {
  return (
    <ServiceCategoryLayout
      title="Hair Treatment & Transplant Services"
      heroImage="/hair copy/swa.jpg"
      introTitle="Enhance Your Natural Hair with the Help of Treatment!"
      introText="When one loses their hair, it can be a disappointing reality that many people face. So much of our physical appearance is defined by how we are defined by our hair, how our face is framed by our hair – without it or with a lack of it, one’s self-confidence and esteem can be thoroughly affected. With the Puri Skin Clinic, you can make certain that you are able to address these issues. With the right hair treatment and transplant services in Ludhiana, not only can you make sure that you are able to find the root cause of the issues in a thorough and extensive manner, but also explore the possibility of undergoing treatment options. Address and resolve any and all hair-related issues in a thorough and effective manner with Puri Skin Clinic and our team!"
      introImages={[
        "/hair copy/sada.jpg",
        "/hair copy/swa.jpg",
        "/hair copy/ersd.jpg"
      ]}
      benefitsTitle="Why are Hair Treatment Services Required?"
      benefitsText="If you have never undergone the hair treatment and transplant options, you can find yourself thoroughly intimidated at the prospect of undergoing any treatment. However, it is imperative to ensure that you are able to understand how hair treatment and transplant services can enhance your appearance and confidence. The following are some of the reasons one can find that hair treatment services are essential to undergo in an effective manner."
      benefits={[
        { icon: <FaUserMd />, title: 'Hair Loss and Thinning', description: 'If you are experiencing hair loss and thinning, it can start to affect your appearance and self-confidence thoroughly. In order to combat the feelings of inadequacy, you can essentially and effectively undergo the hair treatment and transplant services to address this issue and regain enhanced growth on your head.' },
        { icon: <FaStar />, title: 'Low Self-Esteem and Confidence', description: 'As a result of hair loss or baldness, you can also find yourself losing your self-esteem and confidence in an essential way. One can thoroughly find themselves undergoing the possibility of hair treatment and transplant services as offered by Puri Skin Clinic. By addressing the issue of hair loss or hair thinning, you can make certain that you are able to resolve any feelings of low self-esteem and confidence.' },
        { icon: <FaCrown />, title: 'Having Aesthetic Concerns', description: 'If you have aesthetic concerns about your baldness and hair thinning prospects, in that case too, one can thoroughly and effectively opt for hair treatment and transplant options. The therapy will essentially address any and all aesthetic concerns a person might have.' },
        { icon: <FaCheckCircle />, title: 'Permanent Solution', description: 'Most of the hair treatment and transplant services ensure to offer the possibility of a permanent solution in a thorough and effective manner. Easily enhance the prospect of addressing the issues once and for all with the help of these treatment procedures.' },
        { icon: <FaShieldAlt />, title: 'Natural-Appearance', description: 'With the help of most procedures, you can make certain that you are able to thoroughly and effectively receive a natural-looking appearance in an essential manner. Easily enhance the possibility of making sure that you are able to undergo a hair transplant procedure and have a natural-looking appearance without any worries.' }
      ]}
      services={[
        {
          title: 'Hair Transplantation',
          link: '/hair-transplantation',
          image: '/hair copy/Hair-Transplantation-28.jpg',
          description: 'With the hair transplantation treatment procedure, you can make certain that you are able to thoroughly and effectively restore hair at your desired location. This process is a minimally invasive surgical procedure through which one can resolve the issue of baldness in an essential manner. This is done by transplanting active and healthy hair follicles to the desired location. This essentially offers permanent and natural-looking results.'
        },
        {
          title: 'Growth Factor Concentrate',
          link: '/growth-factor-concentrate',
          image: '/hair copy/Growth-Factor-Concentrate-28.jpg',
          description: 'GFC essentially offers a regenerative therapy that employs the use of concentrated growth factors from the patient’s blood cells. With this therapy, you can boost collagen and reduce hair loss. GFC is an ideal option when you have been diagnosed with early-stage hair loss. This treatment possibility ensures that one can have healthier skin as well as hair.'
        },
        {
          title: 'PRP for Hair and Skin',
          link: '/prp-for-hair-and-skin',
          image: '/hair copy/PRP-for-Hair-and-Skin-28.jpg',
          description: 'PRP, or Platelet-Rich Plasma, thoroughly and essentially ensures the possibility of utilising the blood’s natural healing techniques to ensure that you can rejuvenate your skin, treat hair thinning, reduce the presence of wrinkles, and improve cellular regeneration. This process ensures the possibility of youthful skin and thoroughly healthy hair.'
        },
        {
          title: 'Exosomes Therapy',
          link: '/exosome',
          image: '/hair copy/Exosome-30.jpg',
          description: 'Employing the use of one’s stem cells, you can thoroughly and effectively ensure the possibility of delivering influential growth factors, peptides, and thoroughly explore genetic material to target skin as well as hair growth and rejuvenation. This process reduces inflammation and stimulates collagen as well as hair follicle activity.'
        }
      ]}
      ctaText="If you have never considered the possibility of addressing your hair loss or thinning, it is natural to feel overwhelmed at the prospect of several options. However, you can find the proper treatment possibility by consulting the experts at Puri Skin Clinic. Our team ensures to provide personalised recommendations on a case-by-case basis."
      ctaImage="/hair copy/swa.jpg"
      faqs={[
        {
          question: "Will I feel any kind of pain and discomfort during the hair transplant procedure?",
          answer: "No, you won’t feel much pain or discomfort during the hair transplant procedure, as the treatment includes the use of anaesthesia. This can significantly help in numbing the specific area of your scalp in order to prevent you from much pain and discomfort."
        },
        {
          question: "What should I look for while finding the best hair transplant surgeon?",
          answer: "Make sure to thoroughly check the surgeon’s expertise, along with qualifications regarding the relevant field. Along with this, make sure to analyse the previous patient’s reviews regarding the hair transplant surgeon for more precise results."
        },
        {
          question: "Why am I feeling mild discomfort after the completion of hair transplant surgery?",
          answer: "Feeling mild discomfort after the completion of hair transplant surgery is normal and usually not a matter of concern. Along with discomfort, you’ll also feel tightness in your head; however, make sure to get thorough guidance on this from your hair transplant surgeon for managing your discomfort."
        },
        {
          question: "What qualities define the best hair transplant clinic for providing effective results?",
          answer: "The best hair transplant clinic includes skilled and professional hair transplant surgeons proficient in performing modern techniques to provide you with long-lasting results."
        },
        {
          question: "What is the simple way of finding the best hair transplant clinic that is near my location?",
          answer: "In order to find the best hair transplant clinic, make sure to open your Google and type, “best hair transplant clinic near me”, to get effective results. Choose the best one according to the nature of the results and years of experience."
        },
        {
          question: "Is a hair transplant expensive in India compared to Western countries?",
          answer: "No, generally, hair transplant cost in India is manageable as compared to Western countries, including the precise techniques and methods to drive the long-lasting results. Overall, the rough estimate of hair transplant cost in India includes around Rs.30,000 to Rs.400,000 approximately."
        },
        {
          question: "Are there any specific precautions that should be taken after hair transplant surgery?",
          answer: "Yes, there are some necessary precautions that should be in your mind after hair transplant surgery, such as sleeping with the head elevated, along with avoiding washing your hair for a few days. Also, make sure to be gentle with your scalp after the completion of hair transplant surgery by avoiding scratching your scalp."
        },
        {
          question: "Can I opt for PRP therapy instead of a hair transplant to achieve permanent results?",
          answer: "If you are willing to achieve permanent results, then choosing PRP therapy will not be the best option for you, as it doesn’t provide permanent results. You need to maintain your scalp for healthy growth and to improve your hair density."
        },
        {
          question: "When can I continue my daily activities after PRP therapy?",
          answer: "You can continue with your daily activities after two to three days of PRP therapy, with the aim of providing proper and adequate rest to your scalp, which is necessary for faster healing."
        },
        {
          question: "Can I apply ice to my scalp after PRP therapy?",
          answer: "Make sure not to apply ice directly to your scalp after the completion of PRP therapy; however, you can use it by wrapping it in a cotton cloth. Generally, avoid giving any cold compress to your scalp for a few hours after your PRP therapy."
        },
        {
          question: "Is PRP therapy expensive in Ludhiana?",
          answer: "No PRP therapy costs in Ludhiana are not very expensive and can sound affordable to most individuals. However, make sure to engage with the professionals of Puri Skin Clinic regarding this, to get thorough guidance on the financial structure of PRP hair therapy."
        },
        {
          question: "Does GFC hair treatment include less pain and discomfort?",
          answer: "Yes, GFC hair treatment is usually done by applying the cream over your scalp to efficiently numb the specific area. Along with this, only fine needles are used for an effective procedure of GFC hair treatment; as a result, you’ll experience less pain and discomfort throughout the procedure."
        },
        {
          question: "Can GFC hair treatment help in managing the complex hair loss cases?",
          answer: "Yes, the best GFC hair treatment in India helps in managing the complex hair loss cases in an efficient and effective manner. You can count on the professionals of Puri Skin Clinic to get effective results regarding this."
        },
        {
          question: "Will my existing hair be affected by hair transplant surgery?",
          answer: "No, through hair transplant surgery, the bald patches in your head get covered with the growth of new hair, without affecting your existing hair. Along with this, make sure to engage with the professionals of Puri Skin Clinic – the best hair transplant clinic in Ludhiana, for effective guidance over this."
        }
      ]}
      faqTitle="Frequently Asked Questions"
      bottomSectionTitle="Choose Puri Skin Clinic for Any Hair Treatment Needed!"
      bottomSectionText="Suffering through any issues of hair, hair loss, and permanent balding can be thoroughly difficult to accept in an essential manner. It can start to affect a person’s confidence and cause issues with regard to their self-esteem. Therefore, it is imperative to make sure that one can seek hair treatment and transplant services in Punjab effectively. With the experts of Puri Skin Clinic, you can make certain that you are able to thoroughly and actively address any hair-related issue in a thorough and effective manner. Say hi to rejuvenated hair and goodbye to baldness with the help of our rigorous hair treatment and transplant options today!"
      showBottomAppointmentForm={true}
    />
  );
}
