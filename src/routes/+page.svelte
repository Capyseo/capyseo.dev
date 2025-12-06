<script lang="ts">
	import Hero from '$lib/components/marketing/Hero.svelte';
	import FeatureGrid from '$lib/components/marketing/FeatureGrid.svelte';
	import QuickStart from '$lib/components/marketing/QuickStart.svelte';
	import CTASection from '$lib/components/marketing/CTASection.svelte';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>Capyseo - AI-Powered SEO Toolkit for Developers</title>
	<meta name="description" content="Framework-agnostic, AI-powered SEO toolkit with 50+ rules. Analyze your website, get actionable insights, and improve search rankings. Free and open source." />
	<meta property="og:title" content="Capyseo - AI-Powered SEO Toolkit" />
	<meta property="og:description" content="Framework-agnostic, AI-powered SEO toolkit with 50+ rules. Free and open source." />
	<meta property="og:image" content="/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />

<FeatureGrid />

<QuickStart />

<!-- How It Works Section -->
<section class="py-20">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-4xl mb-2">How It Works</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Three simple steps to better SEO.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
			{#each [
				{ num: '1', title: 'Install', desc: 'Add Capyseo to your project with a single command. Works with any framework.' },
				{ num: '2', title: 'Analyze', desc: 'Run the analyzer on your site or directory. Get detailed reports with scores.' },
				{ num: '3', title: 'Improve', desc: 'Fix issues with AI-powered suggestions. Watch your SEO score climb.' }
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

<!-- Output Formats Section -->
<section class="py-20 bg-muted/30">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-4xl mb-4">Multiple Output Formats</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Get results in the format that works best for your workflow.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
			{#each ['Console', 'JSON', 'HTML', 'SARIF'] as format}
				<div class="p-4 rounded-lg border bg-card text-center">
					<Badge variant="capybara" class="mb-2">{format}</Badge>
					<p class="text-sm text-muted-foreground">
						{#if format === 'Console'}
							Human-readable terminal output
						{:else if format === 'JSON'}
							Structured data for automation
						{:else if format === 'HTML'}
							Interactive visual reports
						{:else}
							GitHub Code Scanning integration
						{/if}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why Capyseo Section -->
<section class="py-20">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
			<div>
				<h2 class="font-display text-4xl mb-6">Why Choose Capyseo?</h2>
				<ul class="space-y-4">
					{#each [
						'Framework-agnostic - works with any web project',
						'50+ built-in SEO rules covering all best practices',
						'AI-powered suggestions via Google Gemini',
						'CI/CD integration with SARIF output',
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
				<div class="grid grid-cols-2 gap-4 mt-8">
					<div class="text-center">
						<div class="font-display text-3xl text-capybara-600 dark:text-capybara-300">4</div>
						<div class="text-sm text-capybara-700 dark:text-capybara-400">Output Formats</div>
					</div>
					<div class="text-center">
						<div class="font-display text-3xl text-capybara-600 dark:text-capybara-300">10</div>
						<div class="text-sm text-capybara-700 dark:text-capybara-400">Rule Categories</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<CTASection />
