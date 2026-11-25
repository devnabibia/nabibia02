export interface ExperienceEntry {
	company: string;
	role: string;
	period: string;
	place: string;
	paragraphs: string[];
}

export const experience: ExperienceEntry[] = [
	
	
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
	},
	{
		company: 'EventFlutter',
		role: 'Backend Engineer',
		period: '2023 — 2024',
		place: '',
		paragraphs: [
			'What I took from EventFlutter is how an event becomes a',
			'contract the moment people start hiring each other. A creator books a vendor or a venue,' ,
			'a deposit and milestones are agreed, and the money sits in escrow until the work is accepted.',
			'A quote can be taken, turned down, or priced again. KYC and disputes are how the platform stays in the middle when one',
			'side says the job was not done. I learned to build for that gap, between the booking and the payout, and to make sure the right person hears about it.'
		]
	},
	{
		company: 'Dessra Ventures',
		role: 'Intern Software Engineer',
		period: '2022 - 2023',
		place: '',
		paragraphs: [
			'Lead design and development of Dukaren Management System, Battery Intelligence and Fleet Management systems in Go.',
			'Build high-throughput data ingesters over WebSocket and MQTT.',
			'Design wallet-based billing on the Daraja (M-Pesa) API, and SDKs for USSD, SMS and Daraja used across our APIs.',
			'Develop a multi-channel notifications and alerts system.',
			'Own system design decisions and optimise based on observability metrics.',
			'Maintain a private fork of the open-source ocpp-go package, extending it with additional functionality.',
			'Build CI/CD pipelines, write unit tests and work with hardware and product teams on end-to-end solutions.'
		]
	}

];
