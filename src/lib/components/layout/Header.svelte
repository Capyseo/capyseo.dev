<script lang="ts">
	import Logo from '$lib/components/shared/Logo.svelte';
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { Github01Icon, Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/features', label: 'Features' },
		{ href: '/docs', label: 'Docs' },
		{ href: '/sponsor', label: 'Sponsor' },
		{ href: '/about', label: 'About' }
	];
</script>

<header class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
	<div class="container flex h-16 items-center justify-between">
		<div class="flex items-center gap-5">
			<Logo />

			<nav class="hidden md:flex h-9 items-center gap-6">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium leading-none text-muted-foreground hover:text-foreground transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>

		<div class="flex items-center gap-2">
			<a
				href="https://github.com/Capyseo"
				target="_blank"
				rel="noopener noreferrer"
				class="hidden sm:flex"
			>
				<Button variant="ghost" size="icon">
					<HugeiconsIcon icon={Github01Icon} size={20} />
				</Button>
			</a>

			<ThemeToggle />

			<Button variant="capybara" size="sm" class="hidden sm:flex">Get Started</Button>

			<Button
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} size={20} />
			</Button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="md:hidden border-t bg-background">
			<nav class="container py-4 flex flex-col gap-2">
				{#each navLinks as link}
					<a
						href={link.href}
						class="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="flex items-center gap-2 pt-2 border-t mt-2">
					<a
						href="https://github.com/Capyseo"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
					>
						<HugeiconsIcon icon={Github01Icon} size={16} />
						GitHub
					</a>
				</div>
				<Button variant="capybara" size="sm" class="mt-2">Get Started</Button>
			</nav>
		</div>
	{/if}
</header>
