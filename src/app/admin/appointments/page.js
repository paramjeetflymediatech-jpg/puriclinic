'use client';
import { useEffect, useState } from 'react';
import { FaCalendarCheck, FaClock, FaUser, FaPhone, FaStethoscope } from 'react-icons/fa';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/appointments')
      .then(res => res.json())
      .then(data => { setAppointments(data.appointments || []); setLoading(false); });
  }, []);

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Appointments</h1>
        <p className="text-slate-500 font-medium">Manage and track all patient consultations.</p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-100">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between flex-wrap gap-4">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
             <span className="w-2 h-8 bg-[#EA6490] rounded-full"></span>
             Recent Sessions
           </h2>
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                Total: {appointments.length}
              </span>
           </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden divide-y divide-slate-100">
          {loading ? (
            <div className="p-10 text-center text-slate-400 font-medium italic animate-pulse">Accessing registry...</div>
          ) : appointments.length === 0 ? (
            <div className="p-10 text-center text-slate-400 font-medium italic">No appointments records.</div>
          ) : appointments.map(app => (
            <div key={app.id} className="p-6 space-y-4 hover:bg-slate-50 transition-colors">
               <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EA6490]/10 flex items-center justify-center text-[#EA6490]">
                       <FaUser size={14} />
                    </div>
                    <div>
                       <div className="font-black text-slate-900 leading-none mb-1 uppercase tracking-tight">{app.name}</div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#4CA6AE]">{app.service || 'General'}</span>
                    </div>
                  </div>
                  <span 
                    className={`
                      inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border
                      ${app.status === 'pending' 
                        ? 'bg-[#EA6490]/10 text-[#EA6490] border-[#EA6490]/20' 
                        : 'bg-[#4CA6AE]/10 text-[#4CA6AE] border-[#4CA6AE]/20'}
                    `}
                  >
                    {app.status}
                  </span>
               </div>

               <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Contact</div>
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1">
                       <FaPhone className="text-[10px] text-[#EA6490]" /> {app.phone}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Scheduled</div>
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1">
                       <FaClock className="text-[10px] text-[#4CA6AE]" /> {new Date(app.createdAt).toLocaleDateString()}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="p-6">Patient Details</th>
                <th className="p-6">Contact Info</th>
                <th className="p-6">Service Area</th>
                <th className="p-6">Status</th>
                <th className="p-6">Scheduled On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="5" className="p-16 text-center text-slate-400 font-medium italic animate-pulse">Synchronizing with server...</td></tr>
              ) : appointments.length === 0 ? (
                <tr><td colSpan="5" className="p-16 text-center text-slate-400 font-medium italic">No appointments found.</td></tr>
              ) : appointments.map(app => (
                <tr key={app.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-[#EA6490]/10 group-hover:text-[#EA6490] transition-colors">
                        <FaUser size={14} />
                      </div>
                      <div className="font-bold text-slate-900 leading-tight">{app.name}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                         <FaPhone size={10} className="text-[#EA6490]" />
                         {app.phone}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium ml-4">{app.email}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-xl text-[11px] font-bold border border-slate-200">
                       <FaStethoscope className="text-[#4CA6AE]" />
                       {app.service || 'General'}
                    </div>
                  </td>
                  <td className="p-6">
                    <span 
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border
                        ${app.status === 'pending' 
                          ? 'bg-[#EA6490]/10 text-[#EA6490] border-[#EA6490]/20' 
                          : 'bg-[#4CA6AE]/10 text-[#4CA6AE] border-[#4CA6AE]/20'}
                      `}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${app.status === 'pending' ? 'bg-[#EA6490]' : 'bg-[#4CA6AE]'} animate-pulse`}></div>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-6">
                     <div className="flex flex-col gap-1">
                        <div className="text-xs font-bold text-slate-900">{new Date(app.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                        <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                           <FaClock size={10} />
                           {new Date(app.createdAt).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                        </div>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">End of results</p>
        </div>
      </div>
    </div>
  );
}
