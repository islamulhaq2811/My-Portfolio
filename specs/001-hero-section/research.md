# Research: Hero Section

**Feature**: Hero Section  
**Date**: 2026-04-09  
**Researcher**: AI Assistant  

## Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Gradient Animation | CSS `@keyframes` | Zero JS overhead, GPU-accelerated, respects reduced-motion |
| Smooth Scroll | Native CSS + React | No dependencies, automatic accessibility support |
| Image Loading | Vite asset handling | Automatic optimization, blur-up placeholder |
| Component Pattern | Compound + Atomic | Reusable, testable, clear interfaces |
| Layout Strategy | CSS Grid | Clean responsive switching, modern approach |

## Research Details

### 1. Gradient Animation Techniques

**Option A: CSS Keyframes** ✅ SELECTED
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 20s ease infinite;
}
```

**Pros**:
- No JavaScript execution
- GPU-accelerated via `background-position`
- Respects `prefers-reduced-motion` via media query
- Smallest bundle size

**Cons**:
- Limited to simple animations
- Cannot react to user input

**Option B: Canvas API**
- Rejected: Overkill for simple gradients
- Requires RAF loops (battery drain)
- More code complexity

**Option C: Framer Motion**
- Rejected: Unnecessary for continuous loop animations
- Better suited for enter/exit animations
- Adds ~10KB to bundle

### 2. Smooth Scroll Implementation

**Decision**: Native CSS `scroll-behavior: smooth` + `scrollIntoView()`

```css
html {
  scroll-behavior: smooth;
}
```

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

**Browser Support**: Chrome 61+, Firefox 36+, Safari 14+, Edge 79+

**Fallback**: Instant scroll for unsupported browsers (acceptable degradation)

### 3. Image Loading Best Practices

**Decision**: Vite asset pipeline with eager loading

**Implementation**:
```typescript
import profileImage from '../assets/profile.jpg';

// Vite handles optimization automatically
<img 
  src={profileImage}
  alt="Islam ul Haq - Web Developer"
  loading="eager"
  className="rounded-3xl"
/>
```

**Optimization Strategy**:
- WebP format (modern, smaller)
- 800x800px source (crisp on retina displays)
- CSS aspect-ratio prevents layout shift
- Object-fit: cover for consistent framing

**Blur-up Placeholder**:
```css
.image-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.image-loaded {
  animation: fade-in 0.3s ease;
}
```

### 4. Responsive Layout Strategy

**Decision**: CSS Grid with mobile-first breakpoints

**Desktop** (lg: 1024px+):
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
```

**Mobile** (< 768px):
```css
.hero {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
}
```

**Rationale**:
- Grid gives precise control
- Single column on mobile for readability
- Image below text maintains content priority

### 5. Animation Performance

**Target**: 60fps

**Strategy**:
- Animate only `transform` and `opacity` (compositor-only properties)
- Avoid animating `width`, `height`, `margin`, `padding` (triggers layout)
- Use `will-change: transform` sparingly
- Test on mid-range mobile (Moto G Power, iPhone SE)

**CSS Performance**:
```css
/* GPU accelerated ✅ */
.button:hover {
  transform: scale(1.05);
  transition: transform 300ms ease;
}

/* Triggers layout ❌ */
.button:hover {
  width: 110%;
}
```

### 6. Accessibility Patterns

**Reduced Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  .animated-gradient {
    animation: none;
  }
  
  html {
    scroll-behavior: auto;
  }
}
```

**Focus Management**:
- Visible focus rings on all interactive elements
- Skip link for keyboard users
- Semantic heading hierarchy (`h1` for name)

**Screen Reader Support**:
```typescript
<section aria-label="Hero">
  <h1>Hi, I'm Islam ul Haq</h1>
  <p role="doc-subtitle">Web Developer</p>
  <img 
    src={profileImage} 
    alt="Islam ul Haq - Web Developer" 
  />
</section>
```

## References

- [CSS Tricks: GPU Animation](https://css-tricks.com/gsaos-on-gpu/)
- [web.dev: Optimize LCP](https://web.dev/optimize-lcp/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Tailwind Docs: Responsive Design](https://tailwindcss.com/docs/responsive-design)

