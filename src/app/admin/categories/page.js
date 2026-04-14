'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaTag, FaLayerGroup, FaInfoCircle } from 'react-icons/fa';

export default function CategoriesAdminPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  // form state
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    type: 'service'
  });

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/categories');
      const data = await res.json();
      setCategories(data.categories || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...formData } : formData;

    try {
      const res = await fetch('/api/admin/categories', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        resetForm();
        fetchCategories();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure? This may affect services/blogs linked to this category.')) return;
    try {
      const res = await fetch(`/api/admin/categories?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setFormData({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || '',
      type: cat.type
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: '', slug: '', description: '', type: 'service' });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Categories</h1>
          <p className="text-slate-500 font-medium">Organize your services and blogs into logical groupings.</p>
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
          {editingId ? 'Refine Category' : 'Provision New Category'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                <FaTag className="text-[#EA6490]" /> Category Name
              </label>
              <input 
                placeholder="e.g. Skin Rejuvenation" 
                value={formData.name} 
                onChange={e=>setFormData({...formData, name: e.target.value})} 
                required 
                className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">URL Extension (Slug)</label>
              <input 
                placeholder="e.g. skin-rejuvenation" 
                value={formData.slug} 
                onChange={e=>setFormData({...formData, slug: e.target.value})} 
                required 
                className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#4CA6AE]/10 focus:border-[#4CA6AE] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-bold text-slate-700 font-mono text-sm" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                <FaLayerGroup className="text-[#EA6490]" /> Applicable Type
              </label>
              <select 
                value={formData.type} 
                onChange={e=>setFormData({...formData, type: e.target.value})} 
                className="w-full p-4 border border-slate-100 bg-slate-50/50 rounded-2xl focus:ring-4 focus:ring-[#EA6490]/10 focus:border-[#EA6490] focus:bg-white outline-none transition-all text-slate-700 font-bold"
              >
                <option value="service" className="font-bold">Service Category</option>
                <option value="blog" className="font-bold">Blog Category</option>
                <option value="both" className="font-bold">Used in Both</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
              <FaInfoCircle className="text-slate-400" /> Internal Notes / Description
            </label>
            <textarea 
              placeholder="Provide context for this grouping..." 
              value={formData.description} 
              onChange={e=>setFormData({...formData, description: e.target.value})} 
              className="w-full p-6 border border-slate-100 bg-slate-50/50 rounded-[2rem] focus:ring-4 focus:ring-slate-100 focus:border-slate-300 focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium text-slate-600 min-h-[120px]" 
              rows={3} 
            />
          </div>
          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#EA6490] hover:bg-[#d4547a] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#EA6490]/20 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              {editingId ? 'Commit Update' : 'Initialize Category'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-20 transition-all hover:shadow-xl hover:shadow-slate-100 text-gray-800">
        <div className="p-8 border-b border-slate-50">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#EA6490] rounded-full"></span>
             Taxonomy Registry
           </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-8">Categorization</th>
                <th className="p-8">Scope Type</th>
                <th className="p-8">Handle</th>
                <th className="p-8 text-right pr-12">Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-300 font-bold italic tracking-widest animate-pulse">Synchronizing Data...</td></tr>
              ) : categories.length === 0 ? (
                <tr><td colSpan="4" className="p-16 text-center text-slate-300 font-bold italic">No logical groupings established.</td></tr>
              ) : categories.map(c => (
                <tr key={c.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-300 group-hover:bg-[#4CA6AE]/10 group-hover:text-[#4CA6AE] transition-all shadow-sm border border-slate-50">
                        <FaTag size={16} />
                      </div>
                      <div className="font-extrabold text-slate-900 group-hover:text-[#4CA6AE] transition-colors text-base uppercase tracking-tight">{c.name}</div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                      c.type === 'blog' ? 'bg-[#EA6490]/10 text-[#EA6490] border-[#EA6490]/10' : 
                      c.type === 'service' ? 'bg-[#4CA6AE]/10 text-[#4CA6AE] border-[#4CA6AE]/10' : 
                      'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {c.type}
                    </span>
                  </td>
                  <td className="p-8">
                    <span className="text-slate-400 text-xs font-bold font-mono">/{c.slug}</span>
                  </td>
                  <td className="p-8 text-right pr-12 space-x-3">
                    <button 
                      onClick={() => handleEdit(c)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-[#4CA6AE] rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-[#4CA6AE]/20"
                      title="Edit Category"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(c.id)}
                      className="p-4 text-slate-300 hover:text-white hover:bg-rose-500 rounded-2xl transition-all inline-flex shadow-sm hover:shadow-lg hover:shadow-rose-500/20"
                      title="Delete Category"
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
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">End of Categories Archive</p>
        </div>
      </div>
    </div>
  );
}
