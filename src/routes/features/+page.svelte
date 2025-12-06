<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import BentoCard from '$lib/components/marketing/BentoCard.svelte';
	import BentoGrid from '$lib/components/marketing/BentoGrid.svelte';
	import StatBadges from '$lib/components/marketing/StatBadges.svelte';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		FileSearchIcon,
		Image01Icon,
		Heading01Icon,
		Settings01Icon,
		Share01Icon,
		CodeIcon,
		Link01Icon,
		TextIcon,
		SmartPhone01Icon,
		SecurityCheckIcon,
		AiMagicIcon,
		ArrowRight01Icon,
		SparklesIcon
	} from '@hugeicons/core-free-icons';

	const stats = [
		{ label: '50+ Rules', variant: 'capybara' as const },
		{ label: '10 Categories', variant: 'default' as const },
		{ label: 'AI Powered', icon: SparklesIcon, variant: 'info' as const }
	];

	const ruleCategories = [
		{
			icon: AiMagicIcon,
			title: 'AI Suggestions',
			description: 'Intelligent recommendations powered by AI',
			size: 'full' as const,
			rules: [
				'Meta description generation',
				'Alt text suggestions',
				'Title tag optimization',
				'Content improvements'
			]
		},
		{
			icon: FileSearchIcon,
			title: 'Meta Tags',
			description: 'Essential meta tag validation for search engines',
			size: 'lg' as const,
			rules: [
				'Title tag presence and length (50-60 chars)',
				'Meta description presence and length',
				'Viewport meta tag for mobile',
				'Charset declaration (UTF-8)',
				'Language attribute on HTML element',
				'Duplicate meta tags detection'
			]
		},
		{
			icon: Image01Icon,
			title: 'Images',
			description: 'Image optimization and accessibility',
			size: 'md' as const,
			rules: [
				'Alt text presence and quality',
				'Lazy loading implementation',
				'Width and height attributes',
				'Modern format usage (WebP/AVIF)',
				'Image file size optimization',
				'Responsive image srcset'
			]
		},
		{
			icon: Heading01Icon,
			title: 'Headings',
			description: 'Proper heading hierarchy and structure',
			size: 'md' as const,
			rules: [
				'Single H1 presence per page',
				'Proper heading hierarchy (H1→H2→H3)',
				'Empty heading detection',
				'Keyword presence in headings',
				'Heading length optimization'
			]
		},
		{
			icon: Settings01Icon,
			title: 'Technical',
			description: 'Technical SEO fundamentals',
			size: 'lg' as const,
			rules: [
				'Canonical URL presence',
				'Robots meta tag configuration',
				'Hreflang for internationalization',
				'Favicon presence (multiple sizes)',
				'HTML lang attribute',
				'XML sitemap reference'
			]
		},
		{
			icon: Share01Icon,
			title: 'Social',
			description: 'Social media integration and previews',
			size: 'md' as const,
			rules: [
				'Open Graph title and description',
				'OG image presence and dimensions',
				'Twitter Card meta tags',
				'Twitter site and creator attribution',
				'Social preview optimization'
			]
		},
		{
			icon: CodeIcon,
			title: 'Structured Data',
			description: 'Rich snippets and schema markup',
			size: 'md' as const,
			rules: [
				'JSON-LD presence and validity',
				'Schema.org type validation',
				'Breadcrumb schema markup',
				'Organization schema',
				'Article/Product schema types',
				'FAQ schema for rich results'
			]
		},
		{
			icon: Link01Icon,
			title: 'Links',
			description: 'Internal and external link health',
			size: 'md' as const,
			rules: [
				'Broken link detection',
				'Redirect chain analysis',
				'External link rel attributes',
				'Internal link structure',
				'Anchor text optimization',
				'Nofollow usage audit'
			]
		},
		{
			icon: TextIcon,
			title: 'Content',
			description: 'Content quality and readability',
			size: 'md' as const,
			rules: [
				'Word count analysis',
				'Keyword density check',
				'Readability scoring',
				'Duplicate content detection',
				'Content structure analysis',
				'Thin content warnings'
			]
		},
		{
			icon: SmartPhone01Icon,
			title: 'Mobile',
			description: 'Mobile-friendly validation',
			size: 'md' as const,
			rules: [
				'Viewport configuration',
				'Touch target sizing',
				'Font size readability',
				'Mobile-friendly viewport',
				'Tap target spacing',
				'Horizontal scrolling prevention'
			]
		},
		{
			icon: SecurityCheckIcon,
			title: 'Security',
			description: 'Security best practices for SEO',
			size: 'md' as const,
			rules: [
				'HTTPS enforcement',
				'Security headers (CSP, HSTS)',
				'Script integrity attributes',
				'Mixed content detection',
				'Safe external links'
			]
		}
	];
</script>

<svelte:head>
	<title>Features - Capyseo</title>
	<meta name="description" content="Explore 50+ SEO rules across 10 categories. From meta tags to structured data, Capyseo covers every aspect of modern SEO." />
</svelte:head>

<!-- Hero Section -->
<section class="py-16 lg:py-20 border-b">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center">
			<Badge variant="capybara" class="mb-4">Features</Badge>
			<h1 class="display-sm mb-6">
				<span class="text-foreground">Everything You Need for</span>
				<br />
				<span class="text-capybara-600 dark:text-capybara-400">Perfect SEO</span>
			</h1>
			<p class="text-xl text-muted-foreground mb-8">
				Comprehensive analysis covering every aspect of modern SEO best practices.
				Each rule includes actionable suggestions for improvement.
			</p>
			<StatBadges {stats} />
		</div>
	</div>
</section>

<!-- Bento Grid Section -->
<section class="py-16 lg:py-20">
	<div class="container">
		<BentoGrid>
			{#each ruleCategories as category (category.title)}
				<BentoCard
					icon={category.icon}
					title={category.title}
					description={category.description}
					rules={category.rules}
					size={category.size}
				/>
			{/each}
		</BentoGrid>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20 bg-muted/30">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-4xl mb-4">Ready to Improve Your SEO?</h2>
			<p class="text-muted-foreground mb-8">
				Start analyzing your website with Capyseo's comprehensive rule engine.
				Free and open source forever.
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<Button variant="capybara" size="lg">
					Get Started Free
					<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
				</Button>
				<a href="/wiki">
					<Button variant="outline" size="lg">
						Read the Docs
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
