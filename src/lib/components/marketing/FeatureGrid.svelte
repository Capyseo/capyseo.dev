<script lang="ts">
	import FeatureCard from './FeatureCard.svelte';
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
		DashboardSpeed01Icon,
		AiMagicIcon
	} from '@hugeicons/core-free-icons';

	const features = [
		{
			icon: FileSearchIcon,
			title: 'Meta Tag Analysis',
			description: 'Check title, description, viewport, charset, and language tags for SEO compliance.'
		},
		{
			icon: Image01Icon,
			title: 'Image Optimization',
			description: 'Validate alt text, lazy loading, dimensions, and modern format usage (WebP/AVIF).'
		},
		{
			icon: Heading01Icon,
			title: 'Heading Structure',
			description: 'Analyze H1 presence, hierarchy, empty headings, and keyword optimization.'
		},
		{
			icon: Settings01Icon,
			title: 'Technical SEO',
			description: 'Verify canonical URLs, robots meta, hreflang, favicons, and structured data.'
		},
		{
			icon: Share01Icon,
			title: 'Social Integration',
			description: 'Audit Open Graph tags, Twitter Cards, and social media preview optimization.'
		},
		{
			icon: CodeIcon,
			title: 'Structured Data',
			description: 'Validate JSON-LD, Schema.org types, breadcrumbs, and rich snippets.'
		},
		{
			icon: Link01Icon,
			title: 'Link Analysis',
			description: 'Detect broken links, redirect chains, and external link attributes.'
		},
		{
			icon: TextIcon,
			title: 'Content Quality',
			description: 'Evaluate word count, keyword density, readability, and content structure.'
		},
		{
			icon: SmartPhone01Icon,
			title: 'Mobile Friendly',
			description: 'Check viewport settings, touch targets, and mobile font sizes.'
		},
		{
			icon: SecurityCheckIcon,
			title: 'Security Headers',
			description: 'Verify HTTPS, security headers, and script integrity attributes.'
		},
		{
			icon: DashboardSpeed01Icon,
			title: 'Performance Hints',
			description: 'Identify performance issues affecting Core Web Vitals scores.'
		},
		{
			icon: AiMagicIcon,
			title: 'AI Suggestions',
			description: 'Get intelligent recommendations powered by Google Gemini AI.'
		}
	];
</script>

<section class="py-12 lg:py-16">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl mb-4">50+ SEO Rules Built-in</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Comprehensive analysis covering every aspect of modern SEO best practices.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each features as feature}
				<FeatureCard
					icon={feature.icon}
					title={feature.title}
					description={feature.description}
				/>
			{/each}
		</div>
	</div>
</section>
