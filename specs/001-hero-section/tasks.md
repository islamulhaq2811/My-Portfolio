# Tasks: Hero Section

**Input**: Design documents from `/specs/001-hero-section/`
**Prerequisites**: plan.md, spec.md, data-model.md, research.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Vite + React + TypeScript project with `npm create vite@latest . -- --template react-ts`
- [ ] T002 Install core dependencies: `npm install framer-motion react-icons` in project root
- [ ] T003 Install dev dependencies: `npm install -D tailwindcss postcss autoprefixer @types/react @types/react-dom vitest @testing-library/react @testing-library/jest-dom` in project root
- [ ] T004 [P] Initialize Tailwind CSS: `npx tailwindcss init -p` in project root
- [ ] T005 Configure TypeScript strict mode in `tsconfig.json` by setting `"strict": true`
- [ ] T006 Create base directory structure: `mkdir -p src/components src/hooks src/types src/styles public/images tests/unit tests/e2e`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Create design tokens file with colors, spacing, typography in `src/styles/theme.ts`
- [ ] T008 Configure Tailwind with custom theme colors and animation keyframes in `tailwind.config.js`
- [ ] T009 Define shared TypeScript interfaces (HeroProps, ButtonProps, etc.) in `src/types/index.ts`
- [ ] T010 [P] Create `useReducedMotion` hook in `src/hooks/useReducedMotion.ts` to detect prefers-reduced-motion
- [ ] T011 Create `useSmoothScroll` hook in `src/hooks/useSmoothScroll.ts` for section navigation
- [ ] T012 Add profile image asset (800x800px WebP) to `public/images/profile.jpg`
- [ ] T013 Configure global CSS with smooth scroll and base styles in `src/index.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 + 5 - First Impression & Responsive Layout (Priority: P1) 🎯 MVP

**Goal**: Implement the core hero layout with name, title, description visible above fold and fully responsive across all breakpoints

**Independent Test**: Load the page and verify: (1) Name, title, and description are visible without scrolling, (2) Content is readable at 375px, 768px, and 1440px widths without horizontal scrolling

### Implementation for User Story 1 + 5

- [ ] T014 [P] [US1] Create Hero component with basic structure in `src/components/Hero/Hero.tsx`
- [ ] T015 [US1] Implement semantic HTML with `<section>`, `<h1>`, and proper heading hierarchy in `src/components/Hero/Hero.tsx`
- [ ] T016 [P] [US5] Create responsive CSS Grid layout (2-col desktop, 1-col mobile) in `src/components/Hero/Hero.tsx`
- [ ] T017 [US5] Implement mobile-first breakpoint styling for sm/md/lg breakpoints in `src/components/Hero/Hero.tsx`
- [ ] T018 [US1] Style typography with theme tokens (name, title, description) in `src/components/Hero/Hero.tsx`
- [ ] T019 [US5] Configure container max-width and responsive padding in `src/components/Hero/Hero.tsx`
- [ ] T020 [P] [US1] Create Hero component barrel export in `src/components/Hero/index.ts`
- [ ] T021 [US1] Integrate Hero component into App.tsx in `src/App.tsx`

**Checkpoint**: At this point, User Story 1 + 5 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Clear Navigation Paths (Priority: P1)

**Goal**: Implement CTA buttons that smoothly scroll to Projects and Contact sections with visual hover feedback

**Independent Test**: Click "View Projects" button and verify smooth scroll to #projects section. Click "Contact Me" and verify smooth scroll to #contact. Hover over buttons and verify visual feedback within 300ms.

### Implementation for User Story 2

- [ ] T022 [P] [US2] Create reusable Button component with variant/size props in `src/components/Button/Button.tsx`
- [ ] T023 [US2] Implement primary button styles (solid background, high contrast) in `src/components/Button/Button.tsx`
- [ ] T024 [P] [US2] Implement secondary button styles (outlined, transparent) in `src/components/Button/Button.tsx`
- [ ] T025 [US2] Add hover animation (scale 1.05, background shift) with 300ms transition in `src/components/Button/Button.tsx`
- [ ] T026 [US2] Add focus ring for keyboard navigation accessibility in `src/components/Button/Button.tsx`
- [ ] T027 [P] [US2] Create Button component barrel export in `src/components/Button/index.ts`
- [ ] T028 [US2] Add CTAs to Hero component with smooth scroll handlers in `src/components/Hero/Hero.tsx`
- [ ] T029 [US2] Wire up smooth scroll to #projects and #contact targets in `src/components/Hero/Hero.tsx`

**Checkpoint**: At this point, User Story 2 should work independently

---

## Phase 5: User Story 3 - Professional Visual Identity (Priority: P2)

**Goal**: Display professional profile image with rounded-square shape, lazy loading placeholder, and no layout shift

**Independent Test**: Verify profile image displays correctly. Check image has alt text. Confirm no layout shift occurs when image loads. Verify image size adapts to mobile (200px), tablet (240px), and desktop (320px).

### Implementation for User Story 3

- [ ] T030 [P] [US3] Create aspect ratio container for profile image with fixed dimensions in `src/components/Hero/Hero.tsx`
- [ ] T031 [US3] Implement blur-up placeholder using CSS gradient fallback in `src/components/Hero/Hero.tsx`
- [ ] T032 [US3] Add profile image with src, alt text, and eager loading in `src/components/Hero/Hero.tsx`
- [ ] T033 [P] [US3] Style profile image with rounded-square shape (24-32px radius) in `src/components/Hero/Hero.tsx`
- [ ] T034 [US3] Implement responsive image sizing (200/240/320px per breakpoint) in `src/components/Hero/Hero.tsx`
- [ ] T035 [US3] Add fade-in animation when image loads in `src/components/Hero/Hero.tsx`

**Checkpoint**: At this point, User Story 3 should work independently

---

## Phase 6: User Story 4 - Engaging First Experience (Priority: P2)

**Goal**: Implement animated gradient background that runs at 60fps and respects reduced-motion preferences

**Independent Test**: Verify gradient animation plays on page load. Check animation maintains 60fps in DevTools Performance tab. Enable "Reduce motion" in system preferences and verify animation is disabled.

### Implementation for User Story 4

- [ ] T036 [P] [US4] Create GradientBackground component structure in `src/components/GradientBackground/GradientBackground.tsx`
- [ ] T037 [US4] Implement CSS keyframes for gradient animation (15-20s loop) in `src/components/GradientBackground/GradientBackground.css`
- [ ] T038 [P] [US4] Add 3-color gradient using theme tokens in `src/components/GradientBackground/GradientBackground.tsx`
- [ ] T039 [US4] Integrate useReducedMotion hook to conditionally disable animation in `src/components/GradientBackground/GradientBackground.tsx`
- [ ] T040 [P] [US4] Add prefers-reduced-motion media query CSS in `src/components/GradientBackground/GradientBackground.css`
- [ ] T041 [US4] Position gradient background behind content (z-0) in `src/components/GradientBackground/GradientBackground.tsx`
- [ ] T042 [P] [US4] Create GradientBackground barrel export in `src/components/GradientBackground/index.ts`
- [ ] T043 [US4] Integrate GradientBackground into Hero component in `src/components/Hero/Hero.tsx`

**Checkpoint**: At this point, User Story 4 should work independently

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T044 [P] Create unit tests for Button component in `src/components/Button/Button.test.tsx`
- [ ] T045 [P] Create unit tests for Hero component in `src/components/Hero/Hero.test.tsx`
- [ ] T046 Create unit tests for useSmoothScroll hook in `tests/unit/useSmoothScroll.test.ts`
- [ ] T047 [P] Run Lighthouse audit and verify score >90, LCP <2.5s, CLS <0.1
- [ ] T048 [P] Run axe-core accessibility audit and fix any violations
- [ ] T049 Verify color contrast ratios meet WCAG AA (4.5:1 text, 3:1 UI) using browser DevTools
- [ ] T050 Test keyboard navigation (Tab, Enter, Escape) through all interactive elements
- [ ] T051 Test on actual mobile device (iOS Safari and Android Chrome)
- [ ] T052 Verify cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] T053 Add JSDoc comments to all components and hooks
- [ ] T054 Create E2E test for complete hero user journey in `tests/e2e/hero.spec.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 + 5 (P1)**: Can start after Foundational (Phase 2) - Core layout and responsive structure
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Depends on Button component
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Adds profile image to Hero
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Adds background to Hero

