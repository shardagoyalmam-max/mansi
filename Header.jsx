import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const navigate = useNavigate();

  const quickActions = [
    { icon: '💳', label: 'Payment', path: '/checkout' },
    { icon: '👤', label: 'Profile', path: '/dashboard/user' },
    { icon: '📦', label: 'Packages', path: '/packages' },
    { icon: '🤖', label: 'AI Planner', path: '/ai-planner' },
    { icon: '📅', label: 'Bookings', path: '/dashboard/user' },
    { icon: '❓', label: 'Help', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect text-white shadow-glass border-b border-white/20">
      {/* Quick Action Bar */}
      <div className="hidden md:flex justify-around items-center py-2 px-4 bg-mehrun/20 backdrop-blur-md border-b border-white/10">
        {quickActions.map((action, idx) => (
          <button
            key={idx}
            onClick={() => navigate(action.path)}
            className="flex items-center gap-2 px-3 py-1 hover:bg-white/10 rounded transition duration-300 text-sm"
          >
            <span className="text-lg">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>

      {/* Main Header */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-mehrun rounded-full flex items-center justify-center text-gold font-bold text-xl">
            💒
          </div>
          <span className="font-bold text-xl hidden sm:inline text-gold">ShaadiBazaar</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex flex-1 mx-8 max-w-md">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 w-full">
            <FiSearch className="text-gold" />
            <input
              type="text"
              placeholder="Search vendors, services..."
              className="bg-transparent flex-1 outline-none placeholder-white/50 text-white text-sm"
            />
          </div>
        </div>

        {/* Center - Date Picker */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
          <FaCalendarAlt className="text-gold" />
          <input
            type="date"
            className="bg-transparent outline-none text-white text-sm"
          />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 rounded-lg border border-gold text-gold hover:bg-gold/20 transition duration-300 text-sm"
            >
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-gold text-mehrun font-semibold hover:bg-[#E6C200] transition duration-300 text-sm">
              Sign Up
            </button>
          </div>

          {/* Cart Icon */}
          <button
            onClick={() => navigate('/cart')}
            className="relative p-2 hover:bg-white/10 rounded-lg transition duration-300"
          >
            <FiShoppingCart className="text-xl text-gold" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-mehrun text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Icon */}
          <button
            onClick={() => navigate('/dashboard/user')}
            className="p-2 hover:bg-white/10 rounded-lg transition duration-300 hidden sm:block"
          >
            <FiUser className="text-xl text-gold" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition duration-300"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 p-4 space-y-2">
          <Link to="/" className="block px-4 py-2 hover:bg-white/10 rounded transition duration-300">
            Home
          </Link>
          <Link to="/categories" className="block px-4 py-2 hover:bg-white/10 rounded transition duration-300">
            Categories
          </Link>
          <Link to="/ai-planner" className="block px-4 py-2 hover:bg-white/10 rounded transition duration-300">
            AI Planner
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-white/10 rounded transition duration-300">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-white/10 rounded transition duration-300">
            Contact
          </Link>
          <div className="flex gap-2 pt-2">
            <button className="flex-1 px-4 py-2 rounded-lg border border-gold text-gold hover:bg-gold/20 transition duration-300">
              Login
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-gold text-mehrun font-semibold hover:bg-[#E6C200] transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
