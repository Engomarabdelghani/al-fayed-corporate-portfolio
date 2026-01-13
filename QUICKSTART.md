# 🚀 Quick Start Guide

Get up and running with Al Fayed Portfolio in minutes!

## ⚡ 5-Minute Setup

### 1. Clone the Repository
```bash
git clone https://github.com/OmarAlfayed/al-fayed-portfolio.git
cd al-fayed-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your EmailJS credentials
# Open .env and replace:
# - VITE_EMAILJS_SERVICE_ID
# - VITE_EMAILJS_TEMPLATE_ID
# - VITE_EMAILJS_PUBLIC_KEY
```

**Get your EmailJS keys:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Create an account (free)
3. Create a new service and email template
4. Copy your Service ID, Template ID, and Public Key

### 4. Start Development Server
```bash
npm run dev
```

Your app is now running at `http://localhost:5173` ✅

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (check for errors)
npm run lint
```

## 🎨 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Section.jsx
│   └── SectionTitle.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── VisionMission.jsx
│   ├── Values.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── images/             # Image assets
├── PDFs/               # PDF documents
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🛠 Tech Stack Overview

| Technology | Purpose | Version |
|---|---|---|
| React | UI Library | 18.2 |
| Vite | Build Tool | 5.0 |
| Tailwind CSS | Styling | 3.3 |
| Framer Motion | Animations | 10.16 |
| React Router | Navigation | 6.20 |
| Lucide React | Icons | 0.294 |
| EmailJS | Email Service | 4.4 |

## 📝 Common Tasks

### Add a New Page

1. Create `src/pages/NewPage.jsx`:
```jsx
import { motion } from 'framer-motion'
import Section from '../components/Section'

export default function NewPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Section>
        {/* Your content here */}
      </Section>
    </motion.div>
  )
}
```

2. Add route in `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage'

// Inside <Routes>:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Navbar.jsx`

### Update Content

- **Text content:** Edit files in `src/pages/`
- **Colors:** Modify `tailwind.config.js`
- **Images:** Add to `src/images/` and import
- **Contact form:** Configure EmailJS in `.env`

### Add Styling

Use Tailwind CSS classes:

```jsx
<div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
  Styled with Tailwind!
</div>
```

### Add Animation

Use Framer Motion:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated element!
</motion.div>
```

## 🚨 Troubleshooting

### Port 5173 Already in Use
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### Dependencies Not Installed
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Check for syntax errors
npm run lint

# Clear build cache
rm -rf dist
npm run build
```

### EmailJS Not Working

1. Verify `.env` has correct keys
2. Test with: `npm run preview`
3. Check browser console for errors
4. Verify email template ID matches in component

## 📚 Learn More

- **React Docs:** https://react.dev
- **Vite Guide:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **EmailJS Docs:** https://www.emailjs.com/docs

## 🤝 Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

## 📦 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## ❓ Need Help?

- Check [README.md](README.md) for full documentation
- Review [GIT_STRATEGY.md](GIT_STRATEGY.md) for best practices
- Contact: [Create an issue](https://github.com/OmarAlfayed/al-fayed-portfolio/issues)

---

Happy coding! 🎉
