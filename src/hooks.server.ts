import { createCapyseoHandle } from '@capyseo/sveltekit/hooks';

export const handle = createCapyseoHandle({
	// Only run in development
	enabled: process.env.NODE_ENV !== 'production',
	// Show only pages with SEO issues
	logLevel: 'issues',
	// Skip non-content paths
	exclude: ['/api/*', '/__data.json', '/*.xml', '/*.json'],
});
