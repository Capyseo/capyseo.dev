<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import { Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
</script>

<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle theme">
	{#if $mode === 'dark'}
		<HugeiconsIcon icon={Moon02Icon} size={20} />
	{:else}
		<HugeiconsIcon icon={Sun01Icon} size={20} />
	{/if}
</Button>
