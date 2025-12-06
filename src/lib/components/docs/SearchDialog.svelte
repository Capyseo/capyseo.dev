<script lang="ts">
	import { goto } from '$app/navigation';
	import { search } from '$lib/docs/search.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	let query = $state('');
	let selectedIndex = $state(0);
	let inputEl: HTMLInputElement | null = $state(null);

	const results = $derived(search(query));

	// Reset on open
	$effect(() => {
		if (open) {
			query = '';
			selectedIndex = 0;
			// Focus input after dialog opens
			setTimeout(() => inputEl?.focus(), 50);
		}
	});

	// Reset selection when results change
	$effect(() => {
		results; // dependency
		selectedIndex = 0;
	});

	function handleKeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
				break;
			case 'ArrowUp':
				e.preventDefault();
				selectedIndex = Math.max(selectedIndex - 1, 0);
				break;
			case 'Enter':
				e.preventDefault();
				if (results[selectedIndex]) {
					goto(`/docs/${results[selectedIndex].slug}`);
					open = false;
				}
				break;
			case 'Escape':
				e.preventDefault();
				open = false;
				break;
		}
	}

	function selectResult(slug: string) {
		goto(`/docs/${slug}`);
		open = false;
	}
</script>

{#if open}
	<!-- Backdrop -->
	<button class="backdrop" onclick={() => (open = false)} aria-label="Close search"></button>

	<!-- Dialog -->
	<div class="search-dialog" role="dialog" aria-modal="true" aria-label="Search documentation">
		<div class="search-header">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.35-4.35" />
			</svg>
			<input
				bind:this={inputEl}
				bind:value={query}
				onkeydown={handleKeydown}
				type="text"
				placeholder="Search documentation..."
				class="search-input"
			/>
			<kbd class="search-kbd">Esc</kbd>
		</div>

		<div class="search-results">
			{#if query && results.length === 0}
				<div class="no-results">
					<p>No results found for "{query}"</p>
					<p class="hint">Try different keywords or browse the documentation.</p>
				</div>
			{:else if results.length > 0}
				<ul class="results-list" role="listbox">
					{#each results as result, i}
						<li role="option" aria-selected={i === selectedIndex}>
							<button
								class="result-item"
								class:selected={i === selectedIndex}
								onclick={() => selectResult(result.slug)}
								onmouseenter={() => (selectedIndex = i)}
							>
								<div class="result-title">{result.title}</div>
								<div class="result-meta">
									<span class="result-category">{result.category}</span>
									{#if result.description}
										<span class="result-description">{result.description}</span>
									{/if}
								</div>
							</button>
						</li>
					{/each}
				</ul>
			{:else}
				<div class="search-hint">
					<p>Type to search the documentation</p>
					<div class="shortcuts">
						<span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
						<span><kbd>↵</kbd> Select</span>
						<span><kbd>Esc</kbd> Close</span>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: oklch(0 0 0 / 0.5);
		z-index: 100;
		border: none;
		cursor: default;
	}

	.search-dialog {
		position: fixed;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 600px;
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: 0 16px 48px oklch(0 0 0 / 0.2);
		z-index: 101;
		overflow: hidden;
	}

	.search-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		border-bottom: 1px solid var(--border);
		color: var(--muted-foreground);
	}

	.search-input {
		flex: 1;
		background: none;
		border: none;
		font-size: 1rem;
		color: var(--foreground);
		outline: none;
	}

	.search-input::placeholder {
		color: var(--muted-foreground);
	}

	.search-kbd {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		padding: 0.25rem 0.5rem;
		background: var(--muted);
		border-radius: 4px;
		color: var(--muted-foreground);
	}

	.search-results {
		max-height: 400px;
		overflow-y: auto;
	}

	.results-list {
		list-style: none;
		padding: 0.5rem;
		margin: 0;
	}

	.result-item {
		display: block;
		width: 100%;
		padding: 0.75rem 1rem;
		text-align: left;
		background: none;
		border: none;
		border-radius: var(--radius);
		cursor: pointer;
		transition: background-color 0.1s;
	}

	.result-item:hover,
	.result-item.selected {
		background: var(--accent);
	}

	.result-title {
		font-weight: 500;
		color: var(--foreground);
		margin-bottom: 0.25rem;
	}

	.result-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8125rem;
	}

	.result-category {
		color: var(--primary);
		font-weight: 500;
	}

	.result-description {
		color: var(--muted-foreground);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.no-results,
	.search-hint {
		padding: 2rem;
		text-align: center;
		color: var(--muted-foreground);
	}

	.no-results .hint {
		font-size: 0.875rem;
		margin-top: 0.5rem;
	}

	.shortcuts {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1rem;
		font-size: 0.8125rem;
	}

	.shortcuts kbd {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		padding: 0.125rem 0.375rem;
		background: var(--muted);
		border-radius: 4px;
		margin-right: 0.25rem;
	}
</style>
