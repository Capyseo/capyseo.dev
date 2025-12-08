<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { Home01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons';
</script>

<svelte:head>
	<title>{$page.status} - Page Not Found | Capyseo</title>
	<meta name="description" content="The page you're looking for doesn't exist. Return to Capyseo homepage to explore our AI-powered SEO toolkit." />
	<meta name="robots" content="noindex, follow" />
	<meta property="og:title" content="{$page.status} - Page Not Found | Capyseo" />
	<meta property="og:description" content="The page you're looking for doesn't exist. Return to Capyseo homepage." />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Capyseo" />
</svelte:head>

<div class="min-h-[60vh] flex items-center justify-center">
	<div class="text-center px-4">
		<div class="font-display text-8xl text-capybara-500 mb-4">{$page.status}</div>
		<h1 class="font-display text-3xl mb-4">
			{#if $page.status === 404}
				Page Not Found
			{:else}
				Something Went Wrong
			{/if}
		</h1>
		<p class="text-muted-foreground mb-8 max-w-md mx-auto">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else if $page.error?.message}
				{$page.error.message}
			{:else}
				An unexpected error occurred. Please try again later.
			{/if}
		</p>
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a href="/">
				<Button variant="capybara">
					<HugeiconsIcon icon={Home01Icon} size={18} />
					Go Home
				</Button>
			</a>
			<Button variant="outline" onclick={() => history.back()}>
				<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
				Go Back
			</Button>
		</div>
	</div>
</div>
