<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import type { IconType } from '@hugeicons/svelte';
	import { Tick02Icon } from '@hugeicons/core-free-icons';

	interface Props {
		icon: IconType;
		title: string;
		description: string;
		rules?: string[];
		size?: 'sm' | 'md' | 'lg' | 'full';
		special?: boolean;
		class?: string;
	}

	let {
		icon,
		title,
		description,
		rules = [],
		size = 'md',
		special = false,
		class: className = ''
	}: Props = $props();

	const sizeClasses = {
		sm: '',
		md: '',
		lg: 'md:col-span-2',
		full: 'md:col-span-2 lg:col-span-4'
	};

	const displayRules = $derived(
		rules.slice(0, size === 'full' ? rules.length : size === 'lg' ? 4 : 3)
	);
</script>

{#if size === 'full'}
	<!-- Full-width horizontal layout for special featured cards -->
	<article
		class="featured-card group relative overflow-hidden rounded-2xl border border-capybara-300/50 dark:border-capybara-700/50 bg-card p-8 transition-all duration-500 hover:border-capybara-400/70 dark:hover:border-capybara-600/70 {sizeClasses[size]} {className}"
	>
		<!-- Subtle top accent line -->
		<div
			class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-capybara-500/80 to-transparent"
		></div>

		<!-- Very subtle inner glow - only visible on edges -->
		<div
			class="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
			style="background: radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.55 0.11 42 / 0.08), transparent);"
		></div>

		<div class="relative flex flex-col lg:flex-row gap-6 lg:gap-10">
			<div class="flex items-start gap-4 lg:w-1/3">
				<div
					class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-capybara-800 ring-1 ring-capybara-700/50"
				>
					<HugeiconsIcon {icon} size={28} color="white" />
				</div>
				<div>
					<h3 class="font-display text-2xl text-foreground">{title}</h3>
					<p class="text-sm text-muted-foreground mt-1">{description}</p>
				</div>
			</div>

			{#if displayRules.length > 0}
				<div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
					{#each displayRules as rule, i (i)}
						<div
							class="flex items-center gap-2.5 text-sm text-muted-foreground bg-background/50 rounded-lg px-3 py-2"
						>
							<HugeiconsIcon
								icon={Tick02Icon}
								size={16}
								class="text-capybara-500 shrink-0"
							/>
							<span>{rule}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</article>
{:else}
	<!-- Standard card layout -->
	<article
		class="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-capybara-300 dark:hover:border-capybara-700 {sizeClasses[size]} {className}"
		class:special-card={special}
		style="box-shadow: var(--card-shadow);"
	>
		{#if size === 'lg'}
			<div
				class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-capybara-400 via-capybara-500 to-capybara-600"
			></div>
		{/if}

		<div class="flex flex-col h-full">
			<div class="flex items-start gap-4 mb-4">
				<div
					class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-md bg-capybara-800 group-hover:bg-capybara-700"
				>
					<HugeiconsIcon {icon} size={24} color="white" />
				</div>
				<div>
					<h3 class="font-display text-xl text-foreground">{title}</h3>
					<p class="text-sm text-muted-foreground mt-1">{description}</p>
				</div>
			</div>

			{#if displayRules.length > 0}
				<ul class="mt-auto space-y-2">
					{#each displayRules as rule, i (i)}
						<li class="flex items-start gap-2 text-sm text-muted-foreground">
							<HugeiconsIcon
								icon={Tick02Icon}
								size={14}
								class="text-capybara-500 mt-0.5 shrink-0"
							/>
							<span>{rule}</span>
						</li>
					{/each}
					{#if rules.length > displayRules.length}
						<li class="text-xs text-muted-foreground/70 pl-3.5">
							+{rules.length - displayRules.length} more rules
						</li>
					{/if}
				</ul>
			{/if}
		</div>
	</article>
{/if}

<style>
	.featured-card {
		box-shadow:
			0 0 0 1px oklch(0.55 0.11 42 / 0.12),
			0 2px 4px oklch(0.4 0.06 42 / 0.08),
			0 4px 8px oklch(0.4 0.06 42 / 0.04);
	}

	.featured-card:hover {
		box-shadow:
			0 0 0 1px oklch(0.55 0.11 42 / 0.2),
			0 8px 20px oklch(0.4 0.06 42 / 0.12),
			0 0 28px oklch(0.55 0.11 42 / 0.08);
	}

	:global(.dark) .featured-card {
		box-shadow:
			0 0 0 1px oklch(0.55 0.11 42 / 0.1),
			0 1px 2px oklch(0 0 0 / 0.2);
	}

	:global(.dark) .featured-card:hover {
		box-shadow:
			0 0 0 1px oklch(0.55 0.11 42 / 0.2),
			0 4px 16px oklch(0 0 0 / 0.3),
			0 0 32px oklch(0.55 0.11 42 / 0.08);
	}

	/* Standard card hover - light mode */
	article:not(.featured-card):hover {
		box-shadow:
			0 4px 12px oklch(0.4 0.05 45 / 0.12),
			0 8px 24px oklch(0.4 0.05 45 / 0.08);
	}

	:global(.dark) article:not(.featured-card):hover {
		box-shadow:
			0 4px 12px oklch(0 0 0 / 0.25),
			0 8px 24px oklch(0 0 0 / 0.2);
	}

	.special-card {
		background: linear-gradient(
			135deg,
			var(--card) 0%,
			var(--card) 50%,
			oklch(0.95 0.025 48) 100%
		);
	}

	:global(.dark) .special-card {
		background: linear-gradient(
			135deg,
			var(--card) 0%,
			var(--card) 50%,
			oklch(0.2 0.02 42) 100%
		);
	}
</style>
