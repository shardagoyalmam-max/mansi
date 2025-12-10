import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle, FiCalendar, FiShoppingCart } from 'react-icons/fi';

export default function VendorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [showChat, setShowChat] = useState(false);

  const vendor = {
    id: id,
    name: 'Royal Palace Venue',
    category: 'Venue',
    rating: 4.8,
    reviews: 245,
    image: '🏰',
    city: 'Delhi',
    address: '123 Wedding Lane, Delhi 110001',
    phone: '+91-1234567890',
    email: 'contact@royalpalace.com',
    description: 'Experience luxury and elegance at our world-class wedding venue. Perfect for grand celebrations with state-of-the-art facilities.',
    photos: ['🏰', '🎭', '✨', '🕯️'],
    galleryDesc: 'Beautiful venue with world-class facilities',
  };

  const packages = [
    {
      id: 1,
      name: 'Basic',
      price: 100000,
      capacity: '200-300 guests',
      features: ['Venue only', 'Basic Decoration', '4-hour slot', 'Parking for 50 cars'],
    },
    {
      id: 2,
      name: 'Premium',
      price: 150000,
      capacity: '300-500 guests',
      features: ['Full day access', 'Premium Decoration', 'Complimentary Catering', 'Valet Parking'],
    },
    {
      id: 3,
      name: 'Platinum',
      price: 250000,
      capacity: '500+ guests',
      features: ['2-day access', 'Luxury Decoration', 'Premium Catering', 'Full Staff', 'Complimentary Photography'],
    },
  ];

  const handleAddToCart = () => {
    alert(`Added ${packages[selectedPackage - 1].name} package to cart!`);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Vendor Hero */}
      <div className="glass-effect text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate('/categories')} className="text-gold hover:underline mb-4">
            ← Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-9xl">
                {vendor.image}
              </div>
              <div className="p-6 border-t border-gray-200">
                <h3 className="font-semibold text-mehrun mb-4">Gallery</h3>
                <div className="grid grid-cols-4 gap-4">
                  {vendor.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-mehrun/10 to-gold/10 rounded-lg flex items-center justify-center text-5xl cursor-pointer hover:scale-110 transition duration-300"
                    >
                      {photo}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vendor Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl font-bold text-mehrun mb-2">{vendor.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold text-lg">⭐ {vendor.rating} ({vendor.reviews} reviews)</span>
                <span className="text-gray-600">{vendor.category} • {vendor.city}</span>
              </div>
              <p className="text-gray-700 mb-6">{vendor.description}</p>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-mehrun/10 rounded-lg">
                  <FiMapPin className="text-mehrun" size={20} />
                  <div>
                    <p className="text-xs text-gray-600">Address</p>
                    <p className="font-semibold text-gray-800">{vendor.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-mehrun/10 rounded-lg">
                  <FiPhone className="text-mehrun" size={20} />
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-800">{vendor.phone}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="mb-6">
                <h3 className="font-semibold text-mehrun mb-3">📍 Location Map</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-300 transition duration-300 cursor-pointer">
                  🗺️ Interactive Map Placeholder (Google Maps Integration Ready)
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex gap-4">
                <button
                  onClick={() => setShowChat(!showChat)}
                  className="flex-1 btn-mehrun flex items-center justify-center gap-2"
                >
                  <FiMessageCircle /> Live Chat
                </button>
                <button className="flex-1 btn-gold flex items-center justify-center gap-2">
                  <FiPhone /> Call Now
                </button>
              </div>

              {showChat && (
                <div className="mt-4 p-4 bg-mehrun/10 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">💬 Chat Support Placeholder - Ready for integration</p>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Packages & Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-mehrun mb-6">Packages</h2>

              {/* Date Picker */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-mehrun mb-2">
                  <FiCalendar className="inline mr-2" /> Wedding Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                />
              </div>

              {/* Package Selection */}
              <div className="space-y-4 mb-6">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition duration-300 ${
                      selectedPackage === pkg.id
                        ? 'border-mehrun bg-mehrun/10'
                        : 'border-gray-300 hover:border-mehrun'
                    }`}
                  >
                    <h3 className="font-bold text-mehrun mb-1">{pkg.name}</h3>
                    <p className="text-lg font-bold text-gold mb-2">₹{pkg.price.toLocaleString('en-IN')}</p>
                    <p className="text-xs text-gray-600 mb-3">{pkg.capacity}</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>✓ {feature}</li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>

              {/* Availability Calendar */}
              <div className="mb-6">
                <h3 className="font-semibold text-mehrun mb-3">Availability</h3>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(30)].map((_, i) => (
                    <button
                      key={i}
                      className="aspect-square bg-mehrun/10 rounded text-xs font-semibold text-mehrun hover:bg-mehrun hover:text-white transition duration-300"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-mehrun flex items-center justify-center gap-2 mb-4"
              >
                <FiShoppingCart /> Add to Cart
              </button>

              {/* Quick Contact */}
              <button
                onClick={() => alert('Inquiry form placeholder')}
                className="w-full btn-outline"
              >
                <FiMail className="inline mr-2" /> Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
