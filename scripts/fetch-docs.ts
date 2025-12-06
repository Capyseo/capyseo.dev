/**
 * Build-time script to fetch and process documentation from capyseo-docs
 * Generates src/content/docs.json with navigation, pages, and search index
 */

import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, relative, basename, dirname } from 'path';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';

// Configuration
const DOCS_SOURCE = process.env.DOCS_SOURCE || '../capyseo-docs';
const OUTPUT_PATH = './src/content/docs.json';

// Types
interface Heading {
	level: number;
	text: string;
	id: string;
}

interface DocPage {
	slug: string;
	title: string;
	description: string;
	content: string;
	headings: Heading[];
	category: string;
	order: number;
	editUrl: string;
}

interface NavItem {
	title: string;
	slug: string;
	order: number;
	children?: NavItem[];
}

interface DocsManifest {
	navigation: NavItem[];
	pages: Record<string, DocPage>;
	searchIndex: string;
	generatedAt: string;
}

// Category order for navigation
const CATEGORY_ORDER: Record<string, number> = {
	'getting-started': 1,
	cli: 2,
	core: 3,
	sveltekit: 4,
	providers: 5,
	guides: 6,
	reference: 7
};

// Human-readable category titles
const CATEGORY_TITLES: Record<string, string> = {
	'getting-started': 'Getting Started',
	cli: 'CLI Reference',
	core: 'Core Package',
	sveltekit: 'SvelteKit Adapter',
	providers: 'AI Providers',
	guides: 'Guides',
	reference: 'Reference'
};

/**
 * Extract headings from markdown content
 */
