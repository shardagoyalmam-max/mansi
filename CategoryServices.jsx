import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CategoryServices() {
  const { name } = useParams();
  const navigate = useNavigate();

  const vendorsByCat = {
    'Venue': [
      { id: 1, name: 'Royal Palace Venue', rating: 4.8, price: 150000, image: '🏰', city: 'Delhi', desc: 'Luxurious palace venue' },
      { id: 2, name: 'Grand Ballroom', rating: 4.7, price: 200000, image: '🏛️', city: 'Mumbai', desc: 'Modern ballroom facilities' },
    ],
    'Catering': [
      { id: 3, name: 'Taj Catering', rating: 4.7, price: 75000, image: '🍛', city: 'Mumbai', desc: 'Indian & Continental cuisine' },
      { id: 4, name: 'Royal Feast', rating: 4.6, price: 85000, image: '🍽️', city: 'Delhi', desc: 'Premium catering services' },
    ],
    'Photography': [
      { id: 5, name: 'Golden Dreams Photography', rating: 4.9, price: 100000, image: '📷', city: 'Bangalore', desc: 'Professional wedding photography' },
      { id: 6, name: 'Canvas Photography', rating: 4.8, price: 85000, image: '📸', city: 'Chennai', desc: 'Creative & candid shots' },
    ],
    'DJ': [
      { id: 7, name: 'Sound Xtreme DJ', rating: 4.8, price: 50000, image: '🎤', city: 'Pune', desc: 'High-energy DJ performances' },
      { id: 8, name: 'Beats & Harmony', rating: 4.7, price: 45000, image: '🎵', city: 'Hyderabad', desc: 'Professional DJ services' },
    ],
    'Makeup': [
      { id: 9, name: 'Glam & Shine Makeup', rating: 4.6, price: 8000, image: '💅', city: 'Hyderabad', desc: 'Bridal & party makeup' },
      { id: 10, name: 'Beauty Bliss', rating: 4.7, price: 10000, image: '💄', city: 'Bangalore', desc: 'Professional makeup services' },
    ],
    'Decoration': [
      { id: 11, name: 'Floral Paradise', rating: 4.7, price: 200000, image: '🌹', city: 'Kolkata', desc: 'Floral & theme decorations' },
      { id: 12, name: 'Dream Decorators', rating: 4.5, price: 150000, image: '🎨', city: 'Delhi', desc: 'Creative event decorations' },
    ],
  };

  const vendors = vendorsByCat[name] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate('/categories')} className="text-gold hover:underline mb-4">
            ← Back to Categories
          </button>
          <h1 className="text-4xl font-bold mb-2">{name} Services</h1>
          <p className="text-white/80">Find the best {name.toLowerCase()} vendors for your wedding</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {vendors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() => navigate(`/vendor/${vendor.id}`)}
                className="card-vendor group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-mehrun/20 to-gold/20 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
                  {vendor.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-mehrun mb-2">{vendor.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{vendor.desc}</p>
                  <p className="text-sm text-gray-600 mb-3">📍 {vendor.city}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gold">⭐ {vendor.rating}</span>
                  </div>
                  <p className="text-gold font-bold text-lg mb-4">₹{vendor.price.toLocaleString('en-IN')}</p>
                  <button className="w-full btn-mehrun">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">Category not found</p>
            <button onClick={() => navigate('/categories')} className="btn-mehrun">
              Back to Categories
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
