<script lang="ts">
	import { scrollReveal } from '#lib/actions/scrollReveal';
	import { aboutBio } from '#lib/data/about';
</script>

<section id="about" class="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
	<div class="scroll-reveal" use:scrollReveal>
		<p class="section-eyebrow reveal-child mb-5" style="--child-i: 0">about</p>

		<div class="reveal-child space-y-4" style="--child-i: 1">
			{#each aboutBio as paragraph}
				<p class="text-[14px] leading-[1.75] text-ink-mid">{paragraph}</p>
			{/each}
		</div>
	</div>
</section>
