# Quickstart: Hero Section

**Feature**: Hero Section  
**Branch**: `001-hero-section`

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Setup

### 1. Clone and Checkout Branch

```bash
git clone <repository-url>
cd "my-new-portfolio"
git checkout 001-hero-section
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

**Key Dependencies**:
- `react` ^18.x
- `typescript` ^5.x
- `tailwindcss` ^3.x
- `framer-motion` ^10.x (for future animations)
- `vitest` ^1.x (testing)
- `@testing-library/react` ^14.x

### 3. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

No secrets required for Hero Section (static content).

### 4. Add Profile Image

Place your profile image at:

```
public/
└── images/
    └── profile.jpg    # 800x800px minimum, WebP preferred
```

**Image Guidelines**:
- Format: WebP or JPEG
- Size: 800x800px minimum (for retina displays)
- Aspect ratio: 1:1 (square)
- Style: Professional headshot or casual professional

### 5. Customize Content

Edit the Hero content in `src/components/Hero/Hero.tsx`:

```typescript
const heroData: HeroProps = {
  name: "Hi, I'm Islam ul Haq",
  title: "Web Developer",
  description: "I build modern and responsive websites using technologies like React and JavaScript.",
  profileImage: {
    src: "/images/profile.jpg",
    alt: "Islam ul Haq - Web Developer",
  },
  ctas: {
    primary: {
      label: "View Projects",
      target: "projects",  // Must match section ID
    },
    secondary: {
      label: "Contact Me",
      target: "contact",   // Must match section ID
    },
  },
};
```

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 to view the Hero section.

## Development Workflow

### File Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx              # Main component
│   │   ├── Hero.test.tsx         # Unit tests
│   │   └── index.ts              # Export
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── GradientBackground/
│       ├── GradientBackground.tsx
│       ├── GradientBackground.css
│       └── index.ts
├── hooks/
│   ├── useSmoothScroll.ts
│   └── useReducedMotion.ts
├── styles/
│   └── theme.ts                  # Design tokens
└── App.tsx
```

### Available Scripts

```bash
# Development
npm run dev          # Start Vite dev server

# Building
npm run build        # Production build
npm run preview      # Preview production build

# Testing
npm run test         # Run Vitest
npm run test:ui      # Run Vitest with UI
npm run test:e2e     # Run Playwright E2E tests

# Code Quality
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier
npm run type-check   # TypeScript check
```

### Component Development

#### Creating a New Component

1. Create folder in `src/components/ComponentName/`
2. Add main component file `ComponentName.tsx`
3. Add test file `ComponentName.test.tsx`
4. Add index file `index.ts` for clean exports

#### Testing

Run tests in watch mode during development:

```bash
npm run test -- --watch
```

**Test Structure**:
```typescript
// Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders developer name', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText("Hi, I'm Islam ul Haq")).toBeInTheDocument();
  });
});
```

### Styling Guidelines

**Tailwind Usage**:

```tsx
// Mobile-first responsive classes
<div className="px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Content */}
  </div>
</div>
```

**Custom Theme Values** (in `tailwind.config.js`):

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      },
      animation: {
        'gradient': 'gradient 20s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
};
```

### Common Tasks

#### Update CTA Links

Edit `src/components/Hero/Hero.tsx`:

```typescript
ctas: {
  primary: {
    label: "View Projects",
    target: "projects",  // Change to match your section ID
  },
}
```

Ensure the target section has matching ID:

```tsx
// In Projects section
<section id="projects">
  {/* Projects content */}
</section>
```

#### Adjust Gradient Colors

Edit `src/components/GradientBackground/GradientBackground.css`:

```css
.animated-gradient {
  background: linear-gradient(
    -45deg, 
    #your-color-1, 
    #your-color-2, 
    #your-color-3
  );
}
```

#### Test Responsive Breakpoints

Use browser DevTools or resize window:

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1023px (2 columns, smaller gaps)
- **Desktop**: 1024px+ (2 columns, full spacing)

## Validation Checklist

Before committing:

- [ ] TypeScript compiles without errors (`npm run type-check`)
- [ ] All tests pass (`npm run test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Hero renders correctly on mobile, tablet, desktop
- [ ] CTAs scroll smoothly to correct sections
- [ ] Profile image loads without layout shift
- [ ] Gradient animation runs at 60fps
- [ ] Reduced motion preference respected
- [ ] Lighthouse score > 90

## Troubleshooting

### Image Not Loading

**Problem**: 404 error for profile image  
**Solution**: Ensure image is in `public/images/profile.jpg`

### Animation Janky

**Problem**: Gradient animation not smooth  
**Solution**: 
- Check DevTools Performance tab
- Ensure only `background-position` is animated
- Test on actual device, not just emulator

### Smooth Scroll Not Working

**Problem**: CTAs jump instead of smooth scroll  
**Solution**: 
- Verify section IDs match target values
- Check `scroll-behavior: smooth` is set on html element
- Ensure no JS errors in console

### TypeScript Errors

**Problem**: `Cannot find module` or type errors  
**Solution**: 
- Run `npm install` to ensure dependencies installed
- Check imports use correct paths
- Verify `tsconfig.json` is correctly configured

## Next Steps

1. ✅ Hero Section implementation complete
2. 🔄 Run `/sp.tasks` to generate implementation tasks
3. 🔄 Complete tasks in `tasks.md`
4. 🔄 Run tests and validate
5. 🔄 Create PR for review

## Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

