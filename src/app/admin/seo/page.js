'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  FaSearch, FaCode, FaSave, FaCheckCircle, FaExclamationCircle,
  FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin,
  FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink,
} from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';
import Swal from '@/lib/swal';

const PAGES = [
  { key: 'home', label: 'Home' },
  { key: 'about-us', label: 'About Us' },
  { key: 'services', label: 'Services' },
  { key: 'doctors', label: 'Doctors' },
  { key: 'contact-us', label: 'Contact Us' },
  { key: 'book-appointment', label: 'Book Appt.' },
  { key: 'blogs', label: 'Blogs' },
  { key: 'success-stories', label: 'Success' },
  // Services
  { key: 'acne-treatment', label: 'Acne' },
  { key: 'botox', label: 'Botox' },
  { key: 'chemical-peel', label: 'Chem Peel' },
  { key: 'dermapen', label: 'Dermapen' },
  { key: 'dermaroller', label: 'Dermaroller' },
  { key: 'exosome', label: 'Exosome' },
  { key: 'facial-rejuvenation', label: 'Facial Rej.' },
  { key: 'fillers', label: 'Fillers' },
  { key: 'growth-factor-concentrate', label: 'GFC' },
  { key: 'hair-related-services', label: 'Hair Svc.' },
  { key: 'hair-transplantation', label: 'Hair Trans.' },
  { key: 'laser-hair-removal', label: 'Laser Hair' },
  { key: 'melasma-treatment', label: 'Melasma' },
  { key: 'non-surgical-facelift', label: 'Facelift' },
  { key: 'prp-for-hair-and-skin', label: 'PRP' },
  { key: 'skin-related-services', label: 'Skin Svc.' },
  { key: 'vitiligo-treatment', label: 'Vitiligo' },
  { key: 'wart-removal-in-ludhiana', label: 'Wart Rem.' },
];