function extractHeadings(content: string): Heading[] {
	const headingRegex = /^(#{2,4})\s+(.+)$/gm;
	const headings: Heading[] = [];
	let match;

	while ((match = headingRegex.exec(content)) !== null) {
		const level = match[1].length;
		const text = match[2].trim();
		const id = text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');

		headings.push({ level, text, id });
	}

	return headings;
}

/**
 * Parse a single markdown file
 */
async function parseMarkdownFile(filePath: string, docsRoot: string): Promise<DocPage | null> {
	try {
		const content = await readFile(filePath, 'utf-8');
		const { data: frontmatter, content: markdown } = matter(content);

		const relativePath = relative(docsRoot, filePath);
		const slug = relativePath.replace(/\.md$/, '').replace(/\/index$/, '');

		// Skip VitePress config files, GitHub repo files, and non-doc files
		const skipFiles = [
			'README.md',
			'CODE_OF_CONDUCT.md',
			'CONTRIBUTING.md',
			'SECURITY.md',
			'LICENSE.md'
		];
		if (relativePath.startsWith('.vitepress') || skipFiles.includes(relativePath)) {
			return null;
		}

		// Extract category from path
		const pathParts = slug.split('/');
		const category = pathParts[0] || 'root';

		// Extract title from frontmatter or first H1
		let title = frontmatter.title;
		if (!title) {
			const h1Match = markdown.match(/^#\s+(.+)$/m);
			title = h1Match ? h1Match[1].trim() : basename(filePath, '.md');
		}

		// Extract description from frontmatter or first paragraph
		let description = frontmatter.description || '';
		if (!description) {
			const paragraphMatch = markdown.match(/^(?!#)(.+?)(?:\n\n|\n#)/s);
			if (paragraphMatch) {
				description = paragraphMatch[1].trim().substring(0, 160);
			}
		}

		const headings = extractHeadings(markdown);
		const order = frontmatter.order ?? 999;

		return {
			slug,
			title,
			description,
			content: markdown,
			headings,
			category,
			order,
			editUrl: `https://github.com/Capyseo/capyseo-docs/edit/main/${relativePath}`
		};
	} catch (error) {
		console.error(`Error parsing ${filePath}:`, error);
		return null;
	}
}

/**
 * Recursively find all markdown files
 */
async function findMarkdownFiles(dir: string): Promise<string[]> {
	const files: string[] = [];

	try {
		const entries = await readdir(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = join(dir, entry.name);

			if (entry.isDirectory()) {
				// Skip hidden directories and node_modules
				if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
					files.push(...(await findMarkdownFiles(fullPath)));
				}
			} else if (entry.isFile() && entry.name.endsWith('.md')) {
				files.push(fullPath);
			}
		}
	} catch (error) {
		console.error(`Error reading directory ${dir}:`, error);
	}

	return files;
}

/**
 * Build navigation structure from pages
 */
function buildNavigation(pages: DocPage[]): NavItem[] {
	const categories = new Map<string, NavItem>();

	// Group pages by category
	for (const page of pages) {
		if (page.slug === 'index') continue; // Skip root index for nav

		const pathParts = page.slug.split('/');
		const category = pathParts[0];

		if (!categories.has(category)) {
			categories.set(category, {
				title: CATEGORY_TITLES[category] || category.charAt(0).toUpperCase() + category.slice(1),
				slug: category,
				order: CATEGORY_ORDER[category] || 999,
				children: []
			});
		}

		const catItem = categories.get(category)!;

		// Handle nested paths (e.g., core/rules/meta-tags)
		if (pathParts.length === 1) {
			// Category index or single-level page
			if (page.slug !== category) {
				catItem.children!.push({
					title: page.title,
					slug: page.slug,
					order: page.order
				});
			}
		} else if (pathParts.length === 2) {
			// Direct child (e.g., cli/analyze)
			catItem.children!.push({
				title: page.title,
				slug: page.slug,
				order: page.order
			});
		} else {
			// Nested child (e.g., core/rules/meta-tags)
			const subcategory = pathParts[1];
			let subNav = catItem.children!.find((c) => c.slug === `${category}/${subcategory}`);

			if (!subNav) {
				const subPage = pages.find((p) => p.slug === `${category}/${subcategory}`);
				subNav = {
					title: subPage?.title || subcategory.charAt(0).toUpperCase() + subcategory.slice(1),
					slug: `${category}/${subcategory}`,
					order: subPage?.order ?? 999,
					children: []
				};
				catItem.children!.push(subNav);
			}

			// Ensure children array exists
			if (!subNav.children) {
				subNav.children = [];
			}

			subNav.children.push({
				title: page.title,
				slug: page.slug,
				order: page.order
			});
		}
	}

	// Sort everything
	const sortByOrder = (a: NavItem, b: NavItem) => a.order - b.order || a.title.localeCompare(b.title);

	const navigation = Array.from(categories.values()).sort(sortByOrder);

	for (const cat of navigation) {
		if (cat.children) {
			cat.children.sort(sortByOrder);
			for (const child of cat.children) {
				if (child.children) {
					child.children.sort(sortByOrder);
				}
			}
		}
	}

	return navigation;
}

/**
 * Build search index
 */
function buildSearchIndex(pages: DocPage[]): string {
	const miniSearch = new MiniSearch({
		fields: ['title', 'content', 'description'],
		storeFields: ['title', 'slug', 'category', 'description'],
		searchOptions: {
			boost: { title: 3, description: 2 },
			fuzzy: 0.2,
			prefix: true
		}
	});

	const documents = pages.map((page, index) => ({
		id: index,
		title: page.title,
		slug: page.slug,
		category: page.category,
		description: page.description,
		content: page.content.substring(0, 10000) // Limit content for index size
	}));

	miniSearch.addAll(documents);

	return JSON.stringify(miniSearch);
}

/**
 * Main function
 */
async function main() {
	console.log('📚 Fetching documentation...');

	const docsRoot = join(process.cwd(), DOCS_SOURCE);

	// Check if docs directory exists
	try {
		await stat(docsRoot);
	} catch {
		console.error(`❌ Docs directory not found: ${docsRoot}`);
		console.log('💡 Make sure capyseo-docs is in the parent directory');
		process.exit(1);
	}

	// Find all markdown files
	const markdownFiles = await findMarkdownFiles(docsRoot);
	console.log(`📄 Found ${markdownFiles.length} markdown files`);

	// Parse all files
	const parsePromises = markdownFiles.map((file) => parseMarkdownFile(file, docsRoot));
	const parsedPages = await Promise.all(parsePromises);
	const pages = parsedPages.filter((p): p is DocPage => p !== null);

	console.log(`✅ Parsed ${pages.length} documentation pages`);

	// Build navigation
	const navigation = buildNavigation(pages);
	console.log(`🗂️  Built navigation with ${navigation.length} categories`);

	// Build search index
	const searchIndex = buildSearchIndex(pages);
	console.log(`🔍 Built search index`);

	// Create pages map
	const pagesMap: Record<string, DocPage> = {};
	for (const page of pages) {
		pagesMap[page.slug] = page;
	}

	// Generate manifest
	const manifest: DocsManifest = {
		navigation,
		pages: pagesMap,
		searchIndex,
		generatedAt: new Date().toISOString()
	};

	// Write output
	await writeFile(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
	console.log(`💾 Written to ${OUTPUT_PATH}`);
	console.log('✨ Done!');
}

main().catch(console.error);
