<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		InformationCircleIcon,
		Alert01Icon,
		AlertDiamondIcon,
		Idea01Icon
	} from '@hugeicons/core-free-icons';

	interface Props {
		children?: any;
	}

	let { children }: Props = $props();

	let blockquoteEl: HTMLElement | null = $state(null);
	let type = $state<'info' | 'warning' | 'danger' | 'tip'>('info');
	let title = $state('');
	let content = $state('');

	$effect(() => {
		if (!blockquoteEl) return;

		// Get the raw text content
		const text = blockquoteEl.textContent || '';

		// Check for GitHub-style alerts: > [!NOTE], > [!TIP], etc.
		const alertMatch = text.match(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]/i);

		if (alertMatch) {
			const alertType = alertMatch[1].toUpperCase();
			switch (alertType) {
				case 'NOTE':
				case 'IMPORTANT':
					type = 'info';
					break;
				case 'TIP':
					type = 'tip';
					break;
				case 'WARNING':
					type = 'warning';
					break;
				case 'CAUTION':
					type = 'danger';
					break;
			}
			title = alertType.charAt(0) + alertType.slice(1).toLowerCase();
			content = text.replace(/^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]\s*/i, '').trim();
		} else {
			// Regular blockquote - check if it looks like a tip/warning
			const lowerText = text.toLowerCase();
			if (lowerText.startsWith('tip:') || lowerText.startsWith('💡')) {
				type = 'tip';
				title = 'Tip';
				content = text.replace(/^(tip:|💡)\s*/i, '').trim();
			} else if (lowerText.startsWith('warning:') || lowerText.startsWith('⚠️')) {
				type = 'warning';
				title = 'Warning';
				content = text.replace(/^(warning:|⚠️)\s*/i, '').trim();
			} else if (lowerText.startsWith('danger:') || lowerText.startsWith('🚨')) {
				type = 'danger';
				title = 'Danger';
				content = text.replace(/^(danger:|🚨)\s*/i, '').trim();
			} else if (lowerText.startsWith('note:') || lowerText.startsWith('ℹ️')) {
				type = 'info';
				title = 'Note';
				content = text.replace(/^(note:|ℹ️)\s*/i, '').trim();
			} else {
				// Just a regular blockquote, show as-is
				content = text;
			}
		}
	});

	const icons = {
		info: InformationCircleIcon,
		warning: Alert01Icon,
		danger: AlertDiamondIcon,
		tip: Idea01Icon
	};
</script>

<!-- Hidden source for content extraction -->
<div bind:this={blockquoteEl} style="display: none;">
	{#if children}
		{@render children()}
	{/if}
</div>

<!-- Rendered callout -->
<div class="callout callout-{type}" role="note">
	<div class="callout-icon">
		<HugeiconsIcon icon={icons[type]} size={20} />
	</div>
	<div class="callout-content">
		{#if title}
			<strong class="callout-title">{title}</strong>
		{/if}
		<p>{content}</p>
	</div>
</div>

<style>
	.callout {
		display: flex;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
		margin: 1.5rem 0;
		border-radius: var(--radius-lg);
		border-left: 4px solid;
	}

	.callout-info {
		background: oklch(from var(--info) l c h / 0.1);
		border-color: var(--info);
	}

	.callout-info .callout-icon {
		color: var(--info);
	}

	.callout-warning {
		background: oklch(from var(--warning) l c h / 0.1);
		border-color: var(--warning);
	}

	.callout-warning .callout-icon {
		color: var(--warning);
	}

	.callout-danger {
		background: oklch(from var(--destructive) l c h / 0.1);
		border-color: var(--destructive);
	}

	.callout-danger .callout-icon {
		color: var(--destructive);
	}

	.callout-tip {
		background: oklch(from var(--success) l c h / 0.1);
		border-color: var(--success);
	}

	.callout-tip .callout-icon {
		color: var(--success);
	}

	.callout-icon {
		flex-shrink: 0;
		margin-top: 0.125rem;
	}

	.callout-content {
		flex: 1;
	}

	.callout-title {
		display: block;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.callout-content p {
		margin: 0;
		line-height: 1.6;
	}
</style>
