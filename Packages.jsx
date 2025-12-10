import { FiCheck } from 'react-icons/fi';

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: 'Bronze',
      color: 'text-[#CD7F32]',
      bgColor: 'from-[#CD7F32]/10 to-[#CD7F32]/5',
      price: '₹50,000',
      duration: '3 months',
      description: 'Perfect for intimate gatherings and small weddings',
      features: [
        'Browse up to 5 vendor categories',
        'Basic vendor filtering and search',
        '3 event bookings',
        'Simple planning checklist',
        'Email support',
        'Basic budget tracker',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 2,
      name: 'Silver',
      color: 'text-[#C0C0C0]',
      bgColor: 'from-[#C0C0C0]/10 to-[#C0C0C0]/5',
      price: '₹1,50,000',
      duration: '6 months',
      description: 'Ideal for medium-sized weddings with full planning',
      features: [
        'Browse all 10 vendor categories',
        'Advanced filtering & recommendations',
        'Unlimited event bookings',
        'Detailed planning checklist',
        'AI budget suggestions',
        'Guest management tools',
        'Phone & email support',
        'Timeline planning',
      ],
      cta: 'Choose Silver',
      popular: false,
    },
    {
      id: 3,
      name: 'Gold',
      color: 'text-gold',
      bgColor: 'from-gold/10 to-gold/5',
      price: '₹3,00,000',
      duration: '12 months',
      description: 'Complete wedding planning with AI assistance',
      features: [
        'All Silver features included',
        'AI Wedding Planner with budget automation',
        'Vendor recommendation engine',
        'Live vendor chatting',
        'Vendor availability calendar',
        'Payment tracking & reminders',
        'Invoice management',
        'Multi-event support',
        'Priority 24/7 support',
        'Wedding day checklist app',
      ],
      cta: 'Choose Gold',
      popular: true,
    },
    {
      id: 4,
      name: 'Platinum',
      color: 'text-white',
      bgColor: 'from-mehrun/20 to-mehrun/10',
      price: '₹5,00,000',
      duration: '18 months',
      description: 'VIP experience with white-glove planning service',
      features: [
        'All Gold features included',
        'Dedicated wedding planner',
        'VIP vendor access & priority booking',
        'Custom vendor recommendations',
        'Complimentary vendor negotiation',
        'Wedding day coordination',
        'Vendor dispute resolution',
        'Premium analytics & insights',
        'Video consultation support',
        'Family group access',
        'Post-wedding services (1 year)',
        'Exclusive vendor network',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">💎 Choose Your Plan</h1>
          <p className="text-white/80 text-lg">Select the perfect package for your wedding needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition duration-300 transform hover:scale-105 ${
                pkg.popular ? 'ring-4 ring-gold shadow-2xl lg:scale-105' : 'card-vendor'
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${pkg.bgColor} opacity-50`}
              ></div>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gold text-mehrun px-4 py-2 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-3xl font-bold mb-2 ${pkg.color}`}>{pkg.name}</h3>
                  <p className="text-4xl font-bold text-mehrun mb-1">{pkg.price}</p>
                  <p className="text-xs text-gray-600">Valid for {pkg.duration}</p>
                  <p className="text-sm text-gray-700 mt-4">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-1">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <FiCheck className={`min-w-fit mt-0.5 ${pkg.color}`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                    pkg.popular
                      ? 'bg-mehrun text-white hover:bg-[#600018]'
                      : 'bg-mehrun/20 text-mehrun hover:bg-mehrun hover:text-white'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-mehrun">Detailed Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-mehrun/10 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold text-mehrun">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-[#CD7F32]">Bronze</th>
                  <th className="px-6 py-4 text-center font-bold text-[#C0C0C0]">Silver</th>
                  <th className="px-6 py-4 text-center font-bold text-gold">Gold</th>
                  <th className="px-6 py-4 text-center font-bold text-mehrun">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Vendor Categories', bronze: '5', silver: '10', gold: '10', platinum: '10' },
                  { feature: 'Vendor Bookings', bronze: '3', silver: 'Unlimited', gold: 'Unlimited', platinum: 'Unlimited' },
                  { feature: 'AI Budget Planner', bronze: '❌', silver: '✓', gold: '✓', platinum: '✓' },
                  { feature: 'Live Chat with Vendors', bronze: '❌', silver: '❌', gold: '✓', platinum: '✓' },
                  { feature: 'Dedicated Planner', bronze: '❌', silver: '❌', gold: '❌', platinum: '✓' },
                  { feature: 'Priority Support', bronze: 'Email', silver: 'Email/Phone', gold: '24/7', platinum: '24/7 VIP' },
                  { feature: 'Payment Tracking', bronze: '❌', silver: '✓', gold: '✓', platinum: '✓' },
                  { feature: 'Wedding Day App', bronze: '❌', silver: '❌', gold: '✓', platinum: '✓' },
                  { feature: 'Post-Wedding Services', bronze: '❌', silver: '❌', gold: '❌', platinum: '1 Year' },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.bronze}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.silver}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.gold}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-mehrun text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade anytime and pay the difference' },
              { q: 'Is there a money-back guarantee?', a: 'We offer 7-day money-back guarantee if not satisfied' },
              { q: 'Do I get a refund if I cancel?', a: 'Refunds available within 30 days of purchase' },
              { q: 'What support hours do you have?', a: 'Gold & Platinum plans have 24/7 support available' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <h4 className="font-bold text-mehrun mb-3">❓ {item.q}</h4>
                <p className="text-gray-700 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
