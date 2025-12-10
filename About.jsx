import { FiCheckCircle, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';

export default function About() {
  const values = [
    { icon: FiHeart, title: 'Passion', desc: 'We love helping couples create unforgettable moments' },
    { icon: FiUsers, title: 'Community', desc: 'Building a trusted network of vendors and customers' },
    { icon: FiTrendingUp, title: 'Innovation', desc: 'Leveraging AI to simplify wedding planning' },
    { icon: FiCheckCircle, title: 'Quality', desc: 'Ensuring excellence in every service' },
  ];

  const team = [
    { name: 'Arjun Singh', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'CTO', emoji: '👩‍💻' },
    { name: 'Rahul Verma', role: 'VP Operations', emoji: '👨‍💼' },
    { name: 'Ananya Mishra', role: 'Head of Marketing', emoji: '👩‍💼' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Hero */}
      <div className="glass-effect text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About ShaadiBazaar</h1>
          <p className="text-xl text-white/80">Making weddings beautiful, simple, and stress-free</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-mehrun mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower couples to plan their dream wedding with confidence by connecting them with trusted vendors, 
              providing intelligent planning tools, and delivering exceptional experiences at every step of their journey.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-mehrun mb-4">👁️ Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted wedding marketplace, where quality vendors and happy couples come together 
              to create magical moments that last a lifetime. We envision a future where wedding planning is joyful, 
              transparent, and accessible to everyone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-mehrun text-center mb-12">💡 Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
                  <Icon className="text-4xl text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-lg text-mehrun mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-mehrun text-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">📊 By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">15,000+</div>
              <p className="text-white/80">Verified Vendors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">50,000+</div>
              <p className="text-white/80">Happy Couples</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">100+</div>
              <p className="text-white/80">Cities Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">₹500Cr+</div>
              <p className="text-white/80">Transaction Value</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-mehrun text-center mb-12">👥 Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-lg text-mehrun mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-mehrun text-center mb-12">🚀 Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2020', milestone: 'ShaadiBazaar Founded', desc: 'Started with a mission to revolutionize wedding planning in India' },
              { year: '2021', milestone: 'First 10,000 Weddings', desc: 'Reached a milestone of helping plan 10,000+ weddings' },
              { year: '2022', milestone: 'AI Planner Launch', desc: 'Introduced AI Wedding Planner for intelligent budget suggestions' },
              { year: '2023', milestone: 'Pan-India Expansion', desc: 'Extended services to 100+ cities across India' },
              { year: '2025', milestone: 'Market Leader', desc: 'Became India\'s most trusted wedding marketplace platform' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="min-w-fit">
                  <div className="w-24 h-24 bg-gradient-mehrun text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.year}
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="font-bold text-lg text-mehrun mb-2">{item.milestone}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
