'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarContainer}>
          <div className={styles.topbarInfo}>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt />
              <span>77, Vishal Nagar Ext, Ludhiana, Punjab</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope />
              <a href="mailto:puriskinclinic@gmail.com">puriskinclinic@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <FaPhoneAlt />
              <a href="tel:+919815673163">+91 9815673163</a>
            </div>
          </div>
          <div className={styles.topbarSocial}>
            <a href="https://www.facebook.com/profile.php?id=61552061217807" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/puriskinclinic/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@PuriSkinClinic-l8n" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Puri <span>Skin Clinic</span>
        </Link>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about-us" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/services" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/success-stories" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Success Stories</Link>
          <Link href="/blogs" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link href="/contact-us" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div className={styles.navbarCTA}>
          <Link href="/book-appointment" className="btn btn-primary">
            Book Appointment
          </Link>
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
