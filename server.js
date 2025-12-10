const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

// Initialize Express App
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ==================== MOCK DATA ====================
const mockVendors = [
  { id: 1, name: "Royal Palace Venue", category: "Venue", city: "Delhi", price: 50000, rating: 4.8 },
  { id: 2, name: "Golden Dreams Photography", category: "Photography", city: "Delhi", price: 25000, rating: 4.9 },
  { id: 3, name: "Maharaja Catering", category: "Catering", city: "Mumbai", price: 35000, rating: 4.7 },
  { id: 4, name: "Sparkle Decoration", category: "Decoration", city: "Bangalore", price: 20000, rating: 4.6 },
  { id: 5, name: "DJ Beats", category: "DJ", city: "Delhi", price: 15000, rating: 4.8 },
];

const mockUsers = {};
const mockBookings = [];
const mockPayments = [];
const mockMessages = [];

// ==================== AUTH ENDPOINTS ====================
app.post('/api/auth/register', (req, res) => {
  const { email, password, role, name } = req.body;
  
  if (!email || !password || !role || !name) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const userId = Date.now().toString();
  mockUsers[userId] = { id: userId, email, name, role, createdAt: new Date() };
  
  res.status(201).json({
    message: 'User registered successfully',
    userId,
    user: mockUsers[userId],
    token: `token_${userId}`
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = Object.values(mockUsers).find(u => u.email === email);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({
    message: 'Login successful',
    user,
    token: `token_${user.id}`
  });
});

app.post('/api/auth/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

app.get('/api/auth/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const userId = token.replace('token_', '');
  const user = mockUsers[userId];

  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  res.json({ user, valid: true });
});

// ==================== VENDOR ENDPOINTS ====================
app.get('/api/vendors', (req, res) => {
  const { category, city, minPrice, maxPrice } = req.query;
  
  let filtered = mockVendors;

  if (category) {
    filtered = filtered.filter(v => v.category.toLowerCase() === category.toLowerCase());
  }
  if (city) {
    filtered = filtered.filter(v => v.city.toLowerCase() === city.toLowerCase());
  }
  if (minPrice) {
    filtered = filtered.filter(v => v.price >= parseInt(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(v => v.price <= parseInt(maxPrice));
  }

  res.json({ vendors: filtered, count: filtered.length });
});

app.get('/api/vendors/:id', (req, res) => {
  const vendor = mockVendors.find(v => v.id === parseInt(req.params.id));
  
  if (!vendor) {
    return res.status(404).json({ error: 'Vendor not found' });
  }

  res.json({
    ...vendor,
    gallery: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
    packages: [
      { id: 1, name: 'Basic', price: vendor.price, features: ['Basic service', 'Standard support'] },
      { id: 2, name: 'Premium', price: vendor.price * 1.5, features: ['Premium service', '24/7 support'] },
      { id: 3, name: 'Platinum', price: vendor.price * 2, features: ['All premium features', 'Custom packages'] }
    ],
    reviews: [
      { author: 'John', rating: 5, text: 'Excellent service!' },
      { author: 'Sarah', rating: 4.5, text: 'Great work and professional team' }
    ]
  });
});

app.get('/api/vendors/search', (req, res) => {
  const { q, category, city } = req.query;
  
  let results = mockVendors;

  if (q) {
    results = results.filter(v => v.name.toLowerCase().includes(q.toLowerCase()));
  }
  if (category) {
    results = results.filter(v => v.category.toLowerCase() === category.toLowerCase());
  }
  if (city) {
    results = results.filter(v => v.city.toLowerCase() === city.toLowerCase());
  }

  res.json({ vendors: results, count: results.length });
});

app.get('/api/vendors/:id/availability', (req, res) => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    dates.push({
      date: date.toISOString().split('T')[0],
      available: Math.random() > 0.3
    });
  }

  res.json({ vendorId: req.params.id, availability: dates });
});

// ==================== BOOKING ENDPOINTS ====================
app.post('/api/bookings', (req, res) => {
  const { vendorId, userId, date, amount, guestCount } = req.body;

  if (!vendorId || !userId || !date || !amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const booking = {
    id: Date.now().toString(),
    vendorId,
    userId,
    date,
    amount,
    guestCount: guestCount || 100,
    status: 'confirmed',
    createdAt: new Date()
  };

  mockBookings.push(booking);

  res.status(201).json({
    message: 'Booking created successfully',
    booking
  });
});

app.get('/api/bookings/:id', (req, res) => {
  const booking = mockBookings.find(b => b.id === req.params.id);
  
  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  res.json(booking);
});

app.get('/api/bookings/user/:userId', (req, res) => {
  const userBookings = mockBookings.filter(b => b.userId === req.params.userId);
  res.json({ bookings: userBookings, count: userBookings.length });
});

app.get('/api/bookings/vendor/:vendorId', (req, res) => {
  const vendorBookings = mockBookings.filter(b => b.vendorId === parseInt(req.params.vendorId));
  res.json({ bookings: vendorBookings, count: vendorBookings.length });
});

// ==================== PAYMENT ENDPOINTS ====================
app.post('/api/payments/initiate', (req, res) => {
  const { bookingId, amount, method } = req.body;

  if (!bookingId || !amount || !method) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const payment = {
    id: `pay_${Date.now()}`,
    bookingId,
    amount,
    method,
    status: 'pending',
    createdAt: new Date()
  };

  mockPayments.push(payment);

  res.json({
    message: 'Payment initiated',
    payment,
    paymentUrl: 'https://payment-gateway.example.com/pay'
  });
});

app.post('/api/payments/verify', (req, res) => {
  const { paymentId, transactionId } = req.body;

  const payment = mockPayments.find(p => p.id === paymentId);
  
  if (!payment) {
    return res.status(404).json({ error: 'Payment not found' });
  }

  payment.status = 'completed';
  payment.transactionId = transactionId;

  res.json({
    message: 'Payment verified successfully',
    payment
  });
});

app.get('/api/payments/:id', (req, res) => {
  const payment = mockPayments.find(p => p.id === req.params.id);
  
  if (!payment) {
    return res.status(404).json({ error: 'Payment not found' });
  }

  res.json(payment);
});

// ==================== USER ENDPOINTS ====================
app.get('/api/users/:id', (req, res) => {
  const user = mockUsers[req.params.id];
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

app.put('/api/users/:id', (req, res) => {
  const user = mockUsers[req.params.id];
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  Object.assign(user, req.body);
  res.json({ message: 'User updated', user });
});

// ==================== CHAT ENDPOINTS ====================
app.get('/api/messages/:vendorId', (req, res) => {
  const messages = mockMessages.filter(m => m.vendorId === parseInt(req.params.vendorId));
  res.json({ messages, count: messages.length });
});

app.post('/api/messages', (req, res) => {
  const { vendorId, userId, text } = req.body;

  const message = {
    id: Date.now().toString(),
    vendorId,
    userId,
    text,
    timestamp: new Date()
  };

  mockMessages.push(message);
  
  // Broadcast via Socket.io
  io.emit('new_message', message);

  res.status(201).json({ message });
});

// ==================== ADMIN ENDPOINTS ====================
app.get('/api/admin/dashboard', (req, res) => {
  res.json({
    totalVendors: mockVendors.length,
    totalUsers: Object.keys(mockUsers).length,
    totalBookings: mockBookings.length,
    totalRevenue: mockPayments.reduce((sum, p) => sum + (p.amount || 0), 0),
    activeBookings: mockBookings.filter(b => b.status === 'confirmed').length
  });
});

app.get('/api/admin/vendors', (req, res) => {
  res.json({ vendors: mockVendors, count: mockVendors.length });
});

app.get('/api/admin/users', (req, res) => {
  res.json({ users: Object.values(mockUsers), count: Object.keys(mockUsers).length });
});

app.get('/api/admin/orders', (req, res) => {
  res.json({ bookings: mockBookings, count: mockBookings.length });
});

// ==================== HEALTH CHECK ====================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/', (req, res) => {
  res.json({
    name: 'ShaadiBazaar Backend API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/api/health',
      docs: '/api/docs',
      auth: '/api/auth/*',
      vendors: '/api/vendors*',
      bookings: '/api/bookings*',
      payments: '/api/payments*',
      users: '/api/users*',
      messages: '/api/messages*',
      admin: '/api/admin/*'
    }
  });
});

// ==================== SOCKET.IO ====================
io.on('connection', (socket) => {
  console.log(`[Socket.io] User connected: ${socket.id}`);

  socket.on('send_message', (data) => {
    console.log(`[Chat] Message from ${socket.id}:`, data);
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`[Socket.io] User disconnected: ${socket.id}`);
  });
});

// ==================== ERROR HANDLING ====================
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found', path: req.path });
});

// ==================== START SERVER ====================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║     🎊 ShaadiBazaar Backend Started 🎊    ║
║                                            ║
╠════════════════════════════════════════════╣
║                                            ║
║  Server: http://localhost:${PORT}                  ║
║  Status: ✅ Running                        ║
║  Health: http://localhost:${PORT}/api/health   ║
║  Root: http://localhost:${PORT}/               ║
║                                            ║
╠════════════════════════════════════════════╣
║  API Endpoints Ready:                      ║
║  • Authentication (register/login)         ║
║  • Vendors (search, filter)                ║
║  • Bookings (create, manage)               ║
║  • Payments (initiate, verify)             ║
║  • Chat (messages, socket.io)              ║
║  • Admin (dashboard, analytics)            ║
║                                            ║
╚════════════════════════════════════════════╝
  `);
});
