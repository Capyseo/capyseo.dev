<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import type { IconSvgObject } from '@hugeicons/svelte';

	interface Props {
		icon: IconSvgObject;
		title: string;
		description: string;
	}

	let { icon, title, description }: Props = $props();
</script>

<div
	class="p-6 rounded-xl border bg-card hover:border-capybara-300 dark:hover:border-capybara-700 transition-all duration-200 hover-lift"
	style="box-shadow: var(--card-shadow);"
>
	<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-capybara-800">
		<HugeiconsIcon {icon} size={24} color="white" />
	</div>
	<h3 class="font-display text-lg mb-2">{title}</h3>
	<p class="text-muted-foreground text-sm">{description}</p>
</div>
