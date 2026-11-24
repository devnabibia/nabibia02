<script lang="ts">
	import { scrollReveal } from '#lib/actions/scrollReveal';
	import { experience } from '#lib/data/experience';
</script>

<section id="work" class="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
	<div class="scroll-reveal" use:scrollReveal>
		<p class="section-eyebrow reveal-child mb-5" style="--child-i: 0">experience</p>
		<ul class="divide-y divide-rule">
			{#each experience as job, i}
				<li class="work-row reveal-child py-5" style="--child-i: {i + 1}">
					<div class="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
						<p class="text-[13px] leading-snug">
							<span class="font-medium text-ink">{job.company}</span>
							<span class="text-ink-faint"> · </span>
							<span class="text-ink-mid">{job.role}</span>
						</p>
						<p class="text-[11px] tracking-wide text-ink-faint">{job.period}</p>
					</div>
					{#if job.place}
						<p class="mb-3 text-[11px] tracking-wide text-ink-faint">{job.place}</p>
					{/if}
					<div class="max-w-[620px] space-y-3" class:mt-2={!job.place}>
						{#each job.paragraphs as paragraph}
							<p class="text-[13px] leading-[1.75] text-ink-mid">{paragraph}</p>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
