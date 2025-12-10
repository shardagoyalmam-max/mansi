import { useState } from 'react';
import { FiHeart, FiCalendar, FiDownload, FiSettings, FiLogOut, FiEdit } from 'react-icons/fi';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [user, setUser] = useState({
    name: 'Raj Kumar',
    email: 'raj@example.com',
    phone: '+91-9876543210',
    avatar: '👨‍🤵',
  });

  const bookings = [
    { id: 1, vendor: 'Royal Palace Venue', date: '2025-03-15', amount: '₹150,000', status: 'Confirmed', image: '🏰' },
    { id: 2, vendor: 'Golden Dreams Photography', date: '2025-03-15', amount: '₹100,000', status: 'Confirmed', image: '📷' },
    { id: 3, vendor: 'Taj Catering', date: '2025-03-15', amount: '₹75,000', status: 'Pending', image: '🍛' },
  ];

  const wishlist = [
    { id: 1, vendor: 'Glam & Shine Makeup', rating: 4.6, price: '₹8,000', image: '💅' },
    { id: 2, vendor: 'Floral Paradise', rating: 4.7, price: '₹2,00,000', image: '🌹' },
    { id: 3, vendor: 'Sound Xtreme DJ', rating: 4.8, price: '₹50,000', image: '🎤' },
  ];

  const invoices = [
    { id: 'INV-2025-001', date: '2025-02-15', amount: '₹150,000', status: 'Paid' },
    { id: 'INV-2025-002', date: '2025-02-20', amount: '₹100,000', status: 'Paid' },
    { id: 'INV-2025-003', date: '2025-03-01', amount: '₹75,000', status: 'Pending' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Wedding Ceremony', date: '2025-03-15', days: 'In 15 days', icon: '💒' },
    { id: 2, name: 'Reception', date: '2025-03-16', days: 'In 16 days', icon: '🎉' },
    { id: 3, name: 'Haldi Ceremony', date: '2025-03-10', days: 'In 10 days', icon: '🙏' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">👤 My Dashboard</h1>
          <p className="text-white/80">Manage your bookings and wedding planning</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-1">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{user.avatar}</div>
              <h2 className="text-2xl font-bold text-mehrun mb-2">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-600 text-sm">{user.phone}</p>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-mehrun/10 text-mehrun rounded-lg hover:bg-mehrun hover:text-white transition duration-300">
                <FiEdit /> Edit Profile
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-mehrun/10 text-mehrun rounded-lg hover:bg-mehrun hover:text-white transition duration-300">
                <FiSettings /> Settings
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition duration-300">
                <FiLogOut /> Logout
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-gray-600 text-sm mb-1">Total Spent</p>
              <p className="text-2xl font-bold text-mehrun">₹3,25,000</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">✓</div>
              <p className="text-gray-600 text-sm mb-1">Confirmed Bookings</p>
              <p className="text-2xl font-bold text-gold">5</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">⏳</div>
              <p className="text-gray-600 text-sm mb-1">Days Until Wedding</p>
              <p className="text-2xl font-bold text-mehrun">15</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-mehrun mb-6 flex items-center gap-2">
            <FiCalendar /> Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-2 border-gold rounded-lg p-6">
                <div className="text-4xl mb-3">{event.icon}</div>
                <h3 className="font-bold text-mehrun mb-2">{event.name}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <p className="text-gold font-semibold text-sm mt-2">{event.days}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 flex-wrap md:flex-nowrap">
            {[
              { id: 'bookings', label: '📅 Bookings', icon: '📅' },
              { id: 'wishlist', label: '❤️ Wishlist', icon: '❤️' },
              { id: 'invoices', label: '📄 Invoices', icon: '📄' },
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
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mehrun mb-6">My Bookings</h3>
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{booking.image}</div>
                      <div>
                        <h4 className="font-bold text-mehrun mb-1">{booking.vendor}</h4>
                        <p className="text-sm text-gray-600">📅 {booking.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gold mb-2">{booking.amount}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Confirmed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">My Wishlist ({wishlist.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="card-vendor group">
                      <div className="h-32 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                        {item.image}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-mehrun mb-1">{item.vendor}</h4>
                        <p className="text-sm text-gray-600 mb-2">⭐ {item.rating}</p>
                        <p className="text-gold font-bold mb-3">{item.price}</p>
                        <button className="w-full btn-mehrun text-sm">Add to Cart</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
              <div>
                <h3 className="text-xl font-bold text-mehrun mb-6">My Invoices</h3>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                      <div>
                        <h4 className="font-bold text-mehrun mb-1">{invoice.id}</h4>
                        <p className="text-sm text-gray-600">📅 {invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gold mb-2">{invoice.amount}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          invoice.status === 'Paid'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {invoice.status}
                        </span>
                      </div>
                      <button className="ml-4 p-2 hover:bg-mehrun/10 rounded transition duration-300">
                        <FiDownload className="text-mehrun" />
                      </button>
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