const BUSINESS_TYPES = [
  'MedicalClinic', 'Dermatologist', 'BeautySalon',
  'HealthAndBeautyBusiness', 'LocalBusiness', 'Physician', 'Hospital',
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const defaultSchema = {
  businessName: 'Puri Skin Clinic',
  businessType: 'Dermatologist',
  description: 'Expert dermatology and skin care clinic offering advanced treatments.',
  address: { street: '', city: '', state: '', postalCode: '', country: 'IN' },
  phone: '',
  email: '',
  website: '',
  lat: '',
  lng: '',
  logoUrl: '',
  priceRange: '₹₹',
  socials: { facebook: '', instagram: '', youtube: '', twitter: '', linkedin: '' },
  hours: DAYS.reduce((acc, d) => ({
    ...acc,
    [d]: { open: d !== 'Sunday', from: '10:00', to: '19:00' },
  }), {}),
};

// Safely handle null/undefined from DB
function CharCounter({ value, max, className = '' }) {
  const len = (value ?? '').length;
  const pct = len / max;
  const color = pct > 1 ? 'text-red-500' : pct > 0.85 ? 'text-amber-500' : 'text-slate-400';
  return (
    <span className={`text-[10px] font-black ${color} ${className}`}>
      {len}/{max}
    </span>
  );
}

function Field({ label, icon, children, colSpan = '' }) {
  return (
    <div className={`space-y-2 ${colSpan}`}>
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
        {icon && <span className="text-sm">{icon}</span>}
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = (color = 'pink') =>
  `w-full p-3 border border-slate-100 bg-slate-50/50 rounded-2xl outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-300 focus:ring-4 focus:bg-white ${
    color === 'teal'
      ? 'focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE]'
      : 'focus:ring-[#EA6490]/10 focus:border-[#EA6490]'
  }`;

export default function SeoAdminPage() {
  const [activeTab, setActiveTab] = useState('meta');
  const [activePage, setActivePage] = useState('home');
  const [metaData, setMetaData] = useState({});
  const [loadingMeta, setLoadingMeta] = useState(false);
  const [savingMeta, setSavingMeta] = useState(false);
  const [schema, setSchema] = useState(defaultSchema);
  const [schemaLoading, setSchemaLoading] = useState(false);
  const [schemaSaving, setSchemaSaving] = useState(false);
  const [jsonPreview, setJsonPreview] = useState('');
  const [showJson, setShowJson] = useState(false); // mobile toggle for JSON preview

  const [doctors, setDoctors] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [scriptData, setScriptData] = useState({ gtmId: '', gaId: '', headScripts: '', footerScripts: '' });
  const [loadingScripts, setLoadingScripts] = useState(false);
  const [savingScripts, setSavingScripts] = useState(false);

  // ── Meta ─────────────────────────────────────────────────────────────────
  const loadMeta = useCallback(async (key) => {
    setLoadingMeta(true);
    try {
      const res = await fetch(`/api/admin/seo?page=${key}`);
      const data = await res.json();
      setMetaData(data.seo || {});
    } catch { setMetaData({}); }
    setLoadingMeta(false);
  }, []);

  // ── Scripts ──────────────────────────────────────────────────────────────
  const loadScripts = useCallback(async () => {
    setLoadingScripts(true);
    try {
      const res = await fetch('/api/admin/seo?page=__global_scripts__');
      const data = await res.json();
      if (data.seo && data.seo.schema_json) {
        setScriptData(JSON.parse(data.seo.schema_json));
      }
    } catch {}
    setLoadingScripts(false);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const [docRes, blogRes] = await Promise.all([
          fetch('/api/admin/doctors'),
          fetch('/api/admin/blogs')
        ]);
        const docData = await docRes.json();
        const blogData = await blogRes.json();
        setDoctors(docData.doctors || []);
        setBlogs(blogData.blogs || []);
        loadScripts();
      } catch (err) {
        console.error("Failed to fetch dynamic pages:", err);
      }
    }
    fetchData();
  }, [loadScripts]);

  const saveScripts = async (e) => {
    e.preventDefault();
    setSavingScripts(true);
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_key: '__global_scripts__', schema_json: JSON.stringify(scriptData) }),
      });
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Saved!', text: 'Global tags updated site-wide.', timer: 2000, showConfirmButton: false });
      } else throw new Error();
    } catch {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to save global tags.' });
    }
    setSavingScripts(false);
  };

  useEffect(() => { loadMeta(activePage); }, [activePage, loadMeta]);

  const saveMeta = async (e) => {
    e.preventDefault();
    setSavingMeta(true);
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_key: activePage, ...metaData }),
      });
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Saved!', text: 'SEO settings updated.', timer: 2000, showConfirmButton: false });
      } else throw new Error();
    } catch {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to save SEO settings.' });
    }
    setSavingMeta(false);
  };

  // ── Schema ────────────────────────────────────────────────────────────────
  const loadSchema = useCallback(async () => {
    setSchemaLoading(true);
    try {
      const res = await fetch('/api/admin/seo?schema=global');
      const data = await res.json();
      if (data.schema) setSchema(s => ({ ...s, ...data.schema }));
    } catch {}
    setSchemaLoading(false);
  }, []);

  useEffect(() => { loadSchema(); }, [loadSchema]);

  const buildJsonLd = useCallback((s) => {
    const hoursSpec = Object.entries(s.hours ?? {})
      .filter(([, v]) => v.open)
      .map(([day, v]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day}`,
        opens: v.from,
        closes: v.to,
      }));
    return {
      '@context': 'https://schema.org',
      '@type': s.businessType || 'MedicalClinic',
      name: s.businessName,
      description: s.description,
      url: s.website,
      telephone: s.phone,
      email: s.email,
      logo: s.logoUrl || undefined,
      priceRange: s.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: s.address?.street,
        addressLocality: s.address?.city,
        addressRegion: s.address?.state,
        postalCode: s.address?.postalCode,
        addressCountry: s.address?.country,
      },
      geo: s.lat && s.lng ? { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng } : undefined,
      openingHoursSpecification: hoursSpec,
      sameAs: Object.values(s.socials ?? {}).filter(Boolean),
    };
  }, []);

  useEffect(() => {
    setJsonPreview(JSON.stringify(buildJsonLd(schema), null, 2));
  }, [schema, buildJsonLd]);

  const saveSchema = async () => {
    setSchemaSaving(true);
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_key: '__schema__', schema_json: JSON.stringify(buildJsonLd(schema)) }),
      });
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Schema Saved!', text: 'JSON-LD injected on all pages automatically.', timer: 3000, showConfirmButton: false });
      } else throw new Error();
    } catch {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to save schema.' });
    }
    setSchemaSaving(false);
  };

  const setSchemaField = (path, value) => {
    setSchema(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let cur = next;
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
      cur[keys[keys.length - 1]] = value;
      return next;
    });
  };

  // ── Preview ───────────────────────────────────────────────────────────────
  const getPageLabel = (key) => {
    if (key.startsWith('doctor:')) {
      const slug = key.replace('doctor:', '');
      return doctors.find(d => d.slug === slug)?.name || 'Doctor Profile';
    }
    if (key.startsWith('blog:')) {
      const slug = key.replace('blog:', '');
      return blogs.find(b => b.slug === slug)?.title || 'Blog Post';
    }
    return PAGES.find(p => p.key === key)?.label || '';
  };

  const pageLabel = getPageLabel(activePage);
  const previewTitle = metaData.title || `${pageLabel} — Puri Skin Clinic`;
  const previewDesc = metaData.description || 'Your meta description will appear here. Aim for 120–160 characters.';
  const previewUrl = activePage.includes(':') 
    ? `puriskinclinic.com/${activePage.split(':')[0]}s/${activePage.split(':')[1]}`
    : `puriskinclinic.com/${activePage === 'home' ? '' : activePage}`;

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* ─── Header ─── */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-1 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          SEO Settings
        </h1>
        <p className="text-slate-500 text-sm font-medium">Meta tags, Open Graph &amp; global JSON-LD schema markup.</p>
      </div>

      {/* ─── Tabs ─── */}
      <div className="flex gap-1.5 sm:gap-2 mb-6 bg-white rounded-2xl p-1.5 shadow-sm border border-slate-100 w-full sm:w-fit">
        {[
          { id: 'meta', label: 'Meta Tags', icon: <FaSearch size={11} /> },
          { id: 'schema', label: 'Schema Markup', icon: <FaCode size={11} /> },
          { id: 'scripts', label: 'Global Tags', icon: <FaLink size={11} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex-1 sm:flex-none justify-center ${
              activeTab === tab.id
                ? 'bg-[#EA6490] text-white shadow-lg shadow-[#EA6490]/20'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 1 — META TAGS                                             */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'meta' && (
        <div className="space-y-6">
          {/* Page Selector */}
          <div className="bg-white rounded-[1.5rem] p-5 sm:p-6 shadow-sm border border-slate-100">
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-[#EA6490] mb-3 block">Main Pages</label>
                <div className="flex flex-wrap gap-2">
                  {PAGES.filter(p => !p.key.includes('acne') && !p.key.includes('botox') && !p.key.includes('chemical') && !p.key.includes('derm') && !p.key.includes('exosome') && !p.key.includes('facial') && !p.key.includes('fillers') && !p.key.includes('growth') && !p.key.includes('hair') && !p.key.includes('laser') && !p.key.includes('melasma') && !p.key.includes('non-surgical') && !p.key.includes('prp') && !p.key.includes('skin-related') && !p.key.includes('vitiligo') && !p.key.includes('wart')).map(p => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setActivePage(p.key)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                        activePage === p.key
                          ? 'bg-[#EA6490] text-white border-[#EA6490] shadow-md shadow-[#EA6490]/20'
                          : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-[#EA6490]/30 hover:text-[#EA6490]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4CA6AE] mb-3 block">Service Pages</label>
                <div className="flex flex-wrap gap-2">
                  {PAGES.filter(p => p.key.includes('acne') || p.key.includes('botox') || p.key.includes('chemical') || p.key.includes('derm') || p.key.includes('exosome') || p.key.includes('facial') || p.key.includes('fillers') || p.key.includes('growth') || p.key.includes('hair') || p.key.includes('laser') || p.key.includes('melasma') || p.key.includes('non-surgical') || p.key.includes('prp') || p.key.includes('skin-related') || p.key.includes('vitiligo') || p.key.includes('wart')).map(p => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setActivePage(p.key)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                        activePage === p.key
                          ? 'bg-[#4CA6AE] text-white border-[#4CA6AE] shadow-md shadow-[#4CA6AE]/20'
                          : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-[#4CA6AE]/30 hover:text-[#4CA6AE]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {doctors.length > 0 && (
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Doctor Profiles</label>
                  <div className="flex flex-wrap gap-2">
                    {doctors.map(doc => {
                      const key = `doctor:${doc.slug}`;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActivePage(key)}
                          className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                            activePage === key
                              ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/20'
                              : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-900/30 hover:text-slate-900'
                          }`}
                        >
                          {doc.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {blogs.length > 0 && (
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Blog Posts</label>
                  <div className="flex flex-wrap gap-2">
                    {blogs.map(blog => {
                      const key = `blog:${blog.slug}`;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActivePage(key)}
                          className={`px-4 py-2 rounded-xl text-xs font-black transition-all border ${
                            activePage === key
                              ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/20'
                              : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-900/30 hover:text-slate-900'
                          }`}
                        >
                          {blog.title.length > 20 ? blog.title.substring(0, 20) + '...' : blog.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {loadingMeta ? (
            <div className="bg-white rounded-[1.5rem] p-16 text-center text-slate-300 font-bold italic animate-pulse">Loading...</div>
          ) : (
            <form onSubmit={saveMeta} className="space-y-6">
              {/* Meta Fields */}
              <div className="bg-white rounded-[1.5rem] p-5 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-base sm:text-lg font-bold mb-6 text-slate-800 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-[#EA6490] rounded-full flex-shrink-0"></span>
                  Meta Tags — {pageLabel}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Title */}
                  <div className="space-y-2 sm:col-span-1">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Meta Title</label>
                      <CharCounter value={metaData.title} max={60} />
                    </div>
                    <input
                      value={metaData.title ?? ''}
                      onChange={e => setMetaData({ ...metaData, title: e.target.value })}
                      placeholder="e.g. Puri Skin Clinic — Best Dermatologist"
                      className={inputCls('pink')}
                    />
                    {(metaData.title?.length ?? 0) > 60 && (
                      <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FaExclamationCircle size={10} /> Exceeds 60 chars — Google may truncate.</p>
                    )}
                  </div>

                  {/* Keywords */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Keywords</label>
                    <input
                      value={metaData.keywords ?? ''}
                      onChange={e => setMetaData({ ...metaData, keywords: e.target.value })}
                      placeholder="skin clinic, dermatologist, acne treatment"
                      className={inputCls('teal')}
                    />
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Meta Description</label>
                      <CharCounter value={metaData.description} max={160} />
                    </div>
                    <textarea
                      rows={3}
                      value={metaData.description ?? ''}
                      onChange={e => setMetaData({ ...metaData, description: e.target.value })}
                      placeholder="Write a compelling 120–160 character description..."
                      className={`${inputCls('pink')} resize-none`}
                    />
                    {(metaData.description?.length ?? 0) > 160 && (
                      <p className="text-xs text-red-500 font-bold flex items-center gap-1"><FaExclamationCircle size={10} /> Exceeds 160 chars — Google may truncate.</p>
                    )}
                  </div>

                  {/* OG Title */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">OG Title</label>
                      <CharCounter value={metaData.og_title} max={60} />
                    </div>
                    <input
                      value={metaData.og_title ?? ''}
                      onChange={e => setMetaData({ ...metaData, og_title: e.target.value })}
                      placeholder="Title shown when shared on Facebook, WhatsApp..."
                      className={inputCls('teal')}
                    />
                  </div>

                  {/* OG Image */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">OG Image URL</label>
                    <input
                      value={metaData.og_image ?? ''}
                      onChange={e => setMetaData({ ...metaData, og_image: e.target.value })}
                      placeholder="https://... or /og-home.jpg"
                      className={inputCls('teal')}
                    />
                  </div>

                  {/* OG Description */}
                  <div className="sm:col-span-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">OG Description</label>
                      <CharCounter value={metaData.og_description} max={160} />
                    </div>
                    <textarea
                      rows={2}
                      value={metaData.og_description ?? ''}
                      onChange={e => setMetaData({ ...metaData, og_description: e.target.value })}
                      placeholder="Description shown when page is shared on social media..."
                      className={`${inputCls('pink')} resize-none`}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6 pt-5 border-t border-slate-50">
                  <button
                    type="submit"
                    disabled={savingMeta}
                    className="flex items-center gap-2 bg-[#EA6490] hover:bg-[#d84a7e] disabled:opacity-60 text-white font-black px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 uppercase tracking-widest text-xs w-full sm:w-auto justify-center"
                  >
                    <FaSave /> {savingMeta ? 'Saving...' : 'Save Meta Tags'}
                  </button>
                </div>
              </div>

              {/* Google Preview */}
              <div className="bg-white rounded-[1.5rem] p-5 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-sm font-black text-slate-700 flex items-center gap-2 mb-5">
                  <MdPreview className="text-[#4CA6AE] text-lg" /> Google Search Preview
                </h2>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 sm:p-6 max-w-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#EA6490] flex items-center justify-center text-white text-[8px] font-black flex-shrink-0">P</div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium">Puri Skin Clinic</p>
                      <p className="text-[10px] text-slate-400">https://{previewUrl}</p>
                    </div>
                  </div>
                  <h3 className="text-blue-700 text-base hover:underline cursor-pointer font-normal leading-snug mt-1 line-clamp-1">{previewTitle}</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed line-clamp-2">{previewDesc}</p>
                </div>
              </div>
            </form>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 2 — GLOBAL SCHEMA MARKUP                                  */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'schema' && (
        <div className="space-y-6">
          {schemaLoading ? (
            <div className="bg-white rounded-[1.5rem] p-16 text-center text-slate-300 font-bold italic animate-pulse">Loading...</div>
          ) : (
            <>
              {/* Info Banner */}
              <div className="bg-gradient-to-r from-[#4CA6AE]/10 to-[#EA6490]/10 rounded-[1.5rem] p-4 sm:p-6 border border-[#4CA6AE]/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#4CA6AE] flex items-center justify-center text-white flex-shrink-0">
                    <FaCode size={14} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 mb-0.5 text-sm sm:text-base">Configure Once — Works Everywhere</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Fill in your business details below. The generated{' '}
                      <code className="bg-white px-1 py-0.5 rounded-lg text-[#EA6490] font-black text-[10px]">JSON-LD</code>{' '}
                      schema is auto-injected into <strong>every page</strong> for Google rich results and local SEO.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile: JSON preview toggle */}
              <button
                onClick={() => setShowJson(!showJson)}
                className="lg:hidden w-full flex items-center justify-between bg-slate-900 text-white p-4 rounded-2xl font-black text-xs uppercase tracking-widest"
              >
                <span className="flex items-center gap-2"><FaCode /> {showJson ? 'Hide' : 'Show'} JSON-LD Preview</span>
                <span className="text-white/40">{showJson ? '▲' : '▼'}</span>
              </button>

              {/* Mobile JSON Preview */}
              {showJson && (
                <div className="lg:hidden bg-slate-900 rounded-2xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/5">
                    <span className="text-white font-black text-xs">Live JSON-LD Output</span>
                  </div>
                  <pre className="p-4 text-[10px] text-[#4CA6AE]/80 overflow-x-auto max-h-64 leading-relaxed font-mono whitespace-pre-wrap break-words">
                    {jsonPreview}
                  </pre>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* ─── Form ─── */}
                <div className="space-y-5">
                  {/* Business Info */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-7 shadow-sm border border-slate-100">
                    <h2 className="text-sm sm:text-base font-bold mb-5 text-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#EA6490] rounded-full flex-shrink-0"></span>
                      Business Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Business Name">
                        <input value={schema.businessName ?? ''} onChange={e => setSchemaField('businessName', e.target.value)} className={inputCls('pink')} />
                      </Field>
                      <Field label="Business Type">
                        <select value={schema.businessType ?? 'Dermatologist'} onChange={e => setSchemaField('businessType', e.target.value)} className={inputCls('pink')}>
                          {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                      <Field label="Description" colSpan="sm:col-span-2">
                        <textarea rows={2} value={schema.description ?? ''} onChange={e => setSchemaField('description', e.target.value)} className={`${inputCls('pink')} resize-none`} />
                      </Field>
                      <Field label="Phone" icon={<FaPhone className="text-[#EA6490]" />}>
                        <input value={schema.phone ?? ''} onChange={e => setSchemaField('phone', e.target.value)} placeholder="+91-XXXXXXXXXX" className={inputCls('pink')} />
                      </Field>
                      <Field label="Email" icon={<FaEnvelope className="text-[#4CA6AE]" />}>
                        <input value={schema.email ?? ''} onChange={e => setSchemaField('email', e.target.value)} placeholder="info@clinic.com" className={inputCls('teal')} />
                      </Field>
                      <Field label="Website URL" icon={<FaLink className="text-[#EA6490]" />}>
                        <input value={schema.website ?? ''} onChange={e => setSchemaField('website', e.target.value)} placeholder="https://..." className={inputCls('pink')} />
                      </Field>
                      <Field label="Price Range">
                        <select value={schema.priceRange ?? '₹₹'} onChange={e => setSchemaField('priceRange', e.target.value)} className={inputCls('teal')}>
                          {['₹', '₹₹', '₹₹₹', '₹₹₹₹'].map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </Field>
                      <Field label="Logo URL" colSpan="sm:col-span-2" icon={<FaLink className="text-slate-300" />}>
                        <input value={schema.logoUrl ?? ''} onChange={e => setSchemaField('logoUrl', e.target.value)} placeholder="/logo.png or https://..." className={inputCls('teal')} />
                      </Field>
                    </div>
                  </div>

                  {/* Address + Geo */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-7 shadow-sm border border-slate-100">
                    <h2 className="text-sm sm:text-base font-bold mb-5 text-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#4CA6AE] rounded-full flex-shrink-0"></span>
                      <FaMapMarkerAlt className="text-[#4CA6AE]" /> Address &amp; Location
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Street Address" colSpan="sm:col-span-2">
                        <input value={schema.address?.street ?? ''} onChange={e => setSchemaField('address.street', e.target.value)} placeholder="123 Main Street..." className={inputCls('teal')} />
                      </Field>
                      <Field label="City">
                        <input value={schema.address?.city ?? ''} onChange={e => setSchemaField('address.city', e.target.value)} className={inputCls('teal')} />
                      </Field>
                      <Field label="State">
                        <input value={schema.address?.state ?? ''} onChange={e => setSchemaField('address.state', e.target.value)} className={inputCls('teal')} />
                      </Field>
                      <Field label="Postal Code">
                        <input value={schema.address?.postalCode ?? ''} onChange={e => setSchemaField('address.postalCode', e.target.value)} className={inputCls('teal')} />
                      </Field>
                      <Field label="Country Code">
                        <input value={schema.address?.country ?? 'IN'} onChange={e => setSchemaField('address.country', e.target.value)} placeholder="IN" className={inputCls('teal')} />
                      </Field>
                      <Field label="Latitude">
                        <input value={schema.lat ?? ''} onChange={e => setSchemaField('lat', e.target.value)} placeholder="28.6139" className={inputCls('pink')} />
                      </Field>
                      <Field label="Longitude">
                        <input value={schema.lng ?? ''} onChange={e => setSchemaField('lng', e.target.value)} placeholder="77.2090" className={inputCls('pink')} />
                      </Field>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-7 shadow-sm border border-slate-100">
                    <h2 className="text-sm sm:text-base font-bold mb-5 text-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#EA6490] rounded-full flex-shrink-0"></span>
                      <FaClock className="text-[#EA6490]" /> Opening Hours
                    </h2>
                    <div className="space-y-3">
                      {DAYS.map(day => (
                        <div key={day} className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                          <label className="flex items-center gap-2 cursor-pointer w-24 flex-shrink-0">
                            <input
                              type="checkbox"
                              checked={schema.hours?.[day]?.open ?? false}
                              onChange={e => setSchemaField(`hours.${day}.open`, e.target.checked)}
                              className="w-4 h-4 accent-[#EA6490]"
                            />
                            <span className={`text-xs font-black ${schema.hours?.[day]?.open ? 'text-slate-700' : 'text-slate-300'}`}>
                              {day.slice(0, 3)}
                            </span>
                          </label>
                          {schema.hours?.[day]?.open ? (
                            <div className="flex items-center gap-2 w-full xs:flex-1">
                              <input
                                type="time"
                                value={schema.hours[day]?.from ?? '10:00'}
                                onChange={e => setSchemaField(`hours.${day}.from`, e.target.value)}
                                className="flex-1 min-w-0 p-2 border border-slate-100 bg-slate-50/50 rounded-xl text-xs font-medium text-slate-700 outline-none focus:border-[#EA6490]"
                              />
                              <span className="text-slate-300 font-black text-[10px] flex-shrink-0">to</span>
                              <input
                                type="time"
                                value={schema.hours[day]?.to ?? '19:00'}
                                onChange={e => setSchemaField(`hours.${day}.to`, e.target.value)}
                                className="flex-1 min-w-0 p-2 border border-slate-100 bg-slate-50/50 rounded-xl text-xs font-medium text-slate-700 outline-none focus:border-[#EA6490]"
                              />
                            </div>
                          ) : (
                            <span className="text-[10px] text-slate-300 font-black italic">Closed</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-7 shadow-sm border border-slate-100">
                    <h2 className="text-sm sm:text-base font-bold mb-5 text-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#4CA6AE] rounded-full flex-shrink-0"></span>
                      Social Profiles
                    </h2>
                    <div className="space-y-3">
                      {[
                        { key: 'facebook', label: 'Facebook', icon: <FaFacebook className="text-blue-600" />, ph: 'https://facebook.com/...' },
                        { key: 'instagram', label: 'Instagram', icon: <FaInstagram className="text-pink-500" />, ph: 'https://instagram.com/...' },
                        { key: 'youtube', label: 'YouTube', icon: <FaYoutube className="text-red-500" />, ph: 'https://youtube.com/...' },
                        { key: 'twitter', label: 'Twitter/X', icon: <FaTwitter className="text-sky-500" />, ph: 'https://twitter.com/...' },
                        { key: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin className="text-blue-700" />, ph: 'https://linkedin.com/...' },
                      ].map(s => (
                        <div key={s.key} className="flex items-center gap-3">
                          <span className="text-xl w-5 flex-shrink-0">{s.icon}</span>
                          <input
                            value={schema.socials?.[s.key] ?? ''}
                            onChange={e => setSchemaField(`socials.${s.key}`, e.target.value)}
                            placeholder={s.ph}
                            className={`${inputCls('teal')} text-xs`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={saveSchema}
                    disabled={schemaSaving}
                    className="w-full flex items-center justify-center gap-2 bg-[#EA6490] hover:bg-[#d84a7e] disabled:opacity-60 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 uppercase tracking-widest text-xs"
                  >
                    <FaSave /> {schemaSaving ? 'Saving...' : 'Save & Apply to All Pages'}
                  </button>
                </div>

                {/* ─── Desktop JSON Preview (sticky) ─── */}
                <div className="hidden lg:block sticky top-6 self-start">
                  <div className="bg-slate-900 rounded-[1.5rem] overflow-hidden shadow-2xl">
                    <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                      <FaCode className="text-[#4CA6AE]" />
                      <span className="text-white font-black text-sm">Live JSON-LD Preview</span>
                      <span className="ml-auto text-[9px] font-black text-white/30 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Auto-generated</span>
                    </div>
                    <div className="p-5">
                      <pre className="text-[11px] text-[#4CA6AE]/80 overflow-x-auto overflow-y-auto max-h-[65vh] leading-relaxed font-mono whitespace-pre-wrap break-words">
                        {jsonPreview}
                      </pre>
                    </div>
                    <div className="px-6 py-3 border-t border-white/5 flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-400 text-xs" />
                      <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">Injected in &lt;head&gt; on all pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 3 — GLOBAL TAGS & SCRIPTS                                 */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'scripts' && (
            <div className="space-y-6">
              {loadingScripts ? (
                <div className="bg-white rounded-[1.5rem] p-16 text-center text-slate-300 font-bold italic animate-pulse">Loading Scripts...</div>
              ) : (
                <form onSubmit={saveScripts} className="space-y-6">
                  {/* Google Integration */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-8 shadow-sm border border-slate-100">
                    <h2 className="text-base sm:text-lg font-bold mb-6 text-slate-800 flex items-center gap-3">
                      <span className="w-1.5 h-7 bg-[#4CA6AE] rounded-full flex-shrink-0"></span>
                      Google Tracking & Analytics
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Google Tag Manager ID" icon={<FaLink className="text-[#EA6490]" />}>
                        <input
                          value={scriptData.gtmId ?? ''}
                          onChange={e => setScriptData({ ...scriptData, gtmId: e.target.value })}
                          placeholder="e.g. GTM-XXXXXXX"
                          className={inputCls('pink')}
                        />
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Standard GTM container ID</p>
                      </Field>

                      <Field label="Google Analytics ID (GA4)" icon={<FaLink className="text-[#4CA6AE]" />}>
                        <input
                          value={scriptData.gaId ?? ''}
                          onChange={e => setScriptData({ ...scriptData, gaId: e.target.value })}
                          placeholder="e.g. G-XXXXXXXXXX"
                          className={inputCls('teal')}
                        />
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Your Measurement ID</p>
                      </Field>
                    </div>
                  </div>

                  {/* Custom Scripts */}
                  <div className="bg-white rounded-[1.5rem] p-5 sm:p-8 shadow-sm border border-slate-100">
                    <h2 className="text-base sm:text-lg font-bold mb-6 text-slate-800 flex items-center gap-3">
                      <span className="w-1.5 h-7 bg-[#EA6490] rounded-full flex-shrink-0"></span>
                      Custom Code Injection
                    </h2>

                    <div className="space-y-8">
                      <Field label="Header Scripts (Injects into <head>)" icon={<FaCode className="text-[#EA6490]" />}>
                        <textarea
                          rows={6}
                          value={scriptData.headScripts ?? ''}
                          onChange={e => setScriptData({ ...scriptData, headScripts: e.target.value })}
                          placeholder="Paste your <script> or <meta> tags here..."
                          className={`${inputCls('pink')} font-mono text-xs`}
                        />
                      </Field>

                      <Field label="Footer Scripts (Injects before </body>)" icon={<FaCode className="text-[#4CA6AE]" />}>
                        <textarea
                          rows={6}
                          value={scriptData.footerScripts ?? ''}
                          onChange={e => setScriptData({ ...scriptData, footerScripts: e.target.value })}
                          placeholder="Paste your custom JS or tracking pixels here..."
                          className={`${inputCls('teal')} font-mono text-xs`}
                        />
                      </Field>
                    </div>

                    <div className="flex justify-end mt-10 pt-6 border-t border-slate-50">
                      <button
                        type="submit"
                        disabled={savingScripts}
                        className="flex items-center gap-2 bg-[#EA6490] hover:bg-[#d84a7e] disabled:opacity-60 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 uppercase tracking-widest text-xs w-full sm:w-auto justify-center"
                      >
                        <FaSave /> {savingScripts ? 'Applying Globally...' : 'Save & Deploy Globally'}
                      </button>
                    </div>
                  </div>

                  {/* Warning Banner */}
                  <div className="bg-amber-50 rounded-[1.5rem] p-6 border border-amber-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                        <FaExclamationCircle size={18} />
                      </div>
                      <div>
                        <h3 className="font-black text-amber-900 mb-1 text-sm uppercase tracking-wider">Advanced Usage</h3>
                        <p className="text-xs text-amber-800/70 font-medium leading-relaxed">
                          Scripts added here will be executed on <strong>every single page</strong> of the website. 
                          Ensure your code is properly formatted and safe to avoid breaking site functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
    </div>
  );
}
