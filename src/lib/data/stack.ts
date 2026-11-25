export const stackCategories = [
	{ label: 'Languages', skills: ['Go', 'Python', 'TypeScript', 'SQL'] },
	{ label: 'Frameworks & Web', skills: ['Fiber', 'Node.js', 'React'] },
	{ label: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'Linux', 'GitHub Actions'] },
	{ label: 'Protocols & Messaging', skills: ['WebSockets', 'SMS'] },
	{ label: 'Payments', skills: ['M-Pesa'] },
	{ label: 'Practices', skills: ['System design', 'Unit testing'] }
] as const;

/** Flat list for cascade animation index */
export const allStackSkills = stackCategories.flatMap((c) => c.skills);
