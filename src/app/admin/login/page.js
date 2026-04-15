'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        // hard refresh to clear any cached states
        window.location.href = "/admin";
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid username or password');
        setLoading(false);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-10 relative overflow-hidden">
      {/* Background Decor */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#EA6490] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#4CA6AE] rounded-full blur-[120px]"></div>
      </div> */}

      <div className="w-full max-w-[480px] z-10">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#EA6490] mb-8 transition-colors text-sm font-semibold group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Website
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 p-8 sm:p-12 border border-gray-100 relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="Puri Skin Clinic Logo"
                width={180}
                height={80}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>Admin Portal</h1>
            <p className="text-gray-500 font-medium italic">Authorized Access Only</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg text-sm font-bold flex items-center animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-300 group-focus-within:text-[#EA6490] transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#EA6490]/20 focus:border-[#EA6490] focus:bg-white outline-none transition-all font-semibold"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <div className="relative group">
                {/* Branded Prefix Icon (requested: logo in field) */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <div className="w-5 h-5 relative grayscale group-focus-within:grayscale-0 transition-all opacity-40 group-focus-within:opacity-100">
                      <Image src="/logo.png" alt="Icon" fill sizes="120px" className="object-contain" />
                   </div>
                </div>
                
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-14 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#EA6490]/20 focus:border-[#EA6490] focus:bg-white outline-none transition-all font-semibold"
                  required
                />
                
                {/* Show/Hide Toggle (requested) */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-[#EA6490] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#EA6490] hover:bg-[#d4547a] text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : 'Sign In To Dashboard'}
            </button>
          </form>

          {/* <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-400 font-medium">
              &copy; {new Date().getFullYear()} Puri Skin Clinic. System Reserved.
            </p>
          </div> */}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
