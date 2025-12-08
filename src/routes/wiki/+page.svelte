<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		Book01Icon,
		Settings01Icon,
		CodeIcon,
		RocketIcon,
		Github01Icon
	} from '@hugeicons/core-free-icons';

	const plannedSections = [
		{
			icon: RocketIcon,
			title: 'Getting Started',
			description: 'Installation, quick start guide, and basic configuration'
		},
		{
			icon: Book01Icon,
			title: 'SEO Rules',
			description: 'Detailed documentation for all 50+ SEO rules and categories'
		},
		{
			icon: CodeIcon,
			title: 'Integrations',
			description: 'SvelteKit adapter, CI/CD setup, and framework integrations'
		},
		{
			icon: Settings01Icon,
			title: 'API Reference',
			description: 'Programmatic API for the analyzer, rules, and reporters'
		}
	];
</script>

<svelte:head>
	<title>Wiki - Capyseo SEO Toolkit Documentation & Guides</title>
	<meta name="description" content="Capyseo documentation - comprehensive guides for SEO rules, API reference, framework integrations, and step-by-step tutorials for developers." />
	<link rel="canonical" href="https://capyseo.dev/wiki" />
	<meta property="og:title" content="Wiki - Capyseo SEO Toolkit Documentation" />
	<meta property="og:description" content="Capyseo documentation - comprehensive guides for SEO rules, API reference, framework integrations, and step-by-step tutorials for developers." />
	<meta property="og:image" content="https://capyseo.dev/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://capyseo.dev/wiki" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Capyseo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Wiki - Capyseo SEO Toolkit Documentation" />
	<meta name="twitter:description" content="Comprehensive guides for SEO rules, API reference, and framework integrations." />
	<meta name="twitter:image" content="https://capyseo.dev/og-image.png" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Capyseo Wiki",
		"description": "Capyseo documentation - comprehensive guides for SEO rules, API reference, and framework integrations.",
		"url": "https://capyseo.dev/wiki"
	})}</script>`}
</svelte:head>

<section class="py-16 border-b">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center">
			<Badge variant="capybara" class="mb-4">Documentation</Badge>
			<h1 class="font-display text-4xl mb-4">Coming Soon</h1>
			<p class="text-xl text-muted-foreground mb-8">
				We're working on comprehensive documentation for Capyseo.
				In the meantime, check out the GitHub repository.
			</p>
			<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
				<Button variant="capybara" size="lg">
					<HugeiconsIcon icon={Github01Icon} size={20} />
					View on GitHub
				</Button>
			</a>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container">
		<h2 class="font-display text-2xl text-center mb-8">Planned Sections</h2>
		<div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			{#each plannedSections as section}
				<Card class="opacity-60">
					<CardHeader>
						<div class="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-2">
							<HugeiconsIcon icon={section.icon} size={20} class="text-muted-foreground" />
						</div>
						<CardTitle class="text-lg">{section.title}</CardTitle>
						<CardDescription>{section.description}</CardDescription>
					</CardHeader>
				</Card>
			{/each}
		</div>
	</div>
</section>
