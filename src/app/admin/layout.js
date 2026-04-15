'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaCalendarAlt, 
  FaBlog, 
  FaStethoscope, 
  FaEnvelope, 
  FaQuoteLeft, 
  FaSignOutAlt, 
  FaTag, 
  FaAward, 
  FaUserMd, 
  FaBars, 
  FaTimes,
  FaSearch,
  FaGoogle
} from 'react-icons/fa';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on route change (for mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-white flex items-center justify-center font-primary">{children}</div>;
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaHome /> },
    { name: 'Appointments', path: '/admin/appointments', icon: <FaCalendarAlt /> },
    { name: 'Blogs', path: '/admin/blogs', icon: <FaBlog /> },
    { name: 'Services', path: '/admin/services', icon: <FaStethoscope /> },
    { name: 'Categories', path: '/admin/categories', icon: <FaTag /> },
    { name: 'Doctors', path: '/admin/doctors', icon: <FaUserMd /> },
    { name: 'Success Stories', path: '/admin/success-stories', icon: <FaAward /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <FaQuoteLeft /> },
    { name: 'Contacts', path: '/admin/contacts', icon: <FaEnvelope /> },
    { name: 'SEO Settings', path: '/admin/seo', icon: <FaSearch /> },
    { name: 'Google Reviews', path: '/admin/google-reviews', icon: <FaGoogle /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#f8fafc] font-primary relative overflow-hidden">
      
      {/* ─── MOBILE HEADER ─── */}
      <header className="lg:hidden bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EA6490] flex items-center justify-center text-white font-bold">P</div>
          <span className="font-heading font-black text-slate-900 tracking-tight">Puri Admin</span>
        </div>
        <button 
          onClick={toggleSidebar}
          className="p-2 text-slate-600 hover:text-[#EA6490] transition-colors"
          aria-label="Toggle Navigation"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* ─── SIDEBAR OVERLAY ─── */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* ─── SIDEBAR ─── */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-slate-900 text-white flex flex-col z-[70] transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-4 mb-2">
             <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/5 overflow-hidden p-1.5">
                <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ width: 'auto', height: '100%' }} className="object-contain" />
             </div>
             <div>
               <h2 className="text-lg font-heading font-black tracking-tight leading-none text-white">Puri Skin</h2>
               <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Management</span>
             </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            const iconColor = index % 2 === 0 ? 'text-[#4CA6AE]' : 'text-[#EA6490]';
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`
                  flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm tracking-wide group
                  ${isActive ? 'bg-[#EA6490] text-white shadow-lg shadow-[#EA6490]/20' : 'text-white/60 hover:text-white hover:bg-white/5'}
                `}
              >
                <span className={`text-base transition-transform group-hover:scale-110 ${isActive ? 'text-white' : iconColor}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="bg-white/5 rounded-[1.5rem] p-4 flex flex-col gap-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EA6490] to-pink-400 border-2 border-white/10 flex items-center justify-center text-xs font-black">AD</div>
                <div>
                   <div className="text-xs font-bold text-white">Administrator</div>
                   <div className="text-[10px] text-white/40 font-medium">Session Active</div>
                </div>
             </div>
             <button 
               onClick={handleLogout} 
               className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-rose-500/20 hover:text-rose-400 text-white/70 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest border border-white/5"
             >
               <FaSignOutAlt />
               Logout Securely
             </button>
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 overflow-y-auto w-full relative">
        <div className="min-h-full">
          {children}
        </div>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
