'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaStethoscope, FaTags, FaInfoCircle, FaImages, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Swal from '@/lib/swal';

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
    tagline: '',
    about_markdown: '',
    treatment_types: [],
    symptoms: [],
    treatments: [],
    custom_faq: [],
    category: 'skin',
    image_url: '',
    hero_image: '',
    gallery_images: []
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

  const handleFileUpload = async (e, type = 'main') => {
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
        if (type === 'main') {
          setFormData({ ...formData, image_url: result.url });
        } else if (type === 'hero') {
          setFormData({ ...formData, hero_image: result.url });
        } else {
          setFormData({ 
            ...formData, 
            gallery_images: [...formData.gallery_images, result.url] 
          });
        }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    // Stringify JSON fields
    const formattedData = { ...formData };
    ['gallery_images', 'treatment_types', 'symptoms', 'treatments', 'custom_faq'].forEach(field => {
      if (Array.isArray(formattedData[field])) {
        formattedData[field] = JSON.stringify(formattedData[field]);
      }
    });

    const body = editingId ? { id: editingId, ...formattedData } : formattedData;

    try {
      const res = await fetch('/api/admin/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Service ${editingId ? 'updated' : 'registered'} successfully!`,
          timer: 2000,
          showConfirmButton: false
        });
        resetForm();
        fetchData();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while saving the service.'
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this service!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The service has been removed.',
            timer: 2000,
            showConfirmButton: false
          });
          fetchData();
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete the service.'
        });
      }
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({
      name: service.name,
      slug: service.slug,
      description: service.description,
      tagline: service.tagline || '',
      about_markdown: service.about_markdown || '',
      treatment_types: service.treatment_types ? JSON.parse(service.treatment_types) : [],
      symptoms: service.symptoms ? JSON.parse(service.symptoms) : [],
      treatments: service.treatments ? JSON.parse(service.treatments) : [],
      custom_faq: service.custom_faq ? JSON.parse(service.custom_faq) : [],
      category: service.category,
      image_url: service.image_url || '',
      hero_image: service.hero_image || '',
      gallery_images: service.gallery_images ? JSON.parse(service.gallery_images) : []
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ 
      name: '', 
      slug: '', 
      description: '', 
      tagline: '',
      about_markdown: '',
      treatment_types: [],
      symptoms: [],
      treatments: [],
      custom_faq: [],
      category: 'skin', 
      image_url: '', 
      hero_image: '',
      gallery_images: [] 
    });
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
                <div className="space-y-3 col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Treatment Tagline (Hero)</label>
                  <input 
                    placeholder="e.g. Revolutionary Laser Care for Radiant Skin" 
                    value={formData.tagline} 
                    onChange={e=>setFormData({...formData, tagline: e.target.value})} 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
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
            <div className="space-y-8">
              <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service Icon</label>
                  <div className="relative group">
                    <div className={`w-full aspect-square rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-6 ${
                      formData.image_url ? 'border-[#4CA6AE]/20 bg-white' : 'border-slate-200 bg-slate-50'
                    }`}>
                      {formData.image_url ? (
                        <div className="relative w-full h-full">
                          <Image src={formData.image_url} alt="Preview" fill unoptimized sizes="(max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform group-hover:scale-105" />
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

              {/* Hero Background Area */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Hero Backdrop</label>
                <div className="relative group">
                  <div className={`w-full aspect-[4/3] rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-6 ${
                    formData.hero_image ? 'border-[#EA6490]/20 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.hero_image ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.hero_image} alt="Hero Preview" fill unoptimized sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                              Change
                              <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'hero')} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-12 h-12 rounded-[1rem] bg-white shadow-sm flex items-center justify-center text-[#EA6490] mb-3 border border-slate-100 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-5 h-5 border-2 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div> : <FaImages size={20} />}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 leading-none">Hero Backdrop</p>
                        <label className="absolute inset-0 cursor-pointer">
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'hero')} disabled={uploading} />
                        </label>
                      </>
                    )}
                  </div>
                  {formData.hero_image && (
                    <button 
                      type="button" 
                      onClick={() => setFormData({...formData, hero_image: ''})}
                      className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-rose-600 transition-all z-10"
                    >
                      <FaTimes size={14} />
                    </button>
                  )}
                </div>
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
              className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-[#4CA6AE]/5 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[150px] leading-relaxed" 
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
              <FaInfoCircle className="text-[#4CA6AE]" /> Clinical Deep-Dive (Markdown)
            </label>
            <textarea 
              placeholder="Detailed explanation of the condition, origins, and clinical context..." 
              value={formData.about_markdown} 
              onChange={e=>setFormData({...formData, about_markdown: e.target.value})} 
              className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-[#4CA6AE]/5 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[150px] leading-relaxed font-mono text-sm" 
            />
          </div>

          {/* Structured Content Editors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-50">
            {/* Treatment Types */}
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Treatment Classifications</h3>
                <div className="space-y-4">
                  {formData.treatment_types.map((type, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl relative border border-slate-100 group">
                      <input 
                        placeholder="Type Title" 
                        value={type.title} 
                        onChange={e => {
                          const newTypes = [...formData.treatment_types];
                          newTypes[idx].title = e.target.value;
                          setFormData({...formData, treatment_types: newTypes});
                        }}
                        className="w-full bg-transparent font-bold text-slate-800 border-b border-slate-200 mb-2 focus:border-[#EA6490] outline-none"
                      />
                      <textarea 
                        placeholder="Description"
                        value={type.description}
                        onChange={e => {
                          const newTypes = [...formData.treatment_types];
                          newTypes[idx].description = e.target.value;
                          setFormData({...formData, treatment_types: newTypes});
                        }}
                        className="w-full bg-transparent text-sm text-slate-600 outline-none h-20 resize-none"
                      />
                      <button type="button" onClick={() => setFormData({...formData, treatment_types: formData.treatment_types.filter((_, i) => i !== idx)})} className="absolute top-4 right-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">
                         <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormData({...formData, treatment_types: [...formData.treatment_types, {title: '', description: '', image: ''}]})} className="w-full p-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <FaPlus /> Add Classification Type
                  </button>
                </div>
            </div>

            {/* Symptoms / Signs */}
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Signs & Symptoms</h3>
                <div className="space-y-4">
                  {formData.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input 
                        placeholder="e.g. Skin Depigmentation" 
                        value={symptom} 
                        onChange={e => {
                          const newSymp = [...formData.symptoms];
                          newSymp[idx] = e.target.value;
                          setFormData({...formData, symptoms: newSymp});
                        }}
                        className="flex-1 p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-700 text-sm outline-none focus:border-[#4CA6AE]"
                      />
                      <button type="button" onClick={() => setFormData({...formData, symptoms: formData.symptoms.filter((_, i) => i !== idx)})} className="p-4 text-rose-500 bg-rose-50 rounded-xl">
                        <FaTimes size={14} />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormData({...formData, symptoms: [...formData.symptoms, '']})} className="w-full p-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <FaPlus /> Add Symptom
                  </button>
                </div>
            </div>

            {/* Treatment Pathways */}
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Treatment Pathways</h3>
                <div className="space-y-4">
                  {formData.treatments.map((tr, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl relative border border-slate-100 group">
                      <input 
                        placeholder="Procedure Title" 
                        value={tr.title} 
                        onChange={e => {
                          const newTr = [...formData.treatments];
                          newTr[idx].title = e.target.value;
                          setFormData({...formData, treatments: newTr});
                        }}
                        className="w-full bg-transparent font-bold text-slate-800 border-b border-slate-200 mb-2 focus:border-[#EA6490] outline-none"
                      />
                      <textarea 
                        placeholder="Procedure Details"
                        value={tr.description}
                        onChange={e => {
                          const newTr = [...formData.treatments];
                          newTr[idx].description = e.target.value;
                          setFormData({...formData, treatments: newTr});
                        }}
                        className="w-full bg-transparent text-sm text-slate-600 outline-none h-20 resize-none"
                      />
                      <button type="button" onClick={() => setFormData({...formData, treatments: formData.treatments.filter((_, i) => i !== idx)})} className="absolute top-4 right-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">
                         <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormData({...formData, treatments: [...formData.treatments, {title: '', description: '', icon: ''}]})} className="w-full p-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <FaPlus /> Add Pathway
                  </button>
                </div>
            </div>

            {/* Custom FAQs */}
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Service Specific FAQ</h3>
                <div className="space-y-4">
                  {formData.custom_faq.map((f, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl relative border border-slate-100 group">
                      <input 
                        placeholder="Enter Question" 
                        value={f.question} 
                        onChange={e => {
                          const newF = [...formData.custom_faq];
                          newF[idx].question = e.target.value;
                          setFormData({...formData, custom_faq: newF});
                        }}
                        className="w-full bg-transparent font-bold text-slate-800 border-b border-slate-200 mb-2 focus:border-indigo-500 outline-none"
                      />
                      <textarea 
                        placeholder="Detailed Answer"
                        value={f.answer}
                        onChange={e => {
                          const newF = [...formData.custom_faq];
                          newF[idx].answer = e.target.value;
                          setFormData({...formData, custom_faq: newF});
                        }}
                        className="w-full bg-transparent text-sm text-slate-600 outline-none h-20 resize-none"
                      />
                      <button type="button" onClick={() => setFormData({...formData, custom_faq: formData.custom_faq.filter((_, i) => i !== idx)})} className="absolute top-4 right-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">
                         <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormData({...formData, custom_faq: [...formData.custom_faq, {question: '', answer: ''}]})} className="w-full p-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <FaPlus /> Add FAQ Item
                  </button>
                </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="space-y-6 pt-6">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
              <FaUpload className="text-[#EA6490]" /> Procedure Gallery (Multi-Image)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
               {formData.gallery_images.map((img, idx) => (
                 <div key={idx} className="relative group aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-transform hover:scale-105 hover:shadow-xl">
                    <Image src={img} alt="" fill unoptimized sizes="(max-width: 640px) 50vw, 16vw" className="object-cover" />
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, gallery_images: formData.gallery_images.filter((_, i) => i !== idx) })}
                      className="absolute top-2 right-2 w-8 h-8 bg-rose-500 text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaTimes size={12} />
                    </button>
                 </div>
               ))}
               <label className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-all hover:border-[#EA6490]/20 group">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#EA6490] group-hover:scale-110 transition-transform mb-2">
                    <FaPlus size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Add Photo</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'gallery')} />
               </label>
            </div>
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
                          <Image src={s.image_url} alt="" fill unoptimized sizes="64px" className="object-cover" />
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
                    <Link
                      href={`/services/${s.slug}/`}
                      target="_blank"
                      className="p-4 text-slate-300 hover:text-white hover:bg-slate-900 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-slate-900/20"
                      title="View Public Page"
                    >
                      <FaEye size={16} />
                    </Link>
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
