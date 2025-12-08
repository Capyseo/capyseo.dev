import type { RequestHandler } from '@sveltejs/kit';
import type { DocsManifest } from '$lib/docs/types';

export const prerender = true;

const SITE_URL = 'https://capyseo.dev';

const MAIN_PAGES = [
	{ path: '/', priority: 1.0, changefreq: 'weekly' },
	{ path: '/docs', priority: 0.9, changefreq: 'weekly' },
	{ path: '/features', priority: 0.8, changefreq: 'monthly' },
	{ path: '/about', priority: 0.8, changefreq: 'monthly' },
	{ path: '/sponsor', priority: 0.7, changefreq: 'monthly' },
	{ path: '/wiki', priority: 0.6, changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
	const manifest: DocsManifest = await import('$content/docs.json');
	const lastmod = manifest.generatedAt.split('T')[0];

	const urls: string[] = [];

	for (const page of MAIN_PAGES) {
		urls.push(buildUrlEntry(page.path, { priority: page.priority, changefreq: page.changefreq }));
	}

	for (const slug of Object.keys(manifest.pages)) {
		if (slug === 'index') continue;

		const docPath = `/docs/${slug}`;
		const depth = slug.split('/').length;
		const priority = depth === 1 ? 0.7 : 0.6;

		urls.push(buildUrlEntry(docPath, { lastmod, priority, changefreq: 'weekly' }));
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};

function buildUrlEntry(
	path: string,
	options: { lastmod?: string; changefreq?: string; priority?: number } = {}
): string {
	const { lastmod, changefreq, priority } = options;

	let entry = `  <url>\n    <loc>${SITE_URL}${path}</loc>`;

	if (lastmod) {
		entry += `\n    <lastmod>${lastmod}</lastmod>`;
	}
	if (changefreq) {
		entry += `\n    <changefreq>${changefreq}</changefreq>`;
	}
	if (priority !== undefined) {
		entry += `\n    <priority>${priority.toFixed(1)}</priority>`;
	}

	entry += '\n  </url>';
	return entry;
}
