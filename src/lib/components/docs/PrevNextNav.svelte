<script lang="ts">
	import type { NavItem } from '$lib/docs/types';

	interface Props {
		prev: NavItem | null;
		next: NavItem | null;
	}

	let { prev, next }: Props = $props();
</script>

{#if prev || next}
	<nav class="prev-next-nav" aria-label="Page navigation">
		{#if prev}
			<a href="/docs/{prev.slug}" class="nav-link prev">
				<span class="nav-label">Previous</span>
				<span class="nav-title">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="m15 18-6-6 6-6" />
					</svg>
					{prev.title}
				</span>
			</a>
		{:else}
			<div></div>
		{/if}

		{#if next}
			<a href="/docs/{next.slug}" class="nav-link next">
				<span class="nav-label">Next</span>
				<span class="nav-title">
					{next.title}
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</span>
			</a>
		{/if}
	</nav>
{/if}

<style>
	.prev-next-nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		text-decoration: none;
		transition:
			border-color 0.15s,
			background-color 0.15s;
	}

	.nav-link:hover {
		border-color: var(--primary);
		background: oklch(from var(--primary) l c h / 0.05);
	}

	.nav-link.next {
		text-align: right;
	}

	.nav-label {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted-foreground);
	}

	.nav-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
		color: var(--primary);
	}

	.nav-link.next .nav-title {
		justify-content: flex-end;
	}

	@media (max-width: 640px) {
		.prev-next-nav {
			grid-template-columns: 1fr;
		}
	}
</style>
