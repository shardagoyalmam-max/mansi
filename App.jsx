import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryServices from './pages/CategoryServices';
import VendorDetail from './pages/VendorDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AIPlanner from './pages/AIPlanner';
import Packages from './pages/Packages';
import UserDashboard from './pages/UserDashboard';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:name" element={<CategoryServices />} />
            <Route path="/vendor/:id" element={<VendorDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ai-planner" element={<AIPlanner />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/vendor" element={<VendorDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
