<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowRight01Icon, Github01Icon } from '@hugeicons/core-free-icons';
</script>

<section class="relative overflow-hidden py-12 lg:py-20">
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent dark:from-capybara-950/20"></div>

	<div class="container relative">
		<div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
			<!-- Text content -->
			<div class="flex-1 text-center lg:text-left order-2 lg:order-1">
				<Badge variant="capybara" class="mb-4">
					Open Source & Free Forever
				</Badge>

				<h1 class="display-lg mb-6">
					<span class="text-foreground">AI-Powered SEO</span>
					<br />
					<span class="text-capybara-600 dark:text-capybara-400">Made Simple</span>
				</h1>

				<p class="text-xl text-muted-foreground mb-8 max-w-xl">
					Capyseo analyzes your website with 50+ SEO rules and provides AI-powered suggestions
					to improve your search engine rankings. Built for developers.
				</p>

				<div class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
					<Button variant="capybara" size="lg">
						Get Started
						<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
					</Button>
					<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
						<Button variant="outline" size="lg" class="border-foreground text-foreground">
							<HugeiconsIcon icon={Github01Icon} size={20} />
							View on GitHub
						</Button>
					</a>
				</div>
			</div>

			<!-- Mascot -->
			<div class="flex-shrink-0 order-1 lg:order-2 mascot-container">
				<img
					src="/capyseo-mascot.png"
					alt="Capyseo mascot - a friendly capybara"
					class="w-48 h-auto sm:w-56 lg:w-72 xl:w-80 drop-shadow-lg"
				/>
				<p class="font-display text-3xl sm:text-4xl lg:text-5xl text-capybara-600 dark:text-capybara-400 text-center -mt-1">
					Capyseo
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.mascot-container {
		animation: float 4s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.mascot-container {
			animation: none;
		}
	}
</style>
