import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiFilter, FiSearch, FiGrid, FiList } from 'react-icons/fi';

export default function Categories() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    'All', 'Tent', 'Catering', 'Venue', 'Decoration', 'DJ',
    'Makeup', 'Photography', 'Jewellery', 'Transport', 'Staff'
  ];

  const vendors = [
    { id: 1, name: 'Royal Palace Venue', category: 'Venue', rating: 4.8, reviews: 245, price: 150000, image: '🏰', city: 'Delhi' },
    { id: 2, name: 'Taj Catering', category: 'Catering', rating: 4.7, reviews: 189, price: 75000, image: '🍛', city: 'Mumbai' },
    { id: 3, name: 'Golden Dreams Photography', category: 'Photography', rating: 4.9, reviews: 312, price: 100000, image: '📷', city: 'Bangalore' },
    { id: 4, name: 'Glam & Shine Makeup', category: 'Makeup', rating: 4.6, reviews: 156, price: 8000, image: '💅', city: 'Hyderabad' },
    { id: 5, name: 'Sound Xtreme DJ', category: 'DJ', rating: 4.8, reviews: 198, price: 50000, image: '🎤', city: 'Pune' },
    { id: 6, name: 'Floral Paradise Decoration', category: 'Decoration', rating: 4.7, reviews: 234, price: 200000, image: '🌹', city: 'Kolkata' },
    { id: 7, name: 'Premium Tent House', category: 'Tent', rating: 4.5, reviews: 127, price: 300000, image: '⛺', city: 'Delhi' },
    { id: 8, name: 'Elite Transport Services', category: 'Transport', rating: 4.6, reviews: 189, price: 25000, image: '🚗', city: 'Mumbai' },
    { id: 9, name: 'Star Staff Solutions', category: 'Staff', rating: 4.4, reviews: 95, price: 15000, image: '👨‍💼', city: 'Bangalore' },
    { id: 10, name: 'Diamond Jewellery Studio', category: 'Jewellery', rating: 4.9, reviews: 203, price: 500000, image: '💎', city: 'Delhi' },
    { id: 11, name: 'Beats & Harmony DJ', category: 'DJ', rating: 4.7, reviews: 167, price: 45000, image: '🎵', city: 'Hyderabad' },
    { id: 12, name: 'Canvas Photography', category: 'Photography', rating: 4.8, reviews: 278, price: 85000, image: '📸', city: 'Chennai' },
  ];

  const filteredVendors = vendors
    .filter(v => selectedCategory === 'All' || v.category === selectedCategory)
    .filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.city.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(v => v.price >= priceRange[0] && v.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Page Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Explore Vendors</h1>
          <p className="text-white/80">Find the perfect vendors for your wedding</p>
        </div>
      </div>

      {/* Filters & View Options */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-md">
            <FiSearch className="text-mehrun" size={20} />
            <input
              type="text"
              placeholder="Search vendors, cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-lg text-mehrun mb-4 flex items-center gap-2">
                <FiFilter /> Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-mehrun mb-3">Category</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer hover:bg-mehrun/5 p-2 rounded">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-mehrun mb-3">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="text-xs text-gray-600 mt-2">
                  ₹0 - ₹{priceRange[1].toLocaleString('en-IN')}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold text-mehrun mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none hover:border-mehrun"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Vendors Grid/List */}
          <div className="lg:col-span-3">
            {/* View Type Toggle & Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-700 font-semibold">
                Showing {filteredVendors.length} vendors
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType('grid')}
                  className={`p-2 rounded-lg transition duration-300 ${
                    viewType === 'grid'
                      ? 'bg-mehrun text-white'
                      : 'bg-white text-mehrun border border-mehrun'
                  }`}
                >
                  <FiGrid size={20} />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-2 rounded-lg transition duration-300 ${
                    viewType === 'list'
                      ? 'bg-mehrun text-white'
                      : 'bg-white text-mehrun border border-mehrun'
                  }`}
                >
                  <FiList size={20} />
                </button>
              </div>
            </div>

            {/* Vendors Display */}
            {viewType === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredVendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    onClick={() => navigate(`/vendor/${vendor.id}`)}
                    className="card-vendor group cursor-pointer"
                  >
                    <div className="h-40 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                      {vendor.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-mehrun mb-1">{vendor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{vendor.category} • {vendor.city}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-gold">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-mehrun">{vendor.rating} ({vendor.reviews})</span>
                      </div>
                      <p className="text-gold font-bold mb-3">₹{vendor.price.toLocaleString('en-IN')}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/vendor/${vendor.id}`);
                        }}
                        className="w-full btn-mehrun text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredVendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    onClick={() => navigate(`/vendor/${vendor.id}`)}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex gap-4 items-center"
                  >
                    <div className="text-5xl w-24 text-center">{vendor.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-mehrun mb-1">{vendor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{vendor.category} • {vendor.city}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex text-gold">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-mehrun">{vendor.rating} ({vendor.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold text-lg mb-3">₹{vendor.price.toLocaleString('en-IN')}</p>
                      <button className="btn-mehrun text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredVendors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No vendors found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setPriceRange([0, 500000]);
                  }}
                  className="btn-mehrun mt-4"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
