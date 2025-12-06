<script lang="ts">
	import { onMount } from 'svelte';
	import { codeToHtml } from 'shiki';

	interface Props {
		children?: any;
	}

	let { children }: Props = $props();

	let codeElement: HTMLElement | null = $state(null);
	let highlightedHtml = $state<string>('');
	let copied = $state(false);
	let language = $state('text');
	let rawCode = $state('');

	onMount(async () => {
		if (!codeElement) return;

		// Find the code element inside
		const codeEl = codeElement.querySelector('code');
		if (!codeEl) return;

		// Extract language from class
		const classList = Array.from(codeEl.classList);
		const langClass = classList.find((c) => c.startsWith('language-'));
		language = langClass ? langClass.replace('language-', '') : 'text';

		// Get raw code
		rawCode = codeEl.textContent || '';

		// Highlight with Shiki
		try {
			highlightedHtml = await codeToHtml(rawCode, {
				lang: language,
				themes: {
					light: 'github-light',
					dark: 'vitesse-dark'
				}
			});
		} catch {
			// Fallback for unsupported languages
			highlightedHtml = `<pre><code>${escapeHtml(rawCode)}</code></pre>`;
		}
	});

	function escapeHtml(text: string) {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(rawCode);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			// Silently fail if clipboard copy is unavailable
		}
	}
</script>

<div class="code-block">
	<!-- Language badge -->
	{#if language && language !== 'text'}
		<span class="code-language">{language}</span>
	{/if}

	<!-- Copy button -->
	<button class="copy-button" onclick={copyCode} aria-label="Copy code">
		{#if copied}
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M20 6L9 17l-5-5" />
			</svg>
		{:else}
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<rect x="9" y="9" width="13" height="13" rx="2" />
				<path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
			</svg>
		{/if}
	</button>

	<!-- Hidden original content for extraction -->
	<div bind:this={codeElement} style="display: none;">
		{#if children}
			{@render children()}
		{/if}
	</div>

	<!-- Highlighted code -->
	{#if highlightedHtml}
		<div class="shiki-wrapper">
			{@html highlightedHtml}
		</div>
	{:else}
		<pre class="code-fallback"><code>{rawCode}</code></pre>
	{/if}
</div>

<style>
	.code-block {
		position: relative;
		margin: 1.5rem 0;
		border-radius: var(--radius-lg);
		overflow: hidden;
	}

	.code-language {
		position: absolute;
		top: 0.5rem;
		left: 1rem;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted-foreground);
		z-index: 1;
	}

	.copy-button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		background: var(--muted);
		border: none;
		border-radius: var(--radius);
		color: var(--muted-foreground);
		cursor: pointer;
		opacity: 0;
		transition:
			opacity 0.15s,
			background-color 0.15s;
		z-index: 1;
	}

	.code-block:hover .copy-button {
		opacity: 1;
	}

	.copy-button:hover {
		background: var(--accent);
		color: var(--foreground);
	}

	.shiki-wrapper :global(pre) {
		margin: 0;
		padding: 2.5rem 1rem 1rem;
		overflow-x: auto;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		line-height: 1.7;
		background: var(--capybara-50) !important;
	}

	:global(.dark) .shiki-wrapper :global(pre) {
		background: var(--shiki-dark-bg) !important;
	}

	/* Enable Shiki dual theme switching - only override for dark mode */
	:global(.dark) .shiki-wrapper :global(.shiki) {
		background-color: var(--shiki-dark-bg) !important;
	}

	:global(.dark) .shiki-wrapper :global(.shiki span) {
		color: var(--shiki-dark) !important;
	}

	.shiki-wrapper :global(code) {
		font-family: inherit;
	}

	.code-fallback {
		margin: 0;
		padding: 2.5rem 1rem 1rem;
		overflow-x: auto;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		line-height: 1.7;
		background: var(--capybara-50);
	}

	:global(.dark) .code-fallback {
		background: oklch(0.12 0.01 45);
	}
</style>
