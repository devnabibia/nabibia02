<script lang="ts">
	import { scrollReveal } from '#lib/actions/scrollReveal';
	import { projects } from '#lib/data/projects';
	import { isLinkReady } from '#lib/constants/links';

	function handleCardClick(link: string, ready: boolean) {
		if (ready) {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	}

	function handleKeydown(e: KeyboardEvent, link: string, ready: boolean) {
		if ((e.key === 'Enter' || e.key === ' ') && ready) {
			e.preventDefault();
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	}
</script>

<section id="projects" class="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
	<div class="scroll-reveal" use:scrollReveal>
		<p class="section-eyebrow reveal-child mb-5" style="--child-i: 0">projects</p>
		<ul class="flex flex-col gap-4">
			{#each projects as project, i}
				{@const ready = isLinkReady(project.link)}
				<li class="reveal-child" style="--child-i: {i + 1}">
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<div
						role={ready ? 'link' : 'article'}
						tabindex={ready ? 0 : undefined}
						class="proj-card flex items-start gap-3.5 rounded-[6px] p-3.5 sm:gap-5 sm:p-4"
						class:featured={project.featured}
						class:cursor-pointer={ready}
						onclick={() => handleCardClick(project.link, ready)}
						onkeydown={(e) => handleKeydown(e, project.link, ready)}
					>
						<div class="proj-shot">
							{#if project.image}
								<img
									src={project.image}
									alt=""
									width="1280"
									height="800"
									loading="lazy"
									class:object-top={project.imagePosition !== 'center'}
									class:object-center={project.imagePosition === 'center'}
								/>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center bg-surface font-serif text-[28px] text-ink-faint"
									aria-hidden="true"
								>
									{project.title[0]}
								</div>
							{/if}
						</div>

						<div class="min-w-0 flex-1 pt-0.5" class:opacity-80={project.muted}>
							<div class="mb-1.5 flex items-start gap-2">
								<div class="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
									<h3 class="text-[15px] font-medium text-ink">{project.title}</h3>
									{#if project.badge === 'gallery'}
										<span
											class="rounded-[3px] border border-rule px-1.5 py-0.5 text-[10px] tracking-wide text-ink-mid uppercase"
										>
											gallery
										</span>
									{:else if project.badge === 'productivity'}
										<span
											class="rounded-[3px] bg-surface px-1.5 py-0.5 text-[10px] tracking-wide text-ink-mid uppercase"
										>
											productivity
										</span>
									{:else if project.badge === 'finance'}
										<span
											class="rounded-[3px] bg-green-tint px-1.5 py-0.5 text-[10px] tracking-wide text-green uppercase"
										>
											finance
										</span>
									{:else if project.badge === 'ecommerce'}
										<span
											class="rounded-[3px] bg-amber-tint px-1.5 py-0.5 text-[10px] tracking-wide text-accent uppercase"
										>
											ecommerce
										</span>
									{/if}
								</div>
								<span
									class="shrink-0 text-[14px] transition-colors duration-150"
									class:text-ink-faint={!ready}
									class:text-ink-mid={ready}
									aria-hidden="true"
								>
									↗
								</span>
							</div>

							<p class="mb-2 text-[13px] leading-[1.65] text-ink">{project.scope}</p>
							{#if project.story}
								<p class="mb-2.5 text-[12.5px] leading-[1.7] text-ink-mid">{project.story}</p>
							{/if}
							<p class="text-[11px] tracking-wide text-ink-faint">{project.stack.join(' · ')}</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