### Within Each User Story

- Components before integration
- Core implementation before styling
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, user stories can start in parallel:
  - US1+5 (layout) and US2 (buttons) can be done together
  - US3 (image) and US4 (gradient) can be done together
- All tests in Polish phase marked [P] can run in parallel

---

## Parallel Example: User Story 1 + 5

```bash
# Launch layout implementation tasks together:
Task: "T014 [P] [US1] Create Hero component with basic structure"
Task: "T016 [P] [US5] Create responsive CSS Grid layout"

# Launch styling tasks together:
Task: "T018 [US1] Style typography with theme tokens"
Task: "T017 [US5] Implement mobile-first breakpoint styling"
```

---

## Implementation Strategy

### MVP First (User Story 1 + 5 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 + 5 (Core layout + responsive)
4. **STOP and VALIDATE**: Test Hero displays name/title/description responsively
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 + 5 → Test responsive layout → Deploy/Demo (MVP!)
3. Add User Story 2 → Test CTAs and smooth scroll → Deploy/Demo
4. Add User Story 3 → Test profile image → Deploy/Demo
5. Add User Story 4 → Test gradient animation → Deploy/Demo
6. Complete Polish phase → Full validation → Final Deploy

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 + 5 (layout/responsive)
   - Developer B: User Story 2 (buttons/CTAs)
3. Then:
   - Developer A: User Story 3 (profile image)
   - Developer B: User Story 4 (gradient background)
4. Stories complete and integrate independently

---

## Task Count Summary

| Phase | Task Count | Stories Covered |
|-------|------------|-----------------|
| Phase 1: Setup | 6 | N/A |
| Phase 2: Foundational | 7 | N/A |
| Phase 3: US1+5 | 8 | First Impression, Responsive |
| Phase 4: US2 | 8 | Navigation Paths |
| Phase 5: US3 | 6 | Visual Identity |
| Phase 6: US4 | 8 | First Experience |
| Phase 7: Polish | 11 | All |
| **Total** | **54** | - |

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
