import { Appointment, Blog, Service, Contact } from '@/lib/models';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [appointmentsCount, blogsCount, servicesCount, contactsCount] = await Promise.all([
    Appointment.count(),
    Blog.count(),
    Service.count(),
    Contact.count()
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Appointments" count={appointmentsCount} color="bg-blue-500" />
        <StatCard title="Blogs" count={blogsCount} color="bg-green-500" />
        <StatCard title="Services" count={servicesCount} color="bg-purple-500" />
        <StatCard title="Inquiries" count={contactsCount} color="bg-orange-500" />
      </div>
    </div>
  );
}

function StatCard({ title, count, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white mr-4`}>
         {/* Icon can go here */}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{count}</p>
      </div>
    </div>
  );
}
