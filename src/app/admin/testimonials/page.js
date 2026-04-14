'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaStar, FaGoogle, FaAward, FaQuoteRight, FaUserCheck, FaMapMarkerAlt } from 'react-icons/fa';

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    review: '',
    source: 'Google',
    is_active: true
  });

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/admin/testimonials');
      const data = await res.json();
      setTestimonials(data.testimonials || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch('/api/admin/testimonials', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        resetForm();
        fetchTestimonials();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchTestimonials();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (test) => {
    setEditingId(test.id);
    setFormData({
      author: test.author,
      rating: test.rating,
      review: test.review,
      source: test.source,
      is_active: test.is_active
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ author: '', rating: 5, review: '', source: 'Google', is_active: true });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Testimonials</h1>
          <p className="text-slate-500 font-medium">Curate and manage authentic patient feedback and clinical reviews.</p>
        </div>
        {editingId && (
          <button 
            onClick={resetForm}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest border border-slate-900 shadow-lg shadow-slate-900/10"
          >
            <FaTimes /> Cancel Editing
          </button>
        )}
      </div>
      
      {/* Form Section */}
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 mb-12 transition-all hover:shadow-xl hover:shadow-slate-100">
        <h2 className="text-xl font-bold mb-10 text-slate-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-[#EA6490] rounded-full"></span>
          {editingId ? 'Refine Feedback' : 'Onboard New Review'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800">
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                   <FaUserCheck className="text-[#EA6490]" /> Author Name
                </label>
                <input 
                  placeholder="e.g. Jane Smith" 
                  value={formData.author} 
                  onChange={e=>setFormData({...formData, author: e.target.value})} 
                  required 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaStar className="text-[#EA6490]" /> Satisfaction
                  </label>
                  <select 
                    value={formData.rating} 
                    onChange={e=>setFormData({...formData, rating: Number(e.target.value)})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all text-slate-700 font-bold"
                  >
                    {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} / 5 Stars</option>)}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                     <FaMapMarkerAlt className="text-[#4CA6AE]" /> Provenance (Source)
                  </label>
                  <input 
                    placeholder="e.g. Google Maps" 
                    value={formData.source} 
                    onChange={e=>setFormData({...formData, source: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all font-bold text-slate-700" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                <FaQuoteRight className="text-slate-300" /> Verbatim Review
              </label>
              <textarea 
                rows="6"
                placeholder="Transcribe the full patient feedback here..." 
                value={formData.review} 
                onChange={e=>setFormData({...formData, review: e.target.value})} 
                required 
                className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-[2rem] focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium text-slate-600 resize-none leading-relaxed" 
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d84a7e] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#4CA6AE]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Validate Review' : 'Register Feedback'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100 text-gray-800">
        <div className="p-8 border-b border-slate-50">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#EA6490] rounded-full"></span>
             Feedback Anthology
           </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Respondent</th>
                <th className="p-8 w-1/3">The Testimony</th>
                <th className="p-8">Score</th>
                <th className="p-8">Provenance</th>
                <th className="p-8 text-right pr-12">Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="5" className="p-20 text-center text-slate-300 font-bold italic tracking-widest animate-pulse">Synchronizing Feedback Archives...</td></tr>
              ) : testimonials.length === 0 ? (
                <tr><td colSpan="5" className="p-20 text-center text-slate-300 font-bold italic">No patient feedback found in the registry.</td></tr>
              ) : testimonials.map(t => (
                <tr key={t.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8 text-gray-800 uppercase tracking-tight">
                    <div className="font-extrabold text-slate-900 group-hover:text-[#EA6490] transition-colors text-base mb-1">{t.author}</div>
                    <div className="text-[10px] text-slate-400 font-black tracking-widest uppercase">{new Date(t.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}</div>
                  </td>
                  <td className="p-8">
                    <div className="relative">
                       <FaQuoteRight className="absolute -left-6 -top-2 text-slate-50 text-2xl group-hover:text-[#4CA6AE]/5 transition-colors" />
                       <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed italic relative z-10 font-medium">{t.review}</p>
                    </div>
                  </td>
                  <td className="p-8">
                    <div className="flex text-[#EA6490] gap-1 bg-[#EA6490]/5 px-3 py-1.5 rounded-xl border border-[#EA6490]/10 w-fit">
                      {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={10} />)}
                    </div>
                  </td>
                  <td className="p-8 text-gray-800">
                    <span className="bg-white text-slate-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 flex items-center gap-2 w-fit shadow-sm">
                      <FaGoogle className="text-[9px] text-[#4285F4]" /> {t.source}
                    </span>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <button 
                      onClick={() => handleEdit(t)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Refine Testimony"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(t.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Revoke Testimony"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/50 border-t border-slate-100 text-center">
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Puri Skin Clinic Testimony Anthology</p>
        </div>
      </div>
    </div>
  );
}
