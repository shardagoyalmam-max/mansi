/**
 * ShaadiBazaar Database Schema
 * 
 * Database: MongoDB (Recommended) / PostgreSQL
 * 
 * COLLECTIONS/TABLES:
 * 
 * 1. USERS
 *    - _id, name, email, password (hashed), phone, avatar
 *    - userType (customer/vendor), city, address
 *    - wishlist [], createdAt, updatedAt
 * 
 * 2. VENDORS
 *    - _id, name, category, description, rating, reviews
 *    - email, phone, address, city, mapLocation
 *    - packages [], availability {}, images [], verified
 *    - bankDetails, taxId, documents, createdAt
 * 
 * 3. BOOKINGS
 *    - _id, vendorId, userId, packageId
 *    - eventDate, guestCount, totalAmount, status
 *    - paymentStatus, eventAddress, specialRequests
 *    - createdAt, updatedAt, confirmedAt
 * 
 * 4. PAYMENTS
 *    - _id, bookingId, userId, vendorId
 *    - amount, method (upi/card/wallet/cash)
 *    - transactionId, status, receipt
 *    - createdAt, paidAt
 * 
 * 5. PACKAGES
 *    - _id, vendorId, name, description
 *    - price, features [], capacity, duration
 *    - createdAt, updatedAt
 * 
 * 6. MESSAGES
 *    - _id, senderId, receiverId, vendorId, userId
 *    - message, images [], timestamp, read
 * 
 * 7. REVIEWS & RATINGS
 *    - _id, vendorId, userId, bookingId
 *    - rating (1-5), review, images []
 *    - createdAt, updatedAt
 * 
 * 8. WISHLIST
 *    - _id, userId, vendorId
 *    - addedAt
 * 
 * 9. ADMIN_LOGS
 *    - _id, adminId, action, targetType, targetId
 *    - description, timestamp
 * 
 * 10. SETTINGS
 *    - platformFee, taxRate, commissionRate
 *    - categories, cities, paymentMethods
 * 
 * INDEXES:
 * - users: email (unique), city
 * - vendors: category, city, verified, rating
 * - bookings: userId, vendorId, status, eventDate
 * - payments: bookingId, userId, status, createdAt
 * - messages: senderId, receiverId, timestamp
 */

console.log("📊 ShaadiBazaar Database Schema - Ready for setup");
console.log("🔧 Use MongoDB Atlas or PostgreSQL for production");
