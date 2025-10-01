# Royal Flush Soccer Club Website

[![Nuxt](https://img.shields.io/badge/Nuxt-4.1.2-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

A modern, mobile-friendly website for Royal Flush Soccer Club - Home of Champions. Built with Nuxt.js and designed to showcase multiple teams from U8 to Veterans.

## 🚀 Project Status: Phase 1 Complete

### ✅ Phase 1: Static Landing Page (COMPLETE)
- [x] Mobile-friendly responsive design
- [x] SEO optimized with proper meta tags and structured data
- [x] Club logo integration (placeholder ready)
- [x] Contact information display
- [x] Team categories showcase
- [x] Professional styling with TailwindCSS
- [x] Fast loading performance
- [x] Accessibility features

### 🔄 Phase 2: Enhanced Club Information (UPCOMING)
- [ ] About page with club history
- [ ] Contact form functionality
- [ ] Site navigation
- [ ] Additional club information sections

### 🔄 Phase 3: Payload CMS Integration (PLANNED)
- [ ] Payload CMS setup
- [ ] Dynamic team pages
- [ ] Content management system
- [ ] Admin interface

## 🏗️ Technology Stack

- **Frontend**: Nuxt.js 4.1.2 (Vue 3)
- **Styling**: TailwindCSS
- **Hosting**: Vercel
- **Package Manager**: pnpm
- **Type Safety**: TypeScript

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rf-web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000` (or next available port)

### Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate
```

## 🏆 Team Structure

Royal Flush Soccer Club manages teams across all age groups and skill levels:

### Youth Teams
- U8, U11, U13, U15, U17, U19

### Senior Teams  
- A Team, B Team, C Team, D Team

### Veterans Teams
- Veterans A, Veterans B

### Women's Teams
- Women A, Women B

## 📱 Features

### Mobile-First Design
- Responsive layout optimized for all screen sizes
- Touch-friendly navigation and interactions
- Optimized images and fast loading times

### SEO Optimization
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (Schema.org) for search engines
- Semantic HTML structure

### Performance
- Server-side rendering with Nuxt.js
- Optimized images and assets
- Minimal JavaScript bundle size
- Fast Core Web Vitals scores

## 🎨 Design System

### Color Palette
- Primary Blue: `#1e3a8a` to `#3b82f6`
- Accent Red: `#dc2626`
- Text: `#1a1a1a`
- Background: `#ffffff`

### Typography
- Font Family: Inter (system fallback)
- Mobile-first responsive sizing
- Clear hierarchy and readability

## 📁 Project Structure

```
rf-web/
├── app/
│   ├── pages/
│   │   └── index.vue          # Homepage
│   ├── layouts/
│   └── components/
├── public/
│   └── images/
│       └── (logo files here)
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # TailwindCSS config
└── package.json
```

## 🔧 Configuration

### Nuxt Configuration
The project uses Nuxt.js with TailwindCSS module for styling. Key configurations:

- **Modules**: `@nuxtjs/tailwindcss`
- **SEO**: Comprehensive meta tags and structured data
- **Performance**: Optimized build settings

### Logo Setup
To add the Royal Flush logo:
1. Place the logo image as `royal-flush-logo.jpg` in `/public/images/`
2. The homepage will automatically display it
3. Recommended size: 300x300px or larger (will be responsive)

## 📞 Contact Information

- **Email**: info@royalflush.cz
- **Phone**: +420 123 456 789
- **Location**: Brno, Czech Republic
- **Training**: Professional coaching for all levels

## 🚀 Deployment

### Vercel Deployment
The project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
npx vercel --prod

# Or connect your GitHub repository to Vercel for automatic deployments
```

### Environment Variables (For Future Phases)
```env
# Payload CMS (Phase 3)
PAYLOAD_SECRET=your-secret-key
DATABASE_URI=your-database-connection

# Email Configuration (Phase 2)
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile and desktop
5. Submit a pull request

## 📄 License

© 2025 Royal Flush Soccer Club. All rights reserved.

---

**Royal Flush Soccer Club** - Where Champions are Made 🏆
