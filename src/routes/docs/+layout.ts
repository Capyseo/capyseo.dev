import type { LayoutLoad } from './$types';
import type { DocsManifest } from '$lib/docs/types';

export const prerender = true;

export const load: LayoutLoad = async () => {
	// Import the generated docs manifest
	const manifest: DocsManifest = await import('$content/docs.json');

	return {
		navigation: manifest.navigation,
		manifest
	};
};
