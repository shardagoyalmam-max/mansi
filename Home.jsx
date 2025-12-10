import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowRight, FiStar } from 'react-icons/fi';

export default function Home() {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Tent', emoji: '⛺', color: 'bg-blue-500', count: '2,450' },
    { id: 2, name: 'Catering', emoji: '🍽️', color: 'bg-orange-500', count: '3,120' },
    { id: 3, name: 'Venue', emoji: '🏛️', color: 'bg-purple-500', count: '1,890' },
    { id: 4, name: 'Decoration', emoji: '🎨', color: 'bg-pink-500', count: '2,680' },
    { id: 5, name: 'DJ', emoji: '🎵', color: 'bg-red-500', count: '1,450' },
    { id: 6, name: 'Makeup', emoji: '💄', color: 'bg-rose-500', count: '2,120' },
    { id: 7, name: 'Photography', emoji: '📸', color: 'bg-cyan-500', count: '2,890' },
    { id: 8, name: 'Jewellery', emoji: '💎', color: 'bg-yellow-500', count: '980' },
    { id: 9, name: 'Transport', emoji: '🚗', color: 'bg-green-500', count: '1,560' },
    { id: 10, name: 'Staff', emoji: '👨‍💼', color: 'bg-indigo-500', count: '1,230' },
  ];

  const featuredVendors = [
    { id: 1, name: 'Royal Palace Venue', category: 'Venue', rating: 4.8, reviews: 245, image: '🏰', price: '₹50,000-2L' },
    { id: 2, name: 'Taj Catering', category: 'Catering', rating: 4.7, reviews: 189, image: '🍛', price: '₹500-1000/plate' },
    { id: 3, name: 'Golden Dreams Photography', category: 'Photography', rating: 4.9, reviews: 312, image: '📷', price: '₹30K-1L' },
    { id: 4, name: 'Glam & Shine Makeup', category: 'Makeup', rating: 4.6, reviews: 156, image: '💅', price: '₹3000-8000' },
    { id: 5, name: 'Sound Xtreme DJ', category: 'DJ', rating: 4.8, reviews: 198, image: '🎤', price: '₹15K-50K' },
    { id: 6, name: 'Floral Paradise Decoration', category: 'Decoration', rating: 4.7, reviews: 234, image: '🌹', price: '₹50K-2L' },
  ];

  const packages = [
    { name: 'Bronze', color: 'text-[#CD7F32]', price: '₹50,000', features: ['5 Vendors', '3 Events', 'Basic Planning', 'Email Support'] },
    { name: 'Silver', color: 'text-[#C0C0C0]', price: '₹1,50,000', features: ['15 Vendors', 'Full Year', 'Advanced Planning', 'Phone Support'] },
    { name: 'Gold', color: 'text-gold', price: '₹3,00,000', features: ['Unlimited Vendors', 'Multi-Event', 'AI Planner', '24/7 Support'] },
    { name: 'Platinum', color: 'text-white', bgGlow: 'bg-mehrun', price: '₹5,00,000', features: ['VIP Access', 'Dedicated Manager', 'Premium AI', 'White-Glove Service'] },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 glass-effect" style={{ backgroundImage: 'linear-gradient(135deg, rgba(128, 0, 32, 0.8) 0%, rgba(28, 28, 28, 0.9) 100%)' }}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="text-6xl md:text-8xl mb-4 animate-slideInDown">💒</div>
          <h1 className="h1-primary mb-4 animate-slideInUp text-white">
            Your Perfect Wedding Awaits
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            Discover thousands of trusted vendors, plan your big day with AI assistance, and manage everything in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <button onClick={() => navigate('/categories')} className="btn-gold">
              Explore Vendors <FiArrowRight className="inline ml-2" />
            </button>
            <button onClick={() => navigate('/ai-planner')} className="btn-mehrun">
              AI Wedding Planner
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
        <h2 className="h2-primary mb-8 text-center">What Would You Like To Do?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: '💳', label: 'Make Payment', path: '/checkout' },
            { icon: '👤', label: 'View Profile', path: '/dashboard/user' },
            { icon: '📦', label: 'Check Packages', path: '/packages' },
            { icon: '🤖', label: 'AI Planner', path: '/ai-planner' },
            { icon: '📅', label: 'My Bookings', path: '/dashboard/user' },
            { icon: '❓', label: 'Get Help', path: '/contact' },
          ].map((action, idx) => (
            <button
              key={idx}
              onClick={() => navigate(action.path)}
              className="glass-light group flex flex-col items-center justify-center py-6 rounded-xl hover:bg-white/20 transition duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition duration-300">{action.icon}</div>
              <span className="text-sm font-semibold text-mehrun">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Categories Slider */}
      <section className="px-4 md:px-8 py-16 bg-white/5 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-primary mb-2 text-center">Browse by Category</h2>
          <p className="text-center text-gray-600 mb-8">Find the perfect vendors for every aspect of your wedding</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => navigate(`/category/${cat.name}`)}
                className={`card-vendor group overflow-hidden transition duration-300 ${
                  hoveredCategory === cat.id ? 'ring-2 ring-gold' : ''
                }`}
              >
                <div className={`${cat.color} h-32 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300`}>
                  {cat.emoji}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-mehrun mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-600">{cat.count} vendors</p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/categories')}
              className="btn-mehrun"
            >
              View All Categories <FiArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <h2 className="h2-primary mb-2 text-center">⭐ Featured Vendors</h2>
        <p className="text-center text-gray-600 mb-12">Highly-rated vendors verified and loved by thousands</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVendors.map((vendor) => (
            <div
              key={vendor.id}
              onClick={() => navigate(`/vendor/${vendor.id}`)}
              className="card-vendor group overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
                {vendor.image}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-mehrun mb-2">{vendor.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{vendor.category}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-mehrun">{vendor.rating}</span>
                  <span className="text-xs text-gray-600">({vendor.reviews})</span>
                </div>
                <p className="text-gold font-semibold mb-4">{vendor.price}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/vendor/${vendor.id}`);
                  }}
                  className="w-full btn-mehrun"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-r from-mehrun/10 to-gold/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-primary mb-2 text-center">Choose Your Package</h2>
          <p className="text-center text-gray-600 mb-12">Flexible plans for every wedding size and budget</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`card-vendor group relative overflow-hidden ${pkg.bgGlow ? 'ring-2 ring-gold transform scale-105' : ''}`}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.color}`}>{pkg.name}</h3>
                    <p className="text-3xl font-bold text-mehrun mb-6">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-gold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/checkout')}
                    className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                      pkg.bgGlow
                        ? 'bg-mehrun text-white hover:bg-[#600018]'
                        : 'bg-mehrun/10 text-mehrun hover:bg-mehrun hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <div className="glass-effect rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Start with our AI Wedding Planner, explore vendors, and create the perfect celebration with our all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/ai-planner')} className="btn-gold">
              Get Started Now
            </button>
            <button onClick={() => navigate('/contact')} className="btn-outline">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 md:px-8 py-12 bg-mehrun/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-mehrun">15,000+</div>
            <p className="text-gray-700 mt-2">Verified Vendors</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-mehrun">50,000+</div>
            <p className="text-gray-700 mt-2">Happy Couples</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-mehrun">100+</div>
            <p className="text-gray-700 mt-2">Cities Covered</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-mehrun">4.8/5</div>
            <p className="text-gray-700 mt-2">Average Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}
