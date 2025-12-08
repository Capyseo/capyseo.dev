<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		Github01Icon,
		FavouriteIcon,
		StarIcon,
		BitcoinEllipseIcon,
		Copy01Icon,
		ShieldBlockchainIcon
	} from '@hugeicons/core-free-icons';

	const cryptoAddresses = {
		btc: 'bc1q2zkdv4ersv96qv5wkhkalvcp82lk4068spypau',
		xmr: '49QTB2WhzWjKNsKShzMu8KMfyv6ZjC6Vb9rbKr1rNG1UA4ysuyWHnTf8WtTNqcLt2xNAEyW79q6RoV1jDu4o4gbKKzKAd4V'
	};

	let copiedAddress = $state<string | null>(null);

	function copyToClipboard(address: string, type: string) {
		navigator.clipboard.writeText(address);
		copiedAddress = type;
		setTimeout(() => (copiedAddress = null), 2000);
	}
</script>

<svelte:head>
	<title>Sponsor Capyseo - Support Open Source SEO Development</title>
	<meta name="description" content="Support Capyseo development through GitHub Sponsors, Bitcoin, or Monero donations. Help fund ongoing development, infrastructure, and new features for this open source SEO toolkit." />
	<link rel="canonical" href="https://capyseo.dev/sponsor" />
	<meta property="og:title" content="Sponsor Capyseo - Support Open Source SEO" />
	<meta property="og:description" content="Support Capyseo development through GitHub Sponsors, Bitcoin, or Monero donations. Help fund ongoing development and new features." />
	<meta property="og:image" content="https://capyseo.dev/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://capyseo.dev/sponsor" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Capyseo" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sponsor Capyseo - Support Open Source SEO" />
	<meta name="twitter:description" content="Support Capyseo development through GitHub Sponsors, Bitcoin, or Monero donations." />
	<meta name="twitter:image" content="https://capyseo.dev/og-image.png" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Sponsor Capyseo",
		"description": "Support Capyseo development through GitHub Sponsors, Bitcoin, or Monero donations.",
		"url": "https://capyseo.dev/sponsor"
	})}</script>`}
</svelte:head>

<section class="py-16 border-b">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center">
			<Badge variant="capybara" class="mb-4">Sponsor</Badge>
			<h1 class="font-display text-5xl mb-4">Support Open Source</h1>
			<p class="text-xl text-muted-foreground">
				Capyseo is free and open source. Your support helps fund ongoing development,
				infrastructure costs, and new features.
			</p>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="container">
		<div class="max-w-3xl mx-auto">
			<div class="grid gap-6">
				<!-- GitHub Sponsors -->
				<Card class="border-2 border-capybara-500 relative overflow-hidden">
					<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-capybara-400 via-capybara-500 to-capybara-600"></div>
					<CardHeader>
						<div class="flex items-center gap-3">
							<div class="p-3 rounded-lg bg-pink-500/10">
								<HugeiconsIcon icon={FavouriteIcon} size={28} class="text-pink-500" />
							</div>
							<div>
								<CardTitle class="text-xl">GitHub Sponsors</CardTitle>
								<CardDescription>Recurring or one-time support</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-muted-foreground mb-4">
							Support the project through GitHub Sponsors. Choose a monthly tier or make a one-time donation.
							GitHub matches contributions during certain periods.
						</p>
						<a href="https://github.com/sponsors/capyseo" target="_blank" rel="noopener noreferrer">
							<Button variant="capybara" class="w-full sm:w-auto">
								<HugeiconsIcon icon={FavouriteIcon} size={18} />
								Sponsor on GitHub
							</Button>
						</a>
					</CardContent>
				</Card>

				<!-- Bitcoin -->
				<Card>
					<CardHeader>
						<div class="flex items-center gap-3">
							<div class="p-3 rounded-lg bg-orange-500/10">
								<HugeiconsIcon icon={BitcoinEllipseIcon} size={28} class="text-orange-500" />
							</div>
							<div>
								<CardTitle class="text-xl">Bitcoin (BTC)</CardTitle>
								<CardDescription>On-chain donations</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-muted-foreground mb-4">
							Send Bitcoin directly to support development.
						</p>
						<div class="flex items-center gap-2 p-3 bg-muted rounded-lg font-mono text-sm break-all">
							<span class="flex-1">{cryptoAddresses.btc}</span>
							<Button
								variant="ghost"
								size="icon"
								class="shrink-0"
								onclick={() => copyToClipboard(cryptoAddresses.btc, 'btc')}
							>
								<HugeiconsIcon icon={Copy01Icon} size={18} />
							</Button>
						</div>
						{#if copiedAddress === 'btc'}
							<p class="text-sm text-green-500 mt-2">Copied to clipboard!</p>
						{/if}
					</CardContent>
				</Card>

				<!-- Monero -->
				<Card>
					<CardHeader>
						<div class="flex items-center gap-3">
							<div class="p-3 rounded-lg bg-capybara-500/10">
								<HugeiconsIcon icon={ShieldBlockchainIcon} size={28} class="text-capybara-500" />
							</div>
							<div>
								<CardTitle class="text-xl">Monero (XMR)</CardTitle>
								<CardDescription>Private donations</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-muted-foreground mb-4">
							Send Monero for private, untraceable support.
						</p>
						<div class="flex items-center gap-2 p-3 bg-muted rounded-lg font-mono text-sm break-all">
							<span class="flex-1">{cryptoAddresses.xmr}</span>
							<Button
								variant="ghost"
								size="icon"
								class="shrink-0"
								onclick={() => copyToClipboard(cryptoAddresses.xmr, 'xmr')}
							>
								<HugeiconsIcon icon={Copy01Icon} size={18} />
							</Button>
						</div>
						{#if copiedAddress === 'xmr'}
							<p class="text-sm text-green-500 mt-2">Copied to clipboard!</p>
						{/if}
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-muted/30">
	<div class="container">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="font-display text-3xl mb-4">Other Ways to Help</h2>
			<p class="text-muted-foreground mb-8">
				Not ready to sponsor financially? You can still support Capyseo in other ways.
			</p>
			<div class="grid sm:grid-cols-2 gap-4">
				<Card class="p-6 text-center">
					<HugeiconsIcon icon={StarIcon} size={32} class="text-yellow-500 mx-auto mb-3" />
					<h3 class="font-display text-lg mb-2">Star on GitHub</h3>
					<p class="text-sm text-muted-foreground mb-4">
						Help others discover Capyseo by starring the repository.
					</p>
					<a href="https://github.com/Capyseo" target="_blank" rel="noopener noreferrer">
						<Button variant="outline" size="sm" class="w-full">
							<HugeiconsIcon icon={Github01Icon} size={16} />
							Star Repository
						</Button>
					</a>
				</Card>
				<Card class="p-6 text-center">
					<HugeiconsIcon icon={Github01Icon} size={32} class="text-foreground mx-auto mb-3" />
					<h3 class="font-display text-lg mb-2">Contribute Code</h3>
					<p class="text-sm text-muted-foreground mb-4">
						Submit bug fixes, new features, or documentation improvements.
					</p>
					<a href="https://github.com/Capyseo/capyseo" target="_blank" rel="noopener noreferrer">
						<Button variant="outline" size="sm" class="w-full">
							<HugeiconsIcon icon={Github01Icon} size={16} />
							View Repository
						</Button>
					</a>
				</Card>
			</div>
		</div>
	</div>
</section>
