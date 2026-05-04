# Implementation Plan: Hero Section

**Branch**: `001-hero-section` | **Date**: 2026-04-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-hero-section/spec.md`

## Summary

Build the Hero Section as the portfolio's first impression—a visually compelling, performant, and accessible component introducing Islam ul Haq as a Web Developer. The hero features a gradient animated background, text-content/CTAs on the left, a rounded-square profile image on the right (stacked on mobile), and smooth-scroll navigation to Projects and Contact sections. Implementation follows the constitution's React + TypeScript + Tailwind + Framer Motion stack, prioritizing responsive-first development, 60fps animations, and Core Web Vitals compliance.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)  
**Primary Dependencies**: React 18+, Tailwind CSS 3.x, Framer Motion, React Icons  
**Storage**: N/A (static frontend)  
**Testing**: Vitest + React Testing Library, Playwright (E2E)  
**Target Platform**: Web (Chrome, Firefox, Safari, Edge - last 2 versions)  
**Project Type**: Web application (Vite + React SPA)  
**Performance Goals**: LCP < 2.5s, CLS < 0.1, 60fps animations, Lighthouse > 90  
**Constraints**: < 500KB initial bundle, WCAG 2.1 AA compliance, reduced-motion support  
**Scale/Scope**: Single portfolio section, single developer usage, ~1k visitors/month  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Design-First Excellence | ✅ PASS | Design tokens will be defined in theme config |
| II. Animation & Interaction Polish | ✅ PASS | Gradient animation 15-20s loop, 300ms hover feedback |
| III. Responsive-First Development | ✅ PASS | Mobile-first, breakpoints: sm/md/lg/xl |
| IV. Performance Budget | ✅ PASS | CSS gradients (no JS), lazy-loaded image, CLS < 0.1 |
| V. Accessibility (a11y) | ✅ PASS | Semantic HTML, focus states, reduced-motion support |
| VI. Component Reusability | ✅ PASS | Hero, Button, GradientBackground components |

**Complexity Justification**: None required. All principles satisfied with standard approaches.

## Project Structure

### Documentation (this feature)

```text
specs/001-hero-section/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx              # Main hero section component
│   │   ├── Hero.test.tsx         # Component tests
│   │   └── index.ts              # Public export
│   ├── Button/
│   │   ├── Button.tsx            # Reusable CTA button
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── GradientBackground/
│       ├── GradientBackground.tsx # Animated gradient background
│       ├── GradientBackground.css # CSS keyframes
│       └── index.ts
├── hooks/
│   ├── useSmoothScroll.ts        # Smooth scroll to sections
│   └── useReducedMotion.ts       # Detect prefers-reduced-motion
├── types/
│   └── index.ts                  # Shared TypeScript interfaces
├── styles/
│   └── theme.ts                  # Design tokens (colors, spacing)
└── App.tsx                       # Root app with Hero integration

public/
└── images/
    └── profile.jpg               # Profile image asset (min 800x800)

