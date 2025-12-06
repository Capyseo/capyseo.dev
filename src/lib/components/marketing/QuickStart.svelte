<script lang="ts">
	import Terminal from './Terminal.svelte';

	const tabs = [
		{ id: 'install', label: 'Install' },
		{ id: 'analyze', label: 'Analyze' },
		{ id: 'autofix', label: 'Autofix' },
		{ id: 'ai', label: 'AI' },
		{ id: 'watch', label: 'Watch' }
	];

	let activeTab = $state(0);
</script>

<section class="py-20 bg-muted/30">
	<div class="container">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl mb-4">Get Started in Seconds</h2>
			<p class="text-muted-foreground max-w-xl mx-auto">
				Install Capyseo and start analyzing your website's SEO health immediately.
			</p>
		</div>

		<div class="max-w-3xl mx-auto">
			<!-- Tab Bar -->
			<div class="flex gap-1 mb-0 bg-capybara-900 dark:bg-capybara-950 rounded-t-lg p-1 border border-b-0 border-capybara-800">
				{#each tabs as tab, i}
					<button
						onclick={() => (activeTab = i)}
						class="px-4 py-2 rounded-md font-mono text-sm transition-colors {activeTab === i
							? 'bg-capybara-600 text-white'
							: 'text-capybara-400 hover:bg-capybara-800 hover:text-capybara-200'}"
					>
						{tab.label}
					</button>
				{/each}
			</div>

			<!-- Terminal -->
			<div class="terminal-container">
				<Terminal title={tabs[activeTab].label}>
					{#snippet children()}
						{#if activeTab === 0}
							<!-- Install Tab -->
							<div class="space-y-1">
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">bun add -D @capyseo/cli</span>
								</div>
								<div class="text-capybara-500 text-xs">bun add v1.1.0</div>
								<div class="mt-3 text-capybara-300">installed @capyseo/cli@1.0.0</div>
								<div class="mt-2 text-green-400">3 packages installed [1.2s]</div>
								<div class="mt-4 text-capybara-500"># or use npm/pnpm</div>
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">npm install -D @capyseo/cli</span>
								</div>
							</div>
						{:else if activeTab === 1}
							<!-- Analyze Tab -->
							<div class="space-y-1">
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">capyseo analyze ./my-site</span>
								</div>
								<div class="mt-2 text-capybara-300">Capyseo is analyzing...</div>
								<div class="text-capybara-300">Found 8 pages. Analyzing...</div>
								<div class="mt-3 text-capybara-100">/index.html</div>
								<div class="text-capybara-400 ml-3">Score: <span class="text-yellow-400">85/100</span></div>
								<div class="mt-1 ml-3">
									<span class="text-red-400">[x]</span>
									<span class="text-capybara-500">[image-alt]</span>
									<span class="text-capybara-200 ml-1">Image missing alt text</span>
								</div>
								<div class="ml-6 text-capybara-500 text-xs">Add alt text to: &lt;img src="hero.jpg"&gt;</div>
								<div class="mt-1 ml-3">
									<span class="text-yellow-400">[!]</span>
									<span class="text-capybara-500">[meta-description]</span>
									<span class="text-capybara-200 ml-1">Meta description too short</span>
								</div>
								<div class="ml-6 text-capybara-500 text-xs">Write 120-160 characters for better CTR</div>
								<div class="mt-3 text-capybara-100">/about.html</div>
								<div class="text-capybara-400 ml-3">Score: <span class="text-green-400">92/100</span></div>
								<div class="mt-1 ml-3">
									<span class="text-yellow-400">[!]</span>
									<span class="text-capybara-500">[heading-hierarchy]</span>
									<span class="text-capybara-200 ml-1">Skipped heading level</span>
								</div>
								<div class="mt-4 text-capybara-600">=================================================</div>
								<div class="text-capybara-300">Average Score: <span class="text-green-400">88/100</span></div>
								<div class="text-capybara-400">Total Issues: 3 (1 error, 2 warnings)</div>
							</div>
						{:else if activeTab === 2}
							<!-- Autofix Tab -->
							<div class="space-y-1">
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">capyseo analyze ./my-site --fix</span>
								</div>
								<div class="mt-2 text-capybara-300">Analyzing and applying autofixes...</div>
								<div class="mt-3 text-capybara-100">/index.html</div>
								<div class="ml-3">
									<span class="text-green-400">✓</span>
									<span class="text-green-300 ml-1">Fixed: Added missing viewport meta</span>
								</div>
								<div class="ml-3">
									<span class="text-green-400">✓</span>
									<span class="text-green-300 ml-1">Fixed: Added charset UTF-8</span>
								</div>
								<div class="mt-3 text-capybara-100">/about.html</div>
								<div class="ml-3">
									<span class="text-green-400">✓</span>
									<span class="text-green-300 ml-1">Fixed: Added canonical URL</span>
								</div>
								<div class="mt-4 text-capybara-600">=================================================</div>
								<div class="text-green-400">✓ Applied 3 fixes to 2 files</div>
								<div class="mt-3 text-capybara-500"># For AI-powered intelligent fixes:</div>
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">capyseo analyze ./my-site --ai --ai-fix</span>
								</div>
								<div class="mt-2 text-cyan-400">✨ AI Fix Estimation:</div>
								<div class="ml-3 text-cyan-300">   Fixable issues: 12/15 (80%)</div>
								<div class="ml-3 text-cyan-300">   Estimated cost: $0.0024</div>
							</div>
						{:else if activeTab === 3}
							<!-- AI Tab -->
							<div class="space-y-1">
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">capyseo analyze --ai ./my-site</span>
								</div>
								<div class="mt-2 text-capybara-300">Analyzing with AI suggestions enabled...</div>
								<div class="mt-3 text-capybara-100">/index.html - Score: <span class="text-yellow-400">85/100</span></div>
								<div class="mt-2 ml-3">
									<span class="text-red-400">[x]</span>
									<span class="text-capybara-500">[image-alt]</span>
									<span class="text-capybara-200 ml-1">Image missing alt text</span>
								</div>
								<div class="mt-1 ml-3">
									<span class="text-cyan-400">AI Suggestion:</span>
								</div>
								<div class="ml-6 text-cyan-300 italic text-xs">Based on context, try: alt="Modern dashboard</div>
								<div class="ml-6 text-cyan-300 italic text-xs">showing real-time analytics and user metrics"</div>
								<div class="mt-3 ml-3">
									<span class="text-yellow-400">[!]</span>
									<span class="text-capybara-500">[meta-description]</span>
									<span class="text-capybara-200 ml-1">Too short (45 chars)</span>
								</div>
								<div class="mt-1 ml-3">
									<span class="text-cyan-400">AI Suggestion:</span>
								</div>
								<div class="ml-6 text-cyan-300 italic text-xs">"Build faster with our developer toolkit.</div>
								<div class="ml-6 text-cyan-300 italic text-xs">Ship production-ready apps in minutes, not days."</div>
							</div>
						{:else}
							<!-- Watch Tab -->
							<div class="space-y-1">
								<div>
									<span class="text-capybara-400">$</span>
									<span class="text-white ml-2">capyseo watch ./dist</span>
								</div>
								<div class="mt-2 text-capybara-300">Watching for HTML changes...</div>
								<div class="text-capybara-500">Press Ctrl+C to stop</div>
								<div class="mt-4 text-capybara-400">[10:42:15]</div>
								<div class="ml-3 text-capybara-200">File changed: <span class="text-white">index.html</span></div>
								<div class="ml-3 text-capybara-400">Score: <span class="text-green-400">91/100</span> <span class="text-green-500">(+6)</span></div>
								<div class="ml-3 text-green-400">Fixed: meta-description</div>
								<div class="mt-3 text-capybara-400">[10:43:22]</div>
								<div class="ml-3 text-capybara-200">File changed: <span class="text-white">about.html</span></div>
								<div class="ml-3 text-capybara-400">Score: <span class="text-green-400">100/100</span></div>
								<div class="ml-3 text-green-400">All issues resolved!</div>
							</div>
						{/if}
					{/snippet}
				</Terminal>
			</div>
		</div>
	</div>
</section>

<style>
	.terminal-container :global(.rounded-lg) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
</style>
