<script lang="ts">
	import '../../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/docs/Sidebar.svelte';
	import SearchDialog from '$lib/components/docs/SearchDialog.svelte';
	import { initSearch } from '$lib/docs/search.svelte';
	import { onMount } from 'svelte';

	let { data, children } = $props();

	let searchOpen = $state(false);
	let sidebarOpen = $state(false);

	// Initialize search on mount
	onMount(() => {
		initSearch(data.manifest);
	});

	// Handle Cmd+K / Ctrl+K
	function handleKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			searchOpen = true;
		}
	}

	// Get current slug from URL
	const currentSlug = $derived($page.params.slug || 'index');
</script>

<ModeWatcher />

<svelte:window onkeydown={handleKeydown} />

<div class="docs-layout">
	<!-- Mobile sidebar toggle -->
	<button
		class="sidebar-toggle"
		onclick={() => (sidebarOpen = !sidebarOpen)}
		aria-label="Toggle sidebar"
	>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			{#if sidebarOpen}
				<path d="M18 6L6 18M6 6l12 12" />
			{:else}
				<path d="M3 12h18M3 6h18M3 18h18" />
			{/if}
		</svg>
	</button>

	<!-- Sidebar -->
	<aside class="docs-sidebar" class:open={sidebarOpen}>
		<div class="sidebar-header">
			<a href="/" class="sidebar-logo">
				<img src="/logo.png" alt="Capyseo" width="32" height="32" />
				<span>Docs</span>
			</a>
			<button
				class="search-trigger"
				onclick={() => (searchOpen = true)}
				aria-label="Search documentation"
			>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
				<span>Search</span>
				<kbd>⌘K</kbd>
			</button>
		</div>
		<Sidebar navigation={data.navigation} {currentSlug} onnavigate={() => (sidebarOpen = false)} />
	</aside>

	<!-- Backdrop for mobile -->
	{#if sidebarOpen}
		<button class="sidebar-backdrop" onclick={() => (sidebarOpen = false)} aria-label="Close sidebar"></button>
	{/if}

	<!-- Main content -->
	<main class="docs-main">
		{@render children()}
	</main>
</div>

<!-- Search dialog -->
<SearchDialog bind:open={searchOpen} />

<style>
	.docs-layout {
		display: grid;
		grid-template-columns: 280px 1fr;
		min-height: 100vh;
	}

	.docs-sidebar {
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		border-right: 1px solid var(--border);
		background: var(--sidebar);
		padding: 1rem 0;
	}

	.sidebar-header {
		padding: 0 1rem 1rem;
		border-bottom: 1px solid var(--border);
		margin-bottom: 1rem;
	}

	.sidebar-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--foreground);
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.sidebar-logo img {
		border-radius: 6px;
	}

	.search-trigger {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--background);
		color: var(--muted-foreground);
		font-size: 0.875rem;
		cursor: pointer;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.search-trigger:hover {
		border-color: var(--primary);
	}

	.search-trigger span {
		flex: 1;
		text-align: left;
	}

	.search-trigger kbd {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		padding: 0.125rem 0.375rem;
		background: var(--muted);
		border-radius: 4px;
	}

	.docs-main {
		padding: 2rem 3rem;
		min-width: 0; /* Allow content to shrink */
		flex: 1;
	}

	.sidebar-toggle {
		display: none;
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 50;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--primary);
		color: var(--primary-foreground);
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 12px oklch(0 0 0 / 0.15);
	}

	.sidebar-backdrop {
		display: none;
		position: fixed;
		inset: 0;
		background: oklch(0 0 0 / 0.5);
		z-index: 39;
		border: none;
	}

	@media (max-width: 1024px) {
		.docs-layout {
			grid-template-columns: 1fr;
		}

		.docs-sidebar {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 40;
			transform: translateX(-100%);
			transition: transform 0.2s ease;
			width: 280px;
		}

		.docs-sidebar.open {
			transform: translateX(0);
		}

		.sidebar-toggle {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.sidebar-backdrop {
			display: block;
		}

		.docs-main {
			padding: 1.5rem 1rem;
		}
	}
</style>
