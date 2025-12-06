<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<a
	href="https://hffmnn.com"
	target="_blank"
	rel="noopener noreferrer"
	class="font-mono text-sm font-semibold lowercase tracking-wider text-muted-foreground hover:text-foreground transition-colors {className}"
>
	hffmnn
</a>
