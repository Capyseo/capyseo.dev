<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		Github01Icon,
		Mail01Icon,
		GlobalIcon
	} from '@hugeicons/core-free-icons';
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

			<h2 class="font-display">The Technology</h2>
			<p>
				Capyseo is built with modern tools and designed for performance:
			</p>
			<ul>
				<li><strong>Bun</strong> - Lightning-fast JavaScript runtime</li>
				<li><strong>Cheerio</strong> - Fast HTML parsing and analysis</li>
				<li><strong>Google Gemini</strong> - Optional AI-powered suggestions</li>
				<li><strong>TypeScript</strong> - Type-safe codebase throughout</li>
			</ul>
			<p>
				The project follows a monorepo structure with separate packages for the
				core analyzer, CLI, and framework adapters. This allows developers to
				use only what they need.
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
						<span class="text-2xl font-bold text-capybara-600 dark:text-capybara-400">H</span>
					</div>
					<CardTitle>hffmnnj</CardTitle>
					<CardDescription>Creator & Lead Maintainer</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="flex justify-center gap-2">
						<a href="https://github.com/hffmnnj" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<HugeiconsIcon icon={Github01Icon} size={20} />
							</Button>
						</a>
						<a href="https://hffmnn.com" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<HugeiconsIcon icon={GlobalIcon} size={20} />
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
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-3xl mb-4">Get in Touch</h2>
			<p class="text-muted-foreground mb-8">
				Have questions, suggestions, or want to contribute?
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a href="https://github.com/Capyseo/capyseo/issues" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="lg">
						<HugeiconsIcon icon={Github01Icon} size={20} />
						Open an Issue
					</Button>
				</a>
				<a href="https://github.com/Capyseo/capyseo/discussions" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="lg">
						<HugeiconsIcon icon={Mail01Icon} size={20} />
						Start a Discussion
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
