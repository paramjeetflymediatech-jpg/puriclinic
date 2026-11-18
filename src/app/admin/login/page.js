'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaShieldAlt,
  FaEnvelope,
  FaRedo,
  FaCheckCircle
} from 'react-icons/fa';

export default function LoginPage() {
  // Step: 'credentials' | 'otp'
  const [step, setStep] = useState('credentials');

  // Credentials state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 2FA state
  const [tempToken, setTempToken] = useState('');
  const [maskedEmail, setMaskedEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 minutes
  const [resendCooldown, setResendCooldown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [resending, setResending] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');

  // General state
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Refs for 6 OTP input boxes
  const otpInputRefs = useRef([]);

  // Timer for OTP expiration (10 minutes)
  useEffect(() => {
    let interval = null;
    if (step === 'otp' && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setError('Verification code expired. Please request a new code.');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timerSeconds]);

  // Timer for Resend OTP button cooldown (30s)
  useEffect(() => {
    let interval = null;
    if (step === 'otp' && resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendCooldown]);

  // Focus first OTP input when switching to OTP step
  useEffect(() => {
    if (step === 'otp') {
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 150);
    }
  }, [step]);

  // Format seconds to mm:ss
  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // ─── STEP 1: SUBMIT CREDENTIALS ─────────────────────────────────────
  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setInfoMessage('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        if (data.requires2FA) {
          // 2FA triggered: switch to OTP screen
          setTempToken(data.tempToken);
          setMaskedEmail(data.emailMasked);
          setStep('otp');
          setTimerSeconds(600);
          setResendCooldown(30);
          setCanResend(false);
          setOtp(['', '', '', '', '', '']);
          setInfoMessage(data.message || `Verification code sent to ${data.emailMasked}`);
        } else {
          // Direct login (if 2FA disabled)
          router.push('/admin/');
          router.refresh();
        }
      } else {
        setError(data.error || 'Invalid username or password');
      }
    } catch (err) {
      setError('Connection interrupted. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ─── STEP 2: VERIFY OTP ─────────────────────────────────────────────
  const handleVerifyOtp = async (submittedOtp = null) => {
    const fullOtp = submittedOtp || otp.join('');
    if (fullOtp.length !== 6) {
      setError('Please enter all 6 digits of the verification code.');
      return;
    }

    setLoading(true);
    setError('');
    setInfoMessage('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tempToken,
          otp: fullOtp
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/');
        router.refresh();
      } else {
        setError(data.error || 'Invalid or expired code. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      setError('Connection interrupted. Please try again.');
      setLoading(false);
    }
  };

  // ─── RESEND OTP ─────────────────────────────────────────────────────
  const handleResendOtp = async () => {
    if (!canResend || resending) return;

    setResending(true);
    setError('');
    setInfoMessage('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tempToken,
          resend: true
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setTempToken(data.tempToken);
        setTimerSeconds(600);
        setResendCooldown(30);
        setCanResend(false);
        setOtp(['', '', '', '', '', '']);
        setInfoMessage(data.message || 'A new verification code has been sent.');
        otpInputRefs.current[0]?.focus();
      } else {
        setError(data.error || 'Failed to resend code. Please try again.');
      }
    } catch (err) {
      setError('Network error. Could not resend code.');
    } finally {
      setResending(false);
    }
  };

  // ─── OTP INPUT HANDLERS ─────────────────────────────────────────────
  const handleOtpChange = (index, value) => {
    // Only accept numeric digit
    const cleaned = value.replace(/\D/g, '');
    const newOtp = [...otp];

    if (cleaned.length > 1) {
      // Handle fast paste or auto-fill
      const digits = cleaned.slice(0, 6).split('');
      digits.forEach((d, i) => {
        newOtp[i] = d;
      });
      setOtp(newOtp);
      const nextIdx = Math.min(digits.length, 5);
      otpInputRefs.current[nextIdx]?.focus();

      if (digits.length === 6) {
        handleVerifyOtp(digits.join(''));
      }
      return;
    }

    newOtp[index] = cleaned;
    setOtp(newOtp);

    // Auto-advance to next input
    if (cleaned && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if last digit filled
    if (cleaned && index === 5) {
      const full = [...newOtp.slice(0, 5), cleaned].join('');
      if (full.length === 6) {
        handleVerifyOtp(full);
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim().replace(/\D/g, '').slice(0, 6);
    if (!pasteData) return;

    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pasteData[i] || '';
    }
    setOtp(newOtp);

    const focusIdx = Math.min(pasteData.length, 5);
    otpInputRefs.current[focusIdx]?.focus();

    if (pasteData.length === 6) {
      handleVerifyOtp(pasteData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-10 relative overflow-hidden bg-slate-50/50">
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
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo.png"
                alt="Puri Skin Clinic Logo"
                width={180}
                height={80}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>

            {step === 'credentials' ? (
              <>
                <h1
                  className="text-3xl font-black text-gray-900 mb-2 tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Admin Portal
                </h1>
                <p className="text-gray-500 font-medium text-sm">Authorized Access Only</p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 mx-auto mb-4 bg-pink-50 rounded-2xl flex items-center justify-center text-[#EA6490] shadow-inner shadow-pink-100">
                  <FaShieldAlt size={26} />
                </div>
                <h1
                  className="text-2xl font-black text-gray-900 mb-2 tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Two-Factor Authentication
                </h1>
                <p className="text-gray-500 text-xs font-semibold">
                  A verification code has been dispatched to:
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-slate-100 rounded-full text-slate-800 text-xs font-bold border border-slate-200">
                  <FaEnvelope size={11} className="text-[#EA6490]" />
                  <span>{maskedEmail}</span>
                </div>
              </>
            )}
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl text-xs font-bold flex items-center animate-shake">
              {error}
            </div>
          )}

          {/* Info / Success Banner */}
          {infoMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500 flex-shrink-0" size={14} />
              <span>{infoMessage}</span>
            </div>
          )}

          {/* ─── STEP 1: CREDENTIALS FORM ───────────────────────────────── */}
          {step === 'credentials' ? (
            <form onSubmit={handleCredentialsSubmit} className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-gray-300 group-focus-within:text-[#EA6490] transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#EA6490]/20 focus:border-[#EA6490] focus:bg-white outline-none transition-all font-semibold text-slate-800"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div className="w-5 h-5 relative grayscale group-focus-within:grayscale-0 transition-all opacity-40 group-focus-within:opacity-100">
                      <Image src="/logo.png" alt="Icon" fill sizes="120px" className="object-contain" />
                    </div>
                  </div>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-14 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#EA6490]/20 focus:border-[#EA6490] focus:bg-white outline-none transition-all font-semibold text-slate-800"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-[#EA6490] transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
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
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying Credentials...
                  </span>
                ) : (
                  'Sign In To Dashboard'
                )}
              </button>
            </form>
          ) : (
            /* ─── STEP 2: 2FA OTP VERIFICATION ─────────────────────────── */
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block text-center text-xs font-black uppercase tracking-widest text-slate-400">
                  Enter 6-Digit OTP
                </label>

                {/* 6 OTP Input Boxes */}
                <div className="flex justify-between gap-2 sm:gap-3" onPaste={handleOtpPaste}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpInputRefs.current[idx] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-black rounded-2xl bg-slate-50 border-2 border-slate-200 text-slate-900 focus:border-[#EA6490] focus:ring-4 focus:ring-[#EA6490]/15 focus:bg-white outline-none transition-all font-mono"
                    />
                  ))}
                </div>

                {/* Expiration Timer */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1 pt-1">
                  <span>Code expires in:</span>
                  <span
                    className={`font-mono ${
                      timerSeconds < 60 ? 'text-rose-500 font-extrabold' : 'text-slate-600'
                    }`}
                  >
                    ⏱️ {formatTimer(timerSeconds)}
                  </span>
                </div>
              </div>

              {/* Verify Button */}
              <button
                type="button"
                onClick={() => handleVerifyOtp()}
                disabled={loading || otp.join('').length !== 6 || timerSeconds === 0}
                className="w-full bg-[#EA6490] hover:bg-[#d4547a] text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying Code...
                  </span>
                ) : (
                  'Confirm & Log In'
                )}
              </button>

              {/* Resend and Switch Accounts */}
              <div className="pt-2 flex flex-col items-center gap-3 text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={!canResend || resending}
                  className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                    canResend
                      ? 'text-[#EA6490] hover:text-[#d4547a] cursor-pointer'
                      : 'text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <FaRedo size={10} className={resending ? 'animate-spin' : ''} />
                  {resending
                    ? 'Resending code...'
                    : canResend
                    ? 'Resend Verification Code'
                    : `Resend code in ${resendCooldown}s`}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep('credentials');
                    setError('');
                    setInfoMessage('');
                    setOtp(['', '', '', '', '', '']);
                  }}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  ← Use a different login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
