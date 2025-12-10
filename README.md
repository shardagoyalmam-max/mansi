# 💒 ShaadiBazaar - Complete Wedding Marketplace Platform

A **full-featured, advanced, and future-ready wedding marketplace** built with React, Tailwind CSS, and modern web technologies. ShaadiBazaar connects couples with trusted vendors, provides AI-powered wedding planning tools, and manages every aspect of wedding organization.

## 🎯 Project Overview

ShaadiBazaar is a **complete wedding planning ecosystem** that includes:

### ✨ Key Features

#### 👰 **For Customers**
- **Home Page**: Hero banner, category slider, featured vendors, quick action buttons
- **Browse Vendors**: Grid/List view with advanced filters (price, location, rating, availability)
- **Vendor Details**: Gallery, packages, availability calendar, live map, chat/call features
- **Smart Cart**: Add services, edit quantities, date picker, address management
- **Checkout**: Multi-step process (Address → Payment → Confirmation)
- **AI Wedding Planner**: Budget suggestions, automated checklist, timeline, guest management
- **User Dashboard**: Bookings, wishlist, invoices, upcoming events
- **Package Plans**: Bronze/Silver/Gold/Platinum tiers with full feature comparison

#### 🏪 **For Vendors**
- **Vendor Dashboard**: Orders, payment tracking, calendar view, package management
- **Booking Management**: Accept/decline orders, manage availability
- **Payment Analytics**: Track revenue, pending payments, transaction history
- **Client Communications**: Built-in messaging system (placeholder for integration)

#### ⚙️ **For Admins**
- **Admin Dashboard**: Platform analytics, vendor management, order monitoring
- **Vendor Verification**: Status management (Active/Pending/Suspended)
- **Dispute Resolution**: Handle customer-vendor conflicts
- **Revenue Analytics**: Charts, trends, category distribution

#### 📚 **Content Pages**
- **About Us**: Mission, vision, core values, team, company journey
- **Contact**: Contact form, office details, FAQs, map placeholder
- **Blog**: 45+ articles with categorization, featured posts, newsletter signup
- **Login**: Multi-role authentication UI (Customer/Vendor/Admin)

### 🎨 Theme & Design

**Color Palette:**
- **Mehrun (Primary)**: `#800020` - Deep maroon for main actions
- **Gold (Accent)**: `#FFD700` - Luxury and highlights
- **Cream (Background)**: `#FFF8E7` - Warm, inviting background
- **Glass Dark**: `#1C1C1C` with transparency - Glass morphism effects

**Design Features:**
- ✅ Fully responsive (mobile-first approach)
- ✅ Glass morphism effects for modern UI
- ✅ Smooth animations and transitions
- ✅ Interactive buttons and hover effects
- ✅ Professional card layouts
- ✅ Accessible form inputs

### 🛍️ Wedding Service Categories

1. **Tent** - Wedding canopy & tent services
2. **Catering** - Food & beverage services
3. **Venue** - Wedding halls & outdoor spaces
4. **Decoration** - Floral & theme decorations
5. **DJ** - Music & entertainment
6. **Makeup** - Bridal & party makeup
7. **Photography** - Professional photographers
8. **Jewellery** - Wedding jewelry services
9. **Transport** - Vehicle & transportation
10. **Staff** - Hospitality & event staff

## 📁 Project Structure

```
mansi/
├── frontend/                    # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── CategoryServices.jsx
│   │   │   ├── VendorDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── AIPlanner.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── VendorDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Blog.jsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── utils/               # Utilities & helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .gitignore
├── backend/                     # Backend API (placeholder)
├── database/                    # Database schemas (placeholder)
└── assets/                      # Images, icons, media

```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git (optional)

### Installation

