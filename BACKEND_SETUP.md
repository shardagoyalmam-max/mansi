# 🚀 Backend Server Setup Guide

## Prerequisites

Node.js 16+ اور npm 8+ install karna zaroori hai۔

### macOS میں Node.js Install کریں:

```bash
# Method 1: Homebrew استعمال کریں (if installed)
brew install node

# Method 2: Direct download
# https://nodejs.org/ سے latest LTS version download کریں
# پھر installer چلائیں
```

### Windows میں:
- https://nodejs.org/ سے download اور install کریں

### Linux میں:
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

---

## Installation Steps

### 1. Dependencies Install کریں

```bash
cd /Users/bhavyagedar/mansi/backend
npm install
```

یہ تمام packages install کرے گا:
- express (server framework)
- socket.io (real-time chat)
- cors (cross-origin support)
- dotenv (environment variables)
- اور سب کچھ...

### 2. Environment Setup

```bash
# .env file کو setup کریں
cp .env.example .env

# اپنی keys add کریں
nano .env
```

---

## Running the Server

### Development Mode (with auto-restart):

```bash
cd /Users/bhavyagedar/mansi/backend
npm run dev
```

**Output ہوگی:**
```
🎊 ShaadiBazaar Backend Started 🎊

Server: http://localhost:5000
Status: ✅ Running
Health: http://localhost:5000/api/health
```

### Production Mode:

```bash
npm start
```

---

## Testing Server

Server چلانے کے بعد یہ URLs test کریں:

### Basic Health Check:
```bash
curl http://localhost:5000/api/health
```

Expected Output:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-11T10:30:00.000Z",
  "uptime": 1234.56,
  "environment": "development"
}
```

### Root Endpoint:
```bash
curl http://localhost:5000/
```

### Vendor List:
```bash
curl http://localhost:5000/api/vendors
```

### Register User:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "role": "customer"
  }'
```

---

## Available Endpoints

### 🔐 Authentication
- `POST /api/auth/register` - Register نیا user
- `POST /api/auth/login` - Login کریں
- `POST /api/auth/logout` - Logout کریں
- `GET /api/auth/verify` - Token verify کریں

### 🏢 Vendors
- `GET /api/vendors` - تمام vendors دیکھیں
- `GET /api/vendors/:id` - Vendor کی details
- `GET /api/vendors/search` - Vendor search کریں
- `GET /api/vendors/:id/availability` - Availability دیکھیں

### 📅 Bookings
- `GET /api/bookings/:id` - Booking details
- `POST /api/bookings` - Booking بنائیں
- `GET /api/bookings/user/:userId` - User کی bookings
- `GET /api/bookings/vendor/:vendorId` - Vendor کی bookings

### 💰 Payments
- `POST /api/payments/initiate` - Payment شروع کریں
- `POST /api/payments/verify` - Payment verify کریں
- `GET /api/payments/:id` - Payment details

### 👤 Users
- `GET /api/users/:id` - User profile
- `PUT /api/users/:id` - Profile update کریں

### 💬 Chat
- `GET /api/messages/:vendorId` - Messages دیکھیں
- `POST /api/messages` - Message بھیجیں

### 👨‍💼 Admin
- `GET /api/admin/dashboard` - Analytics
- `GET /api/admin/vendors` - Vendors manage کریں
- `GET /api/admin/users` - Users دیکھیں
- `GET /api/admin/orders` - Orders دیکھیں

---

## Troubleshooting

### Error: "PORT 5000 already in use"
```bash
# Port check کریں
lsof -i :5000

# یا دوسری port استعمال کریں
PORT=5001 npm run dev
```

### Error: "Module not found"
```bash
# Dependencies دوبارہ install کریں
rm -rf node_modules package-lock.json
npm install
```

### Error: "Cannot find module 'socket.io'"
```bash
# socket.io install کریں
npm install socket.io
```

---

## Frontend Integration

Frontend سے API call کریں:

```javascript
// Example: Vendors fetch کریں
const response = await fetch('http://localhost:5000/api/vendors');
const data = await response.json();
console.log(data);
```

**CORS Enabled ہے ✅**
```
Origin: http://localhost:3000 (Frontend)
Allowed Methods: GET, POST, PUT, DELETE
```

---

## Next Steps

1. **Database Connect کریں:**
   - MongoDB setup کریں
   - Connection string .env میں add کریں

2. **Authentication Implement کریں:**
   - JWT tokens
   - Password hashing
   - Refresh tokens

3. **Payment Gateway Integration:**
   - Razorpay یا Stripe
   - Payment verification

4. **Real-time Features:**
   - Socket.io chat
   - Live notifications
   - Status updates

---

## Monitoring

### Server Logs:
```bash
# Real-time logs دیکھیں
npm run dev
```

### Health Endpoint:
```bash
watch -n 1 'curl -s http://localhost:5000/api/health'
```

---

## Commands Cheat Sheet

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production mode
npm start

# Test API
curl http://localhost:5000/api/health

# Check processes
lsof -i :5000
```

---

## Support

اگر کوئی مسئلہ ہو تو:
1. Logs check کریں
2. Port available ہے کہاں دیکھیں
3. Dependencies properly install ہیں
4. Node version check کریں (16+)

Happy Coding! 🎉
