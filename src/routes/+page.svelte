<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Stack from '#lib/components/Stack.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Articles from '#lib/components/Articles.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Cursor from '#lib/components/Cursor.svelte';
	import { articles } from '#lib/data/articles';
</script>

<Nav />

<main>
	<Hero />
	<About />
	<Stack />
	<Experience />
	<Projects />
	{#if articles.length > 0}
		<Articles />
	{/if}
	<Contact />
</main>

<Footer />

<Cursor />
