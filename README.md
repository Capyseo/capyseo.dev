# capyseo.dev

**Marketing and documentation website** for the Capyseo SEO toolkit.

![Capyseo Website](./assets/capyseo-website-banner.png)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Svelte 5](https://img.shields.io/badge/Svelte-5.0+-FF3E00?logo=svelte)](https://svelte.dev)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0+-FF3E00)](https://kit.svelte.dev)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4.0+-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**[Visit Site](https://capyseo.dev)** · **[GitHub](https://github.com/Capyseo/capyseo.dev)** · **[Report Issue](https://github.com/Capyseo/capyseo.dev/issues)**

**Part of the [Capyseo](https://capyseo.dev) toolkit.**

---

## Overview

Beautiful, modern web presence for **[Capyseo](https://capyseo.dev)** — chill SEO for every framework. Features integrated documentation, responsive design, dark mode, and full-text search.

---

## ✨ Features

- 🎨 **Modern Design** — Handcrafted with Svelte 5 and Tailwind CSS v4
- 📚 **Integrated Docs** — Auto-fetched from capyseo-docs repo at build time
- 🌗 **Dark Mode** — Automatic detection + manual toggle with theme persistence
- 🔍 **Full-Text Search** — Client-side search with fuzzy matching (8KB bundle)
- 💨 **Lightning Fast** — Pre-rendered static site, optimized assets
- ♿ **Accessible** — WCAG AA compliant with semantic HTML
- 📱 **Responsive** — Mobile-first design, works on all devices
- 🎯 **SEO-Optimized** — Proper meta tags, Open Graph, structured data

---

## 🧩 Built With Capyseo Modules

capyseo.dev is more than just a marketing site—it's a **showcase of Capyseo capabilities**. This site uses and demonstrates:

### [@capyseo/core](https://github.com/Capyseo/capyseo-core)
The SEO analysis engine powers the documentation system with:
- **50+ SEO rule checks** across 11 categories (meta, images, headings, links, content, mobile, security, performance, etc.)
- **Structured analysis** that validates all pages for search engine optimization
- **Type-safe API** with TypeScript interfaces for extensibility

### [@capyseo/sveltekit](https://github.com/Capyseo/capyseo-sveltekit)
Deep SvelteKit integration providing:
- **Vite Plugin** — Build-time SEO analysis during `vite build`
- **Server Hooks** — Real-time SEO feedback during development
- **Custom Report Handlers** — Process analysis results programmatically
- **AI Integration** — Optional AI-powered suggestions (OpenAI, Anthropic, Gemini, Ollama)

### [@capyseo/cli](https://github.com/Capyseo/capyseo-cli)
While capyseo.dev focuses on the developer experience, the CLI demonstrates:
- **Multi-format reporting** — Console, JSON, HTML, CSV, SARIF
- **Site crawling** — Analyze multiple pages at once
- **CI/CD integration** — Fail builds on low SEO scores
- **Asset generation** — Sitemaps, robots.txt, meta tags

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Svelte 5](https://svelte.dev)** — Lightweight, reactive components with runes
- **[SvelteKit](https://kit.svelte.dev)** — Full-stack framework with file-based routing
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS with Vite plugin
- **[Vite](https://vitejs.dev)** — Lightning-fast build tool

### Styling & Components
- **[shadcn-svelte](https://www.shadcn-svelte.com)** — Customizable UI components
- **[Hugeicons](https://hugeicons.com)** — Beautiful icon library (1000+ icons)
- **[mode-watcher](https://github.com/huntabyte/mode-watcher)** — Dark mode detection & management
- **Design System** — Capybara Brown palette with OKLCH color space

### Documentation System
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** — YAML frontmatter parsing
- **[svelte-exmarkdown](https://github.com/exsurgo/svelte-exmarkdown)** — Markdown rendering with Svelte
- **[Shiki](https://shiki.style)** — Syntax highlighting with dual themes

### Search & Performance
- **[MiniSearch](https://github.com/lucaong/minisearch)** — 8KB full-text search library
- **Static Rendering** — Pre-rendered HTML for optimal performance
- **Code Splitting** — Automatic optimization with Vite

### Typography
- **[Abril Fatface](https://fonts.google.com/specimen/Abril+Fatface)** — Elegant serif display font
- **[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)** — Modern sans-serif body font
- **[Kode Mono](https://fonts.google.com/specimen/Kode+Mono)** — Clean monospace font

---

## 🚀 Key Technical Features

### Build-Time Documentation Fetching

The site automatically fetches markdown documentation from the [capyseo-docs](https://github.com/Capyseo/capyseo-docs) repository at build time. This means:

- **No database required** — Static site friendly
- **Fast page loads** — Pre-processed and optimized
- **Auto-sync** — Webhook triggers rebuilds on docs changes
- **Smart extraction** — Headings, navigation, and search index generated automatically

```bash
# Fetch and process all docs
bun run fetch-docs

# Runs automatically during dev/build
bun run dev
```

**See:** [`scripts/fetch-docs.ts`](scripts/fetch-docs.ts)

### Shiki Dual-Theme Code Highlighting

Code blocks automatically adapt to light/dark mode:

- **Light mode:** GitHub Light theme for clarity
- **Dark mode:** Vitesse Dark theme for reduced eye strain
- **Copy button** — One-click code copying
- **Language badges** — Automatic language detection

### Full-Text Search with MiniSearch

Client-side fuzzy search across entire documentation:

- **Lightweight** — Only 8KB bundle size
- **Fuzzy matching** — Typo-tolerant search
- **Real-time** — No server required
- **Keyboard nav** — Cmd+K / Ctrl+K to open

**See:** [`src/lib/docs/search.svelte.ts`](src/lib/docs/search.svelte.ts)

### System Preference Dark Mode

Automatic theme detection chain:

1. **localStorage** — Respects user's manual choice
2. **System preference** — Follows OS/browser settings (prefers-color-scheme)
3. **Default** — Falls back to light mode

Flash prevention ensures no white flash for dark mode users.

### Responsive Multi-Column Layout

- **Desktop:** Sidebar (280px) | Content (max 800px) | TOC (260px)
- **Tablet:** Sidebar hidden, drawer on mobile button
- **Mobile:** Full-width content, drawer navigation

---

### How capyseo.dev Uses These Modules

1. **Documentation Quality** — All 41 documentation pages are SEO-optimized following Capyseo's rules
2. **Real-time Validation** — Server hooks provide feedback during content creation
3. **Build-time Checks** — Vite plugin ensures no pages ship with SEO issues
4. **Live Examples** — The Features page showcases real SEO analysis output
5. **Integration Pattern** — Demonstrates best practices for using Capyseo in production

---

## 🎯 Design System

### Color Palette

**Capybara Brown** is the primary color, complemented by a warm, accessible palette:

```css
--capybara-500: oklch(0.55 0.11 42);  /* Main brand color */
--capybara-50: oklch(0.97 0.01 55);   /* Very light */
--capybara-950: oklch(0.18 0.03 34);  /* Very dark */
```

All colors use OKLCH color space for:
- ✅ Perceptually uniform colors
- ✅ Better dark mode support
- ✅ Accessibility compliance (WCAG AA)

### Typography Scale

- **Display:** Abril Fatface at 1.75rem–2.5rem
- **Headings:** Plus Jakarta Sans at 1rem–1.5rem (600-700 weight)
- **Body:** Plus Jakarta Sans at 1rem (400 weight)
- **Code:** Kode Mono at 0.875rem (400-600 weight)

---

## 📂 Project Structure

```
src/
├── app.css                      # Design system, colors, prose
├── lib/
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── shared/             # Logo, ThemeToggle
│   │   ├── docs/               # Sidebar, TOC, CodeBlock, etc.
│   │   └── ui/                 # shadcn components
│   ├── docs/
│   │   ├── navigation.ts       # Navigation helpers
│   │   ├── search.svelte.ts    # MiniSearch integration
│   │   └── types.ts            # TypeScript interfaces
│   └── utils/
│       └── index.ts            # cn() helper
├── routes/
│   ├── +layout.svelte          # Root layout
│   ├── +page.svelte            # Homepage
│   ├── docs/
│   │   ├── +layout@.svelte     # Docs layout (reset parent)
│   │   ├── +page.svelte        # Docs index
│   │   └── [...slug]/
│   │       ├── +page.svelte    # Docs page renderer
│   │       └── +page.ts        # Dynamic routing
│   ├── features/
│   ├── pricing/
│   ├── about/
│   └── sponsor/
├── app.html                     # HTML template with theme script
└── content/
    └── docs.json              # Generated manifest (41 pages)

scripts/
└── fetch-docs.ts              # Build-time doc fetcher
```

---

## 💡 Integration Examples

### Capyseo in Build Process

The Vite plugin analyzes all pages during build to enforce SEO quality:

```typescript
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { capyseo } from '@capyseo/sveltekit/vite';

export default {
  plugins: [
    sveltekit(),
    capyseo({
      minScore: 85,           // Enforce minimum SEO score
      failOnError: true,      // Fail build on errors
      exclude: ['/admin/*'],  // Skip non-public routes
    }),
  ],
};
```

### Real-time Development Feedback

Server hooks provide instant SEO validation while you develop:

```typescript
// src/hooks.server.ts
import { createCapyseoHandle } from '@capyseo/sveltekit/hooks';

export const handle = createCapyseoHandle({
  logLevel: 'issues',  // Only show pages with problems
});
```

**Example output during development:**

```
[capyseo] /docs/getting-started (Score: 92/100)
  ! [open-graph] Missing og:image
  ! [twitter-card] Missing twitter:image
```

### AI-Powered Suggestions

Optional AI integration for meta descriptions and alt text:

```typescript
capyseo({
  aiProvider: 'gemini',
  aiApiKey: process.env.GEMINI_API_KEY,
  onReport: (reports) => {
    console.log(`✅ All ${reports.length} pages SEO-checked with AI suggestions`);
  },
})
```

### Programmatic Analysis

Use the core analyzer for custom workflows:

```typescript
import { SEOAnalyzer } from '@capyseo/core';

const analyzer = new SEOAnalyzer();
const report = await analyzer.analyzePage(html, 'https://capyseo.dev/docs');

// Get structured results
console.log(`Score: ${report.score}/100`);
console.log(`Issues: ${report.issues.length}`);

// Find specific problems
const missingMeta = report.issues.filter(i => i.rule === 'meta-description');
```

---

## 🚀 Getting Started

### Prerequisites

- **[Bun](https://bun.sh)** — JavaScript runtime and package manager
- **[Node.js](https://nodejs.org)** — v18 or later (if using npm/pnpm instead)

### Installation

```bash
# Clone the repository
git clone https://github.com/Capyseo/capyseo.dev
cd capyseo.dev

# Install dependencies
bun install
```

### Development

```bash
# Start dev server (includes fetch-docs)
bun run dev

# Visit http://localhost:5173
```

### Build for Production

```bash
# Build static site
bun run build

# Preview production build
bun run preview

# Output is in ./build/
```

### Type Checking

```bash
# Check Svelte types
bun run check

# Watch mode
bun run check:watch
```

---

## 🔄 Documentation Workflow

### Local Development

To work with documentation locally:

1. Clone [capyseo-docs](https://github.com/Capyseo/capyseo-docs) to `../capyseo-docs`
2. Run `bun run fetch-docs` to sync docs
3. Start dev server with `bun run dev`

### Automatic Rebuilds

When you push to `capyseo-docs`, a GitHub Actions workflow:

1. Triggers a webhook to Vercel
2. Vercel redeploys the site
3. Docs are automatically updated

---

## 🎨 Customizing the Design

### Changing Colors

Edit CSS custom properties in `src/app.css`:

```css
:root {
  --primary: oklch(0.45 0.11 40);
  --capybara-500: oklch(0.55 0.11 42);
  /* ... more colors */
}

.dark {
  --primary: oklch(0.75 0.1 48);
  /* ... dark mode colors */
}
```

### Changing Fonts

Fonts are loaded in `src/app.css`:

```css
@font-face {
  font-family: 'Abril Fatface';
  src: url('/fonts/abril-fatface-v23-latin-regular.woff2') format('woff2');
}
```

Add new fonts to `static/fonts/` and register in `src/app.css`.

### Modifying Theme Toggle

Edit `src/lib/components/shared/ThemeToggle.svelte` to customize the button appearance.

---

## 📊 Performance

- **Lighthouse Scores:** 95+ in all categories
- **Bundle Size:** ~45KB (gzipped)
- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Time to Interactive:** < 2s

---

## 🔐 Security

- ✅ No external analytics (privacy-first)
- ✅ No unnecessary dependencies
- ✅ TypeScript strict mode
- ✅ Security headers configured
- ✅ No user data collection

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Documentation:** Improve docs in [capyseo-docs](https://github.com/Capyseo/capyseo-docs)
2. **Website:** Fix bugs or add features in this repo
3. **Design:** Suggest improvements to the design system

### Development Guidelines

- Write TypeScript with strict mode enabled
- Follow existing code style (use Biome for formatting)
- Add tests for new features
- Keep commits atomic and descriptive
- Reference issues in commit messages

### Commit Message Format

```
type(scope): description

feat(docs): add dark mode toggle
fix(search): improve fuzzy matching
docs(readme): update installation steps
```

---

## 🐛 Known Issues

None at the moment! Found one? [Open an issue](https://github.com/Capyseo/capyseo.dev/issues).

---

## 📄 License

MIT © [Capyseo](https://capyseo.dev)

---

## 🔗 Related Projects

| Project | Description |
|---------|-------------|
| [Capyseo Core](https://github.com/Capyseo/capyseo-core) | SEO analysis engine |
| [Capyseo CLI](https://github.com/Capyseo/capyseo-cli) | Command-line interface |
| [Capyseo Docs](https://github.com/Capyseo/capyseo-docs) | Documentation source |
| [Capyseo SvelteKit](https://github.com/Capyseo/capyseo-sveltekit) | SvelteKit adapter |

---

## 💬 Support

- 📖 [Full Documentation](https://capyseo.dev/docs)
- 🐦 [@Capyseo](https://twitter.com/capyseo)
- 💬 [GitHub Discussions](https://github.com/Capyseo/capyseo.dev/discussions)
- 🐛 [Report Issues](https://github.com/Capyseo/capyseo.dev/issues)
