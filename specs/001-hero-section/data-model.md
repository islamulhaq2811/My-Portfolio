# Data Model: Hero Section

**Feature**: Hero Section  
**Date**: 2026-04-09

## Overview

This document defines the TypeScript interfaces and data structures for the Hero Section component. The hero is primarily presentational with minimal state management.

## Interfaces

### HeroProps

Main component props for the Hero section.

```typescript
interface HeroProps {
  /** Main heading - developer's name with greeting */
  name: string;
  
  /** Professional title displayed below name */
  title: string;
  
  /** Brief description of developer's expertise */
  description: string;
  
  /** Profile image configuration */
  profileImage: ProfileImageConfig;
  
  /** Call-to-action buttons configuration */
  ctas: CTAsConfig;
}
```

### ProfileImageConfig

Configuration for the profile image display.

```typescript
interface ProfileImageConfig {
  /** Image source path (relative or absolute URL) */
  src: string;
  
  /** Accessible alternative text for screen readers */
  alt: string;
  
  /** Optional placeholder for blur-up effect (Base64 or URL) */
  placeholder?: string;
  
  /** Image dimensions for aspect ratio calculation */
  dimensions?: {
    width: number;
    height: number;
  };
}
```

### CTAsConfig

Configuration for call-to-action buttons.

```typescript
interface CTAsConfig {
  /** Primary CTA (e.g., "View Projects") */
  primary: CTAConfig;
  
  /** Secondary CTA (e.g., "Contact Me") */
  secondary: CTAConfig;
}

interface CTAConfig {
  /** Button label text */
  label: string;
  
  /** Target section ID for smooth scroll (e.g., "projects", "contact") */
  target: string;
  
  /** Optional icon identifier from React Icons */
  icon?: string;
}
```

### ButtonProps

Reusable button component props.

```typescript
interface ButtonProps {
  /** Visual style variant */
  variant: 'primary' | 'secondary';
  
  /** Size variant affecting padding and font */
  size?: 'sm' | 'md' | 'lg';
  
  /** If provided, renders as anchor element with href */
  href?: string;
  
  /** Click handler for programmatic navigation */
  onClick?: () => void;
  
  /** Button content (text, icons, etc.) */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Disabled state */
  disabled?: boolean;
}
```

### GradientBackgroundProps

Props for the animated gradient background.

```typescript
interface GradientBackgroundProps {
  /** Array of color stops (CSS color values) */
  colors?: string[];
  
  /** Animation duration in seconds */
  duration?: number;
  
  /** Additional CSS classes */
  className?: string;
}
```

### Theme Tokens

Design tokens for consistent styling.

```typescript
interface ThemeTokens {
  colors: {
    primary: string;      // Main brand color
    secondary: string;    // Accent color
    accent: string;       // Highlight color
    background: string;   // Page background
    surface: string;      // Card/component background
    text: {
      primary: string;    // Main text color
      secondary: string;  // Muted text
      inverse: string;    // Text on dark backgrounds
    };
  };
  
  spacing: {
    xs: string;   // 4px
    sm: string;   // 8px
    md: string;   // 16px
    lg: string;   // 24px
    xl: string;   // 32px
    '2xl': string; // 48px
    '3xl': string; // 64px
  };
  
  typography: {
    fontFamily: {
      sans: string;
      heading: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
  };
  
  breakpoints: {
    sm: string;   // 640px
    md: string;   // 768px
    lg: string;   // 1024px
    xl: string;   // 1280px
  };
  
  animation: {
    duration: {
      fast: string;    // 150ms
      normal: string;  // 300ms
      slow: string;    // 500ms
    };
    easing: {
      default: string;
      bounce: string;
    };
  };
}
```

## Default Values

### Hero Default Props

```typescript
const defaultHeroProps: Partial<HeroProps> = {
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
      target: "projects",
    },
    secondary: {
      label: "Contact Me",
      target: "contact",
    },
  },
};
```

### Button Default Props

```typescript
const defaultButtonProps: Partial<ButtonProps> = {
  variant: 'primary',
  size: 'md',
};
```

### Gradient Default Props

```typescript
const defaultGradientProps: Partial<GradientBackgroundProps> = {
  colors: ['#667eea', '#764ba2', '#f093fb'], // Purple gradient
  duration: 20,
};
```

## State Management

The Hero section is primarily stateless. State is managed via:

1. **URL hash** - Section IDs for smooth scroll targets
2. **User preferences** - `prefers-reduced-motion` via CSS media query
3. **Theme context** - Dark/light mode via React Context (if implemented)

## Data Flow

```
App.tsx
  └── Hero (HeroProps)
        ├── GradientBackground
        ├── TextContent (name, title, description)
        ├── CTAButton (primary) → scrollToSection("projects")
        ├── CTAButton (secondary) → scrollToSection("contact")
        └── ProfileImage (ProfileImageConfig)
```

## Validation Rules

### HeroProps Validation

- `name`: Required, max 100 characters
- `title`: Required, max 50 characters
- `description`: Required, max 500 characters
- `profileImage.src`: Required, valid URL or path
- `profileImage.alt`: Required, descriptive text
- `ctas.primary.label`: Required
- `ctas.primary.target`: Required, valid CSS selector (no # prefix)

### ButtonProps Validation

- `variant`: Must be 'primary' or 'secondary'
- `size`: Must be 'sm', 'md', or 'lg'
- Either `href` or `onClick` must be provided (not both)

## Type Guards

```typescript
// Check if target is internal section (for smooth scroll)
const isInternalSection = (target: string): boolean => {
  return !target.startsWith('http') && !target.startsWith('//');
};

// Validate image configuration
const isValidProfileImage = (config: ProfileImageConfig): boolean => {
  return Boolean(config.src && config.alt);
};
```

## Constants

```typescript
// Animation timings (milliseconds)
export const ANIMATION_DURATION = {
  HOVER: 300,
  SCROLL: 800,
  GRADIENT_CYCLE: 20000, // 20 seconds
} as const;

// Breakpoint values (pixels)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

// Image sizes (pixels)
export const IMAGE_SIZES = {
  MOBILE: 200,
  TABLET: 240,
  DESKTOP: 320,
} as const;

// Border radius values
export const BORDER_RADIUS = {
  BUTTON: '0.5rem',    // 8px
  CARD: '1rem',        // 16px
  IMAGE: '1.5rem',     // 24px (rounded-3xl)
} as const;
```

## File Locations

```
src/
├── types/
│   └── index.ts          # All interfaces exported here
├── components/
│   ├── Hero/
│   │   └── types.ts      # Hero-specific types (if needed)
│   └── Button/
│       └── types.ts      # Button-specific types
└── styles/
    └── theme.ts          # Theme tokens implementation
```

