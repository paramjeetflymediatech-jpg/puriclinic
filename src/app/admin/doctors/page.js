'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaUserMd, FaMedal, FaGraduationCap, FaHistory } from 'react-icons/fa';
import Image from 'next/image';

export default function DoctorsAdminPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    designation: '',
    degree: '',
    experience: '',
    achievements: '',
    achievement_images: [],
    bio: '',
    image_url: '',
    order: 0
  });

  const fetchDoctors = async () => {
    try {
      const res = await fetch('/api/admin/doctors');
      const data = await res.json();
      setDoctors(data.doctors || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchDoctors(); }, []);

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

  const handleAchievementFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    const uploadedUrls = [...formData.achievement_images];

    for (const file of files) {
      const data = new FormData();
      data.append('file', file);
      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: data });
        const result = await res.json();
        if (result.success) {
          uploadedUrls.push(result.url);
        }
      } catch (err) {
        console.error('Upload failed for one file:', err);
      }
    }

    setFormData({ ...formData, achievement_images: uploadedUrls });
    setUploading(false);
  };

  const removeAchievementImage = (index) => {
    const updated = [...formData.achievement_images];
    updated.splice(index, 1);
    setFormData({ ...formData, achievement_images: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    
    // Ensure achievement_images is stringified for the DB
    const processedFormData = {
      ...formData,
      achievement_images: JSON.stringify(formData.achievement_images)
    };
    const body = editingId ? { id: editingId, ...processedFormData } : processedFormData;

    try {
      const res = await fetch('/api/admin/doctors', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        resetForm();
        fetchDoctors();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this doctor profile?')) return;
    try {
      const res = await fetch(`/api/admin/doctors?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchDoctors();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (doc) => {
    setEditingId(doc.id);
    setFormData({
      name: doc.name,
      slug: doc.slug,
      designation: doc.designation || '',
      degree: doc.degree || '',
      experience: doc.experience || '',
      achievements: doc.achievements || '',
      achievement_images: doc.achievement_images ? JSON.parse(doc.achievement_images) : [],
      bio: doc.bio || '',
      image_url: doc.image_url || '',
      order: doc.order || 0
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ 
      name: '', slug: '', designation: '', degree: '', 
      experience: '', achievements: '', achievement_images: [], bio: '', image_url: '', order: 0 
    });
  };

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4 text-gray-800">
           <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
             <FaUserMd />
           </div>
           <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Doctor Management</h1>
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
          <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
          {editingId ? 'Edit Doctor Profile' : 'Add New Doctor'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    placeholder="e.g. Dr. Gurinderjit Singh Puri" 
                    value={formData.name} 
                    onChange={e=>setFormData({...formData, name: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Slug (URL path)</label>
                  <input 
                    placeholder="e.g. dr-gurinderjit-singh" 
                    value={formData.slug} 
                    onChange={e=>setFormData({...formData, slug: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Designation</label>
                  <input 
                    placeholder="e.g. Founder & Chief Dermatologist" 
                    value={formData.designation} 
                    onChange={e=>setFormData({...formData, designation: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
                <div className="space-y-2 text-gray-800">
                  <label className="text-sm font-bold text-slate-700 ml-1">Degrees/Qualifications</label>
                  <input 
                    placeholder="e.g. MBBS, MD - Dermatology" 
                    value={formData.degree} 
                    onChange={e=>setFormData({...formData, degree: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
                <div className="space-y-2 text-gray-800">
                  <label className="text-sm font-bold text-slate-700 ml-1">Experience</label>
                  <input 
                    placeholder="e.g. 40+ Years" 
                    value={formData.experience} 
                    onChange={e=>setFormData({...formData, experience: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                  />
                </div>
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Profile Portrait</label>
                <div className="relative group">
                  <div className={`w-full aspect-[4/5] rounded-3xl border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-4 ${
                    formData.image_url ? 'border-indigo-200 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl">
                              Replace Photo
                              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div> : <FaUpload />}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1">{uploading ? 'Uploading...' : 'Upload Photo'}</p>
                        <p className="text-xs text-slate-400">JPG, PNG (RECC. 4:5 ratio)</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 ml-1">Achievements (HTML/List)</label>
              <textarea 
                placeholder="Highlight key awards, certifications, or milestones..." 
                value={formData.achievements} 
                onChange={e=>setFormData({...formData, achievements: e.target.value})} 
                className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-3xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all font-mono text-sm placeholder:text-slate-400 min-h-[150px]" 
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 ml-1">Achievement Photos (Multiple)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {formData.achievement_images.map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 group">
                    <Image src={img} alt="Achievement" fill className="object-cover" />
                    <button 
                      onClick={() => removeAchievementImage(idx)}
                      type="button"
                      className="absolute top-2 right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaTimes size={10} />
                    </button>
                  </div>
                ))}
                <label className="aspect-video rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 hover:bg-white transition-all text-gray-800">
                   <FaPlus className="text-slate-400 mb-2" />
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Add Photos</span>
                   <input type="file" multiple className="hidden" accept="image/*" onChange={handleAchievementFileUpload} />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-800">
            <label className="text-sm font-bold text-slate-700 ml-1">Detailed Bio (HTML)</label>
            <textarea 
              placeholder="Write the full biography and professional background..." 
              value={formData.bio} 
              onChange={e=>setFormData({...formData, bio: e.target.value})} 
              className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-3xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition-all font-mono text-sm placeholder:text-slate-400 min-h-[200px]" 
            />
          </div>

          <div className="flex justify-between items-center pt-4">
             <div className="flex items-center gap-4 text-gray-800">
               <label className="text-sm font-bold text-slate-700">Display Order:</label>
               <input 
                type="number"
                value={formData.order} 
                onChange={e=>setFormData({...formData, order: parseInt(e.target.value)})} 
                className="w-24 p-2 border border-slate-100 bg-slate-50 rounded-xl outline-none" 
               />
             </div>
            <button 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-12 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Save Profile' : 'Add Doctor'}
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
                <th className="p-6">Doctor Details</th>
                <th className="p-6">Specialization</th>
                <th className="p-6">Display Order</th>
                <th className="p-6 text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium">Synchronizing medical staff...</td></tr>
              ) : doctors.length === 0 ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-400 italic font-medium">No doctors added yet.</td></tr>
              ) : doctors.map(doc => (
                <tr key={doc.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 aspect-[4/5] rounded-xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-200">
                        {doc.image_url ? (
                          <Image src={doc.image_url} alt="" fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <FaUserMd />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight mb-1">{doc.name}</div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{doc.degree}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-xl text-[11px] font-black tracking-wider border border-indigo-100">{doc.designation}</span>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-bold text-slate-500">{doc.order}</span>
                  </td>
                  <td className="p-6 text-right pr-10 space-x-3">
                    <button 
                      onClick={() => handleEdit(doc)}
                      className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all inline-flex shadow-sm"
                      title="Edit"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(doc.id)}
                      className="p-3 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all inline-flex shadow-sm"
                      title="Delete"
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
