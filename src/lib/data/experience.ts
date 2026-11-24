export interface ExperienceEntry {
	company: string;
	role: string;
	period: string;
	place: string;
	paragraphs: string[];
}

export const experience: ExperienceEntry[] = [
	{
		company: 'County Government of Uasin Gishu',
		role: 'Software Engineer',
		period: '2025 — Present',
		place: '',
		paragraphs: [
			'Software engineer at the County Government of Uasin Gishu.'
		]
	},
	{
		company: 'Self-employed',
		role: 'Freelance Software & Network Engineer',
		period: 'Nov 2024 — Present',
		place: '',
		paragraphs: [
			'Provided IT support, including network setup, troubleshooting and maintenance.',
			'Designed and implemented secure cloud solutions using AWS and Google Cloud.',
			'Assisted clients in improving cybersecurity practices by setting up firewalls and performing vulnerability assessments.',
			'Managed databases and optimised queries to improve application performance.',
			'Developed and deployed responsive websites and web applications for small businesses.',
			'Built backend services in Go, including a payments tool where customers pay an invoice by M-Pesa link and it is marked paid automatically, with SMS and email reminders for late payers.',
			'Built real-time messaging over WebSockets in Go, with a typed TypeScript client for the browser.',
			'Built point-of-sale and inventory software with a Go backend and a React and TypeScript interface.'
		]
	}
];
