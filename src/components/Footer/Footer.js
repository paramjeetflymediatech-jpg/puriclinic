'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/constants/constantdata';

const Footer = () => {
  return (
    <footer
      className="w-full"
      style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
    >
      {/* ─── MAIN FOOTER ─── */}
      <div className="bg-[#333333] text-white pt-[60px] pb-[50px]">
        <div className="max-w-[1140px] mx-auto px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

            {/* ── COLUMN 1: Logo + Description ── */}
            <div className="pr-[40px] pb-8 md:pb-0">
              <div className="mb-5">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Puri Skin Clinic"
                    width={380}
                    height={108}
                    className="w-[300px] h-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-white text-[16px] leading-[1.8] mb-[15px]">
                <strong>Puri Skin Clinic</strong> is a premier destination for advanced
                dermatological care, offering expert solutions in{' '}
                <strong>skin treatments</strong>,{' '}
                <strong>hair restoration</strong>, and{' '}
                <strong>vitiligo cure</strong>.
              </p>
            </div>

            {/* ── COLUMN 2: Quick Links ── */}
            <div className="md:pl-[100px] pb-8 md:pb-0">
              <h4
                className="text-white text-[22px] font-bold mb-[30px]"
                style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-[18px]">
                {[
                  { name: 'About Us', link: '/about-us/' },
                  { name: 'Services', link: '/services/' },
                  { name: 'Blogs', link: '/blogs/' },
                  { name: 'Gallery', link: '/gallery/' },
                  { name: 'Videos', link: '/videos/' },
                  { name: 'Contact Us', link: '/contact-us/' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="text-white text-[16px] hover:text-[#EA6490] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COLUMN 3: Connect Us ── */}
            <div className="pb-8 md:pb-0">
              <h4
                className="text-white text-[22px] font-bold mb-[30px]" style={{ fontFamily: "var(--font-nunito-sans), 'Nunito Sans', sans-serif" }}
              >
                Connect Us
              </h4>

              <div className="flex flex-col gap-[18px]">
                {/* Location */}
                <div className="flex items-start gap-[10px]">
                  <a href='https://maps.app.goo.gl/2ZTvQ6gvDFwqdkLLA' className='flex items-start gap-[10px]' target='_blank'>
                    <FaMapMarkerAlt className="text-[#EA4335] text-[18px] mt-[3px] flex-shrink-0" />
                    <span className="text-white font-semibold text-[16px] leading-[1.6]">
                      Ludhiana, Punjab - 141013
                    </span>
                  </a>
                </div>

                {/* Phone 1 */}
                <div className="flex items-center gap-[10px]">
                  <FaPhoneAlt className="text-[#34A853] text-[16px] flex-shrink-0" />
                  <a
                    href="tel:+919876170054"
                    className="text-white text-[16px] hover:text-[#EA6490] transition-colors"
                  >
                    +91-9876170054
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center gap-[10px]">
                  <FaPhoneAlt className="text-[#34A853] text-[16px] flex-shrink-0" />
                  <a
                    href="tel:+919815673163"
                    className="text-white text-[15px] hover:text-[#EA6490] transition-colors"
                  >
                    +91-9815673163
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-[10px]">
                  <FaEnvelope className="text-[#888888] text-[16px] flex-shrink-0" />
                  <a
                    href="mailto:puriskinclinic@gmail.com"
                    className="text-white text-[16px] hover:text-[#EA6490] transition-colors"
                  >
                    Puri Skin Clinic
                  </a>
                </div>

                {/* Social Icons — colored circles matching reference */}
                <div className="flex items-center gap-[10px] mt-[10px]">
                  {SOCIAL_LINKS.social_links.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-[15px] hover:opacity-80 transition-opacity"
                      style={{ color: item.color }}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── BOTTOM BAR ─── */}
      <div className="bg-[#2a2a2a] py-[18px] text-center border-t border-[#444444]">
        <p className="text-[#aaaaaa] text-[14px]">
          © {new Date().getFullYear()}{' '}
          <strong className="text-white">Puri Skin Clinic</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
