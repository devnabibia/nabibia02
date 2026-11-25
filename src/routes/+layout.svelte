<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { initTheme } from '#lib/stores/theme.svelte';
	import {
		GITHUB_LINK,
		LINKEDIN_LINK,
		SITE_URL,
		EMAIL,
		isLinkReady
	} from '#lib/constants/links';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});

	const siteReady = isLinkReady(SITE_URL);
	const githubReady = isLinkReady(GITHUB_LINK);
	const linkedinReady = isLinkReady(LINKEDIN_LINK);

	const sameAs = [githubReady ? GITHUB_LINK : null, linkedinReady ? LINKEDIN_LINK : null].filter(
		(link): link is string => link !== null
	);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Dennis Nangendo',
		jobTitle: 'Software Developer',
		...(siteReady ? { url: SITE_URL } : {}),
		email: EMAIL,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Nairobi',
			addressCountry: 'Kenya'
		},
		...(sameAs.length > 0 ? { sameAs } : {})
	};
</script>

<svelte:head>
	<title>Dennis Nangendo — Software Developer</title>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Dennis Nangendo is a software developer in Nairobi, Kenya, focused on backend development and system design: Go services, real-time WebSocket messaging and M-Pesa payment tools."
	/>
	<meta
		name="keywords"
		content="Dennis Nangendo, Software Developer, Backend Developer, Go, System design, Nairobi, Kenya"
	/>
	<meta property="og:title" content="Dennis Nangendo — Software Developer" />
	<meta
		property="og:description"
		content="Backend development and system design in Go. Based in Nairobi, Kenya."
	/>
	<meta property="og:type" content="website" />
	{#if siteReady}
		<meta property="og:url" content={SITE_URL} />
	{/if}
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Dennis Nangendo — Software Developer" />
	<meta
		name="twitter:description"
		content="Backend development and system design in Go. Based in Nairobi, Kenya."
	/>
	{#if siteReady}
		<link rel="canonical" href={SITE_URL} />
	{/if}
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

{@render children()}
