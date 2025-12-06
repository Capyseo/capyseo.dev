import type { NavItem, DocPage } from './types';

export function flattenNavigation(navigation: NavItem[]): NavItem[] {
	const flat: NavItem[] = [];

	function traverse(items: NavItem[]) {
		for (const item of items) {
			flat.push(item);
			if (item.children) {
				traverse(item.children);
			}
		}
	}

	traverse(navigation);
	return flat;
}

export function findPrevNext(
	navigation: NavItem[],
	currentSlug: string
): { prev: NavItem | null; next: NavItem | null } {
	const flat = flattenNavigation(navigation);
	const currentIndex = flat.findIndex((item) => item.slug === currentSlug);

	if (currentIndex === -1) {
		return { prev: null, next: null };
	}

	// Find previous page (skip categories without direct content)
	let prev: NavItem | null = null;
	for (let i = currentIndex - 1; i >= 0; i--) {
		if (!flat[i].children || flat[i].children!.length === 0) {
			prev = flat[i];
			break;
		}
	}

	// Find next page
	let next: NavItem | null = null;
	for (let i = currentIndex + 1; i < flat.length; i++) {
		if (!flat[i].children || flat[i].children!.length === 0) {
			next = flat[i];
			break;
		}
	}

	return { prev, next };
}

export function findBreadcrumbs(navigation: NavItem[], slug: string): NavItem[] {
	const parts = slug.split('/');
	const breadcrumbs: NavItem[] = [];

	let currentItems = navigation;
	let currentPath = '';

	for (const part of parts) {
		currentPath = currentPath ? `${currentPath}/${part}` : part;
		const found = currentItems.find((item) => item.slug === currentPath);

		if (found) {
			breadcrumbs.push(found);
			currentItems = found.children || [];
		}
	}

	return breadcrumbs;
}

export function isActiveNav(itemSlug: string, currentSlug: string): boolean {
	return currentSlug === itemSlug || currentSlug.startsWith(`${itemSlug}/`);
}
