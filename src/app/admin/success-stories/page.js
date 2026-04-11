'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaAward, FaFilter, FaFilm, FaImage } from 'react-icons/fa';
import Image from 'next/image';

export default function SuccessStoriesAdminPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'skin',
    media_type: 'image',
    image_url: '',
    is_active: true
  });

  const fetchStories = async () => {
    try {
      const res = await fetch('/api/admin/success-stories');
      const data = await res.json();
      setStories(data.successStories || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchStories(); }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: data
      });
      const result = await res.json();
      if (result.success) {
        setFormData({ 
          ...formData, 
          image_url: result.url,
          media_type: result.type // Auto-detect media type from upload
        });
      } else {
        alert(`Upload failed: ${result.error}${result.details ? ' (' + result.details + ')' : ''}`);
      }
    } catch (err) {
      console.error('Upload Error:', err);
      alert('Upload failed: Connection interrupted or file too large.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch('/api/admin/success-stories', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        resetForm();
        fetchStories();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this success story?')) return;
    try {
      const res = await fetch(`/api/admin/success-stories?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchStories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (story) => {
    setEditingId(story.id);
    setFormData({
      title: story.title,
      category: story.category,
      media_type: story.media_type,
      image_url: story.image_url,
      is_active: story.is_active
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: '', category: 'skin', media_type: 'image', image_url: '', is_active: true });
  };

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-200">
             <FaAward />
           </div>
           <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight text-gray-800">Success Stories</h1>
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
          {editingId ? 'Edit Clinical Result' : 'Add New Clinical Result'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-gray-800">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Treatment Title</label>
                <input 
                  placeholder="e.g. VITILIGO TREATMENT" 
                  value={formData.title} 
                  onChange={e=>setFormData({...formData, title: e.target.value})} 
                  required 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                  <select 
                    value={formData.category} 
                    onChange={e=>setFormData({...formData, category: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:bg-white outline-none transition-all text-slate-700 font-medium"
                  >
                    <option value="skin">Skin Treatment</option>
                    <option value="hair">Hair Restoration</option>
                    <option value="laser">Laser Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Media Type</label>
                  <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100">
                     <button 
                        type="button"
                        onClick={() => setFormData({...formData, media_type: 'image'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all ${formData.media_type === 'image' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        <FaImage /> PHOTO
                     </button>
                     <button 
                        type="button"
                        onClick={() => setFormData({...formData, media_type: 'video'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all ${formData.media_type === 'video' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        <FaFilm /> VIDEO
                     </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Upload Area */}
            <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Media Transformation</label>
                <div className="relative group">
                  <div className={`w-full aspect-square rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-4 ${
                    formData.image_url ? 'border-amber-200 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full group">
                        {uploading && (
                           <div className="absolute inset-0 bg-white/80 z-30 flex flex-col items-center justify-center backdrop-blur-sm">
                              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                              <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em]">Processing Media...</p>
                           </div>
                        )}
                        {formData.media_type === 'video' ? (
                          <div className="relative w-full h-full bg-black flex items-center justify-center">
                            <video src={formData.image_url} className="w-full h-full object-contain" controls />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                               <FaFilm className="text-amber-400 text-[10px]" />
                               <span className="text-[9px] font-black text-white tracking-widest">VIDEO ASSET</span>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                               <FaImage className="text-amber-400 text-[10px]" />
                               <span className="text-[9px] font-black text-white tracking-widest">PHOTO ASSET</span>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
                           <span className="bg-white text-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                              Change Media
                           </span>
                        </div>
                        <div className="absolute inset-0 opacity-0 cursor-pointer z-20">
                           <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept={formData.media_type === 'video' ? "video/mp4,video/webm,video/quicktime" : "image/*"} onChange={handleFileUpload} disabled={uploading} />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-6 h-6 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div> : (formData.media_type === 'video' ? <FaFilm size={24} /> : <FaUpload size={20} />)}
                        </div>
                        <p className="text-base font-bold text-slate-800 mb-1 leading-tight text-center">{uploading ? 'Processing 0%' : `Add ${formData.media_type === 'video' ? 'Video Result' : 'Visual result'}`}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{formData.media_type === 'video' ? 'MP4, MOV, WEBM (UP TO 100MB)' : 'SVG, PNG, JPG (RECC. 1:1)'}</p>
                        <label className="absolute inset-0 cursor-pointer">
                          <input type="file" className="hidden" accept={formData.media_type === 'video' ? "video/mp4,video/webm,video/quicktime" : "image/*"} onChange={handleFileUpload} disabled={uploading} />
                        </label>
                      </>
                    )}
                  </div>
                  {formData.image_url && (
                    <button 
                      type="button" 
                      onClick={() => setFormData({...formData, image_url: ''})}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-600 transition-colors z-20"
                    >
                      <FaTimes size={12} />
                    </button>
                  )}
                </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-black px-12 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(245,158,11,0.3)] active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Update Result' : 'Publish Transformation'}
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
                <th className="p-6">Patient Transformation</th>
                <th className="p-6">Type</th>
                <th className="p-6">Specialty</th>
                <th className="p-6 text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium tracking-widest uppercase text-xs">Synchronizing clinical results...</td></tr>
              ) : stories.length === 0 ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium uppercase tracking-widest text-xs">No transformations added yet.</td></tr>
              ) : stories.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-[1.5rem] bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        {s.image_url ? (
                          s.media_type === 'video' ? (
                            <video src={s.image_url} className="w-full h-full object-cover" muted onMouseEnter={e => e.target.play()} onMouseLeave={e => {e.target.pause(); e.target.currentTime = 0;}} />
                          ) : (
                            <Image src={s.image_url} alt="" fill className="object-cover" />
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <FaAward size={24} />
                          </div>
                        )}
                        {s.media_type === 'video' && (
                           <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white pointer-events-none">
                              <FaFilm size={12} className="drop-shadow-lg" />
                           </div>
                        )}
                      </div>
                      <div className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors uppercase tracking-tight leading-tight max-w-md">{s.title}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${
                      s.media_type === 'video' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-slate-50 text-slate-600 border-slate-100'
                    }`}>
                      {s.media_type === 'video' ? <FaFilm className="text-[8px]" /> : <FaImage className="text-[8px]" />}
                      {s.media_type}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-100 flex items-center gap-2 w-fit">
                      <FaFilter className="text-[8px]" /> {s.category}
                    </span>
                  </td>
                  <td className="p-6 text-right pr-10 space-x-3">
                    <button 
                      onClick={() => handleEdit(s)}
                      className="p-3 text-slate-300 hover:text-amber-600 hover:bg-amber-50 rounded-2xl transition-all inline-flex shadow-sm"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(s.id)}
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
