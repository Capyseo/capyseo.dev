<script lang="ts">
	import Hero from '$lib/components/marketing/Hero.svelte';
	import FeatureGrid from '$lib/components/marketing/FeatureGrid.svelte';
	import QuickStart from '$lib/components/marketing/QuickStart.svelte';
	import CTASection from '$lib/components/marketing/CTASection.svelte';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		CheckmarkCircle02Icon,
		SparklesIcon,
		RepairIcon,
		AiMagicIcon,
		Github01Icon,
		CommandLineIcon,
		CodeIcon,
		GridViewIcon
	} from '@hugeicons/core-free-icons';

	const packages = [
		{
			name: 'capyseo-cli',
			title: 'CLI',
			description: 'The command-line tool. Install it globally and analyze any website or folder with a single command.',
			icon: CommandLineIcon,
			useCase: 'Best for quick analysis, CI/CD pipelines, and one-off checks.',
			install: 'npm install -g @capyseo/cli',
			repo: 'https://github.com/Capyseo/capyseo-cli'
		},
		{
			name: 'capyseo-core',
			title: 'Core',
			description: 'The analysis engine. Import it into your own tools, scripts, or custom integrations.',
			icon: CodeIcon,
			useCase: 'Best for building custom tools or integrating SEO checks into existing systems.',
			install: 'npm install @capyseo/core',
			repo: 'https://github.com/Capyseo/capyseo-core'
		},
		{
			name: 'capyseo-sveltekit',
			title: 'SvelteKit',
			description: 'Deep integration for SvelteKit projects. Get real-time SEO feedback during development.',
			icon: GridViewIcon,
			useCase: 'Best for SvelteKit developers who want seamless integration.',
			install: 'npm install @capyseo/sveltekit',
			repo: 'https://github.com/Capyseo/capyseo-sveltekit'
		}
	];
</script>

<svelte:head>
	<title>Capyseo - AI-Powered SEO Toolkit for Developers</title>
	<meta name="description" content="Framework-agnostic, AI-powered SEO toolkit with 50+ rules and intelligent autofixes. Analyze your website, get actionable insights, and automatically fix issues. Free and open source." />
	<meta property="og:title" content="Capyseo - AI-Powered SEO Toolkit" />
	<meta property="og:description" content="Framework-agnostic, AI-powered SEO toolkit with 50+ rules and intelligent autofixes. Free and open source." />
	<meta property="og:image" content="/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />

<!-- Packages Section -->
<section class="py-20">
	<div class="container">
		<div class="text-center mb-12">
			<Badge variant="capybara" class="mb-4">Open Source</Badge>
			<h2 class="font-display text-4xl mb-4">Choose Your Package</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Capyseo is split into focused packages so you can use exactly what you need.
				Most developers start with the CLI for quick wins.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
			{#each packages as pkg}
				<Card class="flex flex-col h-full">
					<CardHeader>
						<div class="w-12 h-12 rounded-lg bg-capybara-100 dark:bg-capybara-900 flex items-center justify-center mb-3">
							<HugeiconsIcon icon={pkg.icon} size={24} class="text-capybara-600 dark:text-capybara-400" />
						</div>
						<CardTitle class="text-xl">{pkg.title}</CardTitle>
						<CardDescription class="text-sm">{pkg.description}</CardDescription>
					</CardHeader>
					<CardContent class="flex-1 flex flex-col">
						<p class="text-sm text-muted-foreground mb-4 italic">{pkg.useCase}</p>
						<div class="mt-auto space-y-3">
							<code class="block text-xs bg-muted px-3 py-2 rounded-md overflow-x-auto">
								{pkg.install}
							</code>
							<a href={pkg.repo} target="_blank" rel="noopener noreferrer" class="block">
								<Button variant="outline" size="sm" class="w-full">
									<HugeiconsIcon icon={Github01Icon} size={16} />
									View on GitHub
								</Button>
							</a>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="text-center mt-8">
			<p class="text-muted-foreground mb-4">
				Not sure which to pick? Start with the CLI — it's the quickest way to see Capyseo in action.
			</p>
			<code class="inline-block bg-capybara-100 dark:bg-capybara-900 text-capybara-700 dark:text-capybara-300 px-4 py-2 rounded-lg font-mono text-sm">
				npx @capyseo/cli analyze ./your-site
			</code>
		</div>
	</div>
</section>

<FeatureGrid />

<QuickStart />

<!-- How It Works Section -->
<section class="py-20">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-4xl mb-2">How It Works</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Four simple steps to better SEO.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
			{#each [
				{ num: '1', title: 'Install', desc: 'Add Capyseo to your project with a single command. Works with any framework.' },
				{ num: '2', title: 'Analyze', desc: 'Run the analyzer on your site or directory. Get detailed reports with scores.' },
				{ num: '3', title: 'Autofix', desc: 'Apply automatic fixes with --fix or AI-powered fixes with --ai-fix.' },
				{ num: '4', title: 'Ship', desc: 'Deploy with confidence. Integrate with CI/CD for continuous SEO monitoring.' }
			] as step}
				<Card class="text-center">
					<CardHeader>
						<div class="w-12 h-12 rounded-full bg-capybara-100 dark:bg-capybara-900 flex items-center justify-center mx-auto mb-2">
							<span class="text-xl font-bold text-capybara-600 dark:text-capybara-400">{step.num}</span>
						</div>
						<CardTitle class="text-lg">{step.title}</CardTitle>
					</CardHeader>
					<CardContent class="-mt-4">
						<CardDescription>{step.desc}</CardDescription>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- AI-Powered Autofixes Section -->
