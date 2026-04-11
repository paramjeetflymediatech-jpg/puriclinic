'use client';
import { useEffect, useState } from 'react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/appointments')
      .then(res => res.json())
      .then(data => { setAppointments(data.appointments || []); setLoading(false); });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold font-serif mb-6 text-gray-900">Appointments Dashboard</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Phone / Email</th>
              <th className="p-4 font-medium">Service</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan="5" className="p-4 text-center text-gray-500">Loading...</td></tr>
            ) : appointments.map(app => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-900 font-medium">{app.name}</td>
                <td className="p-4 text-gray-600 font-mono text-sm">{app.phone}<br/>{app.email}</td>
                <td className="p-4 text-gray-600">{app.service || '-'}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {app.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500 text-sm">{new Date(app.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {!loading && appointments.length === 0 && (
              <tr><td colSpan="5" className="p-4 text-center text-gray-500">No appointments found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
