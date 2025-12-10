import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated login - route based on user type
    if (userType === 'customer') {
      navigate('/dashboard/user');
    } else if (userType === 'vendor') {
      navigate('/dashboard/vendor');
    } else {
      navigate('/dashboard/admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with glass effect */}
          <div className="glass-effect text-white py-12 px-8 text-center">
            <div className="text-6xl mb-4">💒</div>
            <h1 className="text-3xl font-bold mb-2">ShaadiBazaar</h1>
            <p className="text-white/80">Your Wedding Marketplace</p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {/* User Type Selection */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-mehrun mb-3">Login as:</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'customer', label: 'Customer', icon: '👰' },
                  { value: 'vendor', label: 'Vendor', icon: '🏪' },
                  { value: 'admin', label: 'Admin', icon: '⚙️' },
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setUserType(type.value)}
                    className={`py-3 rounded-lg font-semibold transition duration-300 flex flex-col items-center gap-2 ${
                      userType === type.value
                        ? 'bg-mehrun text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="text-xs">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-4 text-mehrun" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20 transition duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-mehrun mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-4 text-mehrun" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-mehrun focus:ring-2 focus:ring-mehrun/20 transition duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-mehrun hover:text-gold transition duration-300"
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-gold hover:text-mehrun transition duration-300">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full btn-mehrun py-3 text-lg"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-mehrun hover:bg-mehrun/5 transition duration-300 flex items-center justify-center gap-2">
                🔵 Continue with Google
              </button>
              <button className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-mehrun hover:bg-mehrun/5 transition duration-300 flex items-center justify-center gap-2">
                f Continue with Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-700">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/')}
                className="text-gold hover:text-mehrun font-bold transition duration-300"
              >
                Sign Up Here
              </button>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-gold">
          <p className="font-bold text-mehrun mb-3">🧪 Demo Credentials:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Customer:</strong> demo@customer.com / password</p>
            <p><strong>Vendor:</strong> demo@vendor.com / password</p>
            <p><strong>Admin:</strong> admin@shaadi.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
}
