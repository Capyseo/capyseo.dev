<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import type { IconType } from '@hugeicons/svelte';

	interface Stat {
		icon?: IconType;
		label: string;
		variant?: 'default' | 'capybara' | 'success' | 'info';
	}

	interface Props {
		stats: Stat[];
		class?: string;
	}

	let { stats, class: className = '' }: Props = $props();
</script>

<div class="flex flex-wrap items-center justify-center gap-3 {className}">
	{#each stats as stat}
		<Badge variant={stat.variant ?? 'default'} class="px-3 py-1.5 text-sm font-medium">
			{#if stat.icon}
				<HugeiconsIcon icon={stat.icon} size={16} class="mr-1.5" />
			{/if}
			{stat.label}
		</Badge>
	{/each}
</div>
