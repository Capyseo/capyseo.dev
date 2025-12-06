import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/lib/assets',
			$content: 'src/content'
		},
		prerender: {
			handleHttpError: ({ status, path, referrer, message }) => {
				// Log warnings instead of failing for docs-related issues
				if (path.startsWith('/docs/')) {
					console.warn(`Warning [${status}]: ${path} - ${message}${referrer ? ` (from ${referrer})` : ''}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
