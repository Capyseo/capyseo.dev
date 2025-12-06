<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		Github01Icon,
	Mail01Icon,
	Twitter01Icon,
	GlobalIcon,
		CommandLineIcon,
		CodeIcon,
		GridViewIcon
	} from '@hugeicons/core-free-icons';

	const repos = [
		{
			name: '@capyseo/core',
			title: 'Core',
			description: 'Analysis engine with 50+ SEO rules',
			icon: CodeIcon,
			repo: 'https://github.com/Capyseo/capyseo'
		},
		{
			name: '@capyseo/cli',
			title: 'CLI',
			description: 'Command-line tool with AI autofixes',
			icon: CommandLineIcon,
			repo: 'https://github.com/Capyseo/capyseo'
		},
		{
			name: '@capyseo/adapter-sveltekit',
			title: 'SvelteKit',
			description: 'Vite plugin & server hooks',
			icon: GridViewIcon,
			repo: 'https://github.com/Capyseo/capyseo'
		}
	];
</script>

<svelte:head>
	<title>About - Capyseo</title>
	<meta name="description" content="Learn about Capyseo, the AI-powered SEO toolkit built for developers." />
</svelte:head>

<section class="py-16 border-b">
	<div class="container">
		<div class="max-w-3xl">
			<Badge variant="capybara" class="mb-4">About</Badge>
			<h1 class="font-display text-5xl mb-4">About Capyseo</h1>
			<p class="text-xl text-muted-foreground">
				An AI-powered SEO toolkit designed to help developers build better-ranking websites.
			</p>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container">
		<div class="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
		<h2 class="font-display">The Story</h2>
			<p>
				Capyseo was born from the frustration of dealing with SEO as a developer.
				Existing tools were either too basic, too expensive, or required too much
				manual work. We wanted something that could analyze a website automatically,
				give actionable insights, and integrate seamlessly into development workflows.
			</p>
			<p>
				Named after the capybara - the world's most chill rodent - Capyseo aims to
				make SEO relaxed and approachable for developers. No more stressing about
				whether you forgot a meta tag or if your images have alt text.
			</p>

		<h2 class="font-display">Open Source</h2>
		<p>
			Capyseo is fully open source under the MIT license. This means you can
			use it, modify it, and contribute to it freely. We believe SEO tools
			should be accessible to everyone, not just those with enterprise budgets.
		</p>
		</div>
	</div>
</section>

<section class="py-16 bg-muted/30">
	<div class="container">
		<div class="max-w-3xl mx-auto">
			<h2 class="font-display text-3xl mb-8 text-center">Maintainers</h2>
			<Card class="max-w-sm mx-auto">
				<CardHeader class="text-center">
				<div class="w-20 h-20 rounded-full bg-capybara-100 dark:bg-capybara-900 flex items-center justify-center mx-auto mb-4">
					<span class="text-2xl font-bold text-capybara-600 dark:text-capybara-400">JH</span>
				</div>
				<CardTitle>James Hoffmann</CardTitle>
				<p class="text-sm text-muted-foreground">@hffmnnj</p>
				<CardDescription>Creator & Lead Maintainer</CardDescription>
			</CardHeader>
				<CardContent>
					<div class="flex justify-center gap-2">
					<a href="https://github.com/hffmnnj" target="_blank" rel="noopener noreferrer">
						<Button variant="ghost" size="icon">
							<HugeiconsIcon icon={Github01Icon} size={20} />
						</Button>
					</a>
					<a href="https://x.com/hffmnnj" target="_blank" rel="noopener noreferrer">
						<Button variant="ghost" size="icon">
							<HugeiconsIcon icon={Twitter01Icon} size={20} />
						</Button>
					</a>
					<a href="mailto:hffmnnj@tuta.io">
						<Button variant="ghost" size="icon">
							<HugeiconsIcon icon={Mail01Icon} size={20} />
						</Button>
					</a>
				</div>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container">
		<div class="max-w-3xl mx-auto">
			<h2 class="font-display text-3xl mb-8 text-center">Our Packages</h2>
			<div class="grid sm:grid-cols-3 gap-4">
				{#each repos as repo}
					<a href={repo.repo} target="_blank" rel="noopener noreferrer" class="block">
						<Card class="h-full hover:border-capybara-400 transition-colors">
							<CardHeader class="text-center">
								<div class="w-12 h-12 rounded-lg bg-capybara-100 dark:bg-capybara-900 flex items-center justify-center mx-auto mb-3">
									<HugeiconsIcon icon={repo.icon} size={24} class="text-capybara-600 dark:text-capybara-400" />
								</div>
								<CardTitle class="text-lg">{repo.title}</CardTitle>
								<CardDescription class="text-sm">{repo.description}</CardDescription>
							</CardHeader>
						</Card>
					</a>
				{/each}
			</div>
			<p class="text-center text-muted-foreground mt-6 text-sm">
				All packages are open source under the MIT license. Click any card to view on GitHub.
			</p>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-3xl mb-4">Get in Touch</h2>
			<p class="text-muted-foreground mb-8">
				Have questions, suggestions, or want to contribute?
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
					<Button variant="capybara" size="lg">
						<HugeiconsIcon icon={Github01Icon} size={20} />
						View on GitHub
					</Button>
				</a>
				<a href="https://github.com/Capyseo/capyseo.dev/issues" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="lg">
						<HugeiconsIcon icon={Mail01Icon} size={20} />
						Report an Issue
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
