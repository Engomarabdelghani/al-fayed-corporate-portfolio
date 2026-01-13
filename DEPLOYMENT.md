# 🚀 Deployment Guide

This guide covers deploying the Al Fayed Portfolio to various platforms.

## Pre-Deployment Checklist

- [ ] All environment variables configured (.env)
- [ ] Production build tested locally (`npm run build && npm run preview`)
- [ ] EmailJS credentials configured
- [ ] All images optimized
- [ ] SEO meta tags verified
- [ ] Mobile responsive design tested
- [ ] All links working correctly
- [ ] Contact form tested with EmailJS

## 1. Vercel (Recommended)

**Vercel** is the easiest option for React/Vite projects. It integrates seamlessly with GitHub.

### Steps:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Select your repository
4. Vercel auto-detects Vite settings
5. Add environment variables in project settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

**Time to deploy:** < 5 minutes  
**Cost:** Free tier available  
**Performance:** Excellent (CDN, auto-scaling)

---

## 2. Netlify

**Netlify** is another popular choice with great CI/CD integration.

### Steps:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variables
8. Click "Deploy"

**Time to deploy:** < 5 minutes  
**Cost:** Free tier available  
**Performance:** Excellent (Global CDN)

---

## 3. GitHub Pages

**GitHub Pages** is free and perfect for portfolio sites.

### Steps:

1. Update `vite.config.js`:
```javascript
export default {
  base: '/al-fayed-portfolio/', // repository name
  // ... rest of config
}
```

2. Add deployment script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

5. Go to GitHub → Settings → Pages → Set source to `gh-pages` branch

**URL:** `https://yourusername.github.io/al-fayed-portfolio`  
**Cost:** Free  
**Note:** May have slight delay on initial load

---

## 4. AWS S3 + CloudFront

**Best for:** Large-scale, high-traffic applications

### Steps:

1. Create S3 bucket
2. Enable static website hosting
3. Build project: `npm run build`
4. Upload `dist/` folder contents to S3
5. Create CloudFront distribution pointing to S3
6. Update Route 53 DNS (if using custom domain)

**Cost:** ~$5-20/month depending on traffic  
**Performance:** Enterprise-grade (99.99% uptime)

---

## 5. Traditional Hosting (cPanel, etc.)

### Steps:

1. Build project: `npm run build`
2. Connect via FTP/SFTP to your hosting
3. Upload entire contents of `dist/` folder to `public_html/`
4. Configure `.htaccess` for routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Cost:** Usually included in hosting plan  
**Performance:** Depends on provider

---

## Environment Variables for Production

Create `.env` file with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** Never commit `.env` file. Use platform-specific environment variable management.

---

## Performance Optimization

After deployment:

1. **Test Speed:** Use [Google PageSpeed Insights](https://pagespeed.web.dev)
2. **Monitor Performance:** Set up analytics
3. **Optimize Images:** Compress and use modern formats (WebP)
4. **Enable Caching:** Configure browser caching headers
5. **Use CDN:** Ensure static assets are cached globally

---

## Troubleshooting

### Blank Page After Deployment

- Check browser console for errors
- Verify environment variables are set
- Ensure `base` path is correct in `vite.config.js`

### Routes Not Working

- For traditional hosting, ensure `.htaccess` is configured
- For Vercel/Netlify, they handle routing automatically

### Contact Form Not Working

- Verify EmailJS credentials
- Check email template ID matches
- Test with: `npm run preview` locally first

### Images Not Loading

- Ensure image paths are relative
- Check image files were included in build
- Verify CORS settings if loading from external source

---

## Monitoring & Maintenance

1. Set up error tracking (Sentry, LogRocket)
2. Monitor performance with Web Vitals
3. Set up automated backups
4. Keep dependencies updated
5. Monitor uptime with status page tools

---

**Need help?** Check the README.md or contact Omar Alfayed
