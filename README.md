# Portfolio Website - Prarthana Majalikar

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Skills Section**: Clickable skill tiles with modal details
- **SEO Optimized**: Meta tags, semantic HTML, and optimal performance
- **Clean Code**: Modular components, TypeScript for type safety
- **Production Ready**: Optimized for Netlify deployment

## 📦 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Update Personal Information

Edit `/lib/data.ts` to update:
- Personal details (name, title, email, social links)
- About section content
- Education history
- Projects
- Work experience
- Certifications

### Add Skill Logos

1. Download official SVG logos from [Simple Icons](https://simpleicons.org/) or brand websites
2. Save them in `/public/skills-logos/` directory
3. Update the logo paths in `/lib/data.ts`:

```typescript
{
  name: "Python",
  logo: "/skills-logos/python.svg",
  category: "language"
}
```

### Customize Colors

Edit `/tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Add New Sections

1. Create a new component in `/components/`
2. Import and add it to `/app/page.tsx`
3. Add navigation link in `/components/Navigation.tsx`

## 🏗️ Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── components/
│   ├── About.tsx           # About section
│   ├── Certifications.tsx  # Certifications section
│   ├── Contact.tsx         # Contact section
│   ├── Education.tsx       # Education section
│   ├── Experience.tsx      # Experience section
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── Projects.tsx        # Projects section
│   └── Skills.tsx          # Skills section
├── lib/
│   └── data.ts             # Portfolio data
├── public/
│   └── skills-logos/       # Skill logo images
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🚀 Deployment

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings are pre-configured in `netlify.toml`

3. **Deploy**
   - Netlify will automatically build and deploy
   - Your site will be live at `your-site-name.netlify.app`

### Build Settings (Auto-configured)

- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18+

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## ✨ Features to Add

Here are some ideas for future enhancements:

- [ ] Dark/Light mode toggle
- [ ] Blog section with MDX
- [ ] Project detail pages
- [ ] Contact form with email integration
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] RSS feed
- [ ] Sitemap
- [ ] PWA support
- [ ] More animations and micro-interactions
- [ ] Testimonials section
- [ ] Resume download

## 🎨 Design Principles

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Accessibility**: Semantic HTML, ARIA labels where needed
- **Performance**: Optimized images, lazy loading, code splitting
- **SEO**: Meta tags, Open Graph, structured data
- **User Experience**: Smooth animations, clear CTAs, easy navigation

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Prarthana Majalikar - [[email protected]](mailto:[email protected])

Project Link: [Your GitHub Repository](your-repo-link)

---

**Made with ❤️ using Next.js and TypeScript**
