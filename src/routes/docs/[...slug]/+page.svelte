<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	import TableOfContents from '$lib/components/docs/TableOfContents.svelte';
	import PrevNextNav from '$lib/components/docs/PrevNextNav.svelte';
	import CodeBlock from '$lib/components/docs/CodeBlock.svelte';
	import Callout from '$lib/components/docs/Callout.svelte';
	import { findPrevNext, findBreadcrumbs } from '$lib/docs/navigation';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { PencilEdit01Icon } from '@hugeicons/core-free-icons';
	import type { Plugin } from 'svelte-exmarkdown';

	let { data } = $props();

	const page = $derived(data.page);
	const slug = $derived(data.slug);
	const navigation = $derived(data.navigation);

	const prevNext = $derived(findPrevNext(navigation, slug));
	const breadcrumbs = $derived(findBreadcrumbs(navigation, slug));

	// Generate a fallback description from the title if none provided
	const pageDescription = $derived(
		page.description || `Learn about ${page.title} in Capyseo, the AI-powered SEO toolkit for developers.`
	);

	// Custom renderers for code blocks and callouts
	const plugins: Plugin[] = [
		gfmPlugin(),
		{
			renderer: {
				pre: CodeBlock,
				blockquote: Callout
			}
		}
	];
</script>

<svelte:head>
	<title>{page.title} - Capyseo Docs</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href="https://capyseo.dev/docs/{slug}" />
	<!-- Open Graph -->
	<meta property="og:title" content="{page.title} - Capyseo Docs" />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content="https://capyseo.dev/docs/{slug}" />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://capyseo.dev/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Capyseo" />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{page.title} - Capyseo Docs" />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content="https://capyseo.dev/og-image.png" />
	<!-- JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "TechArticle",
		"headline": page.title,
		"description": pageDescription,
		"url": `https://capyseo.dev/docs/${slug}`,
		"image": "https://capyseo.dev/og-image.png",
		"author": {
			"@type": "Organization",
			"name": "Capyseo",
			"url": "https://capyseo.dev"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Capyseo",
			"logo": {
				"@type": "ImageObject",
				"url": "https://capyseo.dev/logo.png"
			}
		}
	})}</script>`}
</svelte:head>

<div class="doc-page">
	<article class="doc-content">
		<!-- Breadcrumbs -->
		{#if breadcrumbs.length > 0}
			<nav class="breadcrumbs" aria-label="Breadcrumb">
				<a href="/docs">Docs</a>
				{#each breadcrumbs as crumb, i}
					<span class="separator">/</span>
					{#if i === breadcrumbs.length - 1}
						<span class="current">{crumb.title}</span>
					{:else}
						<span class="parent">{crumb.title}</span>
					{/if}
				{/each}
			</nav>
		{/if}

		<!-- Page header -->
		<header class="doc-header">
			<h1 class="display-sm">{page.title}</h1>
			{#if page.description}
				<p class="doc-description">{page.description}</p>
			{/if}
		</header>

		<!-- Markdown content -->
		<div class="prose">
			<Markdown md={page.content} {plugins} />
		</div>

		<!-- Edit link -->
		<footer class="doc-footer">
			<a href={page.editUrl} target="_blank" rel="noopener noreferrer" class="edit-link">
				<HugeiconsIcon icon={PencilEdit01Icon} size={16} />
				Edit this page on GitHub
			</a>
		</footer>

		<!-- Prev/Next navigation -->
		<PrevNextNav prev={prevNext.prev} next={prevNext.next} />
	</article>

	<!-- Table of Contents -->
	{#if page.headings.length > 0}
		<aside class="doc-toc">
			<TableOfContents headings={page.headings} />
		</aside>
	{/if}
</div>

<style>
	.doc-page {
		display: grid;
		grid-template-columns: 1fr 260px;
		gap: 3rem;
		width: 100%;
	}

	.doc-content {
		min-width: 0;
		max-width: 800px;
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--muted-foreground);
		margin-bottom: 1.5rem;
	}

	.breadcrumbs a {
		color: var(--muted-foreground);
		text-decoration: none;
		transition: color 0.15s;
	}

	.breadcrumbs a:hover {
		color: var(--primary);
	}

	.breadcrumbs .separator {
		color: var(--border);
	}

	.breadcrumbs .current {
		color: var(--foreground);
	}

	.breadcrumbs .parent {
		color: var(--muted-foreground);
	}

	.doc-header {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border);
	}

	.doc-header h1 {
		margin-bottom: 0.75rem;
	}

	.doc-description {
		font-size: 1.125rem;
		color: var(--muted-foreground);
		line-height: 1.6;
		margin: 0;
	}

	.doc-footer {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}

	.edit-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--muted-foreground);
		text-decoration: none;
		transition: color 0.15s;
	}

	.edit-link:hover {
		color: var(--primary);
	}

	.doc-toc {
		position: sticky;
		top: 2rem;
		max-height: calc(100vh - 4rem);
		overflow-y: auto;
	}

	@media (max-width: 1200px) {
		.doc-page {
			grid-template-columns: 1fr;
		}

		.doc-toc {
			display: none;
		}
	}
</style>
