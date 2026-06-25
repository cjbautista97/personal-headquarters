# CJ Bautista Portfolio Website - Copilot Instructions

## Project Overview

This is a modern, minimal portfolio website showcasing work as a Digital Marketing Analyst while demonstrating frontend development skills. Built with React, Vite, TypeScript, and Tailwind CSS.

## Architecture Principles

- **Component-Based:** Separate components for each section (Hero, About, Projects, etc.)
- **Type-Safe:** Strict TypeScript throughout
- **Performance-Focused:** Lazy loading, code splitting, optimized images
- **Accessible:** Semantic HTML, keyboard navigation, ARIA labels
- **Maintainable:** Small files, clear naming, minimal abstractions

## Tech Stack Rules

- Framework: React 18 + Vite
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS only (no inline styles)
- UI Components: shadcn/ui for advanced components
- Animations: Framer Motion for all animations
- Icons: lucide-react
- Package Manager: pnpm

## Design Guidelines

- Minimal, clean aesthetic
- Plenty of whitespace
- Subtle hover effects and animations
- Responsive mobile-first design
- Performance targets: Lighthouse 95+ across all metrics

## File Organization

```
src/
├── components/ui/        # Reusable UI components (buttons, cards, etc.)
├── components/sections/  # Page sections (Hero, About, Projects, etc.)
├── pages/               # Full page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions (utils.ts, helpers, etc.)
├── data/                # Static data, constants, mock data
├── assets/              # Images, fonts, media
├── styles/              # Global CSS and component styles
├── types/               # TypeScript types and interfaces
```

## Code Standards

1. **Components:** Keep small and focused (prefer 50-200 lines)
2. **Types:** Always export types at top of file
3. **Props:** Always define typed interfaces for component props
4. **Imports:** Organize imports (React → libs → local)
5. **Naming:** camelCase for functions/variables, PascalCase for components
6. **Comments:** Only when logic is non-obvious
7. **Accessibility:** Always consider a11y (semantic HTML, ARIA, keyboard nav)

## Development Workflow

When implementing features:

1. **Plan:** Explain the approach and files to create/modify
2. **Implement:** Build incrementally with small commits
3. **Verify:** Check TypeScript and responsiveness
4. **Test:** Verify on mobile, tablet, desktop
5. **Optimize:** Suggest performance improvements

## Key Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind styling configuration
- `tsconfig.json` - TypeScript configuration
- `src/styles/index.css` - Global styles with Tailwind directives
- `src/types/index.ts` - Shared type definitions
- `src/lib/utils.ts` - Utility functions

## Data Structure Examples

### Types (in src/types/index.ts)

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  outcome: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
```

### Data Files (in src/data/)

Keep mock/static data in separate files to keep components clean:

```typescript
// src/data/projects.ts
export const projects: Project[] = [...]

// src/data/navigation.ts
export const navItems: NavItem[] = [...]
```

## Animation Guidelines

- Use Framer Motion for all animations
- Prefer `initial`, `animate`, `exit` for lifecycle animations
- Use `whileHover` for interactive elements
- Use `whileInView` for scroll-triggered animations
- Always include `viewport={{ once: true }}` for scroll animations
- Respect `prefers-reduced-motion` (already handled in global CSS)

## Performance Checklist

- [ ] Images are optimized and properly sized
- [ ] Lazy loading implemented for non-critical assets
- [ ] Code is split appropriately
- [ ] No unused dependencies
- [ ] Lighthouse scores 95+ in all metrics
- [ ] Bundle size is reasonable

## Testing Responsive Design

Test at these breakpoints:
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Large: 1440px
- Ultra-wide: 1920px+

## Future Considerations

- Architecture supports multiple subdomains (train.*, projects.*, ai.*, notes.*)
- Design pattern allows for dark mode implementation
- Blog/content system can be added without restructuring
- Analytics and tracking can be integrated at the app level

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Check code quality
pnpm lint
pnpm format:check
```
