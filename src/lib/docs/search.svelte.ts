import MiniSearch from 'minisearch';
import type { DocsManifest } from './types';

interface SearchResult {
	id: number;
	title: string;
	slug: string;
	category: string;
	description: string;
	score: number;
}

let searchIndex = $state<MiniSearch | null>(null);
let isInitialized = $state(false);

export function initSearch(manifest: DocsManifest) {
	if (isInitialized) return;

	try {
		searchIndex = MiniSearch.loadJSON(manifest.searchIndex, {
			fields: ['title', 'content', 'description'],
			storeFields: ['title', 'slug', 'category', 'description']
		});
		isInitialized = true;
	} catch (error) {
		console.error('Failed to initialize search index:', error);
	}
}

export function search(query: string): SearchResult[] {
	if (!searchIndex || !query.trim()) return [];

	return searchIndex.search(query, {
		prefix: true,
		fuzzy: 0.2,
		boost: { title: 3, description: 2 }
	}) as SearchResult[];
}

export function getSearchState() {
	return {
		get isInitialized() {
			return isInitialized;
		}
	};
}
