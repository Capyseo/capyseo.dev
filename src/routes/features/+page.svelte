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
		SparklesIcon,
		RepairIcon,
		CheckmarkCircle02Icon
	} from '@hugeicons/core-free-icons';

	const stats = [
		{ label: '50+ Rules', variant: 'capybara' as const },
		{ label: '11 Categories', variant: 'default' as const },
		{ label: 'AI Autofixes', icon: SparklesIcon, variant: 'info' as const }
	];

	const ruleCategories = [
		{
			icon: SparklesIcon,
			title: 'Performance',
			description: 'Core Web Vitals and page speed optimization',
			size: 'lg' as const,
			rules: [
				'Core Web Vitals tracking (LCP, FID, CLS)',
				'Page speed and load time analysis',
				'Resource optimization recommendations',
				'JavaScript execution time monitoring',
				'CSS delivery optimization',
				'Image and font loading performance'
			]
		},
		{
			icon: SecurityCheckIcon,
			title: 'Security',
			description: 'Security best practices for SEO',
			size: 'lg' as const,
			rules: [
				'HTTPS enforcement',
				'Security headers (CSP, HSTS)',
				'Script integrity attributes',
				'Mixed content detection',
				'Safe external links'
			]
		},
		{
			icon: RepairIcon,
			title: 'Autofixes',
			description: 'Automatically fix SEO issues with intelligent AI',
			size: 'full' as const,
			rules: [
				'Basic autofixes with --fix flag',
				'AI-powered fixes with --ai-fix flag',
				'Meta tag generation (title, description)',
				'Open Graph and Twitter Card optimization',
				'Canonical URL fixes',
				'Dry-run mode to preview changes',
				'Cost estimation before AI operations',
				'57% of issues automatically fixable'
			]
		},
		{
			icon: AiMagicIcon,
			title: 'AI Suggestions',
			description: 'Intelligent recommendations powered by multiple AI providers',
			size: 'lg' as const,
			rules: [
				'Gemini (recommended) - fast and accurate',
				'OpenAI GPT-4 and GPT-3.5',
				'Anthropic Claude models',
				'Ollama for local/private AI',
				'Context-aware content analysis',
				'Agentic multi-step reasoning'
			]
		},
		{
			icon: FileSearchIcon,
			title: 'Meta Tags',
			description: 'Essential meta tag validation for search engines',
			size: 'md' as const,
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
		}
	];
</script>

<svelte:head>
	<title>Features - 50+ SEO Rules & AI Autofixes | Capyseo</title>
	<meta name="description" content="Explore 50+ SEO rules across 11 categories with intelligent AI autofixes. From meta tags to structured data, Capyseo covers every aspect of modern SEO." />
	<link rel="canonical" href="https://capyseo.dev/features" />
	<meta property="og:title" content="Features - 50+ SEO Rules & AI Autofixes" />
	<meta property="og:description" content="Explore 50+ SEO rules across 11 categories with intelligent AI autofixes. From meta tags to structured data, Capyseo covers every aspect of modern SEO." />
	<meta property="og:image" content="https://capyseo.dev/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://capyseo.dev/features" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Capyseo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Features - 50+ SEO Rules & AI Autofixes" />
	<meta name="twitter:description" content="Explore 50+ SEO rules across 11 categories with intelligent AI autofixes." />
	<meta name="twitter:image" content="https://capyseo.dev/og-image.png" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Features - Capyseo SEO Toolkit",
		"description": "Explore 50+ SEO rules across 11 categories with intelligent AI autofixes.",
		"url": "https://capyseo.dev/features"
	})}</script>`}
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
				Comprehensive analysis and intelligent autofixes covering every aspect of modern SEO best practices.
				Each issue includes actionable fixes — many applied automatically.
			</p>
			<StatBadges {stats} />
		</div>
	</div>
</section>

<!-- AI Autofix Highlight Section -->
<section class="py-16 lg:py-20">
	<div class="container">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<Badge variant="info" class="mb-4">
					<HugeiconsIcon icon={SparklesIcon} size={14} class="mr-1" />
					Powered by AI
				</Badge>
				<h2 class="font-display text-4xl mb-4">Agentic SEO Fixes</h2>
				<p class="text-muted-foreground max-w-2xl mx-auto">
					Capyseo's intelligent agent system analyzes your page content, understands context,
					and generates smart fixes that actually make sense for your specific content.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				<div class="p-6 rounded-xl bg-card border">
					<div class="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mb-4">
						<HugeiconsIcon icon={FileSearchIcon} size={24} class="text-cyan-600 dark:text-cyan-400" />
					</div>
					<h3 class="font-semibold mb-2">Content Analyzer</h3>
					<p class="text-sm text-muted-foreground">
						Extracts topics, keywords, and page type from your HTML to understand context.
					</p>
				</div>
				<div class="p-6 rounded-xl bg-card border">
					<div class="w-12 h-12 rounded-lg bg-capybara-100 dark:bg-capybara-900/50 flex items-center justify-center mb-4">
						<HugeiconsIcon icon={AiMagicIcon} size={24} class="text-capybara-600 dark:text-capybara-400" />
					</div>
					<h3 class="font-semibold mb-2">Meta Generator</h3>
					<p class="text-sm text-muted-foreground">
						Creates optimized titles, descriptions, and social meta tags based on content.
					</p>
				</div>
				<div class="p-6 rounded-xl bg-card border">
					<div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
						<HugeiconsIcon icon={RepairIcon} size={24} class="text-green-600 dark:text-green-400" />
					</div>
					<h3 class="font-semibold mb-2">Orchestrator</h3>
					<p class="text-sm text-muted-foreground">
						Coordinates agents, estimates costs, and applies fixes with confidence scoring.
					</p>
				</div>
			</div>
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

<!-- Output Formats Section -->
<section class="py-16 lg:py-20 bg-muted/30">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="font-display text-4xl mb-4">5 Output Formats</h2>
			<p class="text-muted-foreground">
				Export your SEO analysis in the format that works best for your workflow.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
			{#each [
				{ name: 'Console', desc: 'Human-readable terminal output' },
				{ name: 'JSON', desc: 'Structured data for automation' },
				{ name: 'HTML', desc: 'Interactive visual reports' },
				{ name: 'SARIF', desc: 'GitHub Code Scanning' },
				{ name: 'CSV', desc: 'Spreadsheet compatible' }
			] as format}
				<div class="p-4 rounded-lg border bg-card text-center">
					<Badge variant="capybara" class="mb-2">{format.name}</Badge>
					<p class="text-xs text-muted-foreground">{format.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-4xl mb-4">Ready to Improve Your SEO?</h2>
			<p class="text-muted-foreground mb-8">
				Start analyzing your website with Capyseo's comprehensive rule engine and intelligent autofixes.
				Free and open source forever.
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a href="/docs">
					<Button variant="capybara" size="lg">
						Get Started Free
						<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
					</Button>
				</a>
				<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
					<Button variant="outline" size="lg">
						View on GitHub
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
