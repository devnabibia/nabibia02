import {
	INVOICER_LINK,
	WSCHAT_LINK,
	MARTPRO_LINK,
	WISDOM_TCP_LINK,
	CLOUD_MESSAGING_LINK,
	MICROSERVICES_LINK
} from '#lib/constants/links';

export type ProjectBadge = 'gallery' | 'productivity' | 'finance' | 'ecommerce' | null;

export interface Project {
	title: string;
	/** What the project is for. */
	scope: string;
	/** Optional longer note on how it was built. Leave empty to hide it. */
	story: string;
	stack: string[];
	link: string;
	badge: ProjectBadge;
	/** Screenshot path under /static, e.g. '/projects/name.png'. Leave empty for a letter tile. */
	image: string;
	imagePosition?: 'top' | 'center';
	featured?: boolean;
	muted?: boolean;
}

export const projects: Project[] = [
	{
		title: 'Invoicer',
		scope:
			'Send invoices, let customers pay with M-Pesa from a link, get marked paid automatically, and remind late payers by SMS and email.',
		story:
			'Built for freelancers and small shops who lose money to late payments. One Go program with no dependencies and a built-in Safaricom simulator, so every payment path can be tried without credentials.',
		stack: ['Go', 'M-Pesa', 'SMS & email reminders'],
		link: INVOICER_LINK,
		badge: null,
		image: '',
		featured: true
	},
	{
		title: 'wschat',
		scope:
			'A WebSocket pub/sub server in Go with presence and fan-out, a typed TypeScript client and a browser demo, all in one binary.',
		story: '',
		stack: ['Go', 'WebSockets', 'TypeScript'],
		link: WSCHAT_LINK,
		badge: null,
		image: ''
	},
	{
		title: 'MartPro',
		scope:
			'A point-of-sale and inventory system: barcode checkout, discounts and tax, cash, card and mobile-money payments, low-stock alerts and sales reports.',
		story: '',
		stack: ['Go', 'React', 'TypeScript'],
		link: MARTPRO_LINK,
		badge: null,
		image: ''
	},
	{
		title: 'Wisdom TCP Server',
		scope:
			'A TCP server with DDoS protection using Proof of Work (PoW) that serves random quotes.',
		story: '',
		stack: ['TCP', 'Proof of Work', 'DDoS protection'],
		link: WISDOM_TCP_LINK,
		badge: null,
		image: '',
	},
	{
		title: 'Cloud Messaging App',
		scope:
			'A cloud messaging app that provides its credentials using Application Default Credentials (ADC).',
		story: '',
		stack: ['Messaging', 'ADC'],
		link: CLOUD_MESSAGING_LINK,
		badge: null,
		image: ''
	},
	{
		title: 'Microservices',
		scope: 'A microservices project. See the repository for the details.',
		story: '',
		stack: ['Microservices'],
		link: MICROSERVICES_LINK,
		badge: null,
		image: ''
	}
];
