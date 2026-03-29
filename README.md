# Logistics Company Website

A modern, multilingual single-page website designed for a European freight and logistics company. Clean architecture, elegant UI, and production-ready deployment.

---

## Overview

A fully responsive marketing website that presents a logistics company's services, fleet, coverage area, career opportunities, and client testimonials. Designed to feel professional and trustworthy, with smooth animations and a polished visual identity.

The site supports **five languages** and **two themes** out of the box, with a component-based architecture that makes it easy to maintain and extend.

---

## Highlights

**Multilingual**
Romanian, English, German, French, and Spanish — each with its own translation file. Switching languages is instant, no page reload. All content is type-safe through a shared `Translations` interface.

**Dual Theme**
Light and dark modes with carefully tuned palettes. The light theme uses a white, blue, and orange combination. The dark theme uses deep navy tones. Both are designed to be easy on the eyes for extended reading.

**Fully Responsive**
Three breakpoints ensure the site looks right on desktop, tablet, and any phone size — from large screens down to 320px. Navigation collapses into a hamburger menu on mobile.

**Animated Route Map**
The hero section features a custom SVG map of European transport corridors with animated route lines, city pins, and geographic accuracy. Built entirely in code, no image dependencies.

**Scroll Animations**
Sections animate into view as the user scrolls, with staggered entrance effects on card grids. Powered by a lightweight `IntersectionObserver` hook.

**Animated Statistics**
Key numbers count up from zero when they scroll into view, giving the stats section a dynamic, engaging feel.

---

## Built With

| What            | How                                                        |
|-----------------|------------------------------------------------------------|
| UI Framework    | **React 19** with functional components and hooks          |
| Language        | **TypeScript** with strict type-checking                   |
| Build Tool      | **Vite 7** for fast development and optimized production builds |
| Styling         | **CSS Custom Properties** — no CSS frameworks, no preprocessors |
| Translations    | **Custom typed system** — one file per language, shared interface |
| Deployment      | **Cloudflare Pages** with edge delivery and automatic SSL  |
| Linting         | **ESLint** with TypeScript-aware rules                     |

No external UI libraries. No CSS frameworks. No translation libraries. Everything is built from scratch for full control and zero bloat.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start with network access (test on other devices)
npm run dev -- --host

# Build for production
npm run build

# Type-check without building
npx tsc --noEmit -p tsconfig.app.json

# Deploy to Cloudflare Pages
npm run deploy
```

---

## Architecture

```
src/
  components/              Each section in its own folder
    Hero/                  Hero, animated route map, number counter
    Navbar/                Navigation, language picker, theme toggle
    Services/              Service offering cards
    About/                 Company story and values
    StatsBand/             Key statistics banner
    Fleet/                 Vehicle showcase
    Coverage/              Service area and map
    Careers/               Open positions and perks
    Testimonials/          Client review carousel
    Contact/               Inquiry form and contact details
    Footer/                Links and legal info

  hooks/                   Reusable React hooks
    useInView.ts           Viewport detection for scroll animations

  styles/                  Shared and global styles
    base.css               Design tokens, reset, typography, buttons
    light-mode.css         Light theme refinements
    responsive.css         Tablet, mobile, and small phone breakpoints

  translations/            Multilingual content
    types.ts               Language type definitions and interface
    ro.ts                  Romanian
    en.ts                  English
    de.ts                  German
    fr.ts                  French
    es.ts                  Spanish
    index.ts               Unified export

  App.tsx                  Root component — state and composition
  App.css                  Style import hub
```

Each component folder contains its `.tsx` component, its `.css` styles, and an `index.ts` barrel export. Everything related to a section lives together.

---

## Supported Languages

| Code | Language   |
|------|------------|
| RO   | Romanian   |
| EN   | English    |
| DE   | German     |
| FR   | French     |
| ES   | Spanish    |

Adding a new language requires creating one translation file and registering it in the index. The TypeScript compiler enforces that every key is translated.

---

## Design Decisions

- **No CSS framework** — Custom properties give full control over theming without the weight of Tailwind, Bootstrap, or similar. Every color, spacing, and shadow is a token.
- **No translation library** — A simple typed record is more maintainable than i18next or react-intl for a site of this scope. The compiler catches missing keys.
- **Co-located styles** — Each component's CSS lives next to its TSX file, not in a separate global stylesheet. Easier to find, easier to delete.
- **SVG route map** — Generated from real geographic coordinates, not a static image. Scales perfectly at any resolution and adapts to both themes.

---

## License

MIT License — Copyright (c) 2026 AriiSM and TeoR. See [LICENSE](LICENSE) for details.
