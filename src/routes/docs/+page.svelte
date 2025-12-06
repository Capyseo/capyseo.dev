<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		Book02Icon,
		CommandLineIcon,
		Settings02Icon,
		Rocket01Icon,
		AiBrain01Icon
	} from '@hugeicons/core-free-icons';

	const quickLinks = [
		{
			title: 'Getting Started',
			description: 'Install Capyseo and analyze your first page in minutes',
			href: '/docs/getting-started/installation',
			icon: Rocket01Icon
		},
		{
			title: 'CLI Reference',
			description: 'Command-line interface for analyzing and generating SEO fixes',
			href: '/docs/cli/overview',
			icon: CommandLineIcon
		},
		{
			title: 'SEO Rules',
			description: '46 built-in rules for comprehensive SEO analysis',
			href: '/docs/core/rules',
			icon: Book02Icon
		},
		{
			title: 'AI Providers',
			description: 'Configure Gemini, OpenAI, Anthropic, or Ollama',
			href: '/docs/providers/overview',
			icon: AiBrain01Icon
		},
		{
			title: 'SvelteKit Adapter',
			description: 'Deep integration with SvelteKit for automatic analysis',
			href: '/docs/sveltekit/overview',
			icon: Settings02Icon
		}
	];
</script>

<svelte:head>
	<title>Documentation - Capyseo</title>
	<meta
		name="description"
		content="Learn how to use Capyseo, the AI-powered SEO toolkit. Installation guides, CLI reference, rules documentation, and integration guides."
	/>
</svelte:head>

<div class="docs-home">
	<header class="docs-hero">
		<h1 class="display-sm">Capyseo Documentation</h1>
		<p class="lead">
			Everything you need to analyze, optimize, and automate your website's SEO.
		</p>
	</header>

	<section class="quick-links">
		{#each quickLinks as link}
			<a href={link.href} class="quick-link">
				<div class="quick-link-icon">
					<HugeiconsIcon icon={link.icon} size={24} />
				</div>
				<div class="quick-link-content">
					<h2>{link.title}</h2>
					<p>{link.description}</p>
				</div>
				<svg
					class="quick-link-arrow"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</a>
		{/each}
	</section>

	<section class="docs-features">
		<h2>What's in the docs</h2>
		<div class="features-grid">
			<div class="feature">
				<h3>Installation & Setup</h3>
				<p>Get started with npm, pnpm, or bun. Configure your first analysis in under 5 minutes.</p>
			</div>
			<div class="feature">
				<h3>46 SEO Rules</h3>
				<p>
					Comprehensive rules covering meta tags, images, headings, links, structured data, and
					more.
				</p>
			</div>
			<div class="feature">
				<h3>AI-Powered Fixes</h3>
				<p>
					Generate intelligent fixes with Gemini, OpenAI, Claude, or local models via Ollama.
				</p>
			</div>
			<div class="feature">
				<h3>Framework Integrations</h3>
				<p>
					Deep integration with SvelteKit. More frameworks coming soon.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.docs-home {
		max-width: 800px;
	}

	.docs-hero {
		margin-bottom: 3rem;
	}

	.docs-hero h1 {
		color: var(--foreground);
		margin-bottom: 1rem;
	}

	.lead {
		font-size: 1.25rem;
		color: var(--muted-foreground);
		line-height: 1.6;
	}

	.quick-links {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}

	.quick-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.25rem;
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		text-decoration: none;
		color: var(--foreground);
		transition:
			border-color 0.15s,
			box-shadow 0.15s,
			transform 0.15s;
	}

	.quick-link:hover {
		border-color: var(--primary);
		box-shadow: 0 4px 12px oklch(0.4 0.05 42 / 0.1);
		transform: translateY(-1px);
	}

	:global(.dark) .quick-link:hover {
		box-shadow: 0 4px 12px oklch(0 0 0 / 0.2);
	}

	.quick-link-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background: var(--primary);
		color: var(--primary-foreground);
		border-radius: var(--radius);
		flex-shrink: 0;
	}

	.quick-link-content {
		flex: 1;
	}

	.quick-link-content h2 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.quick-link-content p {
		font-size: 0.875rem;
		color: var(--muted-foreground);
		margin: 0;
	}

	.quick-link-arrow {
		color: var(--muted-foreground);
		flex-shrink: 0;
		transition: transform 0.15s;
	}

	.quick-link:hover .quick-link-arrow {
		transform: translateX(4px);
		color: var(--primary);
	}

	.docs-features h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.feature {
		padding: 1.25rem;
		background: var(--muted);
		border-radius: var(--radius);
	}

	.feature h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.feature p {
		font-size: 0.875rem;
		color: var(--muted-foreground);
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 640px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