tests/
├── unit/                         # Vitest unit tests
└── e2e/                          # Playwright E2E tests
```

**Structure Decision**: Single project SPA structure using Vite + React. Components organized by feature with co-located tests. Design tokens centralized in theme.ts for reuse across sections.

## Phase 0: Research & Decisions

### Research Summary

**1. Gradient Animation Implementation**

**Decision**: CSS-only gradient animation using `@keyframes` with `background-position` shift.

**Rationale**: 
- Pure CSS = zero JavaScript overhead
- GPU-accelerated (transform/opacity only)
- Respects `prefers-reduced-motion` via media query
- Smaller bundle size than Canvas/WebGL alternatives

**Alternatives Considered**:
- Canvas API: Rejected - overkill for simple gradients, requires JS
- WebGL/Three.js: Rejected - massive bundle size, unnecessary complexity
- Framer Motion: Rejected - CSS animations preferred for continuous loops

**Implementation Pattern**:
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**2. Smooth Scroll Strategy**

**Decision**: Native CSS `scroll-behavior: smooth` + React `scrollIntoView` for section navigation.

**Rationale**:
- Native browser support (Chrome, Firefox, Safari, Edge)
- No dependency required
- Respects `prefers-reduced-motion` automatically
- Easier to test than custom scroll library

**Fallback**: For browsers without support, instant scroll is acceptable degradation.

**3. Image Loading Strategy**

**Decision**: Vite's built-in asset handling with blur-up placeholder using CSS.

**Rationale**:
- Vite automatically handles image optimization
- Blur-up via CSS `filter: blur()` transition
- Aspect ratio container prevents layout shift
- Lazy loading with `loading="lazy"` for below-fold (not needed for hero image)

**4. Component Architecture**

**Decision**: Compound component pattern for Hero, atomic Button component.

**Rationale**:
- Hero encapsulates its own layout logic
- Button reusable across all sections
- Clear prop interfaces for TypeScript strict mode
- Easy to test in isolation

## Phase 1: Design & Contracts

### Data Model

See `data-model.md` for complete entity definitions.

**Hero Props Interface**:
```typescript
interface HeroProps {
  name: string;              // "Hi, I'm Islam ul Haq"
  title: string;             // "Web Developer"
  description: string;       // Short intro paragraph
  profileImage: {
    src: string;
    alt: string;
    placeholder?: string;    // Base64 blur placeholder
  };
  ctas: {
    primary: {
      label: string;         // "View Projects"
      target: string;        // "#projects"
    };
    secondary: {
      label: string;         // "Contact Me"
      target: string;        // "#contact"
    };
  };
}
```

**Button Props Interface**:
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;             // If provided, renders as anchor
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Component Design Decisions

**1. Gradient Background**
- **Type**: CSS-only component
- **Colors**: 3-brand-color gradient (primary, secondary, accent from theme)
- **Animation**: 20s infinite loop, ease-in-out timing
- **Accessibility**: Respects `prefers-reduced-motion: reduce`
- **Z-index**: Behind all content (z-0)

**2. Hero Layout**
- **Desktop**: CSS Grid, 2 columns (55% text / 45% image), gap-12
- **Tablet**: Reduced gap, smaller image
- **Mobile**: Single column, image below text, centered content
- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

**3. CTA Buttons**
- **Primary**: Solid background, high contrast, slight scale on hover (1.05)
- **Secondary**: Outlined style, transparent background
- **Hover**: Background color shift + scale transform (300ms ease)
- **Focus**: Visible focus ring for keyboard navigation

**4. Profile Image**
- **Shape**: Rounded square (rounded-3xl ≈ 24px)
- **Size**: 320px desktop, 240px tablet, 200px mobile
- **Object-fit**: cover
- **Alt text**: "Islam ul Haq - Web Developer"
- **Loading**: Eager (above fold)

### Accessibility Considerations

- **Semantic HTML**: `<section>` with `aria-label="Hero"`, `<h1>` for name
- **Focus Management**: Skip link, visible focus indicators
- **Color Contrast**: 4.5:1 minimum for all text (verified via theme)
- **Reduced Motion**: Gradient animation disabled when `prefers-reduced-motion: reduce`
- **Keyboard Nav**: Both CTAs focusable and activatable via Enter

### Performance Strategy

- **CSS Animation**: GPU-accelerated properties only (transform, opacity)
- **Image Optimization**: WebP format, responsive srcset
- **Bundle Size**: Hero section < 15KB gzipped (excluding image)
- **Lazy Loading**: Not applicable (above fold)
- **Font Loading**: `font-display: swap` for custom fonts

## Phase 2: Implementation Tasks (Outline)

*Note: Detailed tasks will be generated by `/sp.tasks`*

1. **Setup** - Initialize project, install dependencies, configure Tailwind
2. **Theme** - Define design tokens (colors, typography, spacing)
3. **Components** - Build Button, GradientBackground, Hero components
4. **Hooks** - Implement useSmoothScroll, useReducedMotion
5. **Integration** - Wire up Hero in App.tsx with smooth scroll
6. **Styling** - Apply responsive styles, dark mode support
7. **Testing** - Unit tests, accessibility audit, visual regression
8. **Optimization** - Performance audit, Lighthouse scoring

## Constitution Re-Check

*Post-design verification*

| Principle | Status | Implementation |
|-----------|--------|----------------|
| I. Design-First Excellence | ✅ PASS | Theme tokens defined, 8px grid, 95% fidelity target |
| II. Animation & Interaction Polish | ✅ PASS | CSS gradients 20s loop, 300ms button hover, 60fps |
| III. Responsive-First Development | ✅ PASS | Mobile-first, 4 breakpoints, touch-friendly 44px |
| IV. Performance Budget | ✅ PASS | CSS-only animations, <15KB component, CLS guarded |
| V. Accessibility (a11y) | ✅ PASS | Semantic HTML, reduced-motion, WCAG AA contrast |
| VI. Component Reusability | ✅ PASS | Button, GradientBackground reusable; typed props |

**Result**: All principles satisfied. Ready for task generation.

## Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Profile image unavailable | High | Medium | Placeholder gradient avatar as fallback |
| Gradient animation jank on low-end devices | Medium | Low | Respect reduced-motion, test on mid-range mobile |
| Cumulative Layout Shift from image | High | Low | Fixed aspect ratio container, eager loading |
| Cross-browser gradient support | Low | Low | Standard CSS gradients supported everywhere |
| Dark mode contrast issues | Medium | Medium | Test both modes, adjust theme tokens |

## Dependencies

**Required Before Implementation**:
- [ ] Design tokens defined (primary, secondary, accent colors)
- [ ] Profile image asset (800x800px min, WebP preferred)
- [ ] Typography chosen (Google Fonts or system)
- [ ] Navigation section IDs defined (#projects, #contact)

**External Services**: None

**Asset Checklist**:
- [ ] Profile image (public/images/profile.jpg)
- [ ] Favicon
- [ ] Social preview image (Open Graph)

## Success Validation

How we'll verify this plan meets the spec:

1. **Visual Verification**: Hero matches design reference at 95%+ fidelity
2. **Functional Testing**: CTAs scroll smoothly to correct sections
3. **Performance Testing**: Lighthouse >90, LCP <2.5s, CLS <0.1
4. **Accessibility Testing**: axe-core passes, keyboard navigation works
5. **Responsive Testing**: Verified on actual mobile device
6. **Animation Testing**: 60fps maintained, reduced-motion respected

## Generated Artifacts

This plan execution produces:

1. ✅ `plan.md` (this file) - Implementation strategy
2. 🔄 `research.md` - Phase 0 research decisions (to be created)
3. 🔄 `data-model.md` - TypeScript interfaces (to be created)
4. 🔄 `quickstart.md` - Developer setup guide (to be created)
5. 🔄 `contracts/` - API contracts if applicable (N/A for static section)

---

**Next Steps**: Run `/sp.tasks` to generate detailed implementation tasks.

