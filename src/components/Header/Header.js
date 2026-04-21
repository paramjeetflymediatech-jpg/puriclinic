'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaCaretDown,
  FaCaretRight,
} from 'react-icons/fa';



const SOCIAL_ICONS = [
  { icon: FaFacebookF, link: 'https://www.facebook.com/puriskinclinic/', color: '#3b5998' },
  { icon: FaInstagram, link: 'https://www.instagram.com/puriskinclinic/', color: '#e1306c' },
  { icon: FaYoutube, link: 'https://www.youtube.com/channel/UC_401-6734-9577-998-778', color: '#ff0000' },
  { icon: FaMapMarkerAlt, link: 'https://maps.app.goo.gl/Z8x9x9x9x9x9x9x9x', color: '#ea4335' },
];

const DropdownItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.link}
        className={`flex items-center justify-between px-[18px] py-[10px] text-[14px] font-semibold whitespace-nowrap transition-colors duration-150 ${open
            ? 'bg-[#4CA6AE] text-white'
            : 'text-[#EA6490] hover:bg-[#4CA6AE] hover:text-white'
          }`}
      >
        <span>{item.name}</span>
        {item.hasSubMenu && (
          <FaCaretRight className="text-[12px] ml-6 flex-shrink-0" />
        )}
      </Link>

      {item.hasSubMenu && item.subItems && open && (
        <div className="absolute left-full top-0 bg-white border border-gray-100 shadow-xl min-w-[210px] py-1 z-[99999]">
          {item.subItems.map((sub) => (
            <Link
              key={sub.name}
              href={sub.link}
              className="block px-[18px] py-[10px] text-[#EA6490] text-[14px] font-medium whitespace-nowrap hover:bg-[#4CA6AE] hover:text-white transition-colors duration-150"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ items }) => (
  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl min-w-[230px] py-1 z-[99999]">
    {items.map((item) => (
      <DropdownItem key={item.name} item={item} />
    ))}
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Fetch dynamic services for the dropdown
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        if (data.services) setServices(data.services);
      } catch (err) {
        console.error("Header services fetch failed:", err);
      }
    };

    // Fetch dynamic doctors for the dropdown
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors');
        const data = await res.json();
        if (data.doctors) setDoctors(data.doctors);
      } catch (err) {
        console.error("Header doctors fetch failed:", err);
      }
    };

    fetchServices();
    fetchDoctors();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to build dynamic dropdown structure
  const buildServicesDropdown = () => {
    return [
      {
        name: 'Hair Related Services',
        link: '/hair-related-services/',
        hasSubMenu: true,
        subItems: [
          { name: 'PRP for Hair and Skin', link: '/prp-for-hair-and-skin/' },
          { name: 'Hair Transplantation', link: '/hair-transplantation/' },
          { name: 'Growth Factor Concentrate', link: '/growth-factor-concentrate/' },
          { name: 'Exosome', link: '/exosome/' },
        ]
      },
      {
        name: 'Skin Related Services',
        link: '/skin-related-services/',
        hasSubMenu: true,
        subItems: [
          { name: 'Botox', link: '/botox/' },
          { name: 'Chemical Peel', link: '/chemical-peel/' },
          { name: 'Dermapen', link: '/dermapen/' },
          { name: 'Dermaroller', link: '/dermaroller/' },
          { name: 'Fillers', link: '/fillers/' },
          { name: 'Non-Surgical Facelift', link: '/non-surgical-facelift/' },
          { name: 'Wart Removal in Ludhiana', link: '/wart-removal-in-ludhiana/' },
        ]
      },
      { name: 'Vitiligo Treatment', link: '/vitiligo-treatment/' },
      { name: 'Acne Treatment', link: '/acne-treatment/' },
      { name: 'Laser Hair Removal', link: '/laser-hair-removal/' },
      { name: 'Facial Rejuvenation', link: '/facial-rejuvenation/' },
      { name: 'Melasma Treatment', link: '/melasma-treatment/' },
    ];
  };

  // Helper to build dynamic about dropdown (Doctors)
  const buildAboutDropdown = () => {
      return [
        { name: 'Dr Gurinderjit Singh Puri', link: '/dr-gurinderjit-singh/' },
        { name: 'Dr Ashwajit Singh', link: '/dr-ashwajit-singh/' },
      ];
  };

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us/', dropdown: buildAboutDropdown() },
    { name: 'Services', link: '/services/', dropdown: buildServicesDropdown() },
    { name: 'Blogs', link: '/blogs/' },
    { name: 'Success Stories', link: '/success-stories/' },
    { name: 'Contact Us', link: '/contact-us/' },
  ];

  return (
    <header
      className="w-full relative z-[999] h-[89px] lg:h-[137px]"
      style={{ fontFamily: 'var(--font-nunito-sans), Nunito Sans, sans-serif' }}
    >
      <div 
        className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${
          scrolled ? 'shadow-md lg:-translate-y-[48px]' : ''
        }`}
        style={{ zIndex: 999 }}
      >
        {/* TOP BAR */}
        <div
          className={`bg-[#EA6490] text-white transition-opacity duration-300 hidden lg:block overflow-hidden h-[48px] ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-10 h-full flex justify-between items-center">

            {/* Left: contact info */}
            <div className="flex items-center gap-0" style={{ fontSize: '15px', fontWeight: 900 }}>
              <div className="flex items-center gap-[7px]">
                <FaMapMarkerAlt style={{ fontSize: '13px', flexShrink: 0 }} />
                <span>Ludhiana, Punjab - 141013</span>
              </div>
              <div className="flex items-center gap-[7px] ml-[45px]">
                <FaEnvelope style={{ fontSize: '16px', flexShrink: 0 }} />
                <span>Puri Skin Clinic</span>
              </div>
              <div className="flex items-center gap-[35px] ml-[45px]">
                <div className="flex items-center gap-[7px]">
                  <FaPhoneAlt style={{ fontSize: '16px', flexShrink: 0 }} />
                  <span>+91-9815673163</span>
                </div>
                <div className="flex items-center gap-[7px]">
                  <FaPhoneAlt style={{ fontSize: '16px', flexShrink: 0 }} />
                  <span>+91-9876170054</span>
                </div>
              </div>
            </div>

            {/* Right: social icons */}
            <div className="flex gap-[10px]">
              {SOCIAL_ICONS.map((item, i) => (
                <div
                  key={i}
                  className="w-[30px] h-[30px] bg-white text-[#EA6490] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4CA6AE] hover:text-white transition-all duration-200"
                  style={{ fontSize: '13px' }}
                >
                  <a href={item.link}>
                    <item.icon />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* MAIN NAV */}
        <nav
          className={`bg-white w-full transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
        >
          <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between h-[89px]">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Puri Skin Clinic"
                  width={250}
                  height={160}
                  className="w-[200px] lg:w-[250px] h-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((nav) => (
                <div key={nav.name} className="relative group">
                  <Link
                    href={nav.link}
                    className="flex items-center gap-[5px] px-[13px] py-2 text-[#EA6490] hover:text-[#4CA6AE] transition-colors whitespace-nowrap"
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-nunito-sans), Nunito Sans, sans-serif',
                    }}
                  >
                    {nav.name}
                    {nav.dropdown && (
                      <FaCaretDown style={{ fontSize: '13px', marginTop: '1px', opacity: 0.9 }} />
                    )}
                  </Link>
                  {nav.dropdown && nav.dropdown.length > 0 && (
                    <div className="absolute top-full left-0 hidden group-hover:block ">
                      <DropdownMenu items={nav.dropdown} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Book Appointment */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                href="/book-appointment/"
                className="bg-[#EA6490] text-white rounded-full font-bold hover:bg-[#d4547a] transition-all inline-block whitespace-nowrap"
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-nunito-sans), Nunito Sans, sans-serif',
                  padding: '14px 30px',
                }}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-[#EA6490] text-2xl p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-6 z-[1000]">
              <div className="flex flex-col px-8">
                {navLinks.map((nav) => (
                  <Link
                    key={nav.name}
                    href={nav.link}
                    className="py-3.5 border-b border-gray-100 last:border-0"
                    style={{ color: '#EA6490', fontSize: '16px', fontWeight: 600 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {nav.name}
                  </Link>
                ))}
                <Link
                  href="/book-appointment/"
                  className="mt-5 text-center bg-[#EA6490] text-white py-3.5 rounded-full"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;