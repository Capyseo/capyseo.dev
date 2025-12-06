<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children: Snippet;
	}

	let { title = 'Terminal', children }: Props = $props();
</script>

<div class="rounded-lg border overflow-hidden bg-capybara-950 dark:bg-black">
	<div class="flex items-center gap-2 px-4 py-3 bg-capybara-900 dark:bg-capybara-950 border-b border-capybara-800">
		<div class="flex gap-1.5">
			<span class="w-3 h-3 rounded-full bg-red-500"></span>
			<span class="w-3 h-3 rounded-full bg-yellow-500"></span>
			<span class="w-3 h-3 rounded-full bg-green-500"></span>
		</div>
		<span class="text-sm text-capybara-400 font-mono">{title}</span>
	</div>
	<div class="p-4 font-mono text-sm text-capybara-100">
		{@render children()}
	</div>
</div>
