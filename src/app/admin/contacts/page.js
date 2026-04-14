'use client';

import { useEffect, useState } from 'react';
import { FaTrash, FaEnvelope, FaUser, FaPhone, FaCalendarAlt, FaEye, FaTimes, FaInbox } from 'react-icons/fa';
import Swal from '@/lib/swal';

export default function ContactsAdminPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      const data = await res.json();
      setContacts(data.contacts || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This message will be permanently deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The inquiry has been removed.',
            timer: 2000,
            showConfirmButton: false
          });
          fetchContacts();
          if (selectedContact?.id === id) {
            setIsModalOpen(false);
            setSelectedContact(null);
          }
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete the inquiry.'
        });
      }
    }
  };

  const openContact = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Client Inquiries
          </h1>
          <p className="text-slate-500 font-medium">Manage and respond to messages from your clients.</p>
        </div>
        <div className="bg-white px-6 py-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4CA6AE]/10 flex items-center justify-center text-[#4CA6AE]">
            <FaInbox size={20} />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 leading-none">{contacts.length}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Messages</div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-[#EA6490] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Loading Inquiries...</p>
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-20 text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200 mx-auto mb-6">
            <FaEnvelope size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Inquiries Yet</h3>
          <p className="text-slate-500">When clients contact you, their messages will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 transition-all hover:shadow-xl hover:shadow-slate-100 group cursor-pointer relative overflow-hidden"
              onClick={() => openContact(contact)}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(contact.id);
                  }}
                  className="w-10 h-10 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                >
                  <FaTrash size={14} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#EA6490]/10 group-hover:text-[#EA6490] transition-colors">
                  <FaUser size={20} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-tight line-clamp-1">{contact.name}</h3>
                  <p className="text-xs font-bold text-slate-400 flex items-center gap-2 mt-1">
                    <FaCalendarAlt className="text-[#4CA6AE]" />
                    {formatDate(contact.createdAt)}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <FaPhone size={12} />
                  </div>
                  <span className="text-sm font-bold">{contact.phone}</span>
                </div>
                {contact.email && (
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                      <FaEnvelope size={12} />
                    </div>
                    <span className="text-sm font-bold truncate">{contact.email}</span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                <p className="text-sm text-slate-500 line-clamp-3 font-medium leading-relaxed italic">
                  "{contact.message}"
                </p>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-[#4CA6AE] hover:shadow-lg hover:shadow-[#4CA6AE]/20">
                View Full Message
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal View */}
      {isModalOpen && selectedContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex justify-between items-start mb-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-[#EA6490]/10 flex items-center justify-center text-[#EA6490]">
                     <FaUser size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{selectedContact.name}</h2>
                    <p className="text-slate-400 font-bold flex items-center gap-2 mt-1">
                      <FaCalendarAlt className="text-[#4CA6AE]" />
                      {formatDate(selectedContact.createdAt)}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-100"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <FaPhone className="text-[#4CA6AE]" /> Phone Number
                  </div>
                  <div className="text-lg font-black text-slate-800">{selectedContact.phone}</div>
                </div>
                {selectedContact.email && (
                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FaEnvelope className="text-[#EA6490]" /> Email Address
                    </div>
                    <div className="text-lg font-black text-slate-800 break-all">{selectedContact.email}</div>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 ml-2">
                  <FaInbox className="text-[#4CA6AE]" /> Full Message Content
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 min-h-[150px]">
                  <p className="text-slate-600 font-medium leading-relaxed italic">
                    {selectedContact.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${selectedContact.phone}`}
                  className="flex-1 bg-[#4CA6AE] hover:bg-[#3d8c94] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-center shadow-lg shadow-[#4CA6AE]/20"
                >
                  Call Client
                </a>
                {selectedContact.email && (
                  <a 
                    href={`mailto:${selectedContact.email}`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-center shadow-lg shadow-slate-900/10"
                  >
                    Send Email
                  </a>
                )}
                <button 
                  onClick={() => handleDelete(selectedContact.id)}
                  className="w-full sm:w-auto px-8 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all border border-rose-100"
                >
                  Delete
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
               <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Puri Skin Clinic • Secured Transmission</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
