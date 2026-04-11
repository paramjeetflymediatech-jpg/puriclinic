'use client';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaTimes, FaTag } from 'react-icons/fa';

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
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Manage Categories</h1>
        {editingId && (
          <button 
            onClick={resetForm}
            className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg transition-all"
          >
            <FaTimes /> Cancel Editing
          </button>
        )}
      </div>
      
      {/* Form Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-10 transition-all text-gray-800">
        <h2 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
          {editingId ? <FaEdit className="text-amber-500" /> : <FaPlus className="text-amber-500" />}
          {editingId ? 'Edit Category' : 'Create New Category'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Category Name</label>
              <input 
                placeholder="e.g. Skin Care" 
                value={formData.name} 
                onChange={e=>setFormData({...formData, name: e.target.value})} 
                required 
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none transition-all placeholder:text-slate-400" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Slug</label>
              <input 
                placeholder="e.g. skin-care" 
                value={formData.slug} 
                onChange={e=>setFormData({...formData, slug: e.target.value})} 
                required 
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none transition-all placeholder:text-slate-400" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Type</label>
              <select 
                value={formData.type} 
                onChange={e=>setFormData({...formData, type: e.target.value})} 
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none transition-all text-slate-700 bg-white"
              >
                <option value="service">Service Category</option>
                <option value="blog">Blog Category</option>
                <option value="both">Used in Both</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">Description</label>
            <textarea 
              placeholder="Internal description or notes..." 
              value={formData.description} 
              onChange={e=>setFormData({...formData, description: e.target.value})} 
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 outline-none transition-all placeholder:text-slate-400" 
              rows={3} 
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-3 rounded-xl transition-all shadow-lg shadow-amber-200 active:scale-[0.98]"
            >
              {editingId ? 'Update Category' : 'Create Category'}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-bold tracking-[0.1em]">
                <th className="p-5">Category</th>
                <th className="p-5">Type</th>
                <th className="p-5">Slug</th>
                <th className="p-5 text-right px-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-gray-800">
              {loading ? (
                <tr><td colSpan="4" className="p-10 text-center text-slate-400 italic">Loading categories...</td></tr>
              ) : categories.length === 0 ? (
                <tr><td colSpan="4" className="p-10 text-center text-slate-400 italic">No categories found.</td></tr>
              ) : categories.map(c => (
                <tr key={c.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                        <FaTag size={14} />
                      </div>
                      <div className="font-bold text-slate-800">{c.name}</div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="capitalize bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">{c.type}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-slate-400 text-xs font-mono">{c.slug}</span>
                  </td>
                  <td className="p-5 text-right px-8 space-x-3">
                    <button 
                      onClick={() => handleEdit(c)}
                      className="p-2 text-slate-300 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all inline-flex"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(c.id)}
                      className="p-2 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all inline-flex"
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
