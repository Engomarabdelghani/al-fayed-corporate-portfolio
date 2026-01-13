# Al Fayed Corporate Portfolio

A modern, responsive, and professional corporate portfolio website for **Al Fayed for Supplies, Import, Export & Contracting** — a trusted engineering solutions partner providing BIM services, advanced technologies, and academic support.

## 🎯 Project Overview

This website showcases Al Fayed as a strategic partner in engineering innovation and academic excellence. It highlights the company's services, expertise, values, and partnerships with leading Egyptian universities.

**Who It's For:**
- Universities and educational institutions
- Government entities and public organizations
- Corporate clients seeking engineering solutions
- Anyone looking for trusted BIM services and technical support

## 🌐 Live Demo

Coming soon... (deployment link will be added here)

## 🛠 Tech Stack

- **React 18.2** - UI library for building interactive components
- **Vite 5.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework for responsive design
- **Framer Motion** - Advanced animations and smooth transitions
- **React Router DOM 6.20** - Client-side routing for seamless navigation
- **Lucide React** - Beautiful, customizable SVG icons
- **EmailJS** - Client-side email service for contact forms
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

## ✨ Key Features

✅ **Modern & Professional UI/UX** - Corporate design with smooth animations and elegant hover effects  
✅ **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices  
✅ **High Performance** - Built with Vite for instant page loads and fast HMR  
✅ **SEO-Friendly** - Clean HTML structure and semantic markup  
✅ **Clean Component Architecture** - Reusable, maintainable React components  
✅ **Smooth Animations** - Framer Motion animations for enhanced user experience  
✅ **Professional Color Palette** - Navy blue, royal blue, and light blue accents with white and subtle gradients  
✅ **Contact Form Integration** - EmailJS integration for direct client inquiries  
✅ **Icon System** - Lucide React icons for consistent branding  

## 📸 Preview

### Pages Included:
- **Home** - Hero section with key statistics and CTAs
- **About** - Company overview and positioning
- **Vision & Mission** - Company vision and mission statements
- **Values** - Core values: Integrity, Relationships, Teamwork
- **Services** - Showcase of four main services (Consult, Supply, After-Sales, Training)
- **Experience** - Partner universities and collaborations
- **Contact** - Professional contact form with EmailJS integration

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Clone the Repository
```bash
git clone https://github.com/OmarAlfayed/al-fayed-portfolio.git
cd al-fayed-portfolio
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 📁 Folder Structure Overview

```
al-fayed-portfolio/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Section.jsx
│   │   └── SectionTitle.jsx
│   ├── pages/               # Page components for routing
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── VisionMission.jsx
│   │   ├── Values.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── images/              # Image assets
│   │   └── universities/
│   ├── PDFs/                # PDF documents
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
├── .gitignore               # Git ignore rules
├── LICENSE                  # MIT License
└── README.md                # This file
```

## 🔧 Configuration Files

- **vite.config.js** - Vite bundler and React plugin setup
- **tailwind.config.js** - Tailwind CSS theme and customizations
- **postcss.config.js** - PostCSS plugins (Tailwind, Autoprefixer)
- **.gitignore** - Files excluded from version control
- **package.json** - Project metadata and dependencies

## 🚀 Deployment

The project can be deployed to various platforms:

- **Vercel** - Recommended for React/Vite apps (free tier available)
- **Netlify** - Easy Git-based deployment
- **GitHub Pages** - Static site hosting
- **AWS S3 + CloudFront** - Scalable cloud solution

Deploy the contents of the `dist/` folder after running `npm run build`.

## 🎨 Customization

### Colors & Branding
- Primary colors are defined in `tailwind.config.js`
- Blue color palette: `#003366` (Navy), `#0047AB` (Royal), `#87CEEB` (Light Blue)

### Fonts & Typography
- Configured via Tailwind CSS
- Currently using system fonts; can be updated in `tailwind.config.js`

### Content Updates
- Page content is in `src/pages/*.jsx`
- Update university logos in `src/images/universities/`
- Modify service details in `src/pages/Services.jsx`

## 📋 Future Improvements

- [ ] Add multi-language support (Arabic/English)
- [ ] Implement backend CMS for dynamic content management
- [ ] Add blog section for industry insights
- [ ] Integrate analytics (Google Analytics, Mixpanel)
- [ ] Add testimonials section with client reviews
- [ ] Implement advanced filtering for university partnerships
- [ ] Add case studies and project portfolios
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance optimizations (image lazy loading, code splitting)
- [ ] Dark mode toggle
- [ ] Newsletter subscription integration

## 👨‍💼 Author

**Omar Alfayed**  
- GitHub: [@OmarAlfayed](https://github.com/OmarAlfayed)
- Portfolio: [Coming Soon]

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Omar Alfayed**

