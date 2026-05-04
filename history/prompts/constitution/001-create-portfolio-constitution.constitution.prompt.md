---
id: 001
title: Create Portfolio Constitution
stage: constitution
date: 2026-04-09
surface: agent
model: kimi-k2.5
feature: portfolio-website
branch: master
user: Islam ul Haq
command: /sp.constitution
labels: [constitution, portfolio, principles, governance]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A
---

## Prompt

📁 Portfolio Structure
1️⃣ Hero Section (First Screen)

Ye sabse important hota hai.

Content:

Name
Title
Short intro
CTA buttons
Profile Image

Example:

Hi, I'm Islam ul Haq
Web Developer
I build modern and responsive websites using technologies like React and JavaScript.

Buttons:

View Projects
Contact Me

Extra:

animated background
profile image
2️⃣ About Me

Is section me apni introduction likho.

Include:

short introduction
skills
experience

Example:

I am a passionate Web Developer from Karachi who enjoys building modern, fast, and responsive websites using technologies like React, JavaScript, and modern CSS frameworks.

Add:

Download CV button
3️⃣ Skills Section

Icons ke sath skills show karo.

Example:

Frontend

HTML
CSS
JavaScript
React
Bootstrap
Tailwind

Animation effect add karo.

4️⃣ Projects Section (Most Important)

Cards design karo.

Each project me:

Project image
Title
Description
Tech stack
Live demo
GitHub link

Example projects:

1️⃣ Ecommerce Website
2️⃣ Clinic Website
3️⃣ Admin Dashboard
4️⃣ Portfolio Website

Hover animation add karo.

5️⃣ Services Section

Agar tum freelancing karna chahte ho to ye zaroor add karo.

Example:

💻 Web Development
📱 Responsive Websites
⚡ Frontend Development

6️⃣ Contact Section

Fields:

Name
Email
Message

Add:

Email
WhatsApp
LinkedIn
GitHub
7️⃣ Footer

Include:

Social icons
copyright
quick links

Example:

© 2026 Islam ul Haq — Web Developer

🎨 Advanced Features (Portfolio ko BEST banane ke liye)

Add karo:

✨ Smooth scroll
✨ Dark / Light mode
✨ Page transitions
✨ Animated skill bars
✨ Cursor animation
✨ Loading screen
✨ Project filter (React / Websites) buddy i want to create the constitution.md file.

## Response snapshot

Created a comprehensive constitution.md at .specify/memory/constitution.md with six core principles:

I. Design-First Excellence - Visual polish before functionality, 8px grid, 95% fidelity
II. Animation & Interaction Polish - Purposeful animations, 60fps budget, loading screen
III. Responsive-First Development - Mobile-first, breakpoints, touch-friendly targets
IV. Performance Budget - Core Web Vitals, <500KB initial load, Lighthouse >90
V. Accessibility (a11y) - WCAG 2.1 AA, semantic HTML, keyboard nav, 4.5:1 contrast
VI. Component Reusability - Strictly typed props, custom hooks, no duplicated JSX

Technology Stack defined: React 18+, TypeScript (strict), Tailwind CSS, Framer Motion, Vite
Quality Gates established: Pre-commit checklist, section completion criteria, definition of done

## Outcome

- ✅ Impact: Established governance framework for portfolio development with clear principles and quality gates
- 🧪 Tests: N/A (documentation only)
- 📁 Files: .specify/memory/constitution.md created
- 🔁 Next prompts: /sp.specify to create feature specifications for each section
- 🧠 Reflection: User provided detailed portfolio requirements in mixed language (English/Urdu), successfully extracted and formalized into professional development standards

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS - All placeholders filled, valid markdown structure
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Create spec.md for Hero section as pilot
