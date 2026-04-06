import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            Puri <span>Skin Clinic</span>
          </Link>
          <p className={styles.footerDesc}>
            Puri Skin Clinic is a premier destination for advanced dermatological care, offering expert solutions in skin treatments, hair restoration, and vitiligo cure.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/profile.php?id=61552061217807" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/puriskinclinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.youtube.com/@PuriSkinClinic-l8n" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/prp-for-hair-and-skin">PRP Treatment</Link></li>
            <li><Link href="/services/hair-transplantation">Hair Transplant</Link></li>
            <li><Link href="/services/vitiligo-treatment">Vitiligo Treatment</Link></li>
            <li><Link href="/services/acne-treatment">Acne Treatment</Link></li>
            <li><Link href="/services/laser-hair-removal">Laser Hair Removal</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Connect Us</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>77, Vishal Nagar Ext, Vishal Nagar, Shaheed Bhagat Singh Nagar, Ludhiana, Punjab - 141013</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <div>
                <a href="tel:+919876170054">+91-9876170054</a><br/>
                <a href="tel:+919815673163">+91-9815673163</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <a href="mailto:puriskinclinic@gmail.com">puriskinclinic@gmail.com</a>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Puri Skin Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
