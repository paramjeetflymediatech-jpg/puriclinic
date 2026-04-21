'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaAward, FaFilter, FaFilm, FaImage, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';
import Image from 'next/image';
import Swal from '@/lib/swal';

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
      console.log(res,'image upload')
      const result = await res.json();
      console.log(result,'image result')
      if (result.success) {
        setFormData({ 
          ...formData, 
          image_url: result.url,
          media_type: result.type // Auto-detect media type from upload
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: `${result.error}${result.details ? ' (' + result.details + ')' : ''}`
        });
      }
    } catch (err) {
      console.error('Upload Error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: 'Connection interrupted or file too large.'
      });
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
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Success story ${editingId ? 'updated' : 'published'} successfully!`,
          timer: 2000,
          showConfirmButton: false
        });
        resetForm();
        fetchStories();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while saving the story.'
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This transformation record will be removed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/success-stories?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The record has been deleted.',
            timer: 2000,
            showConfirmButton: false
          });
          fetchStories();
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete the record.'
        });
      }
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
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Success Stories</h1>
          <p className="text-slate-500 font-medium">Showcase transformative clinical results and patient journeys.</p>
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
          {editingId ? 'Refine Transformation' : 'Record New Transformation'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8 text-gray-800">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                   <FaProjectDiagram className="text-[#EA6490]" /> Case Title
                </label>
                <input 
                  placeholder="e.g. Laser Skin Resurfacing results" 
                  value={formData.title} 
                  onChange={e=>setFormData({...formData, title: e.target.value})} 
                  required 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaFilter className="text-[#4CA6AE]" /> Specialized Domain
                  </label>
                  <select 
                    value={formData.category} 
                    onChange={e=>setFormData({...formData, category: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all text-slate-700 font-bold"
                  >
                    <option value="skin">Skin Treatment</option>
                    <option value="hair">Hair Restoration</option>
                    <option value="laser">Laser Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Asset Composition</label>
                  <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100">
                     <button 
                        type="button"
                        onClick={() => setFormData({...formData, media_type: 'image'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${formData.media_type === 'image' ? 'bg-white text-[#EA6490] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        <FaImage /> PHOTO
                     </button>
                     <button 
                        type="button"
                        onClick={() => setFormData({...formData, media_type: 'video'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${formData.media_type === 'video' ? 'bg-white text-[#EA6490] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                     >
                        <FaFilm /> VIDEO
                     </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Upload Area */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Evidence Capture</label>
                <div className="relative group">
                  <div className={`w-full aspect-square rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-6 ${
                    formData.image_url ? 'border-amber-200 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full group">
                        {uploading && (
                           <div className="absolute inset-0 bg-white/80 z-30 flex flex-col items-center justify-center backdrop-blur-sm">
                              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                              <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Processing...</p>
                           </div>
                        )}
                        {formData.media_type === 'video' ? (
                          <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                            <video src={formData.image_url} className="w-full h-full object-contain" controls />
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image src={formData.image_url} alt="Preview" fill unoptimized sizes="(max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform group-hover:scale-105" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm shadow-inner z-10">
                           <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                              Replace
                              <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-[#EA6490] mb-4 border border-slate-100 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-6 h-6 border-3 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div> : (formData.media_type === 'video' ? <FaFilm size={20} /> : <FaUpload size={20} />)}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1 leading-none">{uploading ? 'Synching...' : 'Upload Media'}</p>
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2">Max 100MB Assets</p>
                        <label className="absolute inset-0 cursor-pointer">
                          <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} disabled={uploading} />
                        </label>
                      </>
                    )}
                  </div>
                  {formData.image_url && (
                    <button 
                      type="button" 
                      onClick={() => setFormData({...formData, image_url: ''})}
                      className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-rose-600 transition-all z-20 hover:rotate-90 active:scale-90"
                    >
                      <FaTimes size={14} />
                    </button>
                  )}
                </div>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d4547a] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Validate Update' : 'Publish result'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100 text-gray-800">
        <div className="p-8 border-b border-slate-50">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#4CA6AE] rounded-full"></span>
             Transformation Atlas
           </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Case Identity</th>
                <th className="p-8">Asset Type</th>
                <th className="p-8">Focus Area</th>
                <th className="p-8 text-right pr-12">Registry Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 italic font-bold tracking-widest animate-pulse">Accessing result Library...</td></tr>
              ) : stories.length === 0 ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 italic font-bold">No transformations recorded yet.</td></tr>
              ) : stories.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                        {s.image_url ? (
                          s.media_type === 'video' ? (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                               <FaFilm size={20} className="text-white/40" />
                            </div>
                          ) : (
                            <Image src={s.image_url} alt="" fill unoptimized sizes="80px" className="object-cover" />
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-200 font-bold uppercase text-[9px]">no media</div>
                        )}
                        {s.is_active && (
                           <div className="absolute top-1 right-1">
                              <FaCheckCircle className="text-emerald-500 bg-white rounded-full text-[10px] shadow-sm" />
                           </div>
                        )}
                      </div>
                      <div className="font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight uppercase tracking-tight text-base">{s.title}</div>
                    </div>
                  </td>
                  <td className="p-8 text-right pr-6 space-x-3">
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${
                      s.media_type === 'video' ? 'bg-[#4CA6AE]/10 text-[#4CA6AE] border-[#4CA6AE]/10' : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}>
                      {s.media_type === 'video' ? <FaFilm /> : <FaImage />} {s.media_type}
                    </span>
                  </td>
                  <td className="p-8">
                    <span className="bg-[#4CA6AE]/10 text-[#3d8c94] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#4CA6AE]/10 shadow-sm">
                       {s.category}
                    </span>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <button 
                      onClick={() => handleEdit(s)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Edit transformation"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(s.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Remove record"
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
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Puri Skin Clinic Transformation Catalog</p>
        </div>
      </div>
    </div>
  );
}
