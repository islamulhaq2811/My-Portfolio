<!--
SYNC IMPACT REPORT
==================
Version Change: 0.0.0 → 1.0.0 (Initial creation)
Modified Principles: N/A (new document)
Added Sections:
  - I. Design-First Excellence
  - II. Animation & Interaction Polish
  - III. Responsive-First Development
  - IV. Performance Budget
  - V. Accessibility (a11y)
  - VI. Component Reusability
  - Technology Stack
  - Quality Gates
Removed Sections: N/A
Templates Updated: N/A
Follow-up TODOs: None
-->

# Islam ul Haq Portfolio Constitution

## Core Principles

### I. Design-First Excellence
Every section must achieve visual polish before functionality expansion. The portfolio represents personal brand—pixel-perfect alignment, consistent spacing (8px grid system), and harmonious color palettes are mandatory. Design tokens (colors, typography, spacing) must be centralized in a theme configuration. No section ships without matching the approved Figma/reference design within 95% visual fidelity.

**Rationale**: A portfolio is judged visually first; professional appearance builds trust with potential clients/employers.

### II. Animation & Interaction Polish
All animations must serve purpose—guide attention, provide feedback, or delight within 300-500ms duration. Preferred: CSS transforms over layout-triggering properties. Implement: smooth scroll behavior, page transition effects, animated skill bars, cursor tracking effects, and hover states on all interactive elements. Loading screen mandatory for initial paint. No animation should exceed 60fps budget or cause layout shifts (CLS < 0.1).

**Rationale**: Thoughtful animations demonstrate frontend expertise and create memorable user experience without compromising performance.

### III. Responsive-First Development
Mobile-first approach mandatory. Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px). Every component must be touch-friendly (min 44px tap targets). Test on actual devices, not just emulators. Hero section must maintain impact on all screen sizes. Navigation must collapse to hamburger menu on mobile. Images must use responsive srcsets.

**Rationale**: 60%+ traffic comes from mobile devices; responsive design is non-negotiable for professional portfolios.

### IV. Performance Budget
Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1. Page weight budget: < 500KB initial load (excluding images). Images must be WebP/AVIF with lazy loading. Fonts must use font-display: swap. No render-blocking resources. Bundle size monitored; code-split by route. Lighthouse score must maintain > 90 across all categories.

**Rationale**: Slow portfolios lose visitors; performance demonstrates technical competence and respects user time/bandwidth.

### V. Accessibility (a11y)
WCAG 2.1 Level AA compliance mandatory. Requirements: semantic HTML elements, ARIA labels where needed, keyboard navigation support, focus indicators visible, color contrast ratios 4.5:1 minimum, alt text for all images, reduced-motion media query support. Screen reader testing required before feature completion.

**Rationale**: Accessibility is both ethical obligation and professional requirement; inclusive design reaches widest audience.

### VI. Component Reusability
All UI elements must be componentized: Button, Card, Section, SkillBar, ProjectCard, ServiceItem, ContactForm, SocialLinks. Props must be strictly typed. Styles co-located or CSS Modules. No duplicated JSX. Shared logic extracted to custom hooks (useDarkMode, useScrollAnimation, useIntersectionObserver).

**Rationale**: Maintainable codebase enables rapid iteration; reusable components ensure consistency across sections.

## Technology Stack

### Core Technologies
- **Framework**: React 18+ with Vite (fast HMR, optimized builds)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 3.x with custom design tokens
- **Animation**: Framer Motion for React animations, CSS transitions for simple effects
- **Icons**: React Icons (tree-shakeable)

### Build & Deploy
- **Bundler**: Vite
- **Linting**: ESLint with TypeScript and React hooks rules
- **Formatting**: Prettier with consistent config
- **Hosting**: Vercel/Netlify with CI/CD from main branch
- **Domain**: Custom domain preferred (islamulhaq.dev or similar)

### Required Features
- Dark/Light mode toggle with system preference detection
- Smooth scroll navigation
- Project filtering by category (React / Websites / All)
- Contact form with validation (Netlify Forms or Formspare)
- Social links: GitHub, LinkedIn, WhatsApp, Email

## Quality Gates

### Pre-commit Checklist
- [ ] All TypeScript errors resolved (strict mode)
- [ ] ESLint passes with zero errors
- [ ] Prettier formatting applied
- [ ] Components have prop types defined
- [ ] Images optimized and have alt text
- [ ] No console.log statements in production code
- [ ] Responsive behavior verified at all breakpoints

### Section Completion Criteria
Each portfolio section (Hero, About, Skills, Projects, Services, Contact, Footer) requires:
1. Visual design matches approved reference
2. Animations implemented per Principle II
3. Responsive at all breakpoints per Principle III
4. Accessible per Principle V (keyboard nav, screen reader tested)
5. Performance audited (Lighthouse > 90)
6. Cross-browser tested (Chrome, Firefox, Safari, Edge)

### Definition of Done
- Feature works as specified in spec.md
- All animations smooth at 60fps
- Mobile experience verified on physical device
- Accessibility audit passed (axe-core or Lighthouse a11y)
- Performance budget maintained
- Code reviewed and approved
- PHR created and filed

## Governance

This constitution supersedes ad-hoc decisions. Amendments require:
1. Documentation of proposed change with rationale
2. Impact assessment on existing sections
3. Approval after review
4. Version bump per semantic versioning

All PRs must verify compliance with principles above. Complexity must be justified—prefer simple, maintainable solutions. When in doubt, refer to this constitution.

**Version**: 1.0.0 | **Ratified**: 2026-04-09 | **Last Amended**: 2026-04-09
