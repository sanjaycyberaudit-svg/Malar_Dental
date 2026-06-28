# Malar Dental — Single-Page Website

A modern, trustworthy, conversion-focused single-page site for **Malar Dental**. Dark photo hero with a teal accent, Plus Jakarta Sans throughout, pill buttons, an interactive 4-step progress bar, animated stat counters, and a service-card grid.

## Tech Stack

- **React 19 + Vite + TypeScript**
- **Tailwind CSS v3** (HSL design tokens in `src/index.css`)
- **Motion** (`motion/react`) for entrance / scroll / accordion animations
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
  App.tsx                 # composes all sections in order
  index.css               # Tailwind + :root design tokens
  hooks/
    useCountUp.ts         # rAF count-up (cubic-bezier easing), fires once
  lib/
    animations.ts         # fadeUp / wordUp variants
    images.ts             # centralised Unsplash photo URLs
    site.ts               # brand, phone, nav, doctor copy
    utils.ts              # cn() classname helper
  components/
    ui/                   # Button, Container, Photo, SectionLabel, Stat, ToothIcon
    sections/             # Navbar, Hero, ProgressSteps, About, Services,
                          # WhyChooseUs, Process, Testimonials, PhotoCta,
                          # Faq, FinalCta, Footer
```

## Design Notes

- **Centering:** every section's inner content is wrapped in `<Container>` (`max-w-[1200px] mx-auto`), with a `narrow` variant (`max-w-3xl`) for the FAQ and final CTA copy. Mobile padding is `px-6`, desktop `px-[60px]`.
- **Colors:** single teal accent `hsl(180 91% 39%)` (#0BB8B8) — no blue anywhere.
- **Stat counters** use an `IntersectionObserver` (via `useInView`, threshold 0.3) and animate exactly once.
- **Service cards** scale only the inner `<img>` on hover (`overflow-hidden` container), never the card.
- **Photo component** fades images in on load and degrades to a calm teal gradient if a remote photo fails — so the layout never breaks.
- All imagery is sourced from Unsplash; swap the URLs in `src/lib/images.ts` for production assets.