1. **Navigate to frontend directory:**
   ```bash
   cd mansi/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 💻 Technology Stack

### Frontend
- **React 18.2** - UI framework
- **React Router DOM 6.20** - Client-side routing
- **Tailwind CSS 3.3** - Utility-first CSS
- **Vite 5.0** - Fast build tool
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **Zustand** - State management (ready for integration)
- **Axios** - HTTP client (ready for API calls)
- **React Calendar** - Calendar component
- **Recharts** - Data visualization (ready for integration)

### Design
- Mobile-first responsive design
- Glass morphism UI components
- Smooth transitions and animations
- Professional color scheme
- Accessible form elements

## 📋 Pages & Routes

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero, categories, featured vendors, packages |
| Categories | `/categories` | Filter, search, grid/list view |
| Category Services | `/category/:name` | Services by category |
| Vendor Detail | `/vendor/:id` | Gallery, packages, calendar, chat |
| Cart | `/cart` | Cart management, pricing |
| Checkout | `/checkout` | 3-step checkout process |
| AI Planner | `/ai-planner` | Budget, checklist, timeline, AI chat |
| Packages | `/packages` | Package comparison, pricing |
| User Dashboard | `/dashboard/user` | Bookings, wishlist, invoices |
| Vendor Dashboard | `/dashboard/vendor` | Orders, payments, calendar |
| Admin Dashboard | `/dashboard/admin` | Analytics, vendor management |
| Login | `/login` | Multi-role authentication |
| About | `/about` | Company info, values, team |
| Contact | `/contact` | Contact form, FAQs |
| Blog | `/blog` | Articles, categories, pagination |

## 🎛️ Interactive Features

✅ **All buttons and links are interactive** with proper routing
✅ **Form inputs** for collecting user data (not submitted, ready for backend integration)
✅ **Tab switching** in dashboards
✅ **Filter & search** functionality with instant results
✅ **Modal & alert** placeholders for interactive flows
✅ **Hover effects** on all interactive elements
✅ **Cart management** with quantity adjustment
✅ **Date pickers** for event scheduling
✅ **Rating displays** and review counts
✅ **Payment method selection** (UPI, Card, Wallet, Field Executive)

## 🔄 API Integration Points

Ready for backend integration:
- **User Authentication** - `/auth/login`, `/auth/register`
- **Vendor Management** - `GET /vendors`, `POST /bookings`
- **Orders & Payments** - `POST /orders`, `PUT /payments`
- **Chat System** - WebSocket for live messaging
- **Maps** - Google Maps API for location display
- **Notifications** - Push notifications & emails
- **Analytics** - Dashboard data endpoints

## 🤖 AI Features

- **AI Budget Planner**: Smart budget distribution across categories
- **Vendor Recommendations**: AI-powered vendor suggestions
- **AI Chatbot**: Wedding planning assistant (placeholder)
- **Smart Checklist**: Auto-generated tasks based on timeline
- **Timeline Generator**: Month-by-month planning guide

## 💳 Payment Methods

- **UPI** - Indian payment system
- **Credit/Debit Card** - Card payments
- **Digital Wallet** - Wallet integration ready
- **Field Executive** - In-person payment collection

## 📊 Dashboard Analytics

- **User Dashboard**: Bookings status, spending, upcoming events
- **Vendor Dashboard**: Revenue, orders, ratings, payments
- **Admin Dashboard**: Platform metrics, vendor stats, dispute handling

## 🎁 Package Tiers

| Package | Price | Features |
|---------|-------|----------|
| Bronze | ₹50,000 | 5 categories, 3 bookings, basic support |
| Silver | ₹1,50,000 | All categories, AI budget, phone support |
| Gold | ₹3,00,000 | AI Planner, vendor chat, priority support |
| Platinum | ₹5,00,000 | VIP access, dedicated manager, white-glove service |

## 🔐 Demo Credentials

```
Customer: demo@customer.com / password
Vendor: demo@vendor.com / password
Admin: admin@shaadi.com / password
```

## 🚀 Future Enhancements

- [ ] Backend API integration (Node.js/Express or Django)
- [ ] Database implementation (MongoDB/PostgreSQL)
- [ ] Payment gateway integration (Razorpay/PayU)
- [ ] Real-time notifications
- [ ] Live chat with vendors
- [ ] Video consultations
- [ ] Mobile app (React Native)
- [ ] Advanced analytics & reports
- [ ] Email marketing automation
- [ ] SMS notifications
- [ ] Multiple language support
- [ ] Vendor rating & review system

## 📝 License

This project is created for ShaadiBazaar and all rights are reserved.

## 👨‍💻 Built By

Built with ❤️ for couples to make their wedding planning journey seamless and joyful.

---

**ShaadiBazaar** - Making Weddings Beautiful, Simple & Stress-Free! 💒✨
