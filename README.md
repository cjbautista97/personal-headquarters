# CJ Bautista Portfolio Website

A modern, minimal, and responsive portfolio website showcasing work as a Digital Marketing Analyst while demonstrating frontend development skills.

## 🎯 Project Goals

1. Showcase marketing experience and projects
2. Showcase technical projects and solutions
3. Demonstrate frontend development ability through quality code
4. Serve as the foundation for future applications under the personal domain

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (local install)
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Formatting:** Prettier
- **Deployment:** Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── sections/     # Page sections (hero, about, projects, etc.)
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── data/             # Static data and constants
├── assets/           # Images, fonts, etc.
├── styles/           # Global CSS and component styles
├── types/            # TypeScript type definitions
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8.0+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📋 Scripts

- `pnpm dev` - Start development server (port 3000)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🎨 Design Philosophy

- **Minimalist**: Clean layouts with plenty of whitespace
- **Premium Feel**: Professional typography and subtle interactions
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **Responsive**: Mobile-first design across all breakpoints (320px → 1440px+)

### Color Palette

- **Primary:** Black & White
- **Accent:** Slate & Gray
- **Optional:** Muted blue for highlights

### Typography

- **Font Family:** Geist or Inter (system fallback)
- **Headings:** Confident and clear
- **Body:** Prioritizes readability

## 📊 Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- Lighthouse Best Practices: 95+

## 🎬 Features

### Implemented
- [x] Responsive header/navigation
- [x] Hero section with CTAs
- [x] About section
- [x] Projects grid
- [x] Contact section
- [x] Footer with social links
- [x] Smooth animations with Framer Motion
- [x] TypeScript strict mode

### Planned
- [ ] Contact form
- [ ] Experience timeline
- [ ] Skills section with categories
- [ ] Photography gallery with lightbox
- [ ] Resume preview and download
- [ ] Blog integration
- [ ] Dark mode support
- [ ] Search functionality

## 🔗 Future Expansion

The architecture supports hosting additional projects under subdomains:

- `train.cjbautista.com` - Training application
- `projects.cjbautista.com` - Project showcase
- `ai.cjbautista.com` - AI tools
- `notes.cjbautista.com` - Writing and notes

## 📝 Code Standards

- Small, focused components
- Composition over large files
- Strong TypeScript typing
- No inline styles (Tailwind only)
- Reusable UI components
- Comments only when necessary
- Prioritize readability

## 🚢 Deployment

Deploy to Netlify:

```bash
# Build
pnpm build

# Deploy dist/ folder to Netlify
```

## 📄 License

MIT

## 👤 Author

CJ Bautista - Digital Marketing Analyst & Frontend Engineer
