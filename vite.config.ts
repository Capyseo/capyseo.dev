import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { capyseo } from '@capyseo/sveltekit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		capyseo({
			// Fail build if any page scores below 80
			minScore: 80,
			// Exclude non-content paths
			exclude: ['/api/*', '/__data.json', '/*.xml', '/*.json'],
		}),
	],
});
