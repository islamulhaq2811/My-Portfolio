# Portfolio Website Specification

## Overview
A modern dark-themed portfolio website showcasing projects, skills, experience, and providing a contact form.

## Tech Stack

### Frontend
- **React 19** with JavaScript (JSX)
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first CSS
- **Framer Motion** — scroll-triggered animations
- **React Icons** — icon library (Feather Icons)

## Architecture

```
/
├── src/                    # React frontend
│   ├── components/
│   │   ├── Navigation/     # Sticky header with mobile menu
│   │   ├── Hero/          # Landing section with profile
│   │   ├── Projects/      # Project grid with cards
│   │   ├── Skills/        # Skill categories with proficiency
│   │   ├── About/         # Bio, experience timeline, socials
│   │   ├── Contact/       # Form + social links
│   │   └── ui/            # GlassCard reusable component
│   ├── data/
│   │   └── portfolioData.js  # Static portfolio data
│   ├── hooks/
│   │   ├── useSmoothScroll.js
│   │   ├── useReducedMotion.js
│   │   └── useInView.js
│   └── styles/
│       ├── theme.js       # Design tokens (dark theme)
│       └── animations.css # Keyframes
└── dist/                   # Built frontend output
```

## Design System

### Color Palette
- Background: `#0a0a0f` (near-black)
- Surface: `#12121a` (dark card)
- Surface Alt: `#1a1a24` (elevated)
- Border: `rgba(102, 126, 234, 0.15)`
- Primary: `#667eea` (indigo-purple)
- Secondary: `#764ba2` (purple)
- Accent: `#f093fb` (pink)
- Text Primary: `#ffffff`
- Text Secondary: `#a1a1aa`
- Text Muted: `#71717a`

### Component Patterns
- **GlassCard:** `backdrop-blur-xl bg-[#12121a]/80 border border-[rgba(102,126,234,0.15)] rounded-2xl`
- **Glow hover:** `hover:shadow-[0_0_30px_rgba(102,126,234,0.3)]`

### Animations
- `fade-in-up` — scroll-triggered entrance (CSS keyframes)
- Framer Motion stagger for list/grid items
- All animations disabled when `prefers-reduced-motion: reduce`

## Running the Project

### Development
```bash
npm install
npm run dev          # Vite on :5173
```

### Production
```bash
npm run build        # Builds to dist/
```
