# Portfolio Website — Full Session Log

> Everything built and modified in this session, in order.

---

## 1. Initial Build

Built the entire portfolio from [portfolio_plan.md](file:///c:/Users/harig/OneDrive/Attachments/Desktop/VIBE%20CODE/portfolio_plan.md) using plain HTML, CSS, and JavaScript.

### Files Created

| File | Purpose |
|------|---------|
| [portfolio/index.html](file:///c:/Users/harig/OneDrive/Attachments/Desktop/VIBE%20CODE/portfolio/index.html) | Single-page site: sticky nav, hero, about, skills, projects, contact, footer |
| [portfolio/css/style.css](file:///c:/Users/harig/OneDrive/Attachments/Desktop/VIBE%20CODE/portfolio/css/style.css) | Full design system: dark theme, Neue Montreal + Inter, animations, responsive |
| [portfolio/js/main.js](file:///c:/Users/harig/OneDrive/Attachments/Desktop/VIBE%20CODE/portfolio/js/main.js) | Sticky nav, smooth scroll, hamburger menu, scroll-reveal (IntersectionObserver) |
| [portfolio/assets/images/profile.jpg](file:///c:/Users/harig/OneDrive/Attachments/Desktop/VIBE%20CODE/portfolio/assets/images/profile.jpg) | AI-generated profile photo |

### Sections Included
- **Nav** — sticky, blur backdrop, active-link highlight, mobile hamburger
- **Hero** — name, tagline, CTA buttons, circular profile photo with glow
- **About Me** — card with vertical accent bar, bio text
- **Skills** — 3 grouped cards: Frontend, Tools, Learning (pill tags)
- **Projects** — 5 cards with title, description, tech badges, Live + GitHub links
- **Contact** — email, GitHub, LinkedIn cards + Download Resume button
- **Footer** — minimal copyright

### Verified in Browser
- ✅ All sections render on desktop and mobile (390px)
- ✅ Responsive layout, hamburger menu, scroll animations all working

````carousel
![Hero section desktop](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\hero_section_1774020660296.png)
<!-- slide -->
![About Me section](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\about_me_section_1774020674689.png)
<!-- slide -->
![Skills section](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\skills_section_1774020686191.png)
<!-- slide -->
![Projects section](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\projects_section_1774020698014.png)
<!-- slide -->
![Contact section](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\contact_section_1774020712030.png)
<!-- slide -->
![Mobile hero view (390px)](C:\Users\harig\.gemini\antigravity\brain\88f59ff0-6a60-42e9-85e6-38874587aa21\hero_mobile_view_1774020736873.png)
````

---

## 2. Personalisation Edits

| What | Change |
|------|--------|
| Name | `Haris` → **Harigovind.P** (hero h1, page title, footer, alt text) |
| Heading font | `Syne` → **Neue Montreal** (Fontshare CDN) |
| Nav logo | Removed initially, later restored as `Harigovind.P` |
| Email | `harigovind.p3921@gmail.com` |
| GitHub | `github.com/HariHere1` |
| LinkedIn | `linkedin.com/in/harigovind-p-385017291` |

---

## 3. Floating Background Shapes Added

Added a `hero__shapes` decorative layer inside the hero section:
- **13 shapes** total: 3 circles, 3 squares, 4 dots, 3 SVG triangles
- All white, stroke only, no fill
- Each with unique size, position, animation duration (5.8–11s) and delay — never in sync
- Three keyframe variants (`sf-a`, `sf-b`, `sf-c`)
- `z-index: 0`, `pointer-events: none` — fully behind content
- Hidden on mobile via media query
- Opacity adjusted: `0.12` → `0.22` after user feedback

---

## 4. Hero Section Refinement

User requested a cleaner, more intentional hero. Changes made:

### Shapes — stripped to 2, pushed to corners
| | Before | After |
|--|--------|-------|
| Count | 13 shapes | **2 shapes** |
| Positions | Scattered across hero | **Top-right corner** (circle) & **bottom-left corner** (square) |
| Opacity | 22% | **7%** |
| Animation speed | 5.8–11s | **18s / 22s** (ultra-slow, 10px travel) |

### Profile glow — softer & more diffused
| | Before | After |
|--|--------|-------|
| Size | 360×360px | **480×480px** |
| Style | Single-stop radial | **Multi-stop radial gradient** |
| Blur | None | **`filter: blur(32px)`** |
| Animation | 4s pulse | **12s pulse**, peak opacity 75% |

---

## 5. Nav Logo Restored

Added `Harigovind.P` back to the left side of the navbar.

```
Harigovind.P          About  Skills  Projects  Contact
```

---

## 6. Accent Color: Blue → Violet/Purple

User changed the theme from blue `#3b82f6` to violet `#a78bfa`.

### All values replaced

| Element | Before | After |
|---------|--------|-------|
| CSS `--accent` | `#3b82f6` | `#a78bfa` |
| CSS `--accent-dim` | `rgba(59,130,246,0.15)` | `rgba(167,139,250,0.15)` |
| CSS `--accent-glow` | `rgba(59,130,246,0.35)` | `rgba(167,139,250,0.35)` |
| Hero grid lines | `rgba(59,130,246,0.03)` | `rgba(167,139,250,0.03)` |
| Photo glow | `rgba(59,130,246,0.28/.10)` | `rgba(167,139,250,0.28/.10)` |
| Skill pill BG/border | `rgba(59,130,246,0.1/.2)` | `rgba(167,139,250,0.1/.2)` |
| Skill pill text | `#93c5fd` | `#ddd6fe` |
| Project card gradient | `#60a5fa` | `#c4b5fd` |
| Project card hover border | `rgba(59,130,246,0.3)` | `rgba(167,139,250,0.3)` |
| Contact card hover shadow | `rgba(59,130,246,0.1)` | `rgba(167,139,250,0.1)` |
| Primary button hover | `#2563eb` | `#7c3aed` |

> ✅ Post-change grep scan confirmed **zero remaining blue values** anywhere in the project.

---

## Current State of Files

```
portfolio/
├── index.html         ← all sections, Harigovind.P, real contact links
├── css/
│   └── style.css      ← full purple theme, refined glow, 2 corner shapes
├── js/
│   └── main.js        ← smooth scroll, sticky nav, hamburger, scroll-reveal
└── assets/
    └── images/
        └── profile.jpg
```

## To Do (Remaining)
- Add real `resume.pdf` and wire the Download Resume button
- Replace placeholder `#` project Live/GitHub links with real URLs
- Deploy to GitHub Pages or Netlify
