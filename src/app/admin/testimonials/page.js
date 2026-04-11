'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaStar, FaGoogle, FaAward, FaQuoteRight } from 'react-icons/fa';

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
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-200">
             <FaQuoteRight />
           </div>
           <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight text-gray-800 uppercase">Patient Reviews</h1>
        </div>
        {editingId && (
          <button 
            onClick={resetForm}
            className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2.5 rounded-xl transition-all font-bold text-sm"
          >
            <FaTimes /> Cancel Editing
          </button>
        )}
      </div>
      
      {/* Form Section */}
      <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 mb-12 transition-all">
        <h2 className="text-xl font-bold mb-8 text-slate-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
          {editingId ? 'Edit Review' : 'Add New Patient Review'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Patient Name</label>
                <input 
                  placeholder="e.g. Rahul Sharma" 
                  value={formData.author} 
                  onChange={e=>setFormData({...formData, author: e.target.value})} 
                  required 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Rating</label>
                  <select 
                    value={formData.rating} 
                    onChange={e=>setFormData({...formData, rating: Number(e.target.value)})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all text-slate-700 font-medium"
                  >
                    {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} Stars</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Source</label>
                  <input 
                    placeholder="e.g. Google" 
                    value={formData.source} 
                    onChange={e=>setFormData({...formData, source: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all font-medium" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Patient Review</label>
              <textarea 
                rows="5"
                placeholder="Paste the full patient review here..." 
                value={formData.review} 
                onChange={e=>setFormData({...formData, review: e.target.value})} 
                required 
                className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium resize-none" 
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-black px-12 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Update Review' : 'Publish Review'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden mb-20 text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-500 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-6">Patient</th>
                <th className="p-6 w-1/3">The Review</th>
                <th className="p-6">Rating</th>
                <th className="p-6">Source</th>
                <th className="p-6 text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="5" className="p-16 text-center text-slate-400 italic font-medium tracking-widest uppercase text-xs">Synchronizing patient feedback...</td></tr>
              ) : testimonials.length === 0 ? (
                <tr><td colSpan="5" className="p-16 text-center text-slate-400 italic font-medium uppercase tracking-widest text-xs">No reviews added yet.</td></tr>
              ) : testimonials.map(t => (
                <tr key={t.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-6">
                    <div className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{t.author}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{new Date(t.createdAt).toLocaleDateString()}</div>
                  </td>
                  <td className="p-6">
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{t.review}</p>
                  </td>
                  <td className="p-6">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={10} />)}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="bg-slate-50 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100 flex items-center gap-2 w-fit">
                      <FaGoogle className="text-[9px]" /> {t.source}
                    </span>
                  </td>
                  <td className="p-6 text-right pr-10 space-x-3">
                    <button 
                      onClick={() => handleEdit(t)}
                      className="p-3 text-slate-300 hover:text-amber-600 hover:bg-amber-50 rounded-2xl transition-all inline-flex shadow-sm"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(t.id)}
                      className="p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all inline-flex shadow-sm"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
