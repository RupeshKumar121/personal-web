# 🚀 Dev Portfolio — Setup & Run Guide

A modern, full-featured developer portfolio built with **React + Vite + TailwindCSS + Framer Motion**.

---

## ✨ Features

- 🎨 Dark mode with glassmorphism UI
- 🌊 Parallax hero with mountain background
- 🔮 Smooth Framer Motion animations
- 🎯 Skills section with animated progress bars
- 📁 Project showcase with filtering and search
- 📄 Project detail pages
- 📱 Fully responsive (mobile-first)
- ✨ Custom cursor
- 🔗 Contact section with social profiles
- 🏷️ SEO meta tags

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx      # Animated custom cursor
│   │   ├── Navbar.jsx            # Fixed navbar with mobile menu
│   │   ├── Footer.jsx            # Minimal footer
│   │   ├── HeroSection.jsx       # Full-screen parallax hero
│   │   ├── SkillsSection.jsx     # Animated skills grid
│   │   ├── ContactSection.jsx    # Contact + social profiles
│   │   ├── ProjectCard.jsx       # Reusable project card
│   │   └── useScrollReveal.js    # Scroll reveal hook
│   ├── pages/
│   │   ├── HomePage.jsx          # Home (Hero + Skills + Contact)
│   │   ├── ProjectsPage.jsx      # Project grid with filtering
│   │   └── ProjectDetailPage.jsx # Individual project page
│   ├── data/
│   │   └── index.js              # All portfolio data (projects, skills, contact)
│   ├── styles/
│   │   └── globals.css           # Global styles + custom utilities
│   ├── App.jsx                   # Router + layout
│   └── main.jsx                  # React entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🛠️ Installation & Running Locally

### Prerequisites
- Node.js v18+ (v22 recommended)
- npm v9+

### Steps

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 🔧 Customization

### Update Your Info

All your personal data is in one file:

```
src/data/index.js
```

Edit:
- `projects` array — your projects with all details
- `skills` array — your skills with proficiency levels
- `contactInfo` object — your email, phone, and social profiles

### Update Hero Image

In `src/components/HeroSection.jsx`, change the `src` of the `<img>` tag to your preferred background image URL (or a local file in `/public`).

### Update Colors / Fonts

Edit `tailwind.config.js` to change the color palette or fonts.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `/dist` folder. Deploy to **Vercel**, **Netlify**, or any static host.

```bash
# Preview production build locally
npm run preview
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool / dev server |
| TailwindCSS 3 | Styling |
| Framer Motion 11 | Animations |
| React Router v6 | Client-side routing |
| Lucide React | Icons |

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Home (Hero + Skills + Contact) |
| `/projects` | Project showcase with filter |
| `/projects/:id` | Individual project detail |

---

## 💡 Tips

- Replace placeholder images in `src/data/index.js` with your own project screenshots
- Add your real GitHub, LinkedIn, CodeChef links in `contactInfo`
- Customize the hero text in `HeroSection.jsx`
- Add more skills by extending the `skills` array

---

Built with ❤️ and lots of `git commit`s.
