'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaStethoscope, FaTags, FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function ServicesAdminPage() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: 'skin',
    image_url: ''
  });

  const fetchData = async () => {
    try {
      const [srvRes, catRes] = await Promise.all([
        fetch('/api/admin/services'),
        fetch('/api/admin/categories')
      ]);
      const srvData = await srvRes.json();
      const catData = await catRes.json();
      setServices(srvData.services || []);
      setCategories(catData.categories || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

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
        setFormData({ ...formData, image_url: result.url });
      } else {
        alert('Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch('/api/admin/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        resetForm();
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      const res = await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({
      name: service.name,
      slug: service.slug,
      description: service.description,
      category: service.category,
      image_url: service.image_url || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: '', slug: '', description: '', category: 'skin', image_url: '' });
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    setFormData({ ...formData, name, slug });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Clinic Services</h1>
          <p className="text-slate-500 font-medium">Manage treatment offerings and specialized care paths.</p>
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
          {editingId ? 'Refine Service' : 'Onboard New Service'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaStethoscope className="text-[#EA6490]" /> Service Name
                  </label>
                  <input 
                    placeholder="e.g. Laser Therapy" 
                    value={formData.name} 
                    onChange={handleNameChange} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">URL Extension (Slug)</label>
                  <input 
                    placeholder="e.g. laser-therapy" 
                    value={formData.slug} 
                    onChange={e=>setFormData({...formData, slug: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 font-mono text-sm" 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                  <FaTags className="text-[#4CA6AE]" /> Classification Category
                </label>
                <select 
                  value={formData.category} 
                  onChange={e=>setFormData({...formData, category: e.target.value})} 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all text-slate-700 font-bold"
                >
                  <option value="skin">Skin Care</option>
                  <option value="hair">Hair Restoration</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service Icon</label>
                <div className="relative group">
                  <div className={`w-full aspect-square rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-6 ${
                    formData.image_url ? 'border-[#4CA6AE]/20 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.image_url} alt="Preview" fill className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                              Change
                              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-[#4CA6AE] mb-4 border border-slate-100 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-6 h-6 border-3 border-[#4CA6AE] border-t-transparent rounded-full animate-spin"></div> : <FaUpload size={20} />}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1 leading-none">{uploading ? 'Processing...' : 'Upload Icon'}</p>
                        <label className="absolute inset-0 cursor-pointer">
                          <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                        </label>
                      </>
                    )}
                  </div>
                  {formData.image_url && (
                    <button 
                      type="button" 
                      onClick={() => setFormData({...formData, image_url: ''})}
                      className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-rose-600 transition-all z-10 hover:rotate-90 active:scale-90"
                    >
                      <FaTimes size={14} />
                    </button>
                  )}
                </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
              <FaInfoCircle className="text-[#4CA6AE]" /> Professional Description
            </label>
            <textarea 
              placeholder="Detail the procedure, benefits, and expected outcomes..." 
              value={formData.description} 
              onChange={e=>setFormData({...formData, description: e.target.value})} 
              required
              className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-[#4CA6AE]/5 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[200px] leading-relaxed" 
            />
          </div>
          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d84a7e] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#4CA6AE]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Commit Changes' : 'Register Service'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100">
        <div className="p-8 border-b border-slate-50">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#EA6490] rounded-full"></span>
             Service Catalog
           </h2>
        </div>
        <div className="overflow-x-auto text-gray-800">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Service Path</th>
                <th className="p-8">Classification</th>
                <th className="p-8">SEO Handle</th>
                <th className="p-8 text-right pr-12">Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 italic font-bold tracking-widest animate-pulse">Synchronizing Catalog...</td></tr>
              ) : services.length === 0 ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 italic font-bold">No services currently offered.</td></tr>
              ) : services.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8 text-gray-800">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                        {s.image_url ? (
                          <Image src={s.image_url} alt="" fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-200">
                            <FaStethoscope size={24} />
                          </div>
                        )}
                      </div>
                      <div className="font-extrabold text-slate-900 group-hover:text-[#4CA6AE] transition-colors leading-tight uppercase tracking-tight text-base">{s.name}</div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className="bg-[#4CA6AE]/10 text-[#3d8c94] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#4CA6AE]/10">
                       {s.category}
                    </span>
                  </td>
                  <td className="p-8">
                    <span className="text-slate-400 text-xs font-bold font-mono">/{s.slug}</span>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <button 
                      onClick={() => handleEdit(s)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Edit Service"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(s.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Delete Service"
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
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Puri Skin Clinic Service Registry</p>
        </div>
      </div>
    </div>
  );
}
