import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="glass-effect text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">ShaadiBazaar</h3>
            <p className="text-white/70 text-sm mb-4">
              Your complete wedding marketplace with vendors, planning tools, and all wedding services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-white transition duration-300"><FaFacebook size={20} /></a>
              <a href="#" className="text-gold hover:text-white transition duration-300"><FaInstagram size={20} /></a>
              <a href="#" className="text-gold hover:text-white transition duration-300"><FaTwitter size={20} /></a>
              <a href="#" className="text-gold hover:text-white transition duration-300"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-gold transition duration-300">Home</Link></li>
              <li><Link to="/categories" className="text-white/70 hover:text-gold transition duration-300">Categories</Link></li>
              <li><Link to="/packages" className="text-white/70 hover:text-gold transition duration-300">Packages</Link></li>
              <li><Link to="/ai-planner" className="text-white/70 hover:text-gold transition duration-300">AI Planner</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-gold transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition duration-300">Contact</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-gold transition duration-300">Blog</Link></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📧 support@shaadiazaar.com</li>
              <li>📱 +91-1234567890</li>
              <li>🕐 24/7 Customer Support</li>
              <li>🌍 Pan-India Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 ShaadiBazaar. All Rights Reserved | <a href="#" className="text-gold hover:underline">Privacy Policy</a> | <a href="#" className="text-gold hover:underline">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
