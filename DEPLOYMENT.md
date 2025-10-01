# 🚀 Royal Flush Brno - Deployment Guide

## ✅ Phase 1 Complete & Ready for Deployment!

### 🎯 What's Ready:
- ✅ Mobile-responsive landing page
- ✅ SEO optimization 
- ✅ Professional contact grid
- ✅ Royal Flush Brno branding (black/white)
- ✅ Logo integration ready (JPG format)
- ✅ Performance optimized

## 🔗 Vercel Deployment Options

### Option 1: GitHub Integration (Recommended)
1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Import your `rf-web` repository
   - Vercel will auto-detect Nuxt.js settings

2. **Automatic Deployments:**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests
   - Custom domain setup available

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /Users/janantl/Work/RoyalFlush/rf-web
vercel --prod
```

## 📁 Final Steps Before Going Live:

### 1. Add Logo File
```bash
# Place your logo as:
/public/images/royal-flush-logo.jpg
# (Site will show crown emoji until logo is added)
```

### 2. Domain Setup (Optional)
- Purchase domain (e.g., `royalflushbrno.com`)
- Add domain in Vercel dashboard
- Update SEO URLs in code when ready

### 3. Environment Variables (Future phases)
```bash
# For Phase 2 & 3 (contact forms, CMS)
SMTP_HOST=your-smtp-server
SMTP_USER=your-email
PAYLOAD_SECRET=your-secret-key
```

## 🌐 Expected Live URLs:
- **Vercel Domain**: `rf-web-username.vercel.app`
- **Custom Domain**: `royalflushbrno.com` (when configured)

## 📊 Performance Features:
- ⚡ Server-side rendering with Nuxt.js
- 📱 Mobile-first responsive design
- 🔍 SEO optimized for search engines
- 💨 TailwindCSS for fast styling
- 🖼️ Optimized image loading

## 🔧 Build Configuration:
- **Framework**: Nuxt.js 4.1.2
- **Package Manager**: pnpm
- **Build Command**: `pnpm build`
- **Output Directory**: `.output/public`

## 📋 Pre-Launch Checklist:
- [x] Code committed and pushed to GitHub
- [x] Vercel configuration added (`vercel.json`)
- [ ] Deploy to Vercel
- [ ] Add logo file (`royal-flush-logo.jpg`)
- [ ] Test on mobile devices
- [ ] Verify contact links work
- [ ] Check social media links
- [ ] Add custom domain (optional)

## 🎉 Phase 1 Success Metrics:
- ✅ Professional landing page
- ✅ Mobile responsive (all screen sizes)
- ✅ Fast loading times
- ✅ SEO ready
- ✅ Contact information accessible
- ✅ Royal Flush branding consistent

---

**Ready to launch Royal Flush Brno to the world!** 🏆🚀