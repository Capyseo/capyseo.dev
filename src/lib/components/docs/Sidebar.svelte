<script lang="ts">
	import { isActiveNav } from '$lib/docs/navigation';
	import type { NavItem } from '$lib/docs/types';

	interface Props {
		navigation: NavItem[];
		currentSlug: string;
		onnavigate?: () => void;
	}

	let { navigation, currentSlug, onnavigate }: Props = $props();

	// Track expanded categories
	let expanded = $state<Record<string, boolean>>({});

	// Auto-expand current category
	$effect(() => {
		const parts = currentSlug.split('/');
		if (parts.length > 0) {
			expanded[parts[0]] = true;
		}
		if (parts.length > 1) {
			expanded[`${parts[0]}/${parts[1]}`] = true;
		}
	});

	function toggleCategory(slug: string) {
		expanded[slug] = !expanded[slug];
	}
</script>

<nav class="sidebar-nav" aria-label="Documentation">
	{#each navigation as category}
		<div class="nav-category">
			<button
				class="nav-category-header"
				class:expanded={expanded[category.slug]}
				onclick={() => toggleCategory(category.slug)}
				aria-expanded={expanded[category.slug]}
			>
				<span>{category.title}</span>
				<svg
					class="chevron"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>

			{#if expanded[category.slug] && category.children}
				<ul class="nav-items">
					{#each category.children as item}
						{#if item.children && item.children.length > 0}
							<!-- Nested subcategory -->
							<li class="nav-subcategory">
								<button
									class="nav-subcategory-header"
									class:expanded={expanded[item.slug]}
									onclick={() => toggleCategory(item.slug)}
									aria-expanded={expanded[item.slug]}
								>
									<span>{item.title}</span>
									<svg
										class="chevron"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="m9 18 6-6-6-6" />
									</svg>
								</button>

								{#if expanded[item.slug]}
									<ul class="nav-subitems">
										{#each item.children as subitem}
											<li>
												<a
													href="/docs/{subitem.slug}"
													class="nav-link"
													class:active={currentSlug === subitem.slug}
													onclick={onnavigate}
												>
													{subitem.title}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{:else}
							<!-- Direct link -->
							<li>
								<a
									href="/docs/{item.slug}"
									class="nav-link"
									class:active={currentSlug === item.slug}
									onclick={onnavigate}
								>
									{item.title}
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</nav>

<style>
	.sidebar-nav {
		padding: 0 0.5rem;
	}

	.nav-category {
		margin-bottom: 0.5rem;
	}

	.nav-category-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0.5rem 0.75rem;
		font-family: var(--font-display);
		font-size: 0.9375rem;
		font-weight: 400;
		color: var(--foreground);
		background: none;
		border: none;
		border-radius: var(--radius);
		cursor: pointer;
		text-align: left;
		transition: background-color 0.15s;
	}

	.nav-category-header:hover {
		background: var(--accent);
	}

	.nav-category-header .chevron {
		transition: transform 0.15s;
	}

	.nav-category-header.expanded .chevron {
		transform: rotate(90deg);
	}

	.nav-items {
		list-style: none;
		padding: 0;
		margin: 0.25rem 0 0.5rem 0;
	}

	.nav-link {
		display: block;
		padding: 0.375rem 0.75rem 0.375rem 1.25rem;
		font-size: 0.8125rem;
		color: var(--muted-foreground);
		text-decoration: none;
		border-radius: var(--radius);
		transition:
			color 0.15s,
			background-color 0.15s;
	}

	.nav-link:hover {
		color: var(--foreground);
		background: var(--accent);
	}

	.nav-link.active {
		color: var(--primary);
		background: oklch(from var(--primary) l c h / 0.1);
		font-weight: 500;
	}

	.nav-subcategory {
		margin-top: 0.25rem;
	}

	.nav-subcategory-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0.375rem 0.75rem 0.375rem 1.25rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--muted-foreground);
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		border-radius: var(--radius);
		transition: background-color 0.15s;
	}

	.nav-subcategory-header:hover {
		background: var(--accent);
	}

	.nav-subcategory-header .chevron {
		transition: transform 0.15s;
	}

	.nav-subcategory-header.expanded .chevron {
		transform: rotate(90deg);
	}

	.nav-subitems {
		list-style: none;
		padding: 0;
		margin: 0.25rem 0 0.5rem 0;
	}

	.nav-subitems .nav-link {
		padding-left: 2rem;
	}
</style>
