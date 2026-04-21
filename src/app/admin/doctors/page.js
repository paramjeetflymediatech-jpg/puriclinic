'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaUserMd, FaMedal, FaGraduationCap, FaHistory, FaBriefcase, FaIdCard, FaSortNumericDown, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Swal from '@/lib/swal';

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
    bio_part2: '',
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
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: result.error
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: 'Connection interrupted or file too large.'
      });
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
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Doctor profile ${editingId ? 'updated' : 'published'} successfully!`,
          timer: 2000,
          showConfirmButton: false
        });
        resetForm();
        fetchDoctors();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while saving the profile.'
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this doctor profile!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/doctors?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The doctor profile has been removed.',
            timer: 2000,
            showConfirmButton: false
          });
          fetchDoctors();
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete the profile.'
        });
      }
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
      bio_part2: doc.bio_part2 || '',
      image_url: doc.image_url || '',
      order: doc.order || 0
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ 
      name: '', slug: '', designation: '', degree: '', 
      experience: '', achievements: '', achievement_images: [], bio: '', bio_part2: '', image_url: '', order: 0 
    });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Staff Registry</h1>
          <p className="text-slate-500 font-medium">Manage clinical staff, specialists, and their professional bios.</p>
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
          {editingId ? 'Refine Practitioner Profile' : 'Onboard New Practitioner'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaIdCard className="text-[#EA6490]" /> Professional Name
                  </label>
                  <input 
                    placeholder="e.g. Dr. John Doe" 
                    value={formData.name} 
                    onChange={e=>setFormData({...formData, name: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">URL Extension (Slug)</label>
                  <input 
                    placeholder="e.g. dr-john-doe" 
                    value={formData.slug} 
                    onChange={e=>setFormData({...formData, slug: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 font-mono text-sm" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaBriefcase className="text-[#4CA6AE]" /> Designation
                  </label>
                  <input 
                    placeholder="e.g. Senior Surgeon" 
                    value={formData.designation} 
                    onChange={e=>setFormData({...formData, designation: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaGraduationCap className="text-[#EA6490]" /> Qualifications
                  </label>
                  <input 
                    placeholder="e.g. MBBS, MD" 
                    value={formData.degree} 
                    onChange={e=>setFormData({...formData, degree: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-400 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaHistory className="text-[#4CA6AE]" /> Experience
                  </label>
                  <input 
                    placeholder="e.g. 15+ Years" 
                    value={formData.experience} 
                    onChange={e=>setFormData({...formData, experience: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-400 font-bold text-slate-700" 
                  />
                </div>
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Profile Portrait</label>
                <div className="relative group">
                  <div className={`w-full aspect-[4/5] rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-6 ${
                    formData.image_url ? 'border-[#EA6490]/20 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.image_url} alt="Preview" fill unoptimized sizes="(max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm shadow-inner">
                           <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                              Replace
                              <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-[#EA6490] mb-4 border border-slate-100 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-6 h-6 border-3 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div> : <FaUpload size={20} />}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1 leading-none">{uploading ? 'Processing...' : 'Upload Portrait'}</p>
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
                      className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-rose-600 transition-all z-10 hover:rotate-90 active:scale-90"
                    >
                      <FaTimes size={14} />
                    </button>
                  )}
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                <FaMedal className="text-[#EA6490]" /> Distinguished Achievements (HTML Supported)
              </label>
              <textarea 
                placeholder="List major awards, milestones, and professional recognitions..." 
                value={formData.achievements} 
                onChange={e=>setFormData({...formData, achievements: e.target.value})} 
                className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-[2rem] focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[150px] leading-relaxed" 
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Achievement Gallery</label>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-4">
                {formData.achievement_images.map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 group shadow-sm bg-slate-50">
                    <Image src={img} alt="Achievement" fill unoptimized sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform group-hover:scale-110" />
                    <button 
                      onClick={() => removeAchievementImage(idx)}
                      type="button"
                      className="absolute top-2 right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-rose-600 hover:rotate-90"
                    >
                      <FaTimes size={10} />
                    </button>
                  </div>
                ))}
                <label className="aspect-video rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:border-[#EA6490] hover:bg-white transition-all group">
                   <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#EA6490] transition-colors mb-2">
                       <FaPlus size={14} />
                   </div>
                   <input type="file" multiple className="hidden" accept="image/*,video/*" onChange={handleAchievementFileUpload} />
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-gray-800">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Biography - Introduction (HTML Supported)</label>
              <textarea 
                placeholder="Narrate the practitioner's introductory story..." 
                value={formData.bio} 
                onChange={e=>setFormData({...formData, bio: e.target.value})} 
                className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[250px] leading-relaxed" 
              />
            </div>
            <div className="space-y-4 text-gray-800">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Biography - Professional Details (HTML Supported)</label>
              <textarea 
                placeholder="Narrate the practitioner's medical expertise and detailed journey..." 
                value={formData.bio_part2} 
                onChange={e=>setFormData({...formData, bio_part2: e.target.value})} 
                className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[250px] leading-relaxed" 
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 gap-8">
             <div className="flex items-center gap-6 text-gray-800 w-full sm:w-auto">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaSortNumericDown className="text-slate-400" /> Display Priority:
                </label>
                <input 
                  type="number"
                  value={formData.order} 
                  onChange={e=>setFormData({...formData, order: parseInt(e.target.value)})} 
                  className="w-24 p-4 border border-slate-100 bg-slate-50 rounded-2xl outline-none font-bold text-slate-700 focus:bg-white transition-all shadow-inner" 
                />
             </div>
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d4547a] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Refine Profile' : 'Publish Profile'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100 text-gray-800">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#4CA6AE] rounded-full"></span>
             Staff Roster
           </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Practitioner Details</th>
                <th className="p-8">Engagement Scope</th>
                <th className="p-8">Priority</th>
                <th className="p-8 text-right pr-12">Registry Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 font-bold italic tracking-widest animate-pulse">Accessing Credentials Library...</td></tr>
              ) : doctors.length === 0 ? (
                <tr><td colSpan="4" className="p-20 text-center text-slate-300 font-bold italic">No specialized practitioners registered.</td></tr>
              ) : doctors.map(doc => (
                <tr key={doc.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8 text-gray-800">
                    <div className="flex items-center gap-6">
                      <div className="w-16 aspect-[4/5] rounded-2xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                        {doc.image_url ? (
                          <Image src={doc.image_url} alt="" fill unoptimized sizes="64px" className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-200">
                            <FaUserMd size={24} />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900 group-hover:text-[#EA6490] transition-colors leading-tight mb-1 uppercase tracking-tight text-lg">{doc.name}</div>
                        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{doc.degree}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className="bg-[#4CA6AE]/10 text-[#3d8c94] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#4CA6AE]/10 shadow-sm">
                       {doc.designation}
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black text-slate-400 group-hover:text-slate-900 transition-colors">{doc.order}</div>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <Link
                      href={`/doctors/${doc.slug}/`}
                      target="_blank"
                      className="p-4 text-slate-300 hover:text-white hover:bg-slate-900 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-slate-900/20"
                      title="View Public Page"
                    >
                      <FaEye size={16} />
                    </Link>
                    <button 
                      onClick={() => handleEdit(doc)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Refine Profile"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(doc.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Revoke Registry"
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
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">End of Staff Roster Catalog</p>
        </div>
      </div>
    </div>
  );
}
