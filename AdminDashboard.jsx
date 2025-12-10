import { useState } from 'react';
import { FiBarChart2, FiUsers, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const adminStats = [
    { label: 'Total Vendors', value: '2,340', icon: '🏪', color: 'bg-blue-100', trend: '+12%' },
    { label: 'Total Users', value: '15,200', icon: '👥', color: 'bg-green-100', trend: '+8%' },
    { label: 'Total Revenue', value: '₹2.5Cr', icon: '💰', color: 'bg-yellow-100', trend: '+15%' },
    { label: 'Active Bookings', value: '1,245', icon: '📅', color: 'bg-pink-100', trend: '+5%' },
  ];

  const vendors = [
    { id: 1, name: 'Royal Palace Venue', category: 'Venue', status: 'Active', rating: 4.8, reviews: 245 },
    { id: 2, name: 'Taj Catering', category: 'Catering', status: 'Active', rating: 4.7, reviews: 189 },
    { id: 3, name: 'Golden Dreams Photography', category: 'Photography', status: 'Active', rating: 4.9, reviews: 312 },
    { id: 4, name: 'Sound Xtreme DJ', category: 'DJ', status: 'Pending', rating: 4.8, reviews: 198 },
    { id: 5, name: 'Glam & Shine Makeup', category: 'Makeup', status: 'Suspended', rating: 4.6, reviews: 156 },
  ];

  const recentOrders = [
    { id: 'ORD-001', vendor: 'Royal Palace', user: 'Raj Kumar', amount: '₹150,000', date: '2025-02-20', status: 'Completed' },
    { id: 'ORD-002', vendor: 'Taj Catering', user: 'Priya Sharma', amount: '₹75,000', date: '2025-02-22', status: 'Completed' },
    { id: 'ORD-003', vendor: 'Photography', user: 'Amit Patel', amount: '₹100,000', date: '2025-02-25', status: 'Pending' },
  ];

  const disputes = [
    { id: 1, complaint: 'Vendor no-show', user: 'Sarah Khan', vendor: 'Sound Xtreme DJ', status: 'Open' },
    { id: 2, complaint: 'Quality issue', user: 'Raj Kumar', vendor: 'Catering Service', status: 'In Review' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">⚙️ Admin Portal</h1>
          <p className="text-white/80">Manage platform, vendors, and analytics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {adminStats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} rounded-xl shadow-lg p-6`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-green-600 font-bold text-sm">{stat.trend}</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-mehrun">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-mehrun mb-6">📊 Revenue Trend</h3>
            <div className="h-64 bg-mehrun/10 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">📈 Chart placeholder (Recharts integration ready)</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-mehrun mb-6">📊 Category Distribution</h3>
            <div className="h-64 bg-mehrun/10 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">🥧 Pie chart placeholder (Recharts integration ready)</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 flex-wrap md:flex-nowrap">
            {[
              { id: 'vendors', label: '🏪 Manage Vendors' },
              { id: 'orders', label: '📋 Orders' },
              { id: 'disputes', label: '⚠️ Disputes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 font-semibold transition duration-300 text-center ${
                  activeTab === tab.id
                    ? 'border-b-4 border-mehrun text-mehrun'
                    : 'text-gray-600 hover:text-mehrun'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Vendors Tab */}
            {activeTab === 'vendors' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">Vendor Management</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-mehrun/10 border-b border-gray-200">
                        <th className="px-6 py-4 text-left font-bold text-mehrun">Vendor Name</th>
                        <th className="px-6 py-4 text-left font-bold text-mehrun">Category</th>
                        <th className="px-6 py-4 text-left font-bold text-mehrun">Status</th>
                        <th className="px-6 py-4 text-center font-bold text-mehrun">Rating</th>
                        <th className="px-6 py-4 text-center font-bold text-mehrun">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendors.map((vendor) => (
                        <tr key={vendor.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                          <td className="px-6 py-4 font-semibold text-gray-700">{vendor.name}</td>
                          <td className="px-6 py-4 text-gray-700">{vendor.category}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              vendor.status === 'Active'
                                ? 'bg-green-100 text-green-700'
                                : vendor.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {vendor.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center text-gold font-semibold">⭐ {vendor.rating}</td>
                          <td className="px-6 py-4 text-center">
                            <button className="text-mehrun hover:text-gold font-semibold transition duration-300">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-mehrun mb-1">{order.id} - {order.vendor}</h4>
                          <p className="text-sm text-gray-600">👤 {order.user} | 📅 {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gold text-lg mb-2">{order.amount}</p>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disputes Tab */}
            {activeTab === 'disputes' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">Open Disputes</h3>
                <div className="space-y-4">
                  {disputes.map((dispute) => (
                    <div key={dispute.id} className="border-2 border-red-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">⚠️</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-mehrun mb-2">{dispute.complaint}</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            👤 User: {dispute.user} | 🏪 Vendor: {dispute.vendor}
                          </p>
                          <button className="text-red-600 hover:text-red-800 font-semibold transition duration-300">
                            Review Case →
                          </button>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                          {dispute.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
