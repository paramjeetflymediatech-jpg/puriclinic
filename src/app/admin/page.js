import { Appointment, Blog, Service, Contact } from '@/lib/models';
import { FaCalendarAlt, FaBlog, FaStethoscope, FaEnvelope } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [appointmentsCount, blogsCount, servicesCount, contactsCount] = await Promise.all([
    Appointment.count(),
    Blog.count(),
    Service.count(),
    Contact.count()
  ]);

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-black mb-2 leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Dashboard</h1>
        <p className="text-slate-500 font-medium">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard 
          title="Appointments" 
          count={appointmentsCount} 
          icon={<FaCalendarAlt />} 
          color="bg-[#EA6490]" 
          lightColor="bg-[#EA6490]/10"
          textColor="text-[#EA6490]"
        />
        <StatCard 
          title="Blogs" 
          count={blogsCount} 
          icon={<FaBlog />} 
          color="bg-[#4CA6AE]" 
          lightColor="bg-[#4CA6AE]/10"
          textColor="text-[#4CA6AE]"
        />
        <StatCard 
          title="Services" 
          count={servicesCount} 
          icon={<FaStethoscope />} 
          color="bg-[#EA6490]" 
          lightColor="bg-[#EA6490]/10"
          textColor="text-[#EA6490]"
        />
        <StatCard 
          title="Inquiries" 
          count={contactsCount} 
          icon={<FaEnvelope />} 
          color="bg-[#4CA6AE]" 
          lightColor="bg-[#4CA6AE]/10"
          textColor="text-[#4CA6AE]"
        />
      </div>

      {/* Placeholder for future charts or recent activity */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center">
            <p className="text-slate-400 font-medium italic text-sm">Activity analytics coming soon...</p>
        </div>
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center">
            <p className="text-slate-400 font-medium italic text-sm">Notifications area...</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, count, icon, color, lightColor, textColor }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-6 sm:p-8 border border-slate-100 flex flex-col gap-6 hover:shadow-xl hover:shadow-slate-100 transition-all group">
      <div className="flex items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl ${lightColor} flex items-center justify-center ${textColor} text-xl transition-transform group-hover:scale-110`}>
           {icon}
        </div>
        <div className="text-slate-300 group-hover:text-slate-400 transition-colors">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      </div>
      <div>
        <h3 className="text-slate-400 text-xs font-black uppercase tracking-[0.15em] mb-1">{title}</h3>
        <p className="text-4xl font-black text-slate-900 tracking-tight">{count}</p>
      </div>
    </div>
  );
}
