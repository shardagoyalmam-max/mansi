import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const steps = [
    { num: 1, name: 'Address', icon: '📍' },
    { num: 2, name: 'Payment', icon: '💳' },
    { num: 3, name: 'Confirm', icon: '✓' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Progress Steps */}
      <div className="glass-effect text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">🎉 Complete Your Booking</h1>
          <div className="flex justify-between items-center mb-8">
            {steps.map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition duration-300 ${
                    step >= s.num
                      ? 'bg-gold text-mehrun'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  {step > s.num ? <FiCheck size={24} /> : s.num}
                </div>
                <span className="ml-2 text-white/80">{s.name}</span>
                {s.num < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 transition duration-300 ${
                      step > s.num ? 'bg-gold' : 'bg-white/20'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Step 1: Address */}
        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-mehrun mb-6">📍 Event Details & Address</h2>

            <div className="space-y-6">
              {/* Event Date */}
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Wedding Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                />
              </div>

              {/* Guest Count */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-mehrun mb-2">Expected Guests *</label>
                  <input
                    type="number"
                    placeholder="200"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mehrun mb-2">Time Slot *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20">
                    <option>Morning (8 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 11 PM)</option>
                    <option>Full Day</option>
                  </select>
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Complete Address *</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20 mb-3"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                  />
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Special Requirements/Notes</label>
                <textarea
                  placeholder="Any special requests or requirements..."
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                ></textarea>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={() => navigate('/cart')}
                  className="btn-outline"
                >
                  ← Back to Cart
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="btn-mehrun flex items-center gap-2"
                >
                  Continue to Payment <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-mehrun mb-6">💳 Payment Method</h2>

            <div className="space-y-6">
              {/* Payment Methods */}
              <div className="space-y-3">
                {[
                  { id: 'upi', name: 'UPI Payment', icon: '📱' },
                  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
                  { id: 'wallet', name: 'Digital Wallet', icon: '👛' },
                  { id: 'field', name: 'Field Executive', icon: '👨‍💼' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full p-4 border-2 rounded-lg text-left transition duration-300 flex items-center gap-3 ${
                      paymentMethod === method.id
                        ? 'border-mehrun bg-mehrun/10'
                        : 'border-gray-300 hover:border-mehrun'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-semibold text-mehrun">{method.name}</span>
                  </button>
                ))}
              </div>

              {/* Payment Details */}
              <div className="bg-mehrun/10 rounded-lg p-6">
                {paymentMethod === 'upi' && (
                  <div>
                    <h3 className="font-bold text-mehrun mb-4">UPI Details</h3>
                    <input
                      type="text"
                      placeholder="Enter UPI ID (e.g., yourname@upi)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                    />
                  </div>
                )}
                {paymentMethod === 'card' && (
                  <div>
                    <h3 className="font-bold text-mehrun mb-4">Card Details</h3>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun mb-3"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                      />
                    </div>
                  </div>
                )}
                {paymentMethod === 'field' && (
                  <div>
                    <h3 className="font-bold text-mehrun mb-4">Field Executive Payment</h3>
                    <p className="text-gray-700 mb-4">Pay to our field executive who will visit you with a POS machine or card reader.</p>
                    <input
                      type="text"
                      placeholder="Preferred visiting time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
                    />
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-white border-2 border-mehrun/20 rounded-lg p-6">
                <h3 className="font-bold text-mehrun mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span>Royal Palace Venue (Premium)</span>
                    <span>₹150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Golden Dreams Photography</span>
                    <span>₹100,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold">
                    <span>Total Amount</span>
                    <span className="text-gold">₹275,000</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-mehrun flex items-center gap-2"
                >
                  Confirm Booking <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-8xl mb-6 animate-fadeInScale">🎉</div>
            <h2 className="text-3xl font-bold text-mehrun mb-4">Booking Confirmed!</h2>
            <p className="text-gray-700 mb-6">
              Your wedding services have been successfully booked. Check your email for confirmation details.
            </p>

            {/* Invoice Placeholder */}
            <div className="bg-mehrun/10 rounded-lg p-8 mb-8 text-left">
              <h3 className="font-bold text-mehrun mb-4">📄 Booking Invoice</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between border-b pb-2">
                  <span>Booking ID</span>
                  <span className="font-bold">WED-2025-00145</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Wedding Date</span>
                  <span className="font-bold">March 15, 2025</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Total Amount Paid</span>
                  <span className="font-bold text-gold">₹275,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="font-bold text-green-600">✓ Confirmed</span>
                </div>
              </div>
              <button className="w-full btn-gold">📥 Download Invoice PDF</button>
            </div>

            {/* Next Steps */}
            <div className="bg-gold/20 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-mehrun mb-4">📋 Next Steps:</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. You will receive a confirmation email shortly</li>
                <li>2. Vendors will contact you to confirm details</li>
                <li>3. Add more services from your dashboard</li>
                <li>4. Use AI Planner to manage your checklist</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/dashboard/user')}
                className="flex-1 btn-mehrun"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 btn-outline"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
