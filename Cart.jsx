import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Royal Palace Venue',
      category: 'Venue',
      package: 'Premium',
      price: 150000,
      quantity: 1,
      image: '🏰',
    },
    {
      id: 2,
      name: 'Golden Dreams Photography',
      category: 'Photography',
      package: 'Standard',
      price: 100000,
      quantity: 1,
      image: '📷',
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty > 0) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Page Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">🛒 Shopping Cart</h1>
          <p className="text-white/80 mt-2">Review and modify your wedding services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-mehrun mb-6">Cart Items ({cartItems.length})</h2>

              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex gap-4 items-start">
                    <div className="text-6xl">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-mehrun mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.category} • {item.package} Package
                      </p>
                      <p className="text-gold font-bold mb-4">₹{item.price.toLocaleString('en-IN')}</p>

                      {/* Date Picker for Item */}
                      <div className="mb-4">
                        <input
                          type="date"
                          className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-mehrun text-sm"
                        />
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-gray-600">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-mehrun/10 transition duration-300"
                          >
                            <FiMinus size={18} />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-mehrun/10 transition duration-300"
                          >
                            <FiPlus size={18} />
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition duration-300"
                        >
                          <FiTrash2 /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-mehrun">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        {item.quantity} × ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <button
                onClick={() => navigate('/categories')}
                className="text-mehrun hover:text-gold transition duration-300 mt-4"
              >
                ← Continue Shopping
              </button>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-20">
                <h2 className="text-2xl font-bold text-mehrun mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>GST (18%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Booking Fee</span>
                    <span className="font-semibold">₹500</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="font-bold text-mehrun">Total Amount</span>
                  <span className="font-bold text-gold text-2xl">₹{(total + 500).toLocaleString('en-IN')}</span>
                </div>

                {/* Address Input */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-mehrun mb-2">📍 Event Address</label>
                  <textarea
                    placeholder="Enter your event venue address..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun text-sm"
                    rows="3"
                  ></textarea>
                </div>

                {/* Proceed to Checkout */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full btn-mehrun flex items-center justify-center gap-2 mb-4"
                >
                  Proceed to Checkout <FiArrowRight />
                </button>

                {/* Save for Later */}
                <button className="w-full btn-outline">💾 Save for Later</button>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-gold text-sm mb-2"
                  />
                  <button className="w-full py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-mehrun transition duration-300 text-sm font-semibold">
                    Apply Promo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold text-mehrun mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Start adding your favorite wedding vendors!</p>
            <button onClick={() => navigate('/categories')} className="btn-mehrun">
              Browse Vendors
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
