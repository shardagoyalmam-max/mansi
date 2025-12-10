# ShaadiBazaar - Assets

This folder contains all media assets for the platform:

## Images
- `vendors/` - Vendor profile images
- `categories/` - Category icons
- `banners/` - Homepage banners
- `gallery/` - Vendor gallery images

## Icons
- `svg/` - Custom SVG icons
- `favicons/` - Favicon files

## Videos
- `promo/` - Promotional videos
- `tutorials/` - How-to guide videos

## Documents
- `terms-conditions.pdf` - Terms of service
- `privacy-policy.pdf` - Privacy policy
- `vendor-guidelines.pdf` - Vendor onboarding guide

## Sample Data
- `sample-vendors.json` - Sample vendor data
- `sample-bookings.json` - Sample booking data

## Current Structure
All assets are served from this directory. In production:
1. Upload to CDN (AWS S3, CloudFront, or similar)
2. Update image URLs in frontend
3. Optimize images for web
4. Implement image compression
