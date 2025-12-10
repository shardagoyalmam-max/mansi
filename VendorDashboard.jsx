import { useState } from 'react';
import { FiBarChart2, FiCalendar, FiTrendingUp, FiDollarSign, FiMessageCircle, FiSettings } from 'react-icons/fi';

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const [vendor, setVendor] = useState({
    name: 'Royal Palace Venue',
    category: 'Venue',
    avatar: '🏰',
    rating: 4.8,
    reviews: 245,
  });

  const orders = [
    { id: 1, client: 'Raj Kumar', date: '2025-03-15', amount: '₹150,000', status: 'Confirmed', service: 'Premium Package' },
    { id: 2, client: 'Priya Sharma', date: '2025-04-20', amount: '₹200,000', status: 'Pending', service: 'Platinum Package' },
    { id: 3, client: 'Amit Patel', date: '2025-05-10', amount: '₹150,000', status: 'Confirmed', service: 'Premium Package' },
    { id: 4, client: 'Sarah Khan', date: '2025-06-15', amount: '₹180,000', status: 'Inquired', service: 'Custom Package' },
  ];

  const payments = [
    { id: 1, from: 'Raj Kumar', date: '2025-02-20', amount: '₹75,000', status: 'Received' },
    { id: 2, from: 'Priya Sharma', date: '2025-02-25', amount: '₹100,000', status: 'Received' },
    { id: 3, from: 'Amit Patel', date: '2025-03-01', amount: '₹75,000', status: 'Pending' },
  ];

  const packages = [
    { id: 1, name: 'Basic', price: '₹100,000', guests: '200-300', bookings: 12 },
    { id: 2, name: 'Premium', price: '₹150,000', guests: '300-500', bookings: 18 },
    { id: 3, name: 'Platinum', price: '₹250,000', guests: '500+', bookings: 8 },
  ];

  const stats = [
    { label: 'Total Bookings', value: '38', icon: '📅', color: 'bg-blue-100' },
    { label: 'Total Revenue', value: '₹12,50,000', icon: '💰', color: 'bg-green-100' },
    { label: 'Pending Payments', value: '₹75,000', icon: '⏳', color: 'bg-yellow-100' },
    { label: 'Avg Rating', value: '4.8/5', icon: '⭐', color: 'bg-pink-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">🏪 Vendor Dashboard</h1>
          <p className="text-white/80">Manage your bookings and business</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-1">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{vendor.avatar}</div>
              <h2 className="text-2xl font-bold text-mehrun mb-2">{vendor.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{vendor.category}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gold">⭐ {vendor.rating}</span>
                <span className="text-gray-600 text-sm">({vendor.reviews} reviews)</span>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-mehrun/10 text-mehrun rounded-lg hover:bg-mehrun hover:text-white transition duration-300">
                <FiSettings /> Edit Profile
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-gold/20 text-mehrun rounded-lg hover:bg-gold/40 transition duration-300">
                📊 Analytics
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${stat.color} rounded-lg shadow-lg p-6 text-center`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-mehrun">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-mehrun mb-6 flex items-center gap-2">
            <FiCalendar /> Booking Calendar
          </h2>
          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold text-center text-gray-600 py-2">
                {day}
              </div>
            ))}
            {[...Array(35)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg flex items-center justify-center font-semibold cursor-pointer transition duration-300 ${
                  i % 5 === 0
                    ? 'bg-mehrun/20 text-mehrun hover:bg-mehrun hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">Red dates show booked events. Click to view details.</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 flex-wrap md:flex-nowrap">
            {[
              { id: 'orders', label: '📋 Orders' },
              { id: 'payments', label: '💳 Payments' },
              { id: 'packages', label: '📦 Packages' },
              { id: 'messages', label: '💬 Messages' },
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
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mehrun mb-6">Recent Orders</h3>
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-mehrun mb-1">{order.client}</h4>
                        <p className="text-sm text-gray-600 mb-1">📅 {order.date}</p>
                        <p className="text-sm text-gray-600">{order.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gold text-lg mb-2">{order.amount}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Confirmed'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">Payment History</h3>
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div key={payment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-mehrun mb-1">From: {payment.from}</h4>
                          <p className="text-sm text-gray-600">📅 {payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gold text-lg mb-2">{payment.amount}</p>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            payment.status === 'Received'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packages Tab */}
            {activeTab === 'packages' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">My Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="border-2 border-mehrun/20 rounded-lg p-6 hover:border-mehrun transition duration-300">
                      <h4 className="font-bold text-lg text-mehrun mb-4">{pkg.name}</h4>
                      <div className="space-y-3 mb-6">
                        <div>
                          <p className="text-sm text-gray-600">Price</p>
                          <p className="text-2xl font-bold text-gold">{pkg.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Guest Capacity</p>
                          <p className="font-semibold text-gray-700">{pkg.guests}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Bookings</p>
                          <p className="text-xl font-bold text-mehrun">{pkg.bookings}</p>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-mehrun/10 text-mehrun rounded hover:bg-mehrun hover:text-white transition duration-300 text-sm font-semibold">
                        Edit Package
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6 flex items-center gap-2">
                  <FiMessageCircle /> Client Messages
                </h3>
                <div className="bg-mehrun/10 rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">💬 Live messaging system placeholder</p>
                  <p className="text-sm text-gray-600">This will show all client messages and chat history when integrated</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
