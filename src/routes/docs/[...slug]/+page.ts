import type { PageLoad, EntryGenerator } from './$types';
import type { DocsManifest } from '$lib/docs/types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageLoad = async ({ params, parent }) => {
	const { manifest } = await parent();
	const slug = params.slug || 'index';

	const page = manifest.pages[slug];

	if (!page) {
		error(404, {
			message: 'Documentation page not found'
		});
	}

	return { page, slug };
};

// Generate all doc pages at build time
export const entries: EntryGenerator = async () => {
	const manifest: DocsManifest = await import('$content/docs.json');

	return Object.keys(manifest.pages)
		.filter((slug) => slug !== 'index') // index is handled by /docs
		.map((slug) => ({ slug }));
};
