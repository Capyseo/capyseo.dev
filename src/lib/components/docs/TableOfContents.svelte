<script lang="ts">
	import { onMount } from 'svelte';
	import type { Heading } from '$lib/docs/types';

	interface Props {
		headings: Heading[];
	}

	let { headings }: Props = $props();

	let activeId = $state<string>('');

	onMount(() => {
		// Set up intersection observer for scroll spy
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
						break;
					}
				}
			},
			{
				rootMargin: '-80px 0px -80% 0px',
				threshold: 0
			}
		);

		// Observe all heading elements
		for (const heading of headings) {
			const element = document.getElementById(heading.id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => observer.disconnect();
	});

	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			const offset = 80; // Account for sticky header
			const y = element.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}
</script>

<nav class="toc" aria-label="Table of contents">
	<h2 class="toc-title">On this page</h2>
	<ul class="toc-list">
		{#each headings as heading}
			<li class="toc-item" style="--indent: {(heading.level - 2) * 0.75}rem">
				<button
					class="toc-link"
					class:active={activeId === heading.id}
					onclick={() => scrollToHeading(heading.id)}
				>
					{heading.text}
				</button>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.toc {
		font-size: 0.8125rem;
	}

	.toc-title {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted-foreground);
		margin-bottom: 0.75rem;
	}

	.toc-list {
		list-style: none;
		padding: 0;
		margin: 0;
		border-left: 1px solid var(--border);
	}

	.toc-item {
		margin: 0;
	}

	.toc-link {
		display: block;
		width: 100%;
		padding: 0.375rem 0.75rem;
		padding-left: calc(0.75rem + var(--indent, 0));
		color: var(--muted-foreground);
		text-decoration: none;
		text-align: left;
		background: none;
		border: none;
		border-left: 2px solid transparent;
		margin-left: -1px;
		cursor: pointer;
		transition:
			color 0.15s,
			border-color 0.15s;
		line-height: 1.4;
	}

	.toc-link:hover {
		color: var(--foreground);
	}

	.toc-link.active {
		color: var(--primary);
		border-left-color: var(--primary);
	}
</style>
