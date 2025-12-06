export interface Heading {
	level: number;
	text: string;
	id: string;
}

export interface DocPage {
	slug: string;
	title: string;
	description: string;
	content: string;
	headings: Heading[];
	category: string;
	order: number;
	editUrl: string;
}

export interface NavItem {
	title: string;
	slug: string;
	order: number;
	children?: NavItem[];
}

export interface DocsManifest {
	navigation: NavItem[];
	pages: Record<string, DocPage>;
	searchIndex: string;
	generatedAt: string;
}
