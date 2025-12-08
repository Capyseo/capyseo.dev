<script lang="ts">
	import HffmnnLogo from '$lib/components/shared/HffmnnLogo.svelte';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { Github01Icon } from '@hugeicons/core-free-icons';

	const footerLinks = {
		product: [
			{ href: '/features', label: 'Features' },
			{ href: '/sponsor', label: 'Sponsor' },
			{ href: '/docs', label: 'Documentation' }
		],
		resources: [
			{ href: 'https://github.com/Capyseo', label: 'GitHub', external: true },
			{ href: 'https://github.com/Capyseo/capyseo/issues', label: 'Issues', external: true },
			{ href: 'https://github.com/Capyseo/capyseo/releases', label: 'Changelog', external: true }
		],
		company: [
			{ href: '/about', label: 'About' },
			{ href: 'mailto:chill@capyseo.dev', label: 'Contact' },
			{ href: 'https://github.com/hffmnnj', label: 'Maintainer', external: true }
		]
	};
</script>

<footer class="border-t bg-muted/30">
	<div class="container py-12">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="col-span-2 md:col-span-1">
				<div class="flex items-center gap-2 mb-4">
					<img src="/logo.png" alt="Capyseo" class="h-8" />
					<span class="font-display text-xl text-foreground">Capyseo</span>
				</div>
				<p class="text-sm text-muted-foreground mb-4">
					AI-powered SEO toolkit for modern web development.
				</p>
				<a
					href="https://github.com/Capyseo"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					<HugeiconsIcon icon={Github01Icon} size={16} />
					Star on GitHub
				</a>
			</div>

			<div>
				<h4 class="font-semibold text-foreground mb-3">Product</h4>
				<ul class="space-y-2">
					{#each footerLinks.product as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="font-semibold text-foreground mb-3">Resources</h4>
				<ul class="space-y-2">
					{#each footerLinks.resources as link}
						<li>
							<a
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								class="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="font-semibold text-foreground mb-3">Company</h4>
				<ul class="space-y-2">
					{#each footerLinks.company as link}
						<li>
							<a
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								class="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
			<p class="text-sm text-muted-foreground">
				© {new Date().getFullYear()} Capyseo. Open source under MIT license.
			</p>
			<div class="flex items-center gap-2 text-sm text-muted-foreground">
				<span>A</span>
				<HffmnnLogo />
				<span>product</span>
			</div>
		</div>
	</div>
</footer>
