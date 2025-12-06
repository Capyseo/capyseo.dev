import { tv, type VariantProps } from 'tailwind-variants';
import Root from './badge.svelte';

export const badgeVariants = tv({
	base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	variants: {
		variant: {
			default: 'border-transparent bg-primary text-primary-foreground',
			secondary: 'border-transparent bg-secondary text-secondary-foreground',
			destructive: 'border-transparent bg-destructive text-destructive-foreground',
			outline: 'text-foreground',
			capybara: 'border-transparent bg-capybara-100 text-capybara-800 dark:bg-capybara-900 dark:text-capybara-200',
			success: 'border-transparent bg-success/15 text-success dark:bg-success/20',
			warning: 'border-transparent bg-warning/15 text-warning dark:bg-warning/20',
			info: 'border-transparent bg-info/15 text-info dark:bg-info/20'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];

export { Root, Root as Badge, type BadgeVariant as Variant };
