<script lang="ts">
	interface Props {
		class?: string;
		size?: 'sm' | 'md' | 'lg';
	}

	let { class: className = '', size = 'md' }: Props = $props();

	const sizes = {
		sm: { container: 'h-8', img: 'h-7 w-7', text: 'text-lg' },
		md: { container: 'h-9', img: 'h-8 w-8', text: 'text-[22px]' },
		lg: { container: 'h-11', img: 'h-10 w-10', text: 'text-2xl' }
	};
</script>

<a href="/" class="group inline-flex {sizes[size].container} items-center gap-2 {className}">
	<img
		src="/logo.png"
		alt="Capyseo Logo"
		width="200"
		height="200"
		loading="lazy"
		class="{sizes[size].img} shrink-0 object-contain"
	/>
	<span
		class="font-display text-foreground {sizes[size].text} tracking-tight leading-none"
		style="margin-top: -0.04em;"
	>Capyseo</span>
</a>
