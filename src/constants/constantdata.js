/**
 * Central FAQ Data for Puri Skin Clinic
 * Use this to populate Accordions or FAQ sections across the site.
 */
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const FAQ_DATA = {
  general: [
    {
      question: "How can I find the best skin doctor in Ludhiana for my persistent acne?",
      answer: "To find the best skin doctor in Ludhiana, consider their experience and patient reviews. Puri Skin Clinic, led by experts like Dr. Gurinderjit Singh with over 40 years of experience, is highly recommended for persistent acne treatment."
    },
    {
      question: "When should I expect results of Botox surgery for my face?",
      answer: "Noticeable changes typically appear within three to five days after the procedure. Results remain for several months, providing satisfactory outcomes."
    },
    {
      question: "Does a healthy diet help in managing my acne?",
      answer: "Yes, a healthy diet helps manage blood sugar levels, which is a major factor in acne formation. Professional guidance from Puri Skin Clinic is recommended for severe conditions."
    },
    {
      question: "What are the healthy lifestyle practices for managing my acne?",
      answer: "Follow a healthy diet (low sugar), clean your face gently without harsh chemicals, and maintain a consistent skincare routine."
    },
    {
      question: "I am currently dealing with vitiligo; is it concerning if I didn't follow sun protection?",
      answer: "Yes, it is concerning. UV rays can directly affect skin and highlight vitiligo patches. Appropriate sun protection methods as suggested by skin doctors are essential."
    },
    {
      question: "What is done in vitiligo treatment?",
      answer: "Treatment includes medications and procedures to restore natural skin color. Puri Skin Clinic offers options ranging from medication to surgical procedures for complex cases."
    },
    {
      question: "Which skin treatment would be best for an aging and wrinkled face?",
      answer: "Options include Botox or laser resurfacing, which are effective in removing fine lines and wrinkles."
    },
    {
      question: "Is undergoing skin treatment safe for sensitive skin?",
      answer: "Yes, but you must inform your expert about your skin condition beforehand to ensure the treatment is tailored to avoid side effects."
    },
    {
      question: "Are skin treatments effective or not?",
      answer: "They are highly effective if administered by experienced experts and if the patient follows post-treatment instructions."
    },
    {
      question: "What factors determine the cost of skin treatment?",
      answer: "Cost depends on the technique and complexity. Non-invasive treatments start around Rs. 6,000, while complex procedures can cost around Rs. 20,000."
    }
  ],
  hair: [
    {
      question: "Will I feel any kind of pain and discomfort during the hair transplant procedure?",
      answer: "The procedure is performed under anesthesia, so patients feel minimal to no pain during the surgery."
    },
    {
      question: "What should I look for while finding the best hair transplant surgeon?",
      answer: "Look for the surgeon's experience, specialization, and record of successful surgeries. Dr. Gurinderjit Singh at Puri Skin Clinic is a pioneer in the field."
    },
    {
      question: "Are there any specific precautions after hair transplant surgery?",
      answer: "Include sleeping with the head elevated, avoiding hair washing for a few days, and being gentle with the scalp for at least a week."
    },
    {
      question: "Is a hair transplant expensive in India compared to Western countries?",
      answer: "No, costs in India are manageable and range from approximately Rs. 30,000 to Rs. 4,00,000, which is significantly lower than in Western countries while maintaining international standards."
    },
    {
      question: "Can I opt for PRP therapy instead of a hair transplant?",
      answer: "Yes, provided the hair loss condition is not severe. PRP is a highly effective non-surgical alternative for promoting hair density and health."
    },
    {
      question: "Is PRP therapy expensive in Ludhiana?",
      answer: "No, the cost range typically starts from Rs. 4,000 and can go up to Rs. 15,000 depending on the number of sessions required."
    },
    {
      question: "Will my existing hair be affected by hair transplant surgery?",
      answer: "No, the surgery targets bald patches and does not affect the growth or health of existing surrounding hair."
    }
  ],
  skin_specific: [
    {
      category: "Eczema",
      questions: [
        {
          question: "What is eczema, and is it different from normal dry skin?",
          answer: "Eczema is a chronic, non-contagious inflammatory condition causing severe itching and rashes. Unlike dry skin, it involves a weakened skin barrier that requires targeted medical treatment."
        },
        {
          question: "Can eczema be cured with medications?",
          answer: "There is no permanent cure, but it can be highly managed and controlled with specialized ointments, topical therapy, and proper clinical skincare."
        },
        {
          question: "Does the monsoon season make eczema worse?",
          answer: "Yes, high humidity and excessive sweating can trigger or worsen rashes. Patients are advised to stay in cool environments and follow clinic-prescribed routines during this time."
        }
      ]
    }
  ]
};

export const CONTACT_INFO = {
  "contact_info": [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "77, Vishal Nagar Ext, Vishal Nagar, Shaheed Bhagat Singh Nagar, Ludhiana, Punjab - 141013", link: "https://maps.app.goo.gl/2ZTvQ6gvDFwqdkLLA" },
    { icon: <FaClock />, label: "Working Hours", value: "Mon - Sat: 5:30 PM - 8:00 PM Sunday: 11:00 AM - 1:00 PM" },
    { icon: <FaEnvelope />, label: "Email", value: "puriskinclinic@gmail.com" },
    { icon: <FaPhoneAlt />, label: "Call Us", value: ["+91-9876170054", "+91-9815673163"] }
  ]
}

export const SOCIAL_LINKS = {
  "social_links": [
    { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/puriskinclinic/", color: "#1877F2" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/puriskinclinic/", color: "#E4405F" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/puriskinclinic/", color: "#1DA1F2" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/company/puriskinclinic/", color: "#0A66C2" }
  ]
}