<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowRight01Icon, Github01Icon } from '@hugeicons/core-free-icons';
</script>

<section class="py-20 bg-capybara-600 dark:bg-capybara-900">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-4xl text-white mb-4">
				Ready to Improve Your SEO?
			</h2>
			<p class="text-capybara-100 mb-8">
				Join developers who use Capyseo to build better-ranking websites.
				Free and open source forever.
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<Button size="lg" class="bg-white text-capybara-900 hover:bg-capybara-50">
					Get Started Free
					<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
				</Button>
				<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
					<Button size="lg" class="bg-transparent border-2 border-white text-white hover:bg-white/10">
						<HugeiconsIcon icon={Github01Icon} size={20} color="white" />
						Star on GitHub
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
