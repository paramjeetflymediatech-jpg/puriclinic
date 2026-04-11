'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaHome, FaCalendarAlt, FaBlog, FaStethoscope, FaEnvelope,FaQuoteLeft , FaSignOutAlt, FaTag, FaAward, FaUserMd } from 'react-icons/fa';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">{children}</div>;
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
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold font-serif tracking-wide">Puri Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${pathname === item.path ? 'bg-indigo-600' : 'hover:bg-slate-800'}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button onClick={handleLogout} className="flex items-center space-x-3 w-full p-3 text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
