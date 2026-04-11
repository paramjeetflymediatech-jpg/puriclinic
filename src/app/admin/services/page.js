'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaStethoscope } from 'react-icons/fa';
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
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
             <FaStethoscope />
           </div>
           <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight text-gray-800">Clinic Services</h1>
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
          <span className="w-2 h-8 bg-teal-600 rounded-full"></span>
          {editingId ? 'Edit Service Details' : 'Register New Services'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-gray-800">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Name</label>
                  <input 
                    placeholder="e.g. Hair Transplant" 
                    value={formData.name} 
                    onChange={handleNameChange} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
                <div className="space-y-2 text-gray-800">
                  <label className="text-sm font-bold text-slate-700 ml-1">Slug</label>
                  <input 
                    placeholder="e.g. hair-restoration" 
                    value={formData.slug} 
                    onChange={e=>setFormData({...formData, slug: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 text-gray-800">
                <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                <select 
                  value={formData.category} 
                  onChange={e=>setFormData({...formData, category: e.target.value})} 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 focus:bg-white outline-none transition-all text-slate-700 font-medium"
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
            <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Service Icon/Image</label>
                <div className="relative group">
                  <div className={`w-full aspect-square rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-4 ${
                    formData.image_url ? 'border-teal-200 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl">
                              Change
                              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-3 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div> : <FaUpload />}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1">{uploading ? 'Uploading...' : 'Upload Image'}</p>
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
                      className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-600 transition-colors z-10"
                    >
                      <FaTimes size={12} />
                    </button>
                  )}
                </div>
            </div>
          </div>

          <div className="space-y-2 text-gray-800">
            <label className="text-sm font-bold text-slate-700 ml-1">Description</label>
            <textarea 
              placeholder="Provide a detailed description of the service..." 
              value={formData.description} 
              onChange={e=>setFormData({...formData, description: e.target.value})} 
              required
              className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-3xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium min-h-[150px]" 
            />
          </div>
          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-black px-12 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(13,148,136,0.3)] active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Update Service' : 'Save Service'}
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
                <th className="p-6">Service Area</th>
                <th className="p-6">Category</th>
                <th className="p-6">Handle</th>
                <th className="p-6 text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium">Syncing services...</td></tr>
              ) : services.length === 0 ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium">No services registered yet.</td></tr>
              ) : services.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm">
                        {s.image_url ? (
                          <Image src={s.image_url} alt="" fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <FaStethoscope size={20} />
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{s.name}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-teal-100">{s.category}</span>
                  </td>
                  <td className="p-6 text-gray-800">
                    <span className="text-slate-400 text-xs font-mono">{s.slug}</span>
                  </td>
                  <td className="p-6 text-right pr-10 space-x-3">
                    <button 
                      onClick={() => handleEdit(s)}
                      className="p-3 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-2xl transition-all inline-flex shadow-sm"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(s.id)}
                      className="p-3 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all inline-flex shadow-sm"
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
