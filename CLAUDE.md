# Capyseo.dev Website

Marketing and documentation website for Capyseo - an AI-powered SEO toolkit.

## Tech Stack

- **SvelteKit** - Full-stack framework with Svelte 5
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **shadcn-svelte** - Customizable UI components (Button, Card, Badge)
- **Hugeicons** - Icon library (`@hugeicons/svelte`)
- **mdsvex** - Markdown + Svelte for future wiki content
- **mode-watcher** - Dark/light theme support

## Project Structure

```
src/
├── app.css               # Design system: colors, typography, utilities
├── app.html              # HTML template with font preloads
├── lib/
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   ├── marketing/    # Hero, FeatureCard, Terminal, etc.
│   │   ├── shared/       # Logo, ThemeToggle, HffmnnLogo
│   │   ├── ui/           # shadcn components (button, card, badge)
│   │   └── wiki/         # Wiki components (planned)
│   └── utils/
│       └── index.ts      # cn() utility for Tailwind
├── routes/
│   ├── +layout.svelte    # Root layout
│   ├── +page.svelte      # Homepage
│   ├── features/         # Features page
│   ├── wiki/             # Documentation (Coming Soon)
│   ├── pricing/          # Pricing page
│   └── about/            # About page
static/
├── fonts/                # Self-hosted WOFF2 fonts
├── logo.png              # Capyseo logo
├── favicon.png           # Favicon
└── og-image.png          # Open Graph image
```

## Commands

```bash
bun install      # Install dependencies
bun run dev      # Start dev server
bun run build    # Build for production
bun run preview  # Preview production build
```

## Design System

### Colors

Primary color is **Capybara Brown** (`--capybara-500: oklch(0.55 0.11 42)`).

- Light mode: Warm off-white background, warm dark text
- Dark mode: HFFMNN-inspired warm blacks

### Typography

- **Display:** Abril Fatface - Hero headlines (`.display-lg`, `.display-md`)
- **Body:** Inter - All other text
- **Mono:** Kode Mono - Code blocks, HFFMNN logo

### Component Variants

Button has a custom `capybara` variant:
```svelte
<Button variant="capybara">Get Started</Button>
```

Badge has custom variants: `capybara`, `success`, `warning`, `info`

## Adding Pages

1. Create folder in `src/routes/[page-name]/`
2. Add `+page.svelte`
3. Update nav links in `Header.svelte` and `Footer.svelte`

## Wiki Content (Future)

Wiki uses mdsvex. To add content:

1. Create `.md` files in `src/content/wiki/`
2. Use frontmatter for metadata:
   ```yaml
   ---
   title: "Page Title"
   description: "SEO description"
   category: "getting-started"
   order: 1
   ---
   ```
3. Content supports Svelte components via mdsvex

## Icons

Using Hugeicons. Import pattern:
```svelte
<script>
  import { HugeiconsIcon } from '@hugeicons/svelte';
  import { Github01Icon } from '@hugeicons/core-free-icons';
</script>

<HugeiconsIcon icon={Github01Icon} size={20} />
```

## Branding

- Logo: `/static/logo.png` (from Capyseo assets)
- HFFMNN footer logo: Text in Kode Mono, links to hffmnn.com
- GitHub org: https://github.com/Capyseo
- Maintainer: https://github.com/hffmnnj
