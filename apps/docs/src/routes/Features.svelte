<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	// Four independent properties of the renderer, not a sequence, so no
	// numbering: the hairlines between the cells carry the grouping.
	const features = [
		{
			title: 'Render on demand',
			description:
				'The loop is stopped by default. A frame is drawn when a prop in the scene actually changes.',
		},
		{
			title: 'Cleanup comes free',
			description:
				'Sprites, textures and containers are destroyed with the component that declared them.',
		},
		{
			title: 'Declarative scenes',
			description:
				'Stage, Container, Sprite, Text, Video and shapes are plain components. Compose them with `{#each}` and `{#if}`.',
		},
		{
			title: 'PixiJS 8 underneath',
			description:
				'The full WebGL pipeline, reached through Svelte 5 runes rather than an imperative scene graph.',
		},
	];
</script>

<Section>
	<dl class="m-0 grid gap-px bg-line sm:grid-cols-2">
		{#each features as feature (feature.title)}
			<div class="bg-surface px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
				<dt class="text-lg font-medium tracking-[-0.02em]">{feature.title}</dt>
				<dd class="m-0 mt-2 max-w-md leading-relaxed text-ink-muted">
					{#each feature.description.split('`') as part, index (index)}
						{#if index % 2}<code class="code-inline">{part}</code
							>{:else}{part}{/if}
					{/each}
				</dd>
			</div>
		{/each}
	</dl>
</Section>