<section class="py-20 bg-gradient-to-br from-cyan-50/50 to-capybara-50/50 dark:from-cyan-950/20 dark:to-capybara-950/20">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
			<div>
				<Badge variant="info" class="mb-4">
					<HugeiconsIcon icon={SparklesIcon} size={14} class="mr-1" />
					New Feature
				</Badge>
				<h2 class="font-display text-4xl mb-6">
					<span class="text-foreground">Intelligent</span>
					<span class="text-cyan-600 dark:text-cyan-400"> Autofixes</span>
				</h2>
				<p class="text-muted-foreground mb-6">
					Don't just find issues — fix them automatically. Capyseo's agentic AI system analyzes your page content and generates context-aware fixes for meta tags, Open Graph data, Twitter Cards, and more.
				</p>
				<ul class="space-y-3">
					{#each [
						'Automatic meta tag generation',
						'Context-aware title and description fixes',
						'Open Graph and Twitter Card optimization',
						'Cost estimation before AI operations',
						'Dry-run mode to preview changes'
					] as item}
						<li class="flex items-start gap-3">
							<HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} class="text-cyan-500 mt-0.5 shrink-0" />
							<span class="text-muted-foreground">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="p-6 rounded-2xl bg-capybara-900 dark:bg-capybara-950 border border-capybara-800 font-mono text-sm">
				<div class="flex items-center gap-2 mb-4 pb-3 border-b border-capybara-800">
					<div class="w-3 h-3 rounded-full bg-red-500"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div class="w-3 h-3 rounded-full bg-green-500"></div>
					<span class="text-capybara-500 text-xs ml-2">AI-Powered Fixes</span>
				</div>
				<div class="space-y-2">
					<div>
						<span class="text-capybara-400">$</span>
						<span class="text-white ml-2">capyseo analyze ./site --ai --ai-fix</span>
					</div>
					<div class="text-capybara-400 mt-3">📊 AI Fix Estimation:</div>
					<div class="text-capybara-300 ml-3">Total pages: 42</div>
					<div class="text-capybara-300 ml-3">Fixable issues: 790/1,369 (57.7%)</div>
					<div class="text-capybara-300 ml-3">Estimated cost: $0.0168</div>
					<div class="text-cyan-400 mt-3">✨ Generating AI-powered fixes...</div>
					<div class="text-green-400 mt-2">✓ Generated 359 intelligent fixes</div>
					<div class="text-green-400">✓ Files modified: 42</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Output Formats Section -->
<section class="py-20">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-4xl mb-4">Multiple Output Formats</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Get results in the format that works best for your workflow.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
			{#each ['Console', 'JSON', 'HTML', 'SARIF', 'CSV'] as format}
				<div class="p-4 rounded-lg border bg-card text-center">
					<Badge variant="capybara" class="mb-2">{format}</Badge>
					<p class="text-sm text-muted-foreground">
						{#if format === 'Console'}
							Human-readable terminal output
						{:else if format === 'JSON'}
							Structured data for automation
						{:else if format === 'HTML'}
							Interactive visual reports
						{:else if format === 'SARIF'}
							GitHub Code Scanning integration
						{:else}
							Spreadsheet-compatible data
						{/if}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why Capyseo Section -->
<section class="py-20 bg-muted/30">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
			<div>
				<h2 class="font-display text-4xl mb-6">Why Choose Capyseo?</h2>
				<ul class="space-y-4">
					{#each [
						'Framework-agnostic — works with any web project',
						'50+ built-in SEO rules covering all best practices',
						'Automatic fixes with --fix and AI-powered --ai-fix',
						'Multi-provider AI support (Gemini, OpenAI, Anthropic, Ollama)',
						'CI/CD integration with SARIF output for GitHub',
						'Deep SvelteKit integration available',
						'Free and open source under MIT license'
					] as item}
						<li class="flex items-start gap-3">
							<HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} class="text-green-500 mt-0.5 shrink-0" />
							<span class="text-muted-foreground">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="p-8 rounded-2xl bg-gradient-to-br from-capybara-100 to-capybara-200 dark:from-capybara-900 dark:to-capybara-800">
				<div class="text-center">
					<div class="font-display text-7xl text-capybara-600 dark:text-capybara-300 mb-2">50+</div>
					<div class="text-lg font-medium text-capybara-700 dark:text-capybara-400">SEO Rules</div>
				</div>
				<div class="grid grid-cols-3 gap-4 mt-8">
					<div class="text-center">
						<div class="font-display text-3xl text-capybara-600 dark:text-capybara-300">5</div>
						<div class="text-sm text-capybara-700 dark:text-capybara-400">Output Formats</div>
					</div>
					<div class="text-center">
						<div class="font-display text-3xl text-capybara-600 dark:text-capybara-300">10</div>
						<div class="text-sm text-capybara-700 dark:text-capybara-400">Categories</div>
					</div>
					<div class="text-center">
						<div class="font-display text-3xl text-capybara-600 dark:text-capybara-300">4</div>
						<div class="text-sm text-capybara-700 dark:text-capybara-400">AI Providers</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<CTASection />
