import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    { icon: FiPhone, title: 'Call Us', info: '+91-1234567890', subinfo: 'Mon-Fri, 9AM-6PM IST' },
    { icon: FiMail, title: 'Email Us', info: 'support@shaadiazaar.com', subinfo: 'We reply within 24 hours' },
    { icon: FiMapPin, title: 'Visit Us', info: '123 Wedding Lane, Delhi', subinfo: 'Our office is open daily' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const faqs = [
    { q: 'How do I book a vendor?', a: 'Browse categories, select a vendor, choose a package, and proceed to checkout.' },
    { q: 'Is there a commission fee?', a: 'No hidden fees. All prices displayed are final except applicable taxes.' },
    { q: 'Can I cancel a booking?', a: 'Yes, cancellations are allowed within 7 days with full refund.' },
    { q: 'How does the AI Planner work?', a: 'Our AI analyzes your budget and guest count to suggest optimal spending distribution.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-white/80">We're here to help with your wedding planning journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
                <Icon className="text-5xl text-mehrun mx-auto mb-4" size={50} />
                <h3 className="font-bold text-lg text-mehrun mb-2">{item.title}</h3>
                <p className="font-semibold text-gray-700 mb-1">{item.info}</p>
                <p className="text-sm text-gray-600">{item.subinfo}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-mehrun mb-6">📝 Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-mehrun mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mehrun mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us your thoughts or concerns..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-mehrun flex items-center justify-center gap-2 py-3"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder & Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-mehrun mb-4">📍 Find Us</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">🗺️ Interactive Map Placeholder (Google Maps Ready)</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-mehrun text-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">🕐 Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <p className="text-white/70 text-sm pt-4">24/7 Support available for urgent matters</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-mehrun text-center mb-12">❓ Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-l-4 border-gold pl-6">
                <h4 className="font-bold text-mehrun mb-3">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
