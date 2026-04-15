'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  FaGoogle, FaStar, FaSync, FaTrash,
  FaToggleOn, FaToggleOff, FaCheckCircle,
  FaExclamationTriangle, FaClock, FaInfoCircle,
} from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import Swal from '@/lib/swal';

function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <FaStar key={i} size={11} className={i <= rating ? 'text-[#EA6490]' : 'text-slate-200'} />
      ))}
    </div>
  );
}

function getNextMidnight() {
  const now = new Date();
  const mid = new Date(now);
  mid.setHours(24, 0, 0, 0);
  const diff = mid - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}h ${m}m`;
}

export default function GoogleReviewsAdminPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(null);
  const [syncResult, setSyncResult] = useState(null);
  const [nextMidnight, setNextMidnight] = useState('');

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/google-reviews');
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  useEffect(() => {
    setNextMidnight(getNextMidnight());
    const t = setInterval(() => setNextMidnight(getNextMidnight()), 60000);
    return () => clearInterval(t);
  }, []);

  const handleSync = async () => {
    setSyncing(true);
    setSyncResult(null);
    try {
      const res = await fetch('/api/cron/sync-reviews', { headers: { 'x-admin-sync': '1' } });
      const data = await res.json();
      setSyncResult(data);
      setLastSync(new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }));
      if (data.success) {
        fetchReviews();
        Swal.fire({
          icon: 'success',
          title: 'Sync Complete!',
          html: `
            <div style="text-align:left;font-size:14px;line-height:2.2">
              ✅ <b>New reviews synced:</b> ${data.synced}<br/>
              ⏭️ <b>Already existed (skipped):</b> ${data.skipped}<br/>
              📊 <b>Total from Google:</b> ${data.total}
              ${data.isDemo ? '<br/><br/>⚠️ <span style="color:#EA6490;font-size:12px"><i>Demo mode — add GOOGLE_PLACES_API_KEY for real reviews.</i></span>' : ''}
            </div>
          `,
          confirmButtonColor: '#EA6490',
        });
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Sync Failed', text: err.message });
    }
    setSyncing(false);
  };

  const toggleActive = async (id, cur) => {
    try {
      const res = await fetch('/api/admin/google-reviews', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_active: !cur }),
      });
      if (res.ok) fetchReviews();
    } catch {}
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete this review?',
      text: 'It may be re-synced from Google next time.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Keep',
      confirmButtonColor: '#ef4444',
    });
    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/google-reviews?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchReviews();
          Swal.fire({ icon: 'success', title: 'Deleted', timer: 1500, showConfirmButton: false });
        }
      } catch {}
    }
  };

  const googleCount = reviews.length;
  const activeCount = reviews.filter(r => r.is_active).length;
  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : '—';

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* ─── Header ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-1 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Google Reviews
          </h1>
          <p className="text-slate-500 text-sm font-medium">Auto-sync from Google Places · Manage &amp; display on homepage.</p>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center justify-center gap-2 bg-[#EA6490] hover:bg-[#d84a7e] disabled:opacity-60 text-white font-black px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 uppercase tracking-widest text-xs w-full sm:w-auto"
        >
          <FaSync className={syncing ? 'animate-spin' : ''} />
          {syncing ? 'Syncing...' : 'Sync Now'}
        </button>
      </div>

      {/* ─── Stats ─── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {[
          { label: 'Total Reviews', value: googleCount, color: 'text-[#EA6490]', bg: 'bg-[#EA6490]/10', icon: <FaGoogle size={14} /> },
          { label: 'Active / Shown', value: activeCount, color: 'text-[#4CA6AE]', bg: 'bg-[#4CA6AE]/10', icon: <FaToggleOn size={14} /> },
          { label: 'Avg Rating', value: avgRating, color: 'text-amber-500', bg: 'bg-amber-50', icon: <FaStar size={14} /> },
          { label: 'Next Sync', value: nextMidnight, color: 'text-slate-500', bg: 'bg-slate-50', icon: <MdSchedule size={14} /> },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0`}>
              {s.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 truncate">{s.label}</p>
              <p className={`text-lg sm:text-2xl font-black ${s.color} leading-tight`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Cron Banner ─── */}
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <FaClock className="text-emerald-400" size={14} />
        </div>
        <div className="flex-1">
          <p className="text-white font-black text-sm">Midnight Auto-Sync Active</p>
          <p className="text-white/40 text-xs font-medium mt-0.5">
            Reviews sync automatically every night at <strong className="text-white/60">12:00 AM</strong>. New reviews are added; duplicates are skipped.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Running</span>
        </div>
      </div>

      {/* ─── Sync Result ─── */}
      {syncResult && (
        <div className={`rounded-2xl p-4 mb-5 flex items-start gap-3 border ${syncResult.isDemo ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'}`}>
          {syncResult.isDemo
            ? <FaExclamationTriangle className="text-amber-500 text-base mt-0.5 flex-shrink-0" />
            : <FaCheckCircle className="text-emerald-500 text-base mt-0.5 flex-shrink-0" />}
          <div>
            <p className="font-black text-sm text-slate-800">
              {lastSync} — {syncResult.synced} new, {syncResult.skipped} skipped
            </p>
            {syncResult.isDemo && (
              <p className="text-xs text-amber-600 font-medium mt-1 flex items-center gap-1 flex-wrap">
                <FaInfoCircle className="flex-shrink-0" />
                Demo mode — add <code className="bg-amber-100 px-1 rounded">GOOGLE_PLACES_API_KEY</code> &amp; <code className="bg-amber-100 px-1 rounded">GOOGLE_PLACE_ID</code> in <code className="bg-amber-100 px-1 rounded">.env</code>
              </p>
            )}
          </div>
        </div>
      )}

      {/* ─── Reviews — Desktop Table / Mobile Cards ─── */}
      <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-50 flex items-center gap-3">
          <FaGoogle className="text-[#4285F4]" />
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Google Reviews</h2>
          <span className="ml-auto text-[10px] font-black text-slate-300 uppercase tracking-widest">{googleCount} total</span>
        </div>

        {loading ? (
          <div className="p-16 text-center text-slate-300 font-bold italic animate-pulse">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="p-12 text-center">
            <FaGoogle className="text-4xl text-slate-200 mx-auto mb-3" />
            <p className="text-slate-400 font-bold">No Google reviews yet.</p>
            <p className="text-slate-300 text-sm font-medium mt-1">Click <strong>Sync Now</strong> to fetch reviews from Google.</p>
          </div>
        ) : (
          <>
            {/* ─── Desktop Table (md+) ─── */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[9px] font-black tracking-[0.15em]">
                    <th className="p-5 text-left">Reviewer</th>
                    <th className="p-5 text-left w-2/5">Review</th>
                    <th className="p-5 text-left">Rating</th>
                    <th className="p-5 text-left">Date</th>
                    <th className="p-5 text-left">Status</th>
                    <th className="p-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {reviews.map(r => (
                    <tr key={r.id} className="hover:bg-slate-50/30 transition-colors group">
                      <td className="p-5">
                        <div className="flex items-center gap-3">
                          {r.avatar_url ? (
                            <img src={r.avatar_url} alt={r.author} className="w-8 h-8 rounded-full object-cover border-2 border-slate-100 flex-shrink-0" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EA6490] to-pink-300 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                              {r.author?.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="font-extrabold text-slate-900 text-sm group-hover:text-[#EA6490] transition-colors">{r.author}</p>
                            <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                              <FaGoogle size={8} className="text-[#4285F4]" /> Google
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5">
                        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed italic font-medium">&ldquo;{r.review}&rdquo;</p>
                      </td>
                      <td className="p-5"><StarRow rating={r.rating} /></td>
                      <td className="p-5">
                        <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">
                          {new Date(r.createdAt).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                        </span>
                      </td>
                      <td className="p-5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider border whitespace-nowrap ${
                          r.is_active ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${r.is_active ? 'bg-emerald-400' : 'bg-slate-300'}`}></span>
                          {r.is_active ? 'Visible' : 'Hidden'}
                        </span>
                      </td>
                      <td className="p-5 text-right space-x-1">
                        <button
                          onClick={() => toggleActive(r.id, r.is_active)}
                          className={`p-2.5 rounded-xl transition-all inline-flex text-lg ${r.is_active ? 'text-emerald-500 hover:bg-emerald-50' : 'text-slate-300 hover:bg-slate-50'}`}
                          title={r.is_active ? 'Hide' : 'Show'}
                        >
                          {r.is_active ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="p-2.5 text-slate-300 hover:text-white hover:bg-rose-500 rounded-xl transition-all inline-flex"
                          title="Delete"
                        >
                          <FaTrash size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ─── Mobile Cards (< md) ─── */}
            <div className="md:hidden divide-y divide-slate-50">
              {reviews.map(r => (
                <div key={r.id} className="p-4 space-y-3">
                  {/* Top row: avatar + name + actions */}
                  <div className="flex items-center gap-3">
                    {r.avatar_url ? (
                      <img src={r.avatar_url} alt={r.author} className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 flex-shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EA6490] to-pink-300 flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                        {r.author?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-slate-900 text-sm truncate">{r.author}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <StarRow rating={r.rating} />
                        <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                          <FaGoogle size={8} className="text-[#4285F4]" /> Google
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={() => toggleActive(r.id, r.is_active)}
                        className={`p-2 rounded-xl transition-all text-xl ${r.is_active ? 'text-emerald-500' : 'text-slate-300'}`}
                      >
                        {r.is_active ? <FaToggleOn /> : <FaToggleOff />}
                      </button>
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="p-2 text-slate-300 hover:text-rose-500 rounded-xl transition-all"
                      >
                        <FaTrash size={13} />
                      </button>
                    </div>
                  </div>
                  {/* Review text */}
                  <p className="text-sm text-slate-600 leading-relaxed italic font-medium bg-slate-50 rounded-xl px-3 py-2.5">
                    &ldquo;{r.review}&rdquo;
                  </p>
                  {/* Footer row */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
                      r.is_active ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${r.is_active ? 'bg-emerald-400' : 'bg-slate-300'}`}></span>
                      {r.is_active ? 'Visible' : 'Hidden'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                      {new Date(r.createdAt).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
