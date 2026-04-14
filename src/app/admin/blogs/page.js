'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaUpload, FaImage, FaPenNib, FaLink, FaAlignLeft } from 'react-icons/fa';
import Image from 'next/image';
import Swal from '@/lib/swal';

export default function BlogsAdminPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: ''
  });

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blogs');
      const data = await res.json();
      setBlogs(data.blogs || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch('/api/admin/blogs', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Blog article ${editingId ? 'updated' : 'published'} successfully!`,
          timer: 2000,
          showConfirmButton: false
        });
        resetForm();
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while saving the article.'
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This article will be permanently removed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/blogs?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The blog article has been deleted.',
            timer: 2000,
            showConfirmButton: false
          });
          fetchBlogs();
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete the article.'
        });
      }
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      image_url: blog.image_url || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: '', slug: '', excerpt: '', content: '', image_url: '' });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Blog Articles</h1>
          <p className="text-slate-500 font-medium">Create and manage your clinic's editorial content.</p>
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
          {editingId ? 'Refine Article' : 'Draft New Story'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaPenNib className="text-[#EA6490]" /> Title
                  </label>
                  <input 
                    placeholder="Article headline..." 
                    value={formData.title} 
                    onChange={e=>setFormData({...formData, title: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                    <FaLink className="text-[#4CA6AE]" /> URL Handle (Slug)
                  </label>
                  <input 
                    placeholder="e.g. advance-skin-care" 
                    value={formData.slug} 
                    onChange={e=>setFormData({...formData, slug: e.target.value})} 
                    required 
                    className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 font-mono text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                   <FaAlignLeft className="text-[#4CA6AE]" /> Short Excerpt
                </label>
                <textarea 
                  placeholder="A brief teaser for the blog list page..." 
                  value={formData.excerpt} 
                  onChange={e=>setFormData({...formData, excerpt: e.target.value})} 
                  className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium text-slate-600" 
                  rows={2} 
                />
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Cover Imagery</label>
                <div className="relative group">
                  <div className={`w-full aspect-[4/3] rounded-[2rem] border-2 border-dashed transition-all overflow-hidden flex flex-col items-center justify-center p-4 ${
                    formData.image_url ? 'border-[#EA6490]/20 bg-white' : 'border-slate-200 bg-slate-50'
                  }`}>
                    {formData.image_url ? (
                      <div className="relative w-full h-full">
                        <Image src={formData.image_url} alt="Preview" fill className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <label className="cursor-pointer bg-white text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform">
                              Replace Image
                              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} disabled={uploading} />
                           </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={`w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-[#EA6490] mb-4 border border-slate-100 ${uploading ? 'animate-pulse' : ''}`}>
                          {uploading ? <div className="w-6 h-6 border-3 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div> : <FaUpload size={20} />}
                        </div>
                        <p className="text-sm font-bold text-slate-600 mb-1">{uploading ? 'Uploading...' : 'Tap to Upload'}</p>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">JPG, PNG (MAX. 2MB)</p>
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
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Main Content Structure (HTML Supported)</label>
            <textarea 
              placeholder="Tell your story here..." 
              value={formData.content} 
              onChange={e=>setFormData({...formData, content: e.target.value})} 
              required
              className="w-full p-8 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] focus:ring-4 focus:ring-[#EA6490]/5 focus:border-[#EA6490] focus:bg-white outline-none transition-all font-medium text-slate-600 min-h-[400px] leading-relaxed" 
            />
          </div>
          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d4547a] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Update Masterpiece' : 'Publish Story'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100">
        <div className="p-8 border-b border-slate-50">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#4CA6AE] rounded-full"></span>
             Published Articles
           </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Content Identity</th>
                <th className="p-8">Route Link</th>
                <th className="p-8 text-right pr-12">Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="3" className="p-20 text-center text-slate-300 italic font-bold tracking-widest animate-pulse">Synchronizing Editorial...</td></tr>
              ) : blogs.length === 0 ? (
                <tr><td colSpan="3" className="p-20 text-center text-slate-300 italic font-bold">No articles found in the archive.</td></tr>
              ) : blogs.map(b => (
                <tr key={b.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-16 rounded-2xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                        {b.image_url ? (
                          <Image src={b.image_url} alt="" fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-200">
                            <FaImage size={24} />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-[#EA6490] transition-colors leading-tight mb-1 text-lg">{b.title}</div>
                        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{new Date(b.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className="bg-white text-[#4CA6AE] px-5 py-2 rounded-xl text-[11px] font-black tracking-widest border border-slate-100 shadow-sm min-w-[120px] inline-block text-center">
                       /{b.slug}
                    </span>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <button 
                      onClick={() => handleEdit(b)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Edit Story"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(b.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Delete Story"
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
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">End of Editorial Archive</p>
        </div>
      </div>
    </div>
  );
}
