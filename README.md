# Sciascia-Caff-Webstie

Sciascia Caffe 1919 is a single-page, static coffee brand interface built as a polished landing experience. The page presents a strong hero section, product discovery, brand story panels, a menu grid, opening-hours content, and testimonials in one continuous frontend flow.

The site is authored by **Yunus Emre Gurlek**. The footer project credit is shown as **SoftBridge Solutions**.

## Technical Overview

This is a frontend-only Next.js application using the App Router. It does not depend on a backend service, API route, CMS, database, or runtime environment variables. All visible content is handled in components, while static media is organized under `public/assets`.

Core technologies:

- Next.js 15 App Router
- React 18 client and server components
- TypeScript
- TailwindCSS
- GSAP ScrollTrigger
- Framer Motion
- Locomotive Scroll
- Swiper
- Next Image optimization

## Application Structure

`app/layout.tsx` owns global metadata, font loading, and the shared Header/Footer shell. It centralizes SEO title, description, Open Graph data, Twitter Card data, creator, publisher, icons, and application metadata.

`app/page.tsx` composes the main landing page. It renders the Hero, Explore, About, Menu, Opening Hours, and Testimonials sections. Locomotive Scroll is loaded on the client through a dynamic import after mount.

`components/Hero.tsx` renders the first viewport with a video background, dark overlay, badge, brand headline, separator, short copy, and primary CTA.

`components/Explore/Explore.tsx` presents coffee categories with two text columns and a central product image. The cup asset is loaded from `public/assets/explore/cup.png` and carries the Sciascia Caffe label directly on the image.

`components/About.tsx` contains the horizontally pinned brand story section powered by GSAP ScrollTrigger. The section uses separate Journey, Promise, and Team content panels.

`components/Menu/Menu.tsx` renders a static coffee menu as a responsive grid. Item names, descriptions, prices, and image paths are stored in the component data array.

`components/OpeningHours.tsx` renders the opening-hours block with a background image, overlay, badge, and schedule artwork.

`components/Testimonials.tsx` provides a Swiper-based carousel for customer feedback.

`components/Footer.tsx` manages the footer logo, navigation links, SoftBridge Solutions project credit, and copyright line. Social media icon links have been removed.

## Branding

Visible brand name:

`Sciascia Caffe 1919`

Primary brand surfaces:

- Header logo
- Hero headline
- SEO metadata
- Open Graph metadata
- Footer logo
- About section copy
- Product cup asset
- README and LICENSE attribution

## Assets

Main visual assets live under `public/assets`.

- `public/assets/logo.svg`: Sciascia Caffe 1919 wordmark
- `public/assets/explore/cup.png`: coffee cup image with the Sciascia Caffe label
- `public/assets/hero/video.mp4`: hero video background
- `public/assets/about/*`: images used in the About section
- `public/assets/menu/*`: menu item images
- `public/assets/opening-hours/*`: opening-hours visuals
- `public/assets/footer/bg.png`: footer background

## Styling

TailwindCSS is configured in `tailwind.config.ts`. The configuration defines color tokens, font families, container behavior, a custom breakpoint, and reusable background image tokens. Global utility classes such as heading, lead, and button styles live in `app/globals.css`.

Primary design tokens:

- `primary`: dark coffee and black surfaces
- `accent`: warm coffee-toned highlight color
- `font-primary`: display heading type
- `font-secondary`: body and interface type

## Animation Model

Animation is split across three focused layers:

- Framer Motion handles navigation transitions, menu motion, and small UI animation states.
- GSAP ScrollTrigger controls the pinned horizontal story movement in the About section.
- Locomotive Scroll provides smooth scroll behavior and parallax attributes.

This separation keeps complex animation behavior isolated by responsibility and makes each component easier to maintain.

## Vercel Readiness

The project is prepared for Vercel as a Next.js application. `vercel.json` only declares the Next.js framework and avoids static SPA rewrite rules that could interfere with App Router routing.

`next.config.mjs` includes an `images.qualities` entry for the existing `quality={100}` image usage. This keeps the project aligned with current Next.js image configuration expectations and avoids future compatibility warnings.

## Ownership

Site author attribution:

`Yunus Emre Gurlek`

Footer project credit:

`This project was made by SoftBridge Solutions.`

## License

MIT License. The copyright owner is defined as `Yunus Emre Gurlek` in the LICENSE file.
